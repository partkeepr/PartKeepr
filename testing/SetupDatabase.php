<?php
namespace de\RaumZeitLabor\PartDB2\Tests;
use de\RaumZeitLabor\PartDB2\PartParameter\PartParameter;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Unit\Unit;

use de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix;

declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

use de\RaumZeitLabor\PartDB2\Auth\User;
use de\RaumZeitLabor\PartDB2\Footprint\Footprint;
use de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;
use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Part\PartUnit;
use de\RaumZeitLabor\PartDB2\Category\Category;
use de\RaumZeitLabor\PartDB2\Part\Part;
use de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation;
use de\RaumZeitLabor\PartDB2\Stock\StockEntry;
use de\RaumZeitLabor\PartDB2\Category\CategoryManager;
use de\RaumZeitLabor\PartDB2\Category\CategoryManagerService;

use de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo;
use de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer;
use de\RaumZeitLabor\PartDB2\Distributor\Distributor;

use de\RaumZeitLabor\PartDB2\Part\PartDistributor;
use de\RaumZeitLabor\PartDB2\Part\PartManufacturer;

PartDB2::initialize();


echo "=)))==========================================\n";
echo "Actions performed by this script:\n";
echo "* Drop the old database INCLUDING ALL DATA\n";
echo "* Creates the schema\n";
echo "* Creates a test user (username/password test)\n";
echo "* Imports data from database partdb\n";
echo "=)))==========================================\n";

if (!($_SERVER["argc"] == 2 && $_SERVER["argv"][1] == "--yes")) {
	echo "\n\n";
	echo "If you are sure you want to do this, type YES and hit return.\n";

	$fp = fopen('php://stdin', 'r');
	$data = fgets($fp, 1024);

	if ($data !== "YES\n") {
		echo "Aborting.\n";
		die();
	}
	
}

echo "Performing actions...\n";

@mkdir("../src/Proxies");
@mkdir("../data");
@mkdir("../data/images");
chmod("../src/Proxies", 0777);
chmod("../data/images", 0777);

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartDB2::getEM());

$classes = PartDB2::getClassMetaData();

$tool->dropDatabase($classes);
$tool->createSchema($classes);

/* Create initial test user */
$user = new User();
$user->setUsername("test");
$user->setPassword("test");

PartDB2::getEM()->persist($user);

/* Create footprints */

$newFootprints = array();
$newCategories = array();

mysql_connect("localhost", "partdb", "partdb");
mysql_select_db("partdb");

$partUnit = new PartUnit();
$partUnit->setName(PartDB2::i18n("Pieces"));
$partUnit->setShortName(PartDB2::i18n("pcs"));
$partUnit->setDefault(true);

PartDB2::getEM()->persist($partUnit);
PartDB2::getEM()->flush();

echo "Creating footprints from SetupData/footprints.php\n";

$r = mysql_query("SELECT * FROM footprints");

while ($sFootprint = mysql_fetch_assoc($r)) {
	$footprint = new Footprint();
	$footprint->setFootprint(convertText($sFootprint["name"]));

	echo " Adding footprint ".$sFootprint["name"]."\r";
	PartDB2::getEM()->persist($footprint);
	
	$newFootprints[$sFootprint["id"]] = $footprint;
}

echo "\n\Creating categories from existing data\n";

$categoryManager = CategoryManager::getInstance();
$categoryManager->ensureRootExists();

/* Pass 1: Create numeric nodes */

$r = mysql_query("SELECT * FROM categories");

$categories = array();

while ($cat = mysql_fetch_assoc($r)) {
	$categories[] = $cat;
}

addCategoryRecursive($categories, 0, $categoryManager->getRootNode());

function addCategoryRecursive ($aCategories, $currentId, $parent) {
	global $newCategories;
	
	foreach ($aCategories as $aCategory) {
		if ($aCategory["parentnode"] == $currentId) {
			echo "Adding ".sprintf("%40s", $aCategory["name"])."\r";			
			$oCategory = new Category();
			$oCategory->setName(convertText($aCategory["name"]));
			$oCategory->setDescription("");
			$oCategory->setParent($parent->getId());
			$category = CategoryManager::getInstance()->addCategory($oCategory);
			
			addCategoryRecursive($aCategories, $aCategory["id"], $category);
			
			$newCategories[$aCategory["id"]] = $oCategory;
		}
	}
	
}

echo "\n";

$r = mysql_query("SELECT * FROM storeloc");

while ($store = mysql_fetch_assoc($r)) {
	$oStorageLocation = new StorageLocation();
	$oStorageLocation->setName(convertText($store["name"]));
	PartDB2::getEM()->persist($oStorageLocation);
	echo "Migrating storage location ".sprintf("%-40s", $store["name"])."\r";
	$newStorageLocations[$store["id"]] = $oStorageLocation;
}

echo "\n";

/* Add Si-Prefixes */
$data = \Symfony\Component\Yaml\Yaml::load("../setup/data/siprefixes.yaml");

$aSiPrefixes = array();

foreach ($data as $prefixName => $data) {
	$prefix = new SiPrefix();
	$prefix->setPrefix($prefixName);
	$prefix->setPower($data["power"]);
	$prefix->setSymbol($data["symbol"]);
	
	$aSiPrefixes[] = $prefix;
	PartDB2::getEM()->persist($prefix);
	
}

PartDB2::getEM()->flush();

/* Add units */
$data = \Symfony\Component\Yaml\Yaml::load("../setup/data/units.yaml");

$aUnits = array();

foreach ($data as $unitName => $data) {
	$unit = new Unit();
	$unit->setName($unitName);
	$unit->setSymbol($data["symbol"]);
	
	if (array_key_exists("prefixes", $data)) {
		if (!is_array($data["prefixes"])) {
			echo "Obacht ".$unitName." ist falsch\n";
		}
		foreach ($data["prefixes"] as $prefix) {
			foreach ($aSiPrefixes as $siPrefix) {
				if ($siPrefix->getSymbol() == $prefix) {
					$unit->getPrefixes()->add($siPrefix);		
				}
			}
		}
	}
	
	PartDB2::getEM()->persist($unit);
	$aUnits[] = $unit;
	
}

PartDB2::getEM()->flush();


/* Add manufacturers and IC logos */
$data = \Symfony\Component\Yaml\Yaml::load("../setup/data/manufacturers/manufacturers.yaml");

$aManufacturers = array();
$aDistributors = array();

foreach ($data as $mfgname => $logos) {
	$manufacturer = new Manufacturer();
	$manufacturer->setName($mfgname);
	
	PartDB2::getEM()->persist($manufacturer);
	$aManufacturers[] = $manufacturer;
	/* Temporary: Add fake distributors */
	
	$distributor = new Distributor();
	$distributor->setName("Distributor ".$mfgname);
	
	PartDB2::getEM()->persist($distributor);
	
	$aDistributors[] = $distributor;
	
	foreach ($logos as $logo) {
		$mfglogo = new ManufacturerICLogo();
		$mfglogo->setManufacturer($manufacturer);
		$mfglogo->replace("../setup/data/manufacturers/images/".$logo);
		
		PartDB2::getEM()->persist($mfglogo);
	}
}

PartDB2::getEM()->flush();

$r = mysql_query("SELECT * FROM parts");

$aRandomUnitNames = array("Spannung", "Strom", "Leitfähigkeit", "Viskosität", "Nessis");

$fc=0;

while ($part = mysql_fetch_assoc($r)) {
	$oPart = new Part();
	$oPart->setName(convertText($part["name"]));
	$oPart->setComment(convertText($part["comment"]));
	$oPart->setFootprint($newFootprints[$part["id_footprint"]]);
	$oPart->setCategory($newCategories[$part["id_category"]]);
	$oPart->setStorageLocation($newStorageLocations[$part["id_storeloc"]]);
	$oPart->setMinStockLevel($part["mininstock"]);
	$oPart->setPartUnit($partUnit);
	for ($i=0;$i<rand(0,15);$i++) {
		$randomManufacturer = rand(0, count($aManufacturers)-1);
		$oPart->getManufacturers()->add(new PartManufacturer($oPart, $aManufacturers[$randomManufacturer]));
	}
	
	for ($i=0;$i<rand(0,15);$i++) {
		$randomDistributor = rand(0, count($aDistributors)-1);
		$oPart->getDistributors()->add(new PartDistributor($oPart, $aDistributors[$randomDistributor]));
	}
	//echo "Migrating part ".sprintf("%-40s", $part["name"])."\r";
	PartDB2::getEM()->persist($oPart);
	
	$oStock = new StockEntry($oPart, $part["instock"]);
	
	$priceQuery = "SELECT AVG(preis) AS preis FROM preise WHERE part_id = ".$part["id"];
	
	$r2 = mysql_query($priceQuery);
	$res = mysql_fetch_assoc($r2);
	
	if ($res) {
		if ($res["preis"] !== null) {
			$oStock->setPrice(floatval($res["preis"]));	
		}
	}
	
	PartDB2::getEM()->persist($oStock);
	
	/* Add some random parameters */
	
	
	for ($i=0;$i<rand(1,15);$i++) {
		$val = rand(0,999) * (pow(10,(rand(-20,20))));
		$oPartParameter = new PartParameter();
		$oPartParameter->setName($aRandomUnitNames[array_rand($aRandomUnitNames)]);
		$oPartParameter->setDescription("Testbeschreibung");
		$oPartParameter->setPart($oPart);
		$oPartParameter->setUnit($aUnits[array_rand($aUnits)]);
		$oPartParameter->setValue($val);
		PartDB2::getEM()->persist($oPartParameter);	
	}

	$fc++;

	if ($fc>100) {
		PartDB2::getEM()->flush();
		$fc=0;
	}
	

}

PartDB2::getEM()->flush();







echo "All done.\n";

apc_clear_cache();
apc_clear_cache("user");

function convertText ($string) {
	$string = stripslashes($string);
	$string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
	
	return $string;
}
?>
