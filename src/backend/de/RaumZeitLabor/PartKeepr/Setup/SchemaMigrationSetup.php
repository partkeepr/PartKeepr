<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	Doctrine\DBAL\Migrations\Migration,
	Doctrine\DBAL\Migrations\Configuration\YamlConfiguration;
/**
 * Updates (or creates) the database schema
 */
class SchemaMigrationSetup extends AbstractSetup {
	public function run () {
		$configuration = new YamlConfiguration($this->entityManager->getConnection());
		
		$baseDir = dirname(dirname(dirname(dirname(dirname(dirname(__DIR__))))));
		$configuration->load($baseDir . "/migrations.yml");
		
		$migration = new Migration($configuration);
		$migration->migrate();
		$this->logMessage("Database Schema migrated to the latest version");
	}
}