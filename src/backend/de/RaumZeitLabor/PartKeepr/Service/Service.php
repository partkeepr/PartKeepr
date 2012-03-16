<?php
namespace de\RaumZeitLabor\PartKeepr\Service;

use de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Session\Session,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager,
	de\RaumZeitLabor\PartKeepr\Service\Exceptions\ServiceException;

class Service {
	private $params;
	
	public function __construct (Array $params) {
		$this->params = $params;
	}
	
	public function mayCall ($call) {
		if (SessionManager::getCurrentSession()->getUser() === null) {
			return false;
		} else {
			/* @todo: Implement permission checking */
			return true;	
		}
		
		
	}
	
	protected function requireParameter ($name) {
		if (!$this->hasParameter($name)) {
			throw new ServiceException(sprintf("Parameter %s is required.", $name));
		}	
	}
	
	public function getParameter ($name, $default = null) {
		if (!$this->hasParameter($name)) {
			return $default;
		} else {
			return $this->params[$name];
		}
	}
	
	/**
	 * Returns all parameters passed to the service
	 * @return array An array with all parameters (key=>value format)
	 */
	public function getParameters () {
		return $this->params;
	}
	
	/**
	 * Returns the current user for this session
	 * 
	 * @return User The user
	 */
	public function getUser () {
		return SessionManager::getCurrentSession()->getUser();
	}
	
	/**
	 * Checks if the environment has an active, logged in user.
	 * 
	 * @param none
	 * @return boolean True if a logged in user exists, false otherwise
	 */
	public function hasUser () {
		if (!$this->hasSession()) {
			return false;
		}
		
		var_dump($this->getUser());
		if ($this->getUser() !== null) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Checks if there is an active session.
	 * 
	 * @param none
	 * @return boolean true if an active session exists, false otherwise
	 */
	public function hasSession () {
		return SessionManager::hasSession();
	}
	
	public function hasParameter ($name) {
		if (array_key_exists($name, $this->params)) {
			return true; 
		} else {
			return false;
		}
	}
	
	public function hasHeader ($name) {
		$targetName = "HTTP_".strtoupper($name);
		
		return array_key_exists($targetName, $_SERVER);
	}
	
	public function getHeader ($name) {
		$targetName = "HTTP_".strtoupper($name);
		
		if (array_key_exists($targetName, $_SERVER)) {
			return $_SERVER[$targetName];
		} else {
			throw new \Exception("Header ".$targetName." not found");
		}
	}
}
