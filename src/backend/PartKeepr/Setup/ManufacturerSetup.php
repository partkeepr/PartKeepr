<?php
namespace PartKeepr\Setup;

use	PartKeepr\PartKeepr,
	PartKeepr\ManufacturerBundle\Entity\Manufacturer,
	PartKeepr\Manufacturer\ManufacturerManager,
	PartKeepr\ManufacturerBundle\Entity\ManufacturerICLogo,
	PartKeepr\Setup\SiPrefixSetup;

/**
 * Sets up the manufacturers
 */
class ManufacturerSetup extends AbstractSetup {
	
	const MANUFACTURER_PATH 	  = "../setup-data/manufacturers/";
	const MANUFACTURER_FILE 	  = "../setup-data/manufacturers/manufacturers.yaml";
	
	public function run () {
		$this->setupManufacturers();
	}
	
	/**
	 * Sets up the manufacturers using the YAML file.
	 * @param $yaml string The path to the manufacturers YAML file
	 */
	public function setupManufacturers () {
		$count=0;
		$skipped=0;
		$data = Setup::loadYAML(self::MANUFACTURER_FILE);
		
		foreach ($data as $mfgname => $logos) {
			try {
				ManufacturerManager::getInstance()->getManufacturerByName($mfgname);
				$skipped++;
			} catch (\Exception $e) {
				$manufacturer = new Manufacturer();
				$manufacturer->setName($mfgname);
				
				$this->entityManager->persist($manufacturer);
				
				foreach ($logos as $logo) {
					$mfglogo = new ManufacturerICLogo();
					$mfglogo->setManufacturer($manufacturer);
					$mfglogo->replace(self::MANUFACTURER_PATH . "images/". $logo);
					$mfglogo->setOriginalFilename($logo);
				
					$this->entityManager->persist($mfglogo);
				}
				$count++;
			}
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Imported %d Manufacturers, skipped %d because they already exist", $count, $skipped));
	}
}
