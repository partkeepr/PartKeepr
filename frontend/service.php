<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\ServiceManager;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

header("Content-Type: text/html; charset=UTF-8");

PartKeepr::initialize("");

try {
	$request = $_REQUEST;
	$request["parameters"] = json_decode($_REQUEST["parameters"], true);
	
	$response = array();
	$response["status"] = "ok";
	$response["response"] = ServiceManager::call($request);
	
	echo json_encode($response);
	
} catch (de\RaumZeitLabor\PartKeepr\Util\SerializableException $e) {
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