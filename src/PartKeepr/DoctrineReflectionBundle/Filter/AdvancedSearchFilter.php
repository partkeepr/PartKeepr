<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Dunglas\ApiBundle\Api\IriConverterInterface;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Doctrine\Orm\Filter\AbstractFilter;
use PartKeepr\DoctrineReflectionBundle\Services\FilterService;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

/**
 * Class AdvancedSearchFilter.
 *
 * Allows filtering by different operators and nested associations. Expects a query parameter "filter" which includes
 * JSON in the following format:
 *
 * [{
 *      property: 'comments.authors.name',
 *      operator: 'LIKE',
 *      value: '%heiner%'
 * }]
 *
 * You can also specify multiple filters with different operators and values.
 */
class AdvancedSearchFilter extends AbstractFilter
{
    /**
     * @var IriConverterInterface
     */
    private $iriConverter;

    /**
     * @var PropertyAccessorInterface
     */
    private $propertyAccessor;

    /**
     * @var FilterService
     */
    private $filterService;

    private $aliases = [];

    private $parameterCount = 0;

    private $requestStack;

    private $joins = [];

    /**
     * @param ManagerRegistry           $managerRegistry
     * @param IriConverterInterface     $iriConverter
     * @param PropertyAccessorInterface $propertyAccessor
     * @param RequestStack              $requestStack
     * @param null|array                $properties       Null to allow filtering on all properties with the exact
     *                                                    strategy or a map of property name with strategy.
     */
    public function __construct(
        ManagerRegistry $managerRegistry,
        IriConverterInterface $iriConverter,
        PropertyAccessorInterface $propertyAccessor,
        RequestStack $requestStack,
        FilterService $filterService,
        array $properties = null
    ) {
        parent::__construct($managerRegistry, $properties);
        $this->requestStack = $requestStack;
        $this->iriConverter = $iriConverter;
        $this->filterService = $filterService;
        $this->propertyAccessor = $propertyAccessor;
    }

    public function getDescription(ResourceInterface $resource)
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function apply(ResourceInterface $resource, QueryBuilder $queryBuilder)
    {
        $request = $this->requestStack->getCurrentRequest();
        if (null === $request) {
            return;
        }

        if ($request->query->has('filter')) {
            $filter = json_decode($request->query->get("filter"));
        } else {
            $filter = null;
        }

        if ($request->query->has('order')) {
            $order = json_decode($request->query->get("order"));
        } else {
            $order = null;
        }

        $properties = $this->extractConfiguration($filter, $order);

        $filters = $properties['filters'];
        $sorters = $properties['sorters'];

        $this->filter($queryBuilder, $filters, $sorters);
    }

    public function filter(QueryBuilder $queryBuilder, $filters, $sorters)
    {
        foreach ($filters as $filter) {
            /**
             * @var Filter
             */
            $queryBuilder->andWhere(
                $this->getFilterExpression($queryBuilder, $filter)
            );
        }

        foreach ($sorters as $sorter) {
            /**
             * @var Sorter
             */
            if ($sorter->getAssociation() !== null) {
                // Pull in associations
                $this->addJoins($queryBuilder, $sorter);
            }

            $this->applyOrderByExpression($queryBuilder, $sorter);
        }
    }

    /**
     * Gets the ID from an URI or a raw ID.
     *
     * @param string $value
     *
     * @return string
     */
    private function getFilterValueFromUrl($value)
    {
        if (is_array($value)) {
            $items = [];

            foreach ($value as $iri) {
                try {
                    if ($item = $this->iriConverter->getItemFromIri($iri)) {
                        $items[] = $this->propertyAccessor->getValue($item, 'id');
                    } else {
                        $items[] = $iri;
                    }
                } catch (\InvalidArgumentException $e) {
                    $items[] = $iri;
                }
            }

            return $items;
        }

        try {
            if ($item = $this->iriConverter->getItemFromIri($value)) {
                return $this->propertyAccessor->getValue($item, 'id');
            }
        } catch (\InvalidArgumentException $e) {
            // Do nothing, return the raw value
        }

        return $value;
    }

    /**
     * Adds all required joins to the queryBuilder.
     *
     * @param QueryBuilder $queryBuilder
     * @param              $filter
     */
    private function addJoins(QueryBuilder $queryBuilder, AssociationPropertyInterface $filter)
    {
        if (in_array($filter->getAssociation(), $this->joins)) {
            // Association already added, return
            return;
        }

        $associations = explode('.', $filter->getAssociation());

        $fullAssociation = 'o';

        foreach ($associations as $key => $association) {
            if (isset($associations[$key - 1])) {
                $parent = $associations[$key - 1];
            } else {
                $parent = 'o';
            }

            $fullAssociation .= '.'.$association;

            $alias = $this->getAlias($fullAssociation);

            $queryBuilder->join($parent.'.'.$association, $alias);
        }

        $this->joins[] = $filter->getAssociation();
    }

    /**
     * Returns the expression for a specific filter.
     *
     * @param QueryBuilder $queryBuilder
     * @param              $filter
     *
     * @throws \Exception
     *
     * @return \Doctrine\ORM\Query\Expr\Comparison|\Doctrine\ORM\Query\Expr\Func
     */
    private function getFilterExpression(QueryBuilder $queryBuilder, Filter $filter)
    {
        if ($filter->hasSubFilters()) {
            $subFilterExpressions = [];

            foreach ($filter->getSubFilters() as $subFilter) {

                /**
                 * @var Filter
                 */
                if ($subFilter->getAssociation() !== null) {
                    $this->addJoins($queryBuilder, $subFilter);
                }

                $subFilterExpressions[] = $this->getFilterExpression($queryBuilder, $subFilter);
            }

            if ($filter->getType() == Filter::TYPE_AND) {
                return call_user_func_array([$queryBuilder->expr(), "andX"], $subFilterExpressions);
            } else {
                return call_user_func_array([$queryBuilder->expr(), "orX"], $subFilterExpressions);
            }
        }

        if ($filter->getAssociation() !== null) {
            $this->addJoins($queryBuilder, $filter);
            $alias = $this->getAlias('o.'.$filter->getAssociation()).'.'.$filter->getProperty();
        } else {
            $alias = 'o.'.$filter->getProperty();
        }

        if (strtolower($filter->getOperator()) == Filter::OPERATOR_IN) {
            if (!is_array($filter->getValue())) {
                throw new \Exception('Value needs to be an array for the IN operator');
            }

            return $queryBuilder->expr()->in($alias, $filter->getValue());
        } else {
            $paramName = ':param'.$this->parameterCount;
            $this->parameterCount++;
            $queryBuilder->setParameter($paramName, $filter->getValue());

            return $this->filterService->getExpressionForFilter($filter, $alias, $paramName);
        }
    }

    /**
     * Returns the expression for a specific sort order.
     *
     * @param QueryBuilder $queryBuilder
     * @param              $sorter
     *
     * @throws \Exception
     *
     * @return \Doctrine\ORM\Query\Expr\Comparison|\Doctrine\ORM\Query\Expr\Func
     */
    private function applyOrderByExpression(QueryBuilder $queryBuilder, Sorter $sorter)
    {
        if ($sorter->getAssociation() !== null) {
            $alias = $this->getAlias('o.'.$sorter->getAssociation()).'.'.$sorter->getProperty();
        } else {
            $alias = 'o.'.$sorter->getProperty();
        }

        return $queryBuilder->addOrderBy($alias, $sorter->getDirection());
    }

    /**
     * {@inheritdoc}
     */
    public function extractConfiguration($filterData, $sorterData)
    {
        $filters = [];

        if (is_array($filterData)) {
            foreach ($filterData as $filter) {
                $filters[] = $this->extractJSONFilters($filter);
            }
        } elseif (is_object($filterData)) {
            $filters[] = $this->extractJSONFilters($filterData);
        }

        $sorters = [];

        if (is_array($sorterData)) {
            foreach ($sorterData as $sorter) {
                $sorters[] = $this->extractJSONSorters($sorter);
            }
        } elseif (is_object($sorterData)) {
            $sorters[] = $this->extractJSONSorters($sorterData);
        }

        return ['filters' => $filters, 'sorters' => $sorters];
    }

    /**
     * Returns an alias for the given association property.
     *
     * @param string $property The property in FQDN format, e.g. "comments.authors.name"
     *
     * @return string The table alias
     */
    private function getAlias(
        $property
    ) {
        if (!array_key_exists($property, $this->aliases)) {
            $this->aliases[$property] = 't'.count($this->aliases);
        }

        return $this->aliases[$property];
    }

    /**
     * Extracts the filters from the JSON object.
     *
     * @param $data
     *
     * @throws \Exception
     *
     * @return Filter
     */
    private function extractJSONFilters(
        $data
    ) {
        $filter = new Filter();

        if (property_exists($data, 'property')) {
            if (strpos($data->property, '.') !== false) {
                $associations = explode('.', $data->property);

                $property = array_pop($associations);

                $filter->setAssociation(implode('.', $associations));
                $filter->setProperty($property);
            } else {
                $filter->setAssociation(null);
                $filter->setProperty($data->property);
            }
        } elseif (property_exists($data, "subfilters")) {
            if (property_exists($data, 'type')) {
                $filter->setType(strtolower($data->type));
            }

            if (is_array($data->subfilters)) {
                $subfilters = [];
                foreach ($data->subfilters as $subfilter) {
                    $subfilters[] = $this->extractJSONFilters($subfilter);
                }
                $filter->setSubFilters($subfilters);

                return $filter;
            } else {
                throw new \Exception("The subfilters must be an array of objects");
            }
        } else {
            throw new \Exception('You need to set the filter property');
        }

        if (property_exists($data, 'operator')) {
            $filter->setOperator($data->operator);
        } else {
            $filter->setOperator(Filter::OPERATOR_EQUALS);
        }

        if (property_exists($data, 'value')) {
            $filter->setValue($this->getFilterValueFromUrl($data->value));
        } else {
            throw new \Exception('No value specified');
        }

        return $filter;
    }

    /**
     * Extracts the sorters from the JSON object.
     *
     * @param $data
     *
     * @throws \Exception
     *
     * @return Sorter A Sorter object
     */
    private function extractJSONSorters(
        $data
    ) {
        $sorter = new Sorter();

        if ($data->property) {
            if (strpos($data->property, '.') !== false) {
                $associations = explode('.', $data->property);

                $property = array_pop($associations);

                $sorter->setAssociation(implode('.', $associations));
                $sorter->setProperty($property);
            } else {
                $sorter->setAssociation(null);
                $sorter->setProperty($data->property);
            }
        } else {
            throw new \Exception('You need to set the filter property');
        }

        if ($data->direction) {
            switch (strtoupper($data->direction)) {
                case 'DESC':
                    $sorter->setDirection("DESC");
                    break;
                case 'ASC':
                default:
                    $sorter->setDirection("ASC");
                    break;
            }
        } else {
            $sorter->setDirection("ASC");
        }

        return $sorter;
    }
}
