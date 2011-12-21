<?php
/**
 * Tests the connection to the database.
 */
include("../../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use Doctrine\Common\ClassLoader;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Setup\Setup;

PartKeepr::initializeClassLoaders();

$config = new \Doctrine\DBAL\Configuration();

/**
 * Check which driver we are going to use, and set the connection parameters accordingly.
 */
try {
	$onnectionOptions = Setup::setDatabaseConfigurationFromRequest();
	$connectionOptions = PartKeepr::createConnectionOptionsFromConfig();
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "errormessage" => $e->getMessage()));
	exit;
}

$conn = \Doctrine\DBAL\DriverManager::getConnection($connectionOptions, $config);

try {
	$conn->connect();
} catch (\PDOException $e) {
	$additionalMessage = getPlatformSpecificErrorMessage($_REQUEST["driver"], $e->getCode());
	
	echo json_encode(array("error" => true, "errormessage" => "There was an error connecting to the database:<br/><code>".$e->getMessage()."</code>".$additionalMessage));
	exit;
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "errormessage" => "An unknown error occured. The error is: <code>".$e->getMessage()."</code>"));
	exit;
}

/* Run additional tests */
switch ($_REQUEST["driver"]) {
	case "mysql":
		performAdditionalMySQLTests($conn, $_REQUEST["dbname"]);
		break;
}

function performAdditionalMySQLTests ($connection, $dbname) {
	$statement = $connection->prepare("SELECT default_character_set_name FROM information_schema.SCHEMATA S WHERE schema_name = :schema");
	$statement->bindValue("schema", $dbname);
	$statement->execute();
	
	$encoding = $statement->fetchColumn(0);
	
	if ($encoding != "utf8") {
		echo json_encode(array("error" => true, "errormessage" => "Your database doesn't have the proper encoding. Please change it using the following SQL statement: <br/><br/><code>ALTER DATABASE ".$dbname." CHARACTER SET utf8;</code>"));
		exit;
	}
	
}
echo json_encode(array("error" => false));

/**
 * Returns error messages for a specific platform and PDOException code
 * @param string $platform
 * @param int $code
 * @return An error message, or "" if no message is available.
 */
function getPlatformSpecificErrorMessage($platform, $code) {
	switch ($platform) {
		case "mysql":
			return getMySQLSpecificErrorMessage($code);
			break;
		default:
			return "";
	}
}

/**
 * Returns error messages for a specific PDOException code.
 * @param int $code
 * @return An error message, or "" if no message is available.
 */
function getMySQLSpecificErrorMessage ($code) {
	switch ($code) {
		case 1044:
			return "<br/><br/>You need to grant permissions to the database, or you haven't created the database yet.";
			break;
		case 1045:
			return "<br/><br/>It seems that you have mistyped your username or password.";
			break;
		case 2013:
			return "<br/><br/>This error is an indication that the database host you have specified is not reachable, or that your database runs on a different port.";
			break;
		default:
			return "";
	}
}