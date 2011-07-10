<?php
namespace de\RaumZeitLabor\PartKeepr\Service;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Exceptions\ServiceException,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\REST\Request;

class ServiceManager {
	
	public static function call () {
		
		$request = new Request(array('restful' => true));
		$service = $request->getService();
		
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
		
		if (!is_subclass_of($service, "de\\RaumZeitLabor\\PartKeepr\\Service\\AnonService")) {
			
			$session = null;
			$sessionid = false;
			
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
		
		PartKeepr::getEM()->flush();
		
		return $result;
			
	}
	
}

?>