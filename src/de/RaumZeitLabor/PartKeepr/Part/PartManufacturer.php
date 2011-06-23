<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\Util\Deserializable;

use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer;

/** @Entity **/
class PartManufacturer extends BaseEntity implements Serializable, Deserializable {
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part") 
	 */
	private $part;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer") 
	 */
	private $manufacturer;
	
	/**
	 * @Column(type="string",nullable=true)
	 * Enter description here ...
	 * @var unknown_type
	 */
	private $partNumber;
	
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	public function getPart () {
		return $this->part;
	}
	
	public function setManufacturer (Manufacturer $manufacturer) {
		$this->manufacturer = $manufacturer;
	}
	
	public function getManufacturer () {
		return $this->manufacturer;
	}
	
	public function setPartNumber ($partNumber) {
		$this->partNumber = $partNumber;
	}
	
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