<?php
namespace de\raumzeitlabor\PartDB2\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\AnonService,
	de\RaumZeitLabor\PartDB2\Auth\User,
	de\RaumZeitLabor\PartDB2\Auth\UserManager,
	de\RaumZeitLabor\PartDB2\Session\SessionManager,
	de\RaumZeitLabor\PartDB2\Auth\Exceptions\InvalidLoginDataException;

class AuthManagerService extends AnonService {
	public function login () {
		$this->requireParameter("username");
		$this->requireParameter("password");
		
		/* Build a temporary user */
		
		
		$user = new User;
		$user->setUsername		($this->getParameter("username"));
		$user->setHashedPassword($this->getParameter("password"));
		
		$authenticatedUser = UserManager::getInstance()->authenticate($user);
		
		if ($authenticatedUser !== false) {
			/* Start Session */
			$session = SessionManager::getInstance()->startSession($authenticatedUser);
			
			return array("sessionid" => $session->getSessionID());
		} else {
			throw new InvalidLoginDataException();
		}
		
	
	}	
}
?>