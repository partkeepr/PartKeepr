<?php
namespace de\RaumZeitLabor\PartKeepr\Tests;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Util\Configuration;


use de\RaumZeitLabor\PartKeepr\Setup\Setup;

use de\RaumZeitLabor\PartKeepr\Setup\FootprintSetup;
use de\RaumZeitLabor\PartKeepr\Setup\PartCategorySetup;
use de\RaumZeitLabor\PartKeepr\Setup\StorageLocationSetup;
use de\RaumZeitLabor\PartKeepr\Setup\SiPrefixSetup;
use de\RaumZeitLabor\PartKeepr\Setup\UnitSetup;
use de\RaumZeitLabor\PartKeepr\Setup\ManufacturerSetup;
use de\RaumZeitLabor\PartKeepr\Setup\DistributorSetup;
use de\RaumZeitLabor\PartKeepr\Setup\PartSetup;

declare(encoding = 'UTF-8');

include("../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

/* Old things */
use de\RaumZeitLabor\PartKeepr\User\User;
use de\RaumZeitLabor\PartKeepr\Part\PartUnit;
use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory;
use de\RaumZeitLabor\PartKeepr\Part\Part;
use de\RaumZeitLabor\PartKeepr\Setup\PartUnitSetup;
use de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation;
use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager;
use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManagerService;

use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;
use de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer;
use de\RaumZeitLabor\PartKeepr\Distributor\Distributor;



PartKeepr::initialize();

$setup = new Setup();
$setup->run();

$ask = true;
$migration = false;

foreach ($_SERVER["argv"] as $arg) {
	switch ($arg) {
		case "--yes":
			$ask = false;
			break;
		case "--migrate":
		case "--migration":
			$migration = true;
			break;
		case "--verbose":
			Setup::setVerbose(true);
			break;
		case "--help":
			echo "Usage: SetupDatabase.php [OPTION]\n\n";
			echo "Actions performed by this script:\n";
			echo "* Drop the tables contained in the database for PartKeepr INCLUDING ALL DATA\n";
			echo "* Creates the schema\n";
			echo "* Creates an admin user\n";
			echo "* Imports data from database partdb\n\n";
			echo "Arguments:\n";
			echo " --yes			Assumes 'YES' for the security prompt. USE WITH CAUTION!\n";
			echo " --migrate		Also migrates the data from the old PartDB database\n";
			echo " --verbose		Outputs verbose information about the setup process\n";
			echo " --help			Displays this help\n\n";

			die;
			break;
	}
}

if ($ask) {
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
@mkdir("../data/files");
chmod("../data/images", 0777);
chmod("../data/files", 0777);

$tool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());

$classes = PartKeepr::getClassMetaData();

Setup::progress("Dropping schema `".Configuration::getOption("partkeepr.database.dbname")."`");
$tool->dropDatabase($classes);
Setup::progress("Creating schema `".Configuration::getOption("partkeepr.database.dbname")."`");
$tool->createSchema($classes);

Setup::progress("Setting up initial admin user");
/* Create initial test user */
$user = new User();
$user->setUsername("admin");
$user->setPassword("admin");
$user->setAdmin(true);
PartKeepr::getEM()->persist($user);

PartUnitSetup::setupPartUnits();
PartKeepr::getEM()->flush();

/* Create footprints */

$newFootprints = array();
$newCategories = array();

if ($migration) {
	mysql_connect("localhost", "partdb", "partdb");
	mysql_query("SET CHARACTER SET UTF8");
	mysql_query("SET NAMES UTF8");
	mysql_select_db("partdb");
}

FootprintSetup::setupRootNode();
FootprintSetup::importFootprintData();
PartKeepr::getEM()->flush();

if ($migration) {
	FootprintSetup::migrateFootprints();
	PartKeepr::getEM()->flush();
}

PartCategorySetup::setupRootCategory();

if ($migration) {
	PartCategorySetup::migrateCategories();
}


if ($migration) {
	StorageLocationSetup::migrateStorageLocations();
	PartKeepr::getEM()->flush();
}


/* Add Si-Prefixes */
SiPrefixSetup::setupSiPrefixes();
PartKeepr::getEM()->flush();



/* Add units */
UnitSetup::setupUnits();
PartKeepr::getEM()->flush();

/* Add Manufacturers */
ManufacturerSetup::setupManufacturers();
PartKeepr::getEM()->flush();

if ($migration) {
	DistributorSetup::migrateDistributors();
	PartKeepr::getEM()->flush();
}

if ($migration) {
	PartSetup::migrateParts();
	PartKeepr::getEM()->flush();
}

echo "All done.\n\n";
echo "You need to execute `php doctrine.php migrations:migrate` in the PartKeepr root directory to apply migrations now.\n\n";
echo "Use the user 'admin' with password 'admin' to login. Access the frontend using the `frontend` directory.\n";

apc_clear_cache();
apc_clear_cache("user");


?>
