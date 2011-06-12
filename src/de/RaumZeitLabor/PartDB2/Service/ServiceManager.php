<?php
namespace de\RaumZeitLabor\PartDB2\Service;
use de\RaumZeitLabor\PartDB2\Session\SessionManager;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Exceptions\ServiceException,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\REST\Request;

class ServiceManager {
	
	public static function call () {
		
		$request = new Request(array('restful' => true));
		$service = $request->getService();
		
		//print_r($request->action);
		
		if ($service->hasHeader("call")) {
			$call = $service->getHeader("call");
		} elseif (array_key_exists("call", $_REQUEST) && $_REQUEST["call"] != "") {
			$call = $_REQUEST["call"];
		} elseif ($request->action != "") {
			$call = $request->action;
		} else {
			switch (strtoupper($request->getMethod())) {
				case "POST":
					$call = "create";
					break;
				case "GET":
					$call = "get";
					break;
				case "PUT":
					$call = "update";
					break;
				case "DELETE":
					$call = "destroy";
					break;
				default:
					$call = $request->getMethod();
					break;
			}
		}
	
		$allowCall = true;		
		
		if (!is_subclass_of($service, "de\\RaumZeitLabor\\PartDB2\\Service\\AnonService")) {
			
			$session = null;
			if ($service->hasHeader("session")) {
				$sessionid = $service->getHeader("session");
			}
			
			if (array_key_exists("session", $_REQUEST) && $session === null) {
				$sessionid = $_REQUEST["session"];
			}
			if ($sessionid === null)
			{
				$session = SessionManager::getInstance()->startSession();
				throw new ServiceException("You called a non-anonymous service, but did not pass the 'session' parameter.");
			} else {
				$session = SessionManager::getInstance()->resumeSession($sessionid);
			}
			
			if (!$service->mayCall($call)) {
				$allowCall = false;
			}
		}
		
		if (!$allowCall) {
			throw new ServiceException("Permission denied");
		}
		
		$result = $service->$call();
		
		PartDB2::getEM()->flush();
		
		return $result;
			
	}
	
}

?>