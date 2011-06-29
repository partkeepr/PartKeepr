<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo,
	de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup;

class ManufacturerSetup {
	/**
	 * Sets up the manufacturers using the YAML file.
	 * @param $yaml string The path to the manufacturers YAML file
	 */
	public static function setupManufacturers ($yaml) {
		Setup::progress("Setting up Manufacturers...");
		
		$data = Setup::loadYAML($yaml);
		
		foreach ($data as $mfgname => $logos) {
			Setup::progress(" - Adding manufacturer ".$mfgname, true);
			$manufacturer = new Manufacturer();
			$manufacturer->setName($mfgname);
		
			PartKeepr::getEM()->persist($manufacturer);
		
			foreach ($logos as $logo) {
				$mfglogo = new ManufacturerICLogo();
				$mfglogo->setManufacturer($manufacturer);
				$mfglogo->replace("../setup/data/manufacturers/images/".$logo);
				$mfglogo->setOriginalFilename($logo);
		
				PartKeepr::getEM()->persist($mfglogo);
			}
		}
	}
}
