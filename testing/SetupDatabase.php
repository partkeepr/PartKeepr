<?php
namespace PartKeepr\Testing;

use PartKeepr\PartKeepr,
    PartKeepr\Setup\Migration\PartDB\PartDBMigration,
    PartKeepr\Util\Configuration,
    PartKeepr\PartCategory\PartCategoryManager;


use PartKeepr\Setup\Setup;

include("../src/backend/PartKeepr/PartKeepr.php");

PartKeepr::initialize();

$ask = true;
$migration = false;

echo "PartKeepr Setup\n";
echo "Use SetupDatabase.php --help for help\n\n";

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
			echo "* Creates the schema\n";
			echo "* Sets up the basic data\n";
			echo "* Imports data from database partdb (if specified)\n\n";
			echo "Please make sure to enter your database settings in the file config.php.\n";
			echo "Use the file config.php.template as template for your configuration.\n\n";
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
	echo "If you are sure you want to do this, type YES and hit return.\n";

	$fp = fopen('php://stdin', 'r');
	$data = fgets($fp, 1024);

	if ($data !== "YES\n") {
		echo "Aborting.\n";
		die();
	}
	
}

echo "Performing actions...\n";

$setup = new Setup();
$setup->setConsole();
$setup->runCLIChecks();
$setup->run();


if ($migration) {
	if (Configuration::getOption("partkeepr.migration.partdb.hostname", false) === false ||
			Configuration::getOption("partkeepr.migration.partdb.username", false) === false ||
			Configuration::getOption("partkeepr.migration.partdb.password", false) === false ||
			Configuration::getOption("partkeepr.migration.partdb.dbname", false) === false) {
	
		echo "Error migrating from partdb: One or more configuration settings are missing.\n";
		echo "Please make sure that you define the partkeepr.migration.partdb.* keys, as shown in config.php.template\n\n";
		echo "After adjusting the keys, you can safely re-run the setup, even if you already have worked with PartKeepr.\n";
		exit;
	}
	mysql_connect(Configuration::getOption("partkeepr.migration.partdb.hostname"), Configuration::getOption("partkeepr.migration.partdb.username"), Configuration::getOption("partkeepr.migration.partdb.password"));
	mysql_query("SET CHARACTER SET UTF8");
	mysql_query("SET NAMES UTF8");
	mysql_select_db(Configuration::getOption("partkeepr.migration.partdb.dbname"));
	
	$migration = new PartDBMigration();
	$migration->setConsole();
	$migration->run();
}

echo "All done.\n\n";
echo "Use the user 'admin' with password 'admin' to login. Access the frontend using the `frontend` directory.\n";
