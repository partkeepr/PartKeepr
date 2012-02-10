<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Setup\Setup,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException;

set_error_handler(create_function('$a, $b, $c, $d', 'throw new ErrorException($b, 0, $a, $c, $d);'), E_ALL);


include("../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");
PartKeepr::initializeClassLoaders();

try {
	Setup::setDatabaseConfigurationFromRequest();
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "message" => $e->getMessage()));
	exit;
}

PartKeepr::initializeDoctrine();

$setup = new Setup();

try {
	/**
	 * Workaround for the footprint setup to allow long downloads pass through
	 */
	if ($_REQUEST["step"] == "footprint") {
		@set_time_limit(0);
	}
	$setup->runStep($_REQUEST["step"]);
	echo json_encode(array("error" => false));
} catch (SerializableException $e) {
	$error = $e->serialize();
	$error["error"] = true;
	echo json_encode($error);
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "message" => "An unexpected error occured during installation. The error message was:<br/><code>".$e->getMessage()."</code> and happened in <code>".$e->getFile().":".$e->getLine() ));
	exit;
}
