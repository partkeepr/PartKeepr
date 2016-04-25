<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use PartKeepr\UnitBundle\Entity\Unit;

/**
 * This object represents a parameter. Each parameter can have an unit (defined by the class "Unit") associated with
 * a numeric value.
 *
 * @ORM\Entity @ORM\HasLifecycleCallbacks
 */
class PartParameter
{
    /**
     * @ORM\Id @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var int
     */
    private $id;

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
     *
     * @var string
     */
    private $name;

    /**
     * A description for this parameter.
     *
     * @ORM\Column(type="string")
     *
     * @var string
     */
    private $description;

    /**
     * The unit for this type. May be null.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\UnitBundle\Entity\Unit")
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
     * @ORM\Column(type="float")
     *
     * @var float
     */
    private $value;

    /**
     * The SiPrefix of the unit.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
     *
     * @var object
     */
    private $siPrefix;

    /**
     * The raw value of the unit.
     *
     * @ORM\Column(type="float")
     *
     * @var float
     */
    private $rawValue;

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
     * Returns the name for this parameter.
     *
     * @return string The name for this parameter
     */
    public function getName()
    {
        return $this->name;
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
     * Returns the description.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
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
     * Returns the unit.
     *
     * @return \PartKeepr\UnitBundle\Entity\Unit the unit
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * Sets the part.
     *
     * @param Part $part The part to set
     */
    public function setPart(Part $part)
    {
        $this->part = $part;
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
     * Sets the value.
     *
     * @param float $value The value to set
     */
    public function setValue($value)
    {
        $this->value = $value;

        $this->recalculateRawValue();
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
     * Sets the si prefix for this parameter.
     *
     * @param \PartKeepr\SiPrefixBundle\Entity\SiPrefix $prefix The prefix to set, or null
     */
    public function setSiPrefix(SiPrefix $prefix = null)
    {
        $this->siPrefix = $prefix;

        $this->recalculateRawValue();
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
     * Returns the ID for this object.
     *
     * @param none
     *
     * @return int The ID for this object
     */
    public function getId()
    {
        return $this->id;
    }

    private function recalculateRawValue()
    {
        if (is_object($this->getSiPrefix())) {
            $power = $this->getSiPrefix()->getExponent();
        } else {
            $power = 0;
        }

        $this->rawValue = $this->getValue() * pow(10, $power);
    }
}
