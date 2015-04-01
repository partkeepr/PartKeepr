<?php
namespace PartKeepr\Setup;

use	PartKeepr\PartKeepr,
	PartKeepr\Unit\Unit,
	PartKeepr\SiPrefixBundle\Model\SiPrefixManager,
	PartKeepr\Unit\UnitManager,
	PartKeepr\Setup\SiPrefixSetup;

class UnitSetup extends AbstractSetup {
	
	const UNIT_DATA_FILE = "../setup-data/units.yaml";
	
	
	public function run () {
		$this->setupUnits();
	}
	/**
	 * Sets up the default units
	 * @throws \Exception
	 */
	public function setupUnits () {
		$count = 0;
		$skipped = 0;
		$data = Setup::loadYAML(self::UNIT_DATA_FILE);
		
		$aUnits = array();
		
		foreach ($data as $unitName => $unitData) {
			if (UnitManager::getInstance()->unitExists($unitName)) {
				$skipped++;
				continue;
			}
			$unit = new Unit();
			$unit->setName($unitName);
			$unit->setSymbol($unitData["symbol"]);
		
			if (array_key_exists("prefixes", $unitData)) {
				if (!is_array($unitData["prefixes"])) {
					throw new \Exception($unitName." doesn't contain a prefix list, or the prefix list is not an array.");
				}
				
				foreach ($unitData["prefixes"] as $prefix) {
					
					$siPrefix = SiPrefixManager::getInstance()->getSiPrefixBySymbol($prefix);
					if ($siPrefix === false) {
						throw new \Exception("Unable to find prefix ".$prefix);
					}
					$unit->getPrefixes()->add($siPrefix);
				}
			}
		
			PartKeepr::getEM()->persist($unit);
			$count++;
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Imported %d Units, skipped %d because they already exist", $count, $skipped));
	}
	
	
}
