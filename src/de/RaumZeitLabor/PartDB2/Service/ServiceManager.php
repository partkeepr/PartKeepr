<?php
namespace de\RaumZeitLabor\PartDB2\Service;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Exceptions\ServiceException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class ServiceManager {
	
	public static function call ($callStruct) {
		if (!array_key_exists("service", $callStruct)) {
			throw new ServiceException("Parameter 'service' not specified.");
		}
		
		$service = $callStruct["service"];
		$service = str_replace(".", "\\", $service);
		
		if (!\Doctrine\Common\ClassLoader::classExists($service) ||
			!is_subclass_of($service, "de\\RaumZeitLabor\\PartDB2\\Service\\Service")) {
				throw new ServiceException(sprintf("Service %s does not exist or is not callable.", $callStruct["service"]));
		}
		
		if (!array_key_exists("call", $callStruct)) {
			throw new ServiceException("Paramter 'call' not specified.");
		}
		
		$call = $callStruct["call"];
		if (!method_exists($service, $call)) {
			throw new ServiceException(sprintf("Service %s does not have the call %s.", $callStruct["service"], $callStruct["call"]));
		}
		
		if (!array_key_exists("parameters", $callStruct) || !is_array($callStruct["parameters"])) {
			$callStruct["parameters"] = array();
		}
		
		$serviceObj = new $service($callStruct["parameters"]);
		
		$allowCall = true;		
		
		if (!is_subclass_of($service, "de\\RaumZeitLabor\\PartDB2\\Service\\AnonService")) {
			if (!array_key_exists("session", $callStruct)) {
				throw new ServiceException("You called a non-anonymous service, but did not pass the 'session' parameter.");
			}	
			
			$serviceObj->setSession($callStruct["session"]);
			
			if (!$serviceObj->mayCall($call)) {
				$allowCall = false;
			}
		}
		
		if (!$allowCall) {
			throw new ServiceException("Permission denied");
		}
		
		$result = $serviceObj->$call();
		
		PartDB2::getEM()->flush();
		
		return $result;
			
	}
	
}

?>