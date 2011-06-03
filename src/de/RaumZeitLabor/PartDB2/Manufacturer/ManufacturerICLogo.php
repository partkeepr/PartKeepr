<?php
namespace de\RaumZeitLabor\PartDB2\Manufacturer;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Image\Image;

/** @Entity **/
class ManufacturerICLogo extends Image {
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer")
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