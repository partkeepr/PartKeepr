<?php
namespace de\RaumZeitLabor\PartKeepr\Manufacturer;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Image\Image;

/** @Entity **/
class ManufacturerICLogo extends Image {
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer")
	 */
	private $manufacturer = null;
		
	public function __construct () {
		parent::__construct(Image::IMAGE_ICLOGO);
	}
	
	public function setManufacturer (Manufacturer $manufacturer) {
		$this->manufacturer = $manufacturer;
	}
	
	public function serialize () {
		return array("id" => $this->id, "manufacturer_id" => $this->manufacturer->getId());
	}
}