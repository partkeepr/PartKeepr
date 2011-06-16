<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Distributor\Distributor;

/** 
 * This class represents the link between a part and a distributor.
 * @Entity **/
class PartDistributor extends BaseEntity implements Serializable {
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part") 
	 */
	private $part;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Distributor\Distributor") 
	 */
	private $distributor;
	
	/**
	 * The order number for the part and distributor
	 * @Column(type="string",nullable=true)
	 * @var string
	 */
	private $orderNumber;
	
	/**
	 * Defines the packaging unit when ordering a part. Some items can't be ordered in a quantity of just one at
	 * certain manufacturers.
	 * 
	 * @Column(type="integer")
	 * @var integer
	 */
	private $packagingUnit;
	
	/**
	 * Cretes a new part->distributor link. Initializes the packaging unit with a quantity of "1".
	 * 
	 * @param Part $part The part
	 * @param Distributor $distributor The distributor
	 */
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
	 * @throws \de\RaumZeitLabor\PartKeepr\Part\OutOfRangeException When the packaging unit is less than 1
	 */
	public function setPackagingUnit ($packagingUnit) {
		$packagingUnit = intval($packagingUnit);
		
		if ($packagingUnit < 1) {
			$exception = new OutOfRangeException(PartKeepr::i18n("Packaging Unit is out of range"));
			$exception->setDetail(PartKeepr::i18n("The packaging unit must be 1 or higher"));
			throw $exception;
		}
		
		$this->packagingUnit = $packagingUnit;
	}
	
	/**
	 * Returns the packaging unit
	 * @return int The packaging unit
	 */
	public function getPackagingUnit () {
		return $this->packagingUnit;
	}
	
	/**
	 * Sets the part
	 * @param Part $part The part
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	/**
	 * Returns the part
	 * @return Part The part
	 */
	public function getPart () {
		return $this->part;
	}
	
	/**
	 * Sets the distributor
	 * @param Distributor $distributor The distributor
	 */
	public function setDistributor (Distributor $distributor) {
		$this->distributor = $distributor;
	}
	
	/**
	 * Returns the distributor
	 * @return Distributor The distributor
	 */
	public function getDistributor () {
		return $this->distributor;
	}
	
	/**
	 * Sets the order number
	 * @param string $orderNumber The order number
	 */
	public function setOrderNumber ($orderNumber) {
		$this->orderNumber = $orderNumber;
	}
	
	/**
	 * Returns the order number
	 * @return string The order number
	 */
	public function getOrderNumber () {
		return $this->orderNumber;
	}

	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Util.Serializable::serialize()
	 */
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