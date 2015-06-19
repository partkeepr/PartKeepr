<?php
namespace PartKeepr\Setup\Migration\PartDB;

use	PartKeepr\PartKeepr,
	\PartKeepr\FootprintBundle\Entity\Footprint,
	\PartKeepr\FootprintBundle\Entity\FootprintManager,
	\PartKeepr\FootprintBundle\Entity\FootprintCategoryManager,
	PartKeepr\Setup\FootprintSetup;

class FootprintMigration extends FootprintSetup {
	/**
	 * Migrates the existing footprints
	 */
	public function run () {
		$count = 0;
		$skipped = 0;
		
		// Get or create node for the imported footprints
		$footprintCategory = FootprintSetup::addFootprintPath(explode("/", "Imported Footprints"), FootprintCategoryManager::getInstance()->getRootNode());
		
		$r = mysql_query("SELECT * FROM footprints");
		
		while ($sFootprint = mysql_fetch_assoc($r)) {
			$name = PartDBMigration::convertText($sFootprint["name"]);
			
			try {
				FootprintManager::getInstance()->getFootprintByName($name);
				$skipped++;
			} catch (\Exception $e) {
				$footprint = new Footprint();
				$footprint->setName($name);
				
				$footprint->setCategory($footprintCategory->getNode());
				
				$this->entityManager->persist($footprint);
				$count++;
			}
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Migrated %d footprints, skipped %d because they already exist", $count, $skipped));
	}
}
