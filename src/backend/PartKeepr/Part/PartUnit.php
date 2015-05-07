<?php
namespace PartKeepr\Part;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Util\Exceptions\OutOfRangeException,
    Doctrine\ORM\Mapping as ORM;


/** @ORM\Entity **/
class PartUnit extends BaseEntity implements Serializable, Deserializable {
	/**
	 * Defines the name of the unit
	 * @ORM\Column
	 * @var string
	 */
	private $name;
	
	/**
	 * Defines the short name of the unit
	 * @ORM\Column
	 * @var string
	 */
	private $shortName;
	
	/**
	 * Defines if the unit is default or not.
	 * 
	 * @ORM\Column(type="boolean")
	 * @var boolean
	 */
	private $is_default;
	
	/**
	 * @ORM\OneToMany(targetEntity="PartKeepr\Part\Part",mappedBy="partUnit")
	 */
	private $parts;
	
	
	/**
	 * Creates a new part unit.
	 * 
	 * Sets the default to false.
	 */
	public function __construct () {
		$this->setDefault(false);
	}
	
	/**
	 * Sets the name for this unit
	 * @param string $name The name for this unit
	 * @return nothing
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name for this unit
	 * @param none
	 * @return string The name for this unit
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the short name for this unit.
	 * 
	 * Short names are used for list views (e.g. if your unit name is "metres", your short name could be "m")
	 * @param string $shortName The short name
	 * @return nothing
	 */
	public function setShortName ($shortName) {
		$this->shortName = $shortName;
	}
	
	/**
	 * Returns the short name for this unit
	 * @param none
	 * @return string The short name for this unit
	 */
	public function getShortName () {
		return $this->shortName;
	}
	
	/**
	 * Defines if the unit is default or not.
	 * @param boolean $default True if the unit is default, false otherwise
	 */
	public function setDefault ($default) {
		$this->is_default = (bool)$default;
	}
	
	/**
	 * Returns if the unit is default or not
	 * @param none
	 * @return boolean True if the unit is default, false for not
	 */
	public function getDefault () {
		return $this->is_default;
	}
	
	/**
	 * Serializes the object and returns it as array, suitable
	 * to process via json_encode.
	 * @param none
	 * @return array An array containing the object information
	 */
	public function serialize () {
		return array(
					"id" => $this->getId(),
					"name" => $this->getName(),
					"shortName" => $this->getShortName(),
					"default" => $this->getDefault()
		);
	}
	
	/**
	 * Deserializes the manufacturer
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "shortName":
					$this->setShortName($value);
					break;
			}
		}
	}
}
	