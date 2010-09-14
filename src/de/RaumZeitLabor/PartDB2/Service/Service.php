<?php
namespace de\RaumZeitLabor\PartDB2\Service;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Session\SessionManager,
	de\RaumZeitLabor\PartDB2\Service\Exceptions\ServiceException;

class Service {
	private $params;
	
	public function __construct (Array $params) {
		$this->params = $params;
	}
	public function setSession ($session) {
		SessionManager::getInstance()->resumeSession($session);
	}
	
	public function mayCall ($call) {
		/* @todo: Implement permission checking */
		return true;
	}
	
	protected function requireParameter ($name) {
		if (!$this->hasParameter($name)) {
			throw new ServiceException(sprintf("Parameter %s is required.", $name));
		}	
	}
	
	protected function getParameter ($name, $default = null) {
		if (!$this->hasParameter($name)) {
			return $default;
		} else {
			return $this->params[$name];
		}
	}
	
	protected function hasParameter ($name) {
		if (array_key_exists($name, $this->params)) {
			return true; 
		} else {
			return false;
		}
	}
}


?>