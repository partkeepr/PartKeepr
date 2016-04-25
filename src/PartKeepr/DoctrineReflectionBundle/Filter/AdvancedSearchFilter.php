<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Dunglas\ApiBundle\Api\IriConverterInterface;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Doctrine\Orm\Filter\AbstractFilter;
use Symfony\Component\HttpFoundation\Request;
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

    const OPERATOR_LESS_THAN = '<';
    const OPERATOR_GREATER_THAN = '>';
    const OPERATOR_EQUALS = '=';
    const OPERATOR_GREATER_THAN_EQUALS = '>=';
    const OPERATOR_LESS_THAN_EQUALS = '>=';
    const OPERATOR_NOT_EQUALS = '!=';
    const OPERATOR_IN = 'in';
    const OPERATOR_LIKE = 'like';

    const OPERATORS = [
        self::OPERATOR_LESS_THAN,
        self::OPERATOR_GREATER_THAN,
        self::OPERATOR_EQUALS,
        self::OPERATOR_GREATER_THAN_EQUALS,
        self::OPERATOR_LESS_THAN_EQUALS,
        self::OPERATOR_NOT_EQUALS,
        self::OPERATOR_IN,
        self::OPERATOR_LIKE,
    ];

    private $aliases = [];

    private $parameterCount = 0;

    private $requestStack;

    private $joins = [];

    /**
     * @param ManagerRegistry           $managerRegistry
     * @param IriConverterInterface     $iriConverter
     * @param PropertyAccessorInterface $propertyAccessor
     * @param null|array                $properties       Null to allow filtering on all properties with the exact strategy
     *                                                    or a map of property name with strategy.
     */
    public function __construct(
        ManagerRegistry $managerRegistry,
        IriConverterInterface $iriConverter,
        PropertyAccessorInterface $propertyAccessor,
        RequestStack $requestStack,
        array $properties = null
    ) {
        parent::__construct($managerRegistry, $properties);
        $this->requestStack = $requestStack;
        $this->iriConverter = $iriConverter;
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
        $metadata = $this->getClassMetadata($resource);
        $fieldNames = array_flip($metadata->getFieldNames());

        $request = $this->requestStack->getCurrentRequest();
        if (null === $request) {
            return;
        }

        $properties = $this->extractProperties($request);
        $filters = $properties['filters'];
        $sorters = $properties['sorters'];

        foreach ($filters as $filter) {
            if (isset($fieldNames[$filter['property']]) && $filter['association'] === null) {
                $queryBuilder
                    ->andWhere(
                        $this->getFilterExpression($queryBuilder, $filter)
                    );
            } else {
                if ($filter['association'] !== null) {
                    // Pull in associations
                    $this->addJoins($queryBuilder, $filter);
                }

                $filter['value'] = $this->getFilterValueFromUrl($filter['value']);

                $queryBuilder->andWhere(
                    $this->getFilterExpression($queryBuilder, $filter)
                );
            }
        }

        foreach ($sorters as $sorter) {
            if ($sorter['association'] !== null) {
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
    private function addJoins(QueryBuilder $queryBuilder, $filter)
    {
        if (in_array($filter['association'], $this->joins)) {
            // Association already added, return
            return;
        }

        $associations = explode('.', $filter['association']);

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

        $this->joins[] = $filter['association'];
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
    private function getFilterExpression(QueryBuilder $queryBuilder, $filter)
    {
        if ($filter['association'] !== null) {
            $alias = $this->getAlias('o.'.$filter['association']).'.'.$filter['property'];
        } else {
            $alias = 'o.'.$filter['property'];
        }

        if (strtolower($filter['operator']) == self::OPERATOR_IN) {
            if (!is_array($filter['value'])) {
                throw new \Exception('Value needs to be an array for the IN operator');
            }

            return $queryBuilder->expr()->in($alias, $filter['value']);
        } else {
            $paramName = ':param'.$this->parameterCount;
            $this->parameterCount++;
            $queryBuilder->setParameter($paramName, $filter['value']);

            switch (strtolower($filter['operator'])) {
                case self::OPERATOR_EQUALS:
                    return $queryBuilder->expr()->eq($alias, $paramName);
                    break;
                case self::OPERATOR_GREATER_THAN:
                    return $queryBuilder->expr()->gt($alias, $paramName);
                    break;
                case self::OPERATOR_GREATER_THAN_EQUALS:
                    return $queryBuilder->expr()->gte($alias, $paramName);
                    break;
                case self::OPERATOR_LESS_THAN:
                    return $queryBuilder->expr()->lt($alias, $paramName);
                    break;
                case self::OPERATOR_LESS_THAN_EQUALS:
                    return $queryBuilder->expr()->lte($alias, $paramName);
                    break;
                case self::OPERATOR_NOT_EQUALS:
                    return $queryBuilder->expr()->neq($alias, $paramName);
                    break;
                case self::OPERATOR_LIKE:
                    return $queryBuilder->expr()->like($alias, $paramName);
                    break;
                default:
                    throw new \Exception('Unknown filter');
            }
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
    private function applyOrderByExpression(QueryBuilder $queryBuilder, $sorter)
    {
        if ($sorter['association'] !== null) {
            $alias = $this->getAlias('o.'.$sorter['association']).'.'.$sorter['property'];
        } else {
            $alias = 'o.'.$sorter['property'];
        }

        return $queryBuilder->addOrderBy($alias, $sorter['direction']);
    }

    /**
     * {@inheritdoc}
     */
    protected function extractProperties(Request $request)
    {
        $filters = [];

        if ($request->query->has('filter')) {
            $data = json_decode($request->query->get('filter'));

            if (is_array($data)) {
                foreach ($data as $filter) {
                    $filters[] = $this->extractJSONFilters($filter);
                }
            } elseif (is_object($data)) {
                $filters[] = $this->extractJSONFilters($data);
            }
        }

        $sorters = [];

        if ($request->query->has('order')) {
            $data = json_decode($request->query->get('order'));

            if (is_array($data)) {
                foreach ($data as $sorter) {
                    $sorters[] = $this->extractJSONSorters($sorter);
                }
            } elseif (is_object($data)) {
                $sorters[] = $this->extractJSONSorters($data);
            }
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
    private function getAlias($property)
    {
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
     * @return array An array containing the property, operator and value keys
     */
    private function extractJSONFilters($data)
    {
        $filter = [];

        if (property_exists($data, 'property')) {
            if (strpos($data->property, '.') !== false) {
                $associations = explode('.', $data->property);

                $property = array_pop($associations);

                $filter['association'] = implode('.', $associations);
                $filter['property'] = $property;
            } else {
                $filter['association'] = null;
                $filter['property'] = $data->property;
            }
        } else {
            throw new \Exception('You need to set the filter property');
        }

        if (property_exists($data, 'operator')) {
            if (!in_array(strtolower($data->operator), self::OPERATORS)) {
                throw new \Exception(sprintf('Invalid operator %s', $data->operator));
            }
            $filter['operator'] = $data->operator;
        } else {
            $filter['operator'] = self::OPERATOR_EQUALS;
        }

        if (property_exists($data, 'value')) {
            $filter['value'] = $data->value;
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
     * @return array An array containing the property, operator and value keys
     */
    private function extractJSONSorters($data)
    {
        $sorter = [];

        if ($data->property) {
            if (strpos($data->property, '.') !== false) {
                $associations = explode('.', $data->property);

                $property = array_pop($associations);

                $sorter['association'] = implode('.', $associations);
                $sorter['property'] = $property;
            } else {
                $sorter['association'] = null;
                $sorter['property'] = $data->property;
            }
        } else {
            throw new \Exception('You need to set the filter property');
        }

        if ($data->direction) {
            switch (strtoupper($data->direction)) {
                case 'DESC':
                    $sorter['direction'] = 'DESC';
                    break;
                case 'ASC':
                default:
                    $sorter['direction'] = 'ASC';
                    break;
            }
        } else {
            $sorter['direction'] = 'ASC';
        }

        return $sorter;
    }
}
