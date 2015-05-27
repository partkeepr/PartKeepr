<?php
namespace PartKeepr\DoctrineReflectionBundle\Filter;

/**
 * Represents a filter
 *
 * This allows the developer to specify multiple filters.
 */
class Filter
{
    /**
     * The FQDN target entity to filter
     *
     * @var string
     */

    private $targetEntity;

    /**
     * The field to filter by
     *
     * @var string
     */
    private $filterField = null;

    /**
     * The value to filter for
     *
     * @var string
     */
    private $filterValue = null;

    /**
     * The operator to use
     * @var string
     */
    private $operator;

    /**
     * Constructs a new filter.
     *
     * @param string $field The field to filter for
     * @param string $value The value to filter for. Must be a scalar value, except if the operator is IN, where it may be an array
     * @param string $operator The operator to use. Supported operators are <, <=, =, >=, >, !=, in, like
     */
    public function __construct($targetEntity, $field, $value, $operator = "=")
    {
        $this->targetEntity = $targetEntity;

        $this->setFilterField($field);
        $this->setFilterOperator($operator);
        $this->setFilterValue($value);
    }

    /**
     * Sets the filter field for this filter
     *
     * @param string $field The field to filter by
     */
    public function setFilterField($field)
    {
        $this->filterField = $field;
    }

    /**
     * Sets the filter operator
     *
     * @param string $operator The operator to use. Supported operators are <, <=, =, >=, >, !=, in, like
     */
    public function setFilterOperator ($operator)
    {
        switch (strtolower($operator)) {
            case "<":
                $this->operator = "<";
                break;
            case ">":
                $this->operator = ">";
                break;
            case "=":
                $this->operator = "=";
                break;
            case "<=":
                $this->operator = "<=";
                break;
            case ">=":
                $this->operator = ">=";
                break;
            case "!=":
                $this->operator = "!=";
                break;
            case "in":
                $this->operator = "in";
                break;
            case "like":
                $this->operator = "like";
                break;
        }
    }

    /**
     * Sets the filter value
     * @param $value
     */
    public function setFilterValue ($value) {
        $this->filterValue = $value;
    }

    public function getFilterValue () {
        return $this->filterValue;
    }

    /**
     * Returns the target entity to sort
     *
     * @return string
     */
    public function getTargetEntity()
    {
        return $this->targetEntity;
    }

    /**
     * Returns the filter field
     *
     * @return string The field name
     */
    public function getFilterField()
    {
        return $this->filterField;
    }

    /**
     * Returns the operator for this filter
     *
     * @return string
     */
    public function getFilterOperator()
    {
        return $this->operator;
    }
}