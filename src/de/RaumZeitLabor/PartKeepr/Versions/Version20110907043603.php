<?php

namespace DoctrineMigrations;

use de\RaumZeitLabor\PartKeepr\PartKeepr;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20110907043603 extends AbstractMigration
{
    public function up(Schema $schema)
    {
    	$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
    	
    	$classes = array(
    		'de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationImage'
    	);
    	
    	$aClasses = array();
    	
    	foreach ($classes as $class) {
    		$aClasses[] = PartKeepr::getEM()->getClassMetadata($class);
    	}
    	
    	$tool->updateSchema($aClasses, true);

    }

    public function down(Schema $schema)
    {
    	$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
    	
    	$classes = array(
    		'de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationImage'
    	);
    	
    	$aClasses = array();
    	
    	foreach ($classes as $class) {
    		$aClasses[] = PartKeepr::getEM()->getClassMetadata($class);
    	}
    	
    	$tool->dropSchema($aClasses);

    }
}
