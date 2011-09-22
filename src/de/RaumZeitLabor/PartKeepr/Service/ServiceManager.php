<?php
namespace de\RaumZeitLabor\PartKeepr\Service;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Exceptions\ServiceException,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\User\UserManager,
	de\RaumZeitLabor\PartKeepr\REST\Request;

class ServiceManager {
	
	public static function sendHeaders () {
		header("Content-Type: text/html; charset=UTF-8");
		header("Cache-Control: no-cache, must-revalidate");
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: lang");
		header("Access-Control-Allow-Headers: call");
		header("Access-Control-Allow-Headers: service");
	}
	
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
			
			$sessionid = self::getSession($service);
			
			
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
	
	private static function getSession ($service) {
		if ($service->hasHeader("username") && $service->hasHeader("password") && !$service->hasHeader("session")) {
			return self::authenticateByUsername($service->getHeader("username"), $service->getHeader("password"));
		}
		
		if (array_key_exists("username", $_REQUEST) && array_key_exists("password", $_REQUEST) && !array_key_exists("session", $_REQUEST)) {
			return self::authenticateByUsername($_REQUEST["username"], $_REQUEST["password"]);
		}
		
		if ($service->hasHeader("session")) {
			return $service->getHeader("session");
		}
			
		if (array_key_exists("session", $_REQUEST)) {
			return $_REQUEST["session"];
		}
	}
	
	private static function authenticateByUsername ($username, $password) {
		/* Build a temporary user */
		$user = new User;
		$user->setRawUsername($username);
		$user->setHashedPassword($password);
		
		$authenticatedUser = UserManager::getInstance()->authenticate($user);
		
		if ($authenticatedUser !== false) {
			/* Start Session */
			$session = SessionManager::getInstance()->startSession($authenticatedUser);
				
			return $session->getSessionID();
		} else {
			throw new InvalidLoginDataException();
		}
	}
	
}

?>