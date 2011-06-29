<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit;

class PartUnitSetup {
	/**
	 * Holds the default unit
	 * @var object
	 */
	private static $defaultUnit;
	
	/**
	 * Sets up the default part unit
	 */
	public static function setupPartUnits () {
		Setup::progress("Setting up default part unit `Pieces`");
		$partUnit = new PartUnit();
		$partUnit->setName(PartKeepr::i18n("Pieces"));
		$partUnit->setShortName(PartKeepr::i18n("pcs"));
		$partUnit->setDefault(true);
		
		PartUnitSetup::$defaultUnit = $partUnit;
		
		PartKeepr::getEM()->persist($partUnit);		
	}
	
	/**
	 * Returns the default part unit
	 * @return PartUnit The part unit
	 */
	public static function getDefaultPartUnit () {
		return PartUnitSetup::$defaultUnit;
	}
}
