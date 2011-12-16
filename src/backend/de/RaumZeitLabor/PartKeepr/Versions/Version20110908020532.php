<?php

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

use de\RaumZeitLabor\PartKeepr\PartKeepr;

class Version20110908020532 extends AbstractMigration
{
    public function up(Schema $schema)
    {
       $tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
    	
    	$classes = array(
    		'de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory',
                'de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategory'
    	);
    	
    	$aClasses = array();
    	
    	foreach ($classes as $class) {
    		$aClasses[] = PartKeepr::getEM()->getClassMetadata($class);
    	}
    	
    	$tool->updateSchema($aClasses, true);
    }

    public function down(Schema $schema)
    {
        
    }
}
