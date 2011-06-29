<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation;

class StorageLocationSetup {
	/**
	 * Holds the migrated storage locations
	 * @var array
	 */
	private static $migratedStorageLocations = array();
	
	/**
	 * Migrates the storage locations
	 */
	public static function migrateStorageLocations () {
		Setup::progress("Migrating storage locations");
		
		$r = mysql_query("SELECT * FROM storeloc");
	
		while ($store = mysql_fetch_assoc($r)) {
			Setup::progress(" - Migrating storage location ".$store["name"], true);
			
			$oStorageLocation = new StorageLocation();
			$oStorageLocation->setName(Setup::convertText($store["name"]));
			PartKeepr::getEM()->persist($oStorageLocation);
			StorageLocationSetup::$migratedStorageLocations[$store["id"]] = $oStorageLocation;
		}
	}
	
	/**
	 * Returns the storage location by id
	 * @param int $id
	 */
	public static function getMigratedStorageLocation ($id) {
		return StorageLocationSetup::$migratedStorageLocations[$id];
	}
}
