<?php
use PartKeepr\PartKeepr,
	PartKeepr\Service\ServiceManager;

use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;

$loader = require_once __DIR__.'/../app/bootstrap.php.cache';

require_once __DIR__.'/../app/AppKernel.php';

$kernel = new AppKernel('dev', false);
$kernel->loadClassCache();

PartKeepr::initialize("");

ServiceManager::getInstance()->initialize();
ServiceManager::getInstance()->sendHeaders();

$timingStart = microtime(true);

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
 * name to the class PartKeepr\Part\PartService.
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
	$response["response"] = ServiceManager::getInstance()->call();
	$response["timing"] = microtime(true) - $timingStart;
	
	echo json_encode($response);
	
} catch (\PartKeepr\Util\SerializableException $e) {
	header('HTTP/1.0 400 Exception', false, 400);
	$response = array();
	$response["status"] = "error";
	$response["success"] = false;
	$response["exception"] = $e->serialize();
	$response["timing"] = microtime(true) - $timingStart;
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
	$response["timing"] = microtime(true) - $timingStart;
	
	echo json_encode($response);
}
