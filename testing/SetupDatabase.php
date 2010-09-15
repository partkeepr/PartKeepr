<?php
namespace de\RaumZeitLabor\PartDB2\Tests;
declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

use de\RaumZeitLabor\PartDB2\Auth\User;
use de\RaumZeitLabor\PartDB2\Footprint\Footprint;
use de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;
use de\RaumZeitLabor\PartDB2\PartDB2;

use de\RaumZeitLabor\PartDB2\Category\Category;
use de\RaumZeitLabor\PartDB2\Category\CategoryManager;
use de\RaumZeitLabor\PartDB2\Category\CategoryManagerService;

PartDB2::initialize();


echo "=)))==========================================\n";
echo "Actions performed by this script:\n";
echo "* Drop the old database INCLUDING ALL DATA\n";
echo "* Creates the schema\n";
echo "* Creates a test user (username/password test)\n";
echo "* Add sample footprint data\n";
echo "=)))==========================================\n";
echo "\n\n";
echo "If you are sure you want to do this, type YES and hit return.\n";

$fp = fopen('php://stdin', 'r');
$data = fgets($fp, 1024);

if ($data !== "YES\n") {
	echo "Aborting.\n";
	die();
}

echo "Performing actions...\n";

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartDB2::getEM());
$classes = array(
  PartDB2::getEM()->getClassMetadata('de\RaumZeitLabor\PartDB2\Auth\User'),
  PartDB2::getEM()->getClassMetadata('de\RaumZeitLabor\PartDB2\Session\Session'),
  PartDB2::getEM()->getClassMetadata('de\RaumZeitLabor\PartDB2\Footprint\Footprint'),
  PartDB2::getEM()->getClassMetadata('de\RaumZeitLabor\PartDB2\Category\Category')
);
$tool->dropSchema($classes);
$tool->createSchema($classes);

/* Create initial test user */
$user = new User();
$user->setUsername("test");
$user->setPassword("test");

PartDB2::getEM()->persist($user);

/* Create footprints */
$footprints = array(
  array('id'=>1,'name'=>'TO220'),
  array('id'=>2,'name'=>'TO220-3'),
  array('id'=>3,'name'=>'TO92-3'),
  array('id'=>4,'name'=>'RM2,5'),
  array('id'=>5,'name'=>'RM5'),
  array('id'=>6,'name'=>'RM7,5'),
  array('id'=>7,'name'=>'RM10'),
  array('id'=>8,'name'=>'ohne'),
  array('id'=>9,'name'=>'TO220-7'),
  array('id'=>10,'name'=>'TO3-3'),
  array('id'=>11,'name'=>'TO3-4'),
  array('id'=>12,'name'=>'DIP8'),
  array('id'=>13,'name'=>'DIP14'),
  array('id'=>14,'name'=>'DIP16'),
  array('id'=>15,'name'=>'DIP18'),
  array('id'=>16,'name'=>'DIP20'),
  array('id'=>17,'name'=>'DIP6'),
  array('id'=>18,'name'=>'TO92-3'),
  array('id'=>19,'name'=>'TO39'),
  array('id'=>20,'name'=>'TO18'),
  array('id'=>21,'name'=>'TO126'),
  array('id'=>22,'name'=>'TO18'),
  array('id'=>23,'name'=>'DIP28'),
  array('id'=>24,'name'=>'SOP28'),
  array('id'=>25,'name'=>'SOIC20'),
  array('id'=>26,'name'=>'P-DSO-20'),
  array('id'=>27,'name'=>'SOIC16'),
  array('id'=>28,'name'=>'SOIC14'),
  array('id'=>29,'name'=>'P-SOJ-20')
);

foreach ($footprints as $sFootprint) {
	$footprint = new Footprint();
	$footprint->setFootprint($sFootprint["name"]);

	PartDB2::getEM()->persist($footprint);
	
}

PartDB2::getEM()->flush();

echo "All done.\n";

?>