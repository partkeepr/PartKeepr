<?php
namespace PartKeepr\Setup\Migration\PartDB;

use	PartKeepr\PartKeepr,
	PartKeepr\DistributorBundle\Entity\Distributor,
	PartKeepr\Distributor\DistributorManager,
	PartKeepr\Setup\AbstractSetup;

class DistributorMigration extends AbstractSetup {
	/**
	 * Migrates the existing distributors
	 */
	public function run () {
		$count = 0;
		$skipped = 0;
		$r = mysql_query("SELECT * FROM suppliers");
		while ($supplier = mysql_fetch_assoc($r)) {
			$name = PartDBMigration::convertText($supplier["name"]);
			try {
				$distributor = DistributorManager::getInstance()->getDistributorByName($name);
				$skipped++;
			} catch (\Exception $e) {
				$distributor = new Distributor();
				$distributor->setName($name);
				
				$this->entityManager->persist($distributor);
				$count++;
			}
		}
		
		$this->entityManager->flush();
		$this->logMessage(sprintf("Migrated %d distributors, skipped %d because they already exist", $count, $skipped));
	}
}
