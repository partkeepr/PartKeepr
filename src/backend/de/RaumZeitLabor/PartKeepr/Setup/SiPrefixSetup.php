<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix;

class SiPrefixSetup {
	
	const SIPREFIX_DATA_FILE = "../setup-data/siprefixes.yaml";
	
	/**
	 * Stores the migrated si prefixes
	 * @var array
	 */
	private static $siPrefixes = array();
	
	/**
	 * Sets up the SI prefixes
	 */
	public static function setupSiPrefixes () {
		Setup::progress("Setting up SI-Prefixes...");
		$data = Setup::loadYAML(self::SIPREFIX_DATA_FILE);
		
		foreach ($data as $prefixName => $data) {
			Setup::progress(" - Adding prefix ".$prefixName, true);
			$prefix = new SiPrefix();
			$prefix->setPrefix($prefixName);
			$prefix->setPower($data["power"]);
			$prefix->setSymbol($data["symbol"]);
		
			self::$siPrefixes[] = $prefix;
			
			PartKeepr::getEM()->persist($prefix);
		}
	}
	
	/**
	 * Returns the SI prefix by symbol
	 * @param string $symbol The symbol to find
	 */
	public static function getSiPrefixBySymbol ($symbol) {
		foreach (self::$siPrefixes as $prefix) {
			if ($prefix->getSymbol() == $symbol) {
				return $prefix;
			}
		}
		
		return false;
	}
}
