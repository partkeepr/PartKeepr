<?php
namespace de\raumzeitlabor\PartDB2\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Auth\UserManager;

class UserManagerService extends Service {
	public function createUser () {
		$this->requireParameter("username");
		$this->requireParameter("password");
		
		$user = new User();
		$user->setUsername($this->getParameter("username"));
		$user->setHashedPassword($this->getParameter("password"));
		
		UserManager::getInstance()->createUser($user);
	}	
}
?>