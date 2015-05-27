<?php


namespace PartKeepr\DoctrineReflectionBundle\Controller;


use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use FOS\RestBundle\Controller\Annotations\QueryParam;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\DoctrineReflectionBundle\Filter\Filter;
use PartKeepr\DoctrineReflectionBundle\Sorter\Sorter;
use PartKeepr\PartKeepr;

class DoctrineRESTQueryController extends FOSRestController
{
    /**
     * The target entity to operate on
     * @var string
     */
    protected $targetEntity;

    /**
     * An array which contains all entity aliases used for queries
     * @var array
     */
    protected $queryAliases = array();

    /**
     * Returns the target entity to operate on
     *
     * @return string The target entity
     */
    public function getTargetEntity()
    {
        return $this->targetEntity;
    }

    /**
     * Sets the target entity. Use a FQDN entity class
     *
     * @param string $targetEntity
     */
    public function setTargetEntity($targetEntity)
    {
        $this->targetEntity = $targetEntity;
    }

    /**
     * @QueryParam(name="start",default=0,requirements="\d+",description="Sets the start record")
     * @QueryParam(name="limit",default=-1,requirements="\d+",description="Sets the number of records to fetch. -1 means unlimited")
     * @QueryParam(name="sort", default=null)
     * @QueryParam(name="filter", default=null)
     */
    public function getQueryResponseAction (ParamFetcher $paramFetcher) {
        $qb = $this->getQueryBuilder();

        $qb->select($this->getQueryAlias())->from($this->getTargetEntity(), $this->getQueryAlias());

        $this->applyPagination($qb, $paramFetcher);
        $this->applySorting($qb, $paramFetcher);
        $this->applyFilters($qb, $paramFetcher);

        $query = $qb->getQuery();

        $paginator = new Paginator($query);

        return array(
            "totalCount" => count($paginator),
            "data" => $paginator->getIterator()->getArrayCopy()
        );
    }

    /**
     * Applies filters to the specified query builder. Reads the "filter" parameter.
     *
     * @param QueryBuilder $qb
     * @param ParamFetcher $paramFetcher
     *
     * @throws \Exception
     */
    protected function applyFilters(QueryBuilder $qb, ParamFetcher $paramFetcher)
    {
        $filter = $paramFetcher->get("filter");

        if ($filter === null) {
            return;
        }

        $filters = $this->parseFilters($filter);

        $expr = array();

        foreach ($filters as $key => $filter) {
            $filterField = $this->getQueryAlias($filter->getTargetEntity()).".".$filter->getFilterField();
            $parameterName = ":parameter" . $key;

            $qb->setParameter($parameterName, $filter->getFilterValue());
            switch ($filter->getFilterOperator()) {
                case "<":
                    $expr[] = $qb->expr()->lt($filterField, $parameterName);
                    break;
                case "<=":
                    $expr[] = $qb->expr()->lte($filterField, $parameterName);
                    break;
                case "=":
                    $expr[] = $qb->expr()->eq($filterField, $parameterName);
                    break;
                case ">":
                    $expr[] = $qb->expr()->gt($filterField, $parameterName);
                    break;
                case ">=":
                    $expr[] = $qb->expr()->gte($filterField, $parameterName);
                    break;
                case "!=":
                    $expr[] = $qb->expr()->neq($filterField, $parameterName);
                    break;
                case "in":
                    $expr[] = $qb->expr()->in($filterField, $parameterName);
                    break;
                case "like":
                    $expr[] = $qb->expr()->like($filterField, $parameterName);
                    break;
            }
        }

        $qb->where(call_user_func_array(array($qb->expr(), "andX"), $expr));
    }

    /**
     * Applies sorting to the specified query builder. Reads the "sort" parameter.
     *
     * @param QueryBuilder $qb
     * @param ParamFetcher $paramFetcher
     *
     */
    protected function applySorting (QueryBuilder $qb, ParamFetcher $paramFetcher) {
        $sort = $paramFetcher->get("sort");

        if ($sort === NULL) {
            return;
        }

        $sorters = $this->parseSorters($sort);

        foreach ($sorters as $sorter) {
            $sort = $this->getQueryAlias($sorter->getTargetEntity()) .".".$sorter->getSortField();
            $qb->addOrderBy($sort, $sorter->getSortDirection());
        }
    }

    /**
     * Parses the sorters and returns an array of sorters.
     *
     * @param $sort string A json string which includes the sorters
     * @return Sorter[]
     * @throws \Exception
     */
    protected function parseSorters ($sort) {
        $decodedJson = json_decode($sort, true);

        if ($decodedJson === null) {
            throw new \Exception("sort parameter has an invalid format");
        }

        $sorters = array();

        foreach ($decodedJson as $sorter) {
            if (!array_key_exists("property", $sorter)) {
                throw new \Exception("property parameter has an invalid format");
            }

            if (!array_key_exists("direction", $sorter)) {
                throw new \Exception("direction parameter has an invalid format");
            }

            $sorters[] = new Sorter($this->getTargetEntity(), $sorter["property"], $sorter["direction"]);
        }

        return $sorters;
    }

    /**
     * Parses the sorters and returns an array of sorters.
     *
     * @param $sort string A json string which includes the sorters
     *
     * @return Filter[]
     * @throws \Exception
     */
    protected function parseFilters($filter)
    {
        $decodedJson = json_decode($filter, true);

        if ($decodedJson === null) {
            throw new \Exception("filter parameter has an invalid format");
        }

        $filters = array();

        foreach ($decodedJson as $filter) {
            if (!array_key_exists("property", $filter)) {
                throw new \Exception("property parameter has an invalid format");
            }

            if (!array_key_exists("value", $filter)) {
                throw new \Exception("value parameter has an invalid format");
            }

            if (!array_key_exists("operator", $filter)) {
                throw new \Exception("operator parameter has an invalid format");
            }

            $filters[] = new Filter($this->getTargetEntity(), $filter["property"], $filter["value"], $filter["operator"]);
        }

        return $filters;
    }
    /**
     * Applies pagination to the query builder
     *
     * @param QueryBuilder $qb
     * @param ParamFetcher $paramFetcher
     */
    protected function applyPagination(QueryBuilder $qb, ParamFetcher $paramFetcher)
    {
        $start = intval($paramFetcher->get("start"));
        $limit = intval($paramFetcher->get("limit"));


        $qb->setFirstResult($start);

        if ($limit > 0) {
            $qb->setMaxResults($limit);
        }
    }

    /**
     * Returns the query builder
     *
     * @return QueryBuilder The query builder
     */
    protected function getQueryBuilder()
    {
        return PartKeepr::getEM()->createQueryBuilder();
    }

    /**
     * Returns a query alias for the query builder.
     *
     * @param $entity string The FQDN for the entity
     *
     * @return string A short alias for use in queries
     */
    protected function getQueryAlias ($entity = NULL) {
        if ($entity === NULL) {
            $entity = $this->getTargetEntity();
        }

        if (!array_key_exists($entity, $this->queryAliases)) {
            $reflectionClass = new \ReflectionClass($entity);
            $this->queryAliases[$entity] = $reflectionClass->getShortName().count($this->queryAliases);
        }

        return $this->queryAliases[$entity];
    }
}