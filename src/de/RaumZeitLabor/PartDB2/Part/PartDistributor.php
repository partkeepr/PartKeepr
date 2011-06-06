<?php
namespace de\RaumZeitLabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Distributor\Distributor;

/** @Entity **/
class PartDistributor {
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
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Distributor\Distributor") 
	 */
	private $distributor;
	
	/**
	 * @Column(type="string",nullable=true)
	 * Enter description here ...
	 * @var unknown_type
	 */
	private $orderNumber;
	
	/**
	 * @Column(type="integer")
	 * @var unknown_type
	 */
	private $packagingUnit;
	
	public function __construct (Part $part, Distributor $distributor) {
		$this->setPart($part);
		$this->setDistributor($distributor);
		$this->setPackagingUnit(1);
	}
	
	public function setPackagingUnit ($unit) {
		$this->packagingUnit = $unit;
	}
	
	public function getPackagingUnit () {
		return $this->packagingUnit;
	}
	
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	public function getPart () {
		return $this->part;
	}
	
	public function setDistributor (Distributor $distributor) {
		$this->distributor = $distributor;
	}
	
	public function getDistributor () {
		return $this->distributor;
	}
	
	public function setOrderNumber ($orderNumber) {
		$this->orderNumber = $orderNumber;
	}
	
	public function getOrderNumber () {
		return $this->orderNumber;
	}
	
	public function getId () {
		return $this->id;
	}
	
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"orderNumber" => $this->getOrderNumber(),
			"distributor_id" => $this->getDistributor()->getId(),
			"distributor_name" => $this->getDistributor()->getName(),
			"part_id" => $this->getPart()->getId(),
			"part_name" => $this->getPart()->getName(),
			"packagingUnit" => $this->getPackagingUnit());
	}
}