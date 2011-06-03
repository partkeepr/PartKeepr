<?php
namespace de\RaumZeitLabor\PartDB2\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2, 
	de\RaumZeitLabor\PartDB2\Service\ServiceManager;

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");
PartDB2::initialize("");

try {
	$response = array();
	$response["status"] = "ok";
	$response["success"] = true;
	$response["response"] = ServiceManager::call();
	
	echo json_encode($response);
	
} catch (\de\RaumZeitLabor\PartDB2\Util\SerializableException $e) {
	header('HTTP/1.0 400 Exception', false, 400);
	$response = array();
	$response["status"] = "error";
	$response["exception"] = $e->serialize();
	echo json_encode($response);
} catch (\Exception $e) {
	header('HTTP/1.0 400 Exception', false, 400);
	$response = array();
	$response["status"] = "systemerror";
	$response["exception"] = array(
		"message" => $e->getMessage(),
		"exception" => get_class($e),
		"backtrace" => $e->getTraceAsString());
	
	echo json_encode($response);
}
