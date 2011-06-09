<?php
namespace de\RaumZeitLabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer;

/** @Entity **/
class PartManufacturer {
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var unknown_type
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Part\Part") 
	 */
	private $part;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer") 
	 */
	private $manufacturer;
	
	/**
	 * @Column(type="string",nullable=true)
	 * Enter description here ...
	 * @var unknown_type
	 */
	private $partNumber;
	
	public function __construct (Part $part, Manufacturer $manufacturer) {
		$this->setPart($part);
		$this->setManufacturer($manufacturer);
	}
	
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
			"partNumber" => $this->getPartNumber(),
			"manufacturer_id" => $this->getManufacturer()->getId(),
			"manufacturer_name" => $this->getManufacturer()->getName(),
			"part_id" => $this->getPart()->getId(),
			"part_name" => $this->getPart()->getName());
	}
	
	
}