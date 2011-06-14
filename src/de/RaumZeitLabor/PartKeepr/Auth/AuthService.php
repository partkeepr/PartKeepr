<?php
namespace de\raumzeitlabor\PartKeepr\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\AnonService,
	de\RaumZeitLabor\PartKeepr\Auth\User,
	de\RaumZeitLabor\PartKeepr\Auth\UserManager,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class AuthService extends AnonService {
	public function login () {
		$this->requireParameter("username");
		$this->requireParameter("password");
		
		/* Build a temporary user */
		$user = new User;
		$user->setRawUsername($this->getParameter("username"));
		$user->setHashedPassword($this->getParameter("password"));
		
		$authenticatedUser = UserManager::getInstance()->authenticate($user);
		
		if ($authenticatedUser !== false) {
			/* Start Session */
			$session = SessionManager::getInstance()->startSession($authenticatedUser);
			
			return array("sessionid" => $session->getSessionID(), "username" => $this->getParameter("username"), "admin" => $session->getUser()->isAdmin());
		} else {
			throw new InvalidLoginDataException();
		}
		
	
	}	
	
	
}
?>