<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Unit\Unit,
	de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup;

class UnitSetup {
	/**
	 * Sets up the default units
	 * @throws \Exception
	 */
	public static function setupUnits () {
		Setup::progress("Setting up Units...");
		$data = Setup::loadYAML("../setup/data/units.yaml");
		
		$data = \Symfony\Component\Yaml\Yaml::load("../setup/data/units.yaml");
		
		$aUnits = array();
		
		foreach ($data as $unitName => $data) {
			Setup::progress(" - Adding unit ".$unitName, true);
			$unit = new Unit();
			$unit->setName($unitName);
			$unit->setSymbol($data["symbol"]);
		
			if (array_key_exists("prefixes", $data)) {
				if (!is_array($data["prefixes"])) {
					throw new \Exception($unitName." doesn't contain a prefix list, or the prefix list is not an array.");
				}
				
				foreach ($data["prefixes"] as $prefix) {
					$siPrefix = SiPrefixSetup::getSiPrefixBySymbol($prefix);
					if ($siPrefix === false) {
						throw new \Exception("Unable to find prefix ".$prefix);
					}
					$unit->getPrefixes()->add($siPrefix);
				}
			}
		
			PartKeepr::getEM()->persist($unit);
		}
	}
}
