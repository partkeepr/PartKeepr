<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Distributor\Distributor,
	de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup;

class DistributorSetup {
	/**
	 * Holds the migrated distributors for easy access by id
	 * @var array
	 */
	private static $migratedDistributors = array();
	
	/**
	 * Migrates the existing distributors
	 */
	public static function migrateDistributors () {
		Setup::progress("Migrating distributors...");
		
		$r = mysql_query("SELECT * FROM suppliers");
		while ($supplier = mysql_fetch_assoc($r)) {
			Setup::progress(" - Migrating distributor ".$supplier["name"], true);
			$distributor = new Distributor();
			$distributor->setName($supplier["name"]);
		
			DistributorSetup::$migratedDistributors[$supplier["id"]] = $distributor;
			PartKeepr::getEM()->persist($distributor);
		}
		
	}
	
	/**
	 * Returns the migrated distributor by it's ID from the old partdb
	 * @param int $id The distributor's ID from the old partdb
	 */
	public static function getMigratedDistributor ($id) {
		return DistributorSetup::$migratedDistributors[$id];
	}
}
