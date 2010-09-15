<?php
namespace de\RaumZeitLabor\PartDB2\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\ServiceManager;
use de\RaumZeitLabor\PartDB2\PartDB2;

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

PartDB2::initialize("");

try {
	$request = $_REQUEST;
	$request["parameters"] = json_decode($_REQUEST["parameters"], true);
	
	$response = array();
	$response["status"] = "ok";
	$response["response"] = ServiceManager::call($request);
	
	echo json_encode($response);
	
} catch (de\RaumZeitLabor\PartDB2\Util\SerializableException $e) {
	$response = array();
	$response["status"] = "error";
	$response["exception"] = $e->serialize();
	
	echo json_encode($response);
} catch (\Exception $e) {
	$response = array();
	$response["status"] = "systemerror";
	$response["exception"] = get_class($e);
	$response["message"] = $e->getMessage();
	$response["backtrace"] = $e->getTraceAsString();
	
	echo json_encode($response);
}
?>