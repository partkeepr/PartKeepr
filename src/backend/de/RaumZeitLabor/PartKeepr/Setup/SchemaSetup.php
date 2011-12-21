<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\PartKeepr;
/**
 * Updates (or creates) the database schema
 */
class SchemaSetup extends AbstractSetup {
	public function run () {
		$tool = new \Doctrine\ORM\Tools\SchemaTool($this->entityManager);
		$classes = PartKeepr::getClassMetaData();
		$tool->updateSchema($classes);
		$this->logMessage("Database Schema created/updated");
	}
}