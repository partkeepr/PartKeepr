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
	 * @var integer
	 * 
	 * Defines the packaging unit when ordering a part. 
	 */
	private $packagingUnit;
	
	public function __construct (Part $part, Distributor $distributor) {
		$this->setPart($part);
		$this->setDistributor($distributor);
		$this->setPackagingUnit(1);
	}
	
	/**
	 * Sets the packaging unit for a specific distributor.
	 * 
	 * For example, some distributors only sell resistors in packs of 100, so you can't order just one. We use the
	 * packagingUnit to calculate how many pieces will be delivered once ordered. So if your stock level falls below
	 * the minimum (example: you would need to order 10 resistors), we suggest that you only order one resistor pack
	 * instead of 10.
	 *   
	 * @param int $packagingUnit The amount of items in one package
	 * @throws \de\RaumZeitLabor\PartDB2\Part\OutOfRangeException When the packaging unit is less than 1
	 */
	public function setPackagingUnit ($packagingUnit) {
		$packagingUnit = intval($packagingUnit);
		
		if ($packagingUnit < 1) {
			$exception = new OutOfRangeException(PartDB2::i18n("Packaging Unit is out of range"));
			$exception->setDetail(PartDB2::i18n("The packaging unit must be 1 or higher"));
			throw $exception;
		}
		
		$this->packagingUnit = $packagingUnit;
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