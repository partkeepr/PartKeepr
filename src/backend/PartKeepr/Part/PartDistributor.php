<?php
namespace PartKeepr\Part;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Distributor\Distributor,
    Doctrine\ORM\Mapping as ORM;

/** 
 * This class represents the link between a part and a distributor.
 * @ORM\Entity **/
class PartDistributor extends BaseEntity implements Serializable, Deserializable {
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\Part", inversedBy="distributors")
	 */
	private $part;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Distributor\Distributor")
	 */
	private $distributor;
	
	/**
	 * The order number for the part and distributor
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $orderNumber;
	
	/**
	 * Defines the packaging unit when ordering a part. Some items can't be ordered in a quantity of just one at
	 * certain manufacturers.
	 * 
	 * @ORM\Column(type="integer")
	 * @var integer
	 */
	private $packagingUnit;
	
	/**
	 * Specifies the price of the part. Note that the price
	 * needs to be per item, not per packaging unit.
	 * 
	 * @ORM\Column(type="decimal",precision=13,scale=4,nullable=true)
	 * @var float
	 */
	private $price;
	
	/**
	 * The distributor's SKU (stock keeping unit) for the part.  Used with barcodes.
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $sku;

	/**
	 * Cretes a new part->distributor link. Initializes the packaging unit with a quantity of "1".
	 * 
	 * @param Part $part The part
	 * @param Distributor $distributor The distributor
	 */
	public function __construct () {
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
	 * @throws \PartKeepr\Part\OutOfRangeException When the packaging unit is less than 1
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
	 * Sets the price
	 * @param float $price
	 */
	public function setPrice ($price) {
		echo "/** price set to ".$price." **/";
		$this->price = $price;
	}
	
	/**
	 * Returns the price
	 */
	public function getPrice () {
		return $this->price;
	}
	
	/**
	 * Sets the SKU (stock keeping unit)
	 * @param string $sku The SKU
	 */
	public function setSKU ($sku) {
		$this->sku = $sku;
	}

	/**
	 * Returns the SKU (stock keeping unit)
	 * @return string The SKU
	 */
	public function getSKU () {
		return $this->sku;
	}

	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"orderNumber" => $this->getOrderNumber(),
			"distributor_id" => $this->getDistributor()->getId(),
			"distributor_name" => $this->getDistributor()->getName(),
			"part_id" => $this->getPart()->getId(),
			"part_name" => $this->getPart()->getName(),
			"packagingUnit" => $this->getPackagingUnit(),
			"price" => $this->getPrice(),
			"sku" => $this->getSKU());
	}
	
	/**
	 * Deserializes the part manufacturer
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "distributor_id":
					$distributor = Distributor::loadById($value);
					$this->setDistributor($distributor);
					break;
				case "orderNumber":
					$this->setOrderNumber($value);
					break;
				case "packagingUnit":
					$this->setPackagingUnit($value);
					break;
				case "price":
					$this->setPrice($value);
					break;
				case "sku":
					$this->setSKU($value);
					break;
			}
		}
	}
}
