<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;

use de\RaumZeitLabor\PartKeepr\Service\ServiceManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

include("../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");

ServiceManager::sendHeaders();

$timingStart = microtime(true);

try {
	$request = $_REQUEST;
	
	if (array_key_exists("parameters", $_REQUEST)) {
		$request["parameters"] = json_decode($_REQUEST["parameters"], true);
	} else {
		$request["parameters"] = $_REQUEST;
	}
	
	
	$response = array();
	$response["status"] = "ok";
	$response["response"] = ServiceManager::call($request);
	$response["timing"] = microtime(true) - $timingStart;
	
} catch (de\RaumZeitLabor\PartKeepr\Util\SerializableException $e) {
	$response = array();
	$response["status"] = "error";
	$response["exception"] = $e->serialize();
	$response["timing"] = microtime(true) - $timingStart;
	
} catch (\Exception $e) {
	$response = array();
	$response["status"] = "systemerror";
	$response["exception"] = get_class($e);
	$response["message"] = $e->getMessage();
	$response["backtrace"] = $e->getTraceAsString();
	$response["timing"] = microtime(true) - $timingStart;
}

if (array_key_exists("type", $_REQUEST) && strtolower($_REQUEST["type"]) == "jsonp") {
	if (array_key_exists("callback", $_REQUEST)) {
		header('Content-Type: text/javascript');
		
		if (array_key_exists("key", $_REQUEST)) {
			$response["key"] = $_REQUEST["key"];
		}
		
		echo $_REQUEST["callback"]."(".json_encode($response).")";
	}
} else {
	header('Content-Type: application/json');
	echo json_encode($response);
}