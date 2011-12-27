<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Setup\Setup;

set_error_handler(create_function('$a, $b, $c, $d', 'throw new ErrorException($b, 0, $a, $c, $d);'), E_ALL);


include("../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");
PartKeepr::initializeClassLoaders();

try {
	Setup::setDatabaseConfigurationFromRequest();
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "errormessage" => $e->getMessage()));
	exit;
}

PartKeepr::initializeDoctrine();

$setup = new Setup();

try {
	$setup->runStep($_REQUEST["step"]);
	echo json_encode(array("error" => false));
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "errormessage" => "An unexpected error occured during installation. The error message was:<br/><code>".$e->getMessage()."</code> and happened in <code>".$e->getFile().":".$e->getLine() ));
	exit;
}
