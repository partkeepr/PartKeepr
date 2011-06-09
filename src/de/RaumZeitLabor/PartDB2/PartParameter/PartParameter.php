<?php
namespace de\RaumZeitLabor\PartDB2\PartParameter;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Util\Exceptions\OutOfRangeException,
	de\RaumZeitLabor\PartDB2\Unit\Unit,
	de\RaumZeitLabor\PartDB2\Part\Part,
	de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix;


/**
 * This object represents a parameter. Each parameter can have an unit (defined by the class "Unit") associated with
 * a numeric value. 
 *  
 * @Entity
 **/
class PartParameter {
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Part\Part")
	 * The part this parameter is bound to
	 * @var Part
	 */
	private $part;
	
	/**
	 * The name of the parameter (e.g. Resistance, Voltage)
	 * @Column(type="string")
	 * @var string
	 */
	private $name;
	
	/**
	 * A description for this parameter
	 * @Column(type="string")
	 * @var string
	 */
	private $description;
	
	/**
	 * The unit for this type. May be null.
	 * 
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Unit\Unit")
	 * @var Unit
	 */
	private $unit;
	
	/**
	 * The value of the unit.
	 * @Column(type="float")
	 * @var float
	 */
	private $value;
	
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
	}
	
	/**
	 * Returns the value
	 * @return float The value
	 */
	public function getValue () {
		return $this->value;
	}
	
	/**
	 * Returns the ID for this object.
	 * @param none
	 * @return int The ID for this object
	 */
	public function getId () {
		return $this->id;
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
			"unit_id" => is_object($this->getUnit()) ? $this->getUnit()->getId() : null
		
		);
	}
}
	