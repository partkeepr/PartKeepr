<?php
namespace PartKeepr\Setup;

use PartKeepr\PartKeepr;
/**
 * Updates (or creates) the database schema
 */
class SchemaSetup extends AbstractSetup {
	public function run () {
		$tool = new \Doctrine\ORM\Tools\SchemaTool($this->entityManager);
		$classes = PartKeepr::getClassMetaData();
		$tool->updateSchema($classes, true);
		$this->logMessage("Database Schema created/updated");
	}
	
	/**
	 * Checks if the specified database has UTF-8 encoding
	 * @param $connection The DBAL connection
	 * @param string $dbname
	 */
	public static function mysqlHasUTF8Encoding ($connection, $dbname) {
		$statement = $connection->prepare("SELECT default_character_set_name FROM information_schema.SCHEMATA S WHERE schema_name = :schema");
		$statement->bindValue("schema", $dbname);
		$statement->execute();
	
		$encoding = $statement->fetchColumn(0);
		
		if ($encoding != "utf8") {
			return false;
		} else {
			return true;
		}
	}
}