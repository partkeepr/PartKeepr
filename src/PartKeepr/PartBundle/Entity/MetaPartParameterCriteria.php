<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity()
 */
class MetaPartParameterCriteria extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="metaPartParameterCriterias")
     *
     * @var Part
     */
    private $part;

    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $partParameterName;

    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $operator;

    /**
     * @ORM\Column(type="float",nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $value;

    /**
     * @ORM\Column(type="float",nullable=true)
     *
     * @var float
     */
    private $normalizedValue;

    /**
     * The SiPrefix of the unit.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
     * @Groups({"default"})
     *
     * @var SiPrefix
     */
    private $siPrefix;

    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $stringValue;

    /**
     * The type of the value.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $valueType;

    /**
     * The unit for this type. May be null.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\UnitBundle\Entity\Unit")
     * @Groups({"default"})
     *
     * @var \PartKeepr\UnitBundle\Entity\Unit
     */
    private $unit;

    public function __construct()
    {
        $this->setValueType(PartParameter::VALUE_TYPE_STRING);
        $this->setStringValue("");
    }

    /**
     * @return float
     */
    public function getNormalizedValue()
    {
        return $this->normalizedValue;
    }

    /**
     * @param float $normalizedValue
     */
    public function setNormalizedValue($normalizedValue)
    {
        $this->normalizedValue = $normalizedValue;
    }

    protected function recalculateNormalizedValue()
    {
        if ($this->getSiPrefix() === null) {
            $this->setNormalizedValue($this->getValue());
        } else {
            $this->setNormalizedValue($this->getSiPrefix()->calculateProduct($this->getValue()));
        }
    }

    /**
     * @return \PartKeepr\UnitBundle\Entity\Unit
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * @param \PartKeepr\UnitBundle\Entity\Unit $unit
     */
    public function setUnit($unit = null)
    {
        $this->unit = $unit;
    }

    /**
     * @return string
     */
    public function getValueType()
    {
        // Fallback to numeric if legacy parameter
        if (!in_array($this->valueType, PartParameter::VALUE_TYPES)) {
            return PartParameter::VALUE_TYPE_NUMERIC;
        }

        return $this->valueType;
    }

    /**
     * @param string $valueType
     */
    public function setValueType($valueType)
    {
        if (!in_array($valueType, PartParameter::VALUE_TYPES)) {
            throw new \Exception("Invalid value type given:".$valueType);
        }

        $this->valueType = $valueType;
    }

    /**
     * @return SiPrefix
     */
    public function getSiPrefix()
    {
        return $this->siPrefix;
    }

    /**
     * @param SiPrefix $siPrefix
     */
    public function setSiPrefix($siPrefix)
    {
        $this->siPrefix = $siPrefix;
        $this->recalculateNormalizedValue();
    }

    /**
     * @return Part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * @param Part $part
     */
    public function setPart($part = null)
    {
        $this->part = $part;
    }

    /**
     * @return string
     */
    public function getPartParameterName()
    {
        return $this->partParameterName;
    }

    /**
     * @param string $partParameterName
     */
    public function setPartParameterName($partParameterName)
    {
        $this->partParameterName = $partParameterName;
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
     */
    public function setOperator($operator)
    {
        $this->operator = $operator;
    }

    /**
     * @return float
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param float $value
     */
    public function setValue($value)
    {
        $this->value = $value;
        $this->recalculateNormalizedValue();
    }

    /**
     * @return string
     */
    public function getStringValue()
    {
        return $this->stringValue;
    }

    /**
     * @param string $stringValue
     */
    public function setStringValue($stringValue)
    {
        $this->stringValue = $stringValue;
    }
}
