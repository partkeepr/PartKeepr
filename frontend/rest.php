<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr, 
	de\RaumZeitLabor\PartKeepr\Service\ServiceManager;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

header("Content-Type: text/html; charset=UTF-8");
header("Cache-Control: no-cache, must-revalidate");
header("Access-Control-Allow-Origin: *");
PartKeepr::initialize("");

/**
 * This script dispatches the request to the ServiceManager.
 * 
 * You have a few options how to define which service and call you wish to request:
 *
 * 
 * DIRECT SPECIFICATION
 * ====================
 * 
 * You have a few options to specify the call directly:
 * 
 * - You can specify the call via a HTTP header. Set the header named "call" to the call you wish to execute.
 * - You can specify the call via a HTTP POST or GET variable. Set the variable named "call" to the call you wish
 *   to execute.
 * - You can specify the call as second parameter in the URL, e.g. if your service is "Part" and your call is
 *   "getParts", you would invoke rest.php/Part/getParts
 *   
 * If you specify the call, the ServiceManager ignores the HTTP verb.
 * 
 * SERVICE
 * =======
 * 
 * The service is specified via an URL attached to the rest.php file. Example:
 * 
 * rest.php/Part
 * 
 * /Part specifies that you wish to call the Part service. The service manager automatically extends the short "Part"
 * name to the class de\RaumZeitLabor\PartKeepr\Part\PartService.
 * 
 * REST
 * ====
 * 
 * Each service which implements the RESTful interface operates on the POST, PUT, GET and DELETE
 * HTTP verbs. Those are mapped to the get(), create(), update() and destroy() methods.
 * 
 */
try {
	$response = array();
	$response["status"] = "ok";
	$response["success"] = true;
	$response["response"] = ServiceManager::call();
	
	echo json_encode($response);
	
} catch (\de\RaumZeitLabor\PartKeepr\Util\SerializableException $e) {
	header('HTTP/1.0 400 Exception', false, 400);
	$response = array();
	$response["status"] = "error";
	$response["success"] = false;
	$response["exception"] = $e->serialize();
	echo json_encode($response);
} catch (\Exception $e) {
	header('HTTP/1.0 400 Exception', false, 400);
	$response = array();
	$response["status"] = "systemerror";
	$response["success"] = false;
	$response["exception"] = array(
		"message" => $e->getMessage(),
		"exception" => get_class($e),
		"backtrace" => $e->getTraceAsString());
	
	echo json_encode($response);
}
