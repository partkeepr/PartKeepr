<?php
namespace de\RaumZeitLabor\PartKeepr\Manufacturer;
use de\RaumZeitLabor\PartKeepr\Util\Serializable;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Image\Image;

/**
 * Holds a manufacturer IC logo
 * @Entity
 **/
class ManufacturerICLogo extends Image implements Serializable {
	/**
	 * The manufacturer object
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer")
	 * @var Manufacturer
	 */
	private $manufacturer = null;
	
	/**
	 * Creates a new IC logo instance
	 */
	public function __construct () {
		parent::__construct(Image::IMAGE_ICLOGO);
	}

	/**
	 * Sets the manufacturer
	 * @param Manufacturer $manufacturer The manufacturer to set
	 */
	public function setManufacturer (Manufacturer $manufacturer) {
		$this->manufacturer = $manufacturer;
	}
	
	/**
	 * Returns the manufacturer
	 * @return Manufacturer the manufacturer
	 */
	public function getManufacturer () {
		return $this->manufacturer;
	}
	
	/**
	 * 
	 * Serializes this ic logo
	 * @return array The serialized ic logo
	 */
	public function serialize () {
		return array("id" => $this->getId(), "manufacturer_id" => $this->getMenufacturer()->getId());
	}
}