<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use PartKeepr\UnitBundle\Entity\Unit;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * This object represents a parameter. Each parameter can have an unit (defined by the class "Unit") associated with
 * a numeric value.
 *
 * @ORM\Entity @ORM\HasLifecycleCallbacks
 */
class PartParameter extends BaseEntity
{
    const VALUE_TYPE_STRING = 'string';

    const VALUE_TYPE_NUMERIC = 'numeric';

    const VALUE_TYPES = [self::VALUE_TYPE_STRING, self::VALUE_TYPE_NUMERIC];

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="parameters")
     * The part this parameter is bound to
     *
     * @var Part
     */
    private $part;

    /**
     * The name of the parameter (e.g. Resistance, Voltage).
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * A description for this parameter.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * The unit for this type. May be null.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\UnitBundle\Entity\Unit")
     * @Groups({"default"})
     *
     * @var \PartKeepr\UnitBundle\Entity\Unit
     */
    private $unit;

    /**
     * The value of the unit. Together with the prefix, it becomes the actual value.
     *
     * Example: If you have 10µ, the value field will contain "10", the prefix object is linked to the SiPrefix
     * representing "µ" and the rawValue field will contain 0.000001
     *
     * @ORM\Column(type="float",nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $value;

    /**
     * The maximum value of the parameter.
     *
     * @ORM\Column(type="float",name="maximumValue",nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $maxValue;

    /**
     * The minimum value of the parameter.
     *
     * @ORM\Column(type="float",name="minimumValue",nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $minValue;

    /**
     * The string value if the parameter is a string.
     *
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
     * The SiPrefix of the unit.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
     * @Groups({"default"})
     *
     * @var SiPrefix
     */
    private $siPrefix;

    /**
     * The SiPrefix of the min value.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
     * @Groups({"default"})
     *
     * @var SiPrefix
     */
    private $minSiPrefix;

    /**
     * The SiPrefix of the min value.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
     * @Groups({"default"})
     *
     * @var SiPrefix
     */
    private $maxSiPrefix;

    public function __construct()
    {
        $this->setValueType(self::VALUE_TYPE_STRING);
    }

    /**
     * @return SiPrefix
     */
    public function getMinSiPrefix()
    {
        return $this->minSiPrefix;
    }

    /**
     * @param SiPrefix $minSiPrefix
     */
    public function setMinSiPrefix($minSiPrefix)
    {
        $this->minSiPrefix = $minSiPrefix;
    }

    /**
     * @return SiPrefix
     */
    public function getMaxSiPrefix()
    {
        return $this->maxSiPrefix;
    }

    /**
     * @param SiPrefix $maxSiPrefix
     */
    public function setMaxSiPrefix($maxSiPrefix)
    {
        $this->maxSiPrefix = $maxSiPrefix;
    }

    /**
     * @return float
     */
    public function getMaxValue()
    {
        return $this->maxValue;
    }

    /**
     * @param float $maxValue
     */
    public function setMaxValue($maxValue)
    {
        $this->maxValue = $maxValue;
    }

    /**
     * @return float
     */
    public function getMinValue()
    {
        return $this->minValue;
    }

    /**
     * @param float $minValue
     */
    public function setMinValue($minValue)
    {
        $this->minValue = $minValue;
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

    /**
     * @return string
     */
    public function getValueType()
    {
        return $this->valueType;
    }

    /**
     * @param string $valueType
     *
     * @throws \Exception
     */
    public function setValueType($valueType)
    {
        if (!in_array($valueType, self::VALUE_TYPES)) {
            throw new \Exception("Invalid value type given");
        }

        $this->valueType = $valueType;
    }

    /**
     * Returns the name for this parameter.
     *
     * @return string The name for this parameter
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the name for this parameter.
     *
     * @param string $name The name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the description.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the description for this parameter.
     *
     * @param string $description The description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the unit.
     *
     * @return \PartKeepr\UnitBundle\Entity\Unit the unit
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * Sets the unit.
     *
     * @param \PartKeepr\UnitBundle\Entity\Unit $unit The unit to set
     */
    public function setUnit(Unit $unit = null)
    {
        $this->unit = $unit;
    }

    /**
     * Returns the part.
     *
     * @return \PartKeepr\PartBundle\Entity\Part the part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Sets the part.
     *
     * @param Part $part The part to set
     */
    public function setPart(Part $part = null)
    {
        $this->part = $part;
    }

    /**
     * Returns the value.
     *
     * @return float The value
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Sets the value.
     *
     * @param float $value The value to set
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * Returns the si prefix for this parameter.
     *
     * @return \PartKeepr\SiPrefixBundle\Entity\SiPrefix the si prefix or null
     */
    public function getSiPrefix()
    {
        return $this->siPrefix;
    }

    /**
     * Sets the si prefix for this parameter.
     *
     * @param \PartKeepr\SiPrefixBundle\Entity\SiPrefix $prefix The prefix to set, or null
     */
    public function setSiPrefix(SiPrefix $prefix = null)
    {
        $this->siPrefix = $prefix;
    }
}
