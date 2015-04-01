<?php
namespace PartKeepr\Part;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Manufacturer\Manufacturer,
    Doctrine\ORM\Mapping as ORM;

/** @ORM\Entity **/
class PartManufacturer extends BaseEntity implements Serializable, Deserializable {
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\Part",inversedBy="manufacturers")
	 */
	private $part;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Manufacturer\Manufacturer")
	 */
	private $manufacturer;
	
	/**
	 * @ORM\Column(type="string",nullable=true)
	 * Enter description here ...
	 * @var unknown_type
	 */
	private $partNumber;
	
	/**
	 * Sets the part which belongs to this manufacturer entry
	 * @param Part $part
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	/**
	 * Returns the part which belongs to this manufacturer entry
	 */
	public function getPart () {
		return $this->part;
	}
	
	/**
	 * Sets the manufacturer which belongs to this entry
	 * @param Manufacturer $manufacturer
	 */
	public function setManufacturer (Manufacturer $manufacturer) {
		$this->manufacturer = $manufacturer;
	}
	
	/**
	 * Returns the manufacturer which belongs to this part
	 */
	public function getManufacturer () {
		return $this->manufacturer;
	}
	
	/**
	 * Sets the manufacturer-specific part number
	 * @param string $partNumber
	 */
	public function setPartNumber ($partNumber) {
		$this->partNumber = $partNumber;
	}
	
	/**
	 * Returns the manufacturer-specific part number
	 * @return string The part number
	 */
	public function getPartNumber () {
		return $this->partNumber;
	}
	
	/**
	 * Returns the data of this object in a serialized form.
	 * @return array The result array
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"partNumber" => $this->getPartNumber(),
			"manufacturer_id" => $this->getManufacturer()->getId(),
			"manufacturer_name" => $this->getManufacturer()->getName(),
			"part_id" => $this->getPart()->getId(),
			"part_name" => $this->getPart()->getName());
	}
	
	/**
	 * Deserializes the part manufacturer
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "manufacturer_id":
					$manufacturer = Manufacturer::loadById($value);
					$this->setManufacturer($manufacturer);
					break;
				case "partNumber":
					$this->setPartNumber($value);
					break;
			}
		}
	}
}