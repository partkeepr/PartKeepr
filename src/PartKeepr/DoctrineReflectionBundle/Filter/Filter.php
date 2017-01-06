<?php

namespace PartKeepr\DoctrineReflectionBundle\Filter;

class Filter implements AssociationPropertyInterface
{
    use AssociationPropertyTrait;

    const TYPE_AND = 'and';
    const TYPE_OR = 'or';

    const OPERATOR_LESS_THAN = '<';
    const OPERATOR_GREATER_THAN = '>';
    const OPERATOR_EQUALS = '=';
    const OPERATOR_GREATER_THAN_EQUALS = '>=';
    const OPERATOR_LESS_THAN_EQUALS = '<=';
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

    const TYPES = [
        self::TYPE_AND,
        self::TYPE_OR,
    ];

    /**
     * The type.
     *
     * @var string
     */
    private $type;

    /**
     * @var string
     */
    private $operator;

    /**
     * @var string
     */
    private $value;

    /**
     * SubFilters.
     *
     * @var array
     */
    private $subFilters;

    public function __construct($type = self::TYPE_AND)
    {
        $this->setType($type);
        $this->setSubFilters([]);
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @throws \Exception
     */
    public function setType($type)
    {
        if (!in_array($type, self::TYPES)) {
            throw new \Exception("Invalid type $type");
        }
        $this->type = $type;
    }

    /**
     * @return string
     */
    public function getOperator()
    {
        return $this->operator;
    }

    /**
     * @param string $operator
     *
     * @throws \Exception Thrown if an invalid operator was passed
     */
    public function setOperator($operator)
    {
        if (!in_array(strtolower($operator), self::OPERATORS)) {
            throw new \Exception("Invalid operator $operator");
        }
        $this->operator = strtolower($operator);
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param string $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * @return array
     */
    public function getSubFilters()
    {
        return $this->subFilters;
    }

    /**
     * @param array $subFilters
     */
    public function setSubFilters($subFilters)
    {
        $this->subFilters = $subFilters;
    }

    public function hasSubFilters()
    {
        return count($this->subFilters) > 0;
    }
}
