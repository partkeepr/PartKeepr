<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;
use de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Unit\Unit;

use de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix;

declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\User\User;
use de\RaumZeitLabor\PartKeepr\Footprint\Footprint;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Part\PartUnit;
use de\RaumZeitLabor\PartKeepr\Category\Category;
use de\RaumZeitLabor\PartKeepr\Part\Part;
use de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation;
use de\RaumZeitLabor\PartKeepr\Stock\StockEntry;
use de\RaumZeitLabor\PartKeepr\Category\CategoryManager;
use de\RaumZeitLabor\PartKeepr\Category\CategoryManagerService;

use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;
use de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer;
use de\RaumZeitLabor\PartKeepr\Distributor\Distributor;

use de\RaumZeitLabor\PartKeepr\Part\PartDistributor;
use de\RaumZeitLabor\PartKeepr\Part\PartManufacturer;

PartKeepr::initialize();


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

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());

$classes = PartKeepr::getClassMetaData();

$tool->dropDatabase($classes);
$tool->createSchema($classes);

/* Create initial test user */
$user = new User();
$user->setUsername("test");
$user->setPassword("test");
$user->setAdmin(true);
PartKeepr::getEM()->persist($user);

/* Create footprints */

$newFootprints = array();
$newCategories = array();

mysql_connect("localhost", "partdb", "partdb");
mysql_select_db("partdb");

$partUnit = new PartUnit();
$partUnit->setName(PartKeepr::i18n("Pieces"));
$partUnit->setShortName(PartKeepr::i18n("pcs"));
$partUnit->setDefault(true);

PartKeepr::getEM()->persist($partUnit);
PartKeepr::getEM()->flush();

echo "Creating footprints from SetupData/footprints.php\n";

$r = mysql_query("SELECT * FROM footprints");

while ($sFootprint = mysql_fetch_assoc($r)) {
	$footprint = new Footprint();
	$footprint->setName(convertText($sFootprint["name"]));

	echo " Adding footprint ".$sFootprint["name"]."\r";
	PartKeepr::getEM()->persist($footprint);
	
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
	PartKeepr::getEM()->persist($oStorageLocation);
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
	PartKeepr::getEM()->persist($prefix);
	
}

PartKeepr::getEM()->flush();

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
	
	PartKeepr::getEM()->persist($unit);
	$aUnits[] = $unit;
	
}

PartKeepr::getEM()->flush();


/* Add manufacturers and IC logos */
$data = \Symfony\Component\Yaml\Yaml::load("../setup/data/manufacturers/manufacturers.yaml");

$aManufacturers = array();
$aDistributors = array();

foreach ($data as $mfgname => $logos) {
	$manufacturer = new Manufacturer();
	$manufacturer->setName($mfgname);
	
	PartKeepr::getEM()->persist($manufacturer);
	$aManufacturers[] = $manufacturer;
	
	foreach ($logos as $logo) {
		$mfglogo = new ManufacturerICLogo();
		$mfglogo->setManufacturer($manufacturer);
		$mfglogo->replace("../setup/data/manufacturers/images/".$logo);
		
		PartKeepr::getEM()->persist($mfglogo);
	}
}

PartKeepr::getEM()->flush();

$r = mysql_query("SELECT * FROM suppliers");
while ($supplier = mysql_fetch_assoc($r)) {
	$distributor = new Distributor();
	$distributor->setName($supplier["name"]);
	
	PartKeepr::getEM()->persist($distributor);
	$aDistributors[$supplier["id"]] = $distributor;
}

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
	
	$oPart->getDistributors()->add(new PartDistributor($oPart, $aDistributors[$part["id_supplier"]]));
	
	//echo "Migrating part ".sprintf("%-40s", $part["name"])."\r";
	PartKeepr::getEM()->persist($oPart);
	
	$oStock = new StockEntry($oPart, $part["instock"]);
	
	$priceQuery = "SELECT AVG(preis) AS preis FROM preise WHERE part_id = ".$part["id"];
	
	$r2 = mysql_query($priceQuery);
	$res = mysql_fetch_assoc($r2);
	
	if ($res) {
		if ($res["preis"] !== null) {
			$oStock->setPrice(floatval($res["preis"]));	
		}
	}
	
	PartKeepr::getEM()->persist($oStock);
	
	/* Add some random parameters */
	
	
	for ($i=0;$i<rand(1,15);$i++) {
		$val = rand(0,999);
		$prefix = $aSiPrefixes[array_rand($aSiPrefixes)];
		
		$oPartParameter = new PartParameter();
		$oPartParameter->setName($aRandomUnitNames[array_rand($aRandomUnitNames)]);
		$oPartParameter->setDescription("Testbeschreibung");
		$oPartParameter->setPart($oPart);
		$oPartParameter->setUnit($aUnits[array_rand($aUnits)]);
		$oPartParameter->setValue($val);
		$oPartParameter->setSiPrefix($prefix);
		PartKeepr::getEM()->persist($oPartParameter);	
	}

	$fc++;

	if ($fc>100) {
		PartKeepr::getEM()->flush();
		$fc=0;
	}
	

}

PartKeepr::getEM()->flush();







echo "All done.\n";

apc_clear_cache();
apc_clear_cache("user");

function convertText ($string) {
	$string = stripslashes($string);
	$string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
	
	return $string;
}
?>
