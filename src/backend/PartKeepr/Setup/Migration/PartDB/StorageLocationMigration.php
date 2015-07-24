<?php
namespace PartKeepr\Setup\Migration\PartDB;

use	PartKeepr\PartKeepr,
	PartKeepr\StorageLocationBundle\Entity\StorageLocation,
	PartKeepr\StorageLocation\StorageLocationManager,
	PartKeepr\Setup\AbstractSetup;

class StorageLocationMigration extends AbstractSetup {
	/**
	 * Holds the migrated storage locations
	 * @var array
	 */
	private static $migratedStorageLocations = array();
	
	/**
	 * Migrates the storage locations
	 */
	public function run () {
		$count = 0;
		$skipped = 0;
		
		$r = mysql_query("SELECT * FROM storeloc");
	
		while ($store = mysql_fetch_assoc($r)) {
			$name = PartDBMigration::convertText($store["name"]);
			try {
				$storageLocation = StorageLocationManager::getInstance()->getStorageLocationByName($name);
				$skipped++;
			} catch (\Exception $e) {
				$oStorageLocation = new StorageLocation();
				$oStorageLocation->setName($name);
				
				$this->entityManager->persist($oStorageLocation);
				$count++;
			}
		}

		$this->entityManager->flush();
		$this->logMessage(sprintf("Migrated %d storage locations, skipped %d because they already exist", $count, $skipped));

	}
	
	/**
	 * Returns the storage location by id
	 * @param int $id
	 */
	public static function getMigratedStorageLocation ($id) {
		return StorageLocationSetup::$migratedStorageLocations[$id];
	}
}
