<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\ServiceManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");

ServiceManager::sendHeaders();

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
	
} catch (de\RaumZeitLabor\PartKeepr\Util\SerializableException $e) {
	$response = array();
	$response["status"] = "error";
	$response["exception"] = $e->serialize();
	
} catch (\Exception $e) {
	$response = array();
	$response["status"] = "systemerror";
	$response["exception"] = get_class($e);
	$response["message"] = $e->getMessage();
	$response["backtrace"] = $e->getTraceAsString();
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