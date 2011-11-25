<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo,
	de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup;

class ManufacturerSetup {
	
	const MANUFACTURER_IMAGE_PATH = "../setup-data/manufacturers/images/";
	const MANUFACTURER_FILE 	  = "../setup-data/manufacturers/manufacturers.yaml";
	
	/**
	 * Sets up the manufacturers using the YAML file.
	 * @param $yaml string The path to the manufacturers YAML file
	 */
	public static function setupManufacturers () {
		Setup::progress("Setting up Manufacturers...");
		
		$data = Setup::loadYAML(self::MANUFACTURER_FILE);
		
		foreach ($data as $mfgname => $logos) {
			Setup::progress(" - Adding manufacturer ".$mfgname, true);
			$manufacturer = new Manufacturer();
			$manufacturer->setName($mfgname);
		
			PartKeepr::getEM()->persist($manufacturer);
		
			foreach ($logos as $logo) {
				$mfglogo = new ManufacturerICLogo();
				$mfglogo->setManufacturer($manufacturer);
				$mfglogo->replace(self::MANUFACTURER_PATH . $logo);
				$mfglogo->setOriginalFilename($logo);
		
				PartKeepr::getEM()->persist($mfglogo);
			}
		}
	}
}
