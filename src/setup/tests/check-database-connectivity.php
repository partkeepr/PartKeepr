<?php
require_once 'Doctrine/Common/ClassLoader.php';

use Doctrine\Common\ClassLoader;

$classLoader = new ClassLoader('Doctrine\DBAL');
$classLoader->register(); // register on SPL autoload stack

$classLoader = new ClassLoader('Doctrine\Common');
$classLoader->register(); // register on SPL autoload stack


$config = new \Doctrine\DBAL\Configuration();


switch ($_REQUEST["driver"]) {
	case "mysql":
		$driver = "pdo_mysql";
		break;
	default:
		echo json_encode(array("error" => true, "errormessage" => "Unknown driver ".$_REQUEST["driver"]));
		exit;
		break;
}

$connectionOptions = array(
		'driver' => 	$driver,
		'dbname' => 	$_REQUEST["dbname"],
		'user' => 		$_REQUEST["user"],
		'password' => 	$_REQUEST["password"],
		'host' => 		$_REQUEST["host"]
);


$conn = \Doctrine\DBAL\DriverManager::getConnection($connectionOptions, $config);
try {
	$conn->connect();
} catch (\PDOException $e) {
	echo json_encode(array("error" => true, "errormessage" => "There was an error connecting to the database:<br/><code>".$e->getMessage()."</code>"));
	exit;
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "errormessage" => "An unknown error occured. The error is: <code>".$e->getMessage()."</code>"));
	exit;
}

echo json_encode(array("error" => false));
