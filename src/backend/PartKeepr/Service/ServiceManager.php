<?php
namespace PartKeepr\Service;

use PartKeepr\AuthBundle\Entity\User\User;
use PartKeepr\AuthBundle\Entity\User\UserManager;
use PartKeepr\PartKeepr;
use PartKeepr\REST\Request;
use PartKeepr\Service\Exceptions\ServiceException;
use PartKeepr\Session\SessionManager;
use PartKeepr\Util\Singleton;

class ServiceManager extends Singleton {
	private $request = null;
	private $service = null;
	private $mimetype = "application/json";
	
	/**
	 * Initializes the request and service variables
	 */
	public function initialize () {
		$this->request = new Request(array('restful' => true));
		$this->service = $this->request->getService();
		
		// Special case because of file uploads
		if ($this->service instanceof \PartKeepr\TempFile\TempFileService) {
			$this->mimetype = "text/html";
		}
	}
	/**
	 * Sends the response headers.
	 * 
	 * Sends cache control headers as well as the mime type.
	 * 
	 * @param $mimeType string The mimetype to send, defaults to application/json
	 */
	public function sendHeaders () {
 		header("Content-Type: ".$this->mimetype."; charset=UTF-8");
		header("Cache-Control: no-cache, must-revalidate");
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: lang,call,service,X-Requested-With,X-PartKeepr-Locale,X-PartKeepr-Name,X-PartKeepr-Call");
	}
	
	/**
	 * Returns the effective call on a service which we need to process
	 * 
	 * The following rules decide which call to make:
	 * - Use the "call" header, if set
	 * - Use the "call" parameter, if set
	 * - Use the action from a REST request (e.g. /controller/action/id)
	 * - Use the HTTP Method name, where:
	 *   - "POST" calls "create"
	 *   - "GET" calls "get"
	 *   - "PUT" calls "update"
	 *   - "DELETE" calls "destroy"
	 *   - Any other HTTP verbs are mapped 1:1
	 *   
	 * @return string the method name to be called
	 */
	public function getCall () {
		$call = null;
		
		if ($this->service->hasHeader("call")) {
			$call = $this->service->getHeader("call");
		} elseif (array_key_exists("call", $_REQUEST) && $_REQUEST["call"] != "") {
			$call = $_REQUEST["call"];
		} elseif ($this->request->action != "") {
			$call = $this->request->action;
		} else {
			switch (strtoupper($this->request->getMethod())) {
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
					$call = $this->request->getMethod();
					break;
			}
		}
		
		return $call;
	}
	
	public function call () {
		$call = $this->getCall();
	
		$allowCall = true;		
		
		if (!is_subclass_of($this->service, "PartKeepr\\Service\\AnonService")) {
			$session = null;
			$sessionid = false;
			
			$sessionid = $this->getSession($this->service);
			
			
			if ($sessionid === null)
			{
				$session = SessionManager::getInstance()->startSession();
				throw new ServiceException("You called a non-anonymous service, but did not pass the 'session' parameter.");
			} else {
				$session = SessionManager::getInstance()->resumeSession($sessionid);
			}
			
			if (!$this->service->mayCall($call)) {
				$allowCall = false;
			}
			
			// Update Seen flag of the current user.
			if ($session !== null) {
				$user = $session->getUser();
				if ($user !== null) {
					$user->updateSeen();
				}
			}
		}
		
		if (!$allowCall) {
			throw new ServiceException("Permission denied");
		}
		
		if (!method_exists($this->service, $call)) {
			throw new \Exception(sprintf("The service %s doesn't implement %s", get_class($this->service), $call));
		}
		$result = $this->service->$call();
		
		PartKeepr::getEM()->flush();
		
		return $result;
			
	}
	
	private function getSession ($service) {
		if ($service->hasHeader("username") && $service->hasHeader("password") && !$service->hasHeader("session")) {
			return $this->authenticateByUsername($service->getHeader("username"), $service->getHeader("password"));
		}
		
		if (array_key_exists("username", $_REQUEST) && array_key_exists("password", $_REQUEST) && !array_key_exists("session", $_REQUEST)) {
			return $this->authenticateByUsername($_REQUEST["username"], $_REQUEST["password"]);
		}
		
		if ($service->hasHeader("session")) {
			return $service->getHeader("session");
		}
			
		if (array_key_exists("session", $_REQUEST)) {
			return $_REQUEST["session"];
		}
	}
	
	private function authenticateByUsername ($username, $password) {
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

	public function getRegisteredServices () {
		return array(
			"PartKeepr\\Auth\\AuthService"
		);
	}
	
}