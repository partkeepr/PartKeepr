<?php
namespace PartKeepr\PartParameter;

use PartKeepr\PartKeepr,
PartKeepr\Util\Exceptions\OutOfRangeException,
PartKeepr\Unit\Unit,
PartKeepr\Part\Part,
PartKeepr\SiPrefixBundle\Entity\SiPrefix,
    Doctrine\ORM\Mapping as ORM;


/**
 * This object represents a parameter. Each parameter can have an unit (defined by the class "Unit") associated with
 * a numeric value.
 *
 * @ORM\Entity @ORM\HasLifecycleCallbacks
 **/
class PartParameter {
	/**
	 * @ORM\Id @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;

	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\Part", inversedBy="parameters")
	 * The part this parameter is bound to
	 * @var Part
	 */
	private $part;

	/**
	 * The name of the parameter (e.g. Resistance, Voltage)
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $name;

	/**
	 * A description for this parameter
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $description;

	/**
	 * The unit for this type. May be null.
	 *
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Unit\Unit")
	 * @var Unit
	 */
	private $unit;

	/**
	 * The value of the unit. Together with the prefix, it becomes the actual value.
	 *
	 * Example: If you have 10µ, the value field will contain "10", the prefix object is linked to the SiPrefix
	 * representing "µ" and the rawValue field will contain 0.000001
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $value;

	/**
	 * The SiPrefix of the unit
	 * @ORM\ManyToOne(targetEntity="PartKeepr\SiPrefixBundle\Entity\SiPrefix")
	 * @var object
	 */
	private $siPrefix;

	/**
	 * The raw value of the unit.
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $rawValue;

	/**
	 * Sets the name for this parameter
	 * @param string $name The name
	 */
	public function setName ($name) {
		$this->name = $name;
	}

	/**
	 * Returns the name for this parameter
	 * @return string The name for this parameter
	 */
	public function getName () {
		return $this->name;
	}

	/**
	 * Sets the description for this parameter
	 * @param string $description The description
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}

	/**
	 * Returns the description
	 * @return string The description
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Sets the unit
	 * @param Unit $unit The unit to set
	 */
	public function setUnit (Unit $unit = null) {
		$this->unit = $unit;
	}

	/**
	 * Returns the unit
	 * @return Unit the unit
	 */
	public function getUnit () {
		return $this->unit;
	}

	/**
	 * Sets the part
	 * @param Part $part The part to set
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}

	/**
	 * Returns the part
	 * @return Part the part
	 */
	public function getPart () {
		return $this->part;
	}

	/**
	 * Sets the value
	 * @param float $value The value to set
	 */
	public function setValue ($value) {
		$this->value = $value;

		$this->recalculateRawValue();
	}

	/**
	 * Returns the value
	 * @return float The value
	 */
	public function getValue () {
		return $this->value;
	}

	/**
	 * Sets the si prefix for this parameter
	 *
*@param \PartKeepr\SiPrefixBundle\Entity\SiPrefix $prefix The prefix to set, or null
	 */
	public function setSiPrefix (SiPrefix $prefix = null) {
		$this->siPrefix = $prefix;

		$this->recalculateRawValue();
	}

	/**
	 * Returns the si prefix for this parameter
	 *
*@return \PartKeepr\SiPrefixBundle\Entity\SiPrefix the si prefix or null
	 */
	public function getSiPrefix () {
		return $this->siPrefix;
	}

	/**
	 * Returns the ID for this object.
	 * @param none
	 * @return int The ID for this object
	 */
	public function getId () {
		return $this->id;
	}

	private function recalculateRawValue () {
		if (is_object($this->getSiPrefix())) {
			$power = $this->getSiPrefix()->getExponent();
		} else {
			$power = 0;
		}

		$this->rawValue = $this->getValue() * pow(10, $power);
	}

	/**
	 * Returns the data of this object in a serialized form.
	 * @return array The result array
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"description" => $this->getDescription(),
			"value" => $this->getValue(),
			"part_id" => $this->getPart()->getId(),
			"siprefix_id" => is_object($this->getSiPrefix()) ? $this->getSiPrefix()->getId() : null,
			"prefixedValue" => array(
		/* We duplicate most data because of strange ExtJS stuff... */
				"value" => $this->getValue(),
				"exponent" => is_object($this->getSiPrefix()) ? $this->getSiPrefix()->getExponent() : 0,
				"symbol" => is_object($this->getSiPrefix()) ? $this->getSiPrefix()->getSymbol() : "",
				"siprefix_id" => is_object($this->getSiPrefix()) ? $this->getSiPrefix()->getId() : null
		),
			"unit_id" => is_object($this->getUnit()) ? $this->getUnit()->getId() : null
		);
	}

	/**
	 * Deserializes the part parameter
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "description":
					$this->setDescription($value);
					break;
				case "value":
					$this->setValue($value);
					break;
				case "siprefix_id":
					$prefix = SiPrefix::loadById($value);
					$this->setSiPrefix($prefix);
					break;
				case "unit_id":
					$unit = Unit::loadById($value);
					$this->setUnit($unit);
					break;
			}
		}
	}
}
