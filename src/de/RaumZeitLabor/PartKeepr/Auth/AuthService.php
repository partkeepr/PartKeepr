<?php
namespace de\raumzeitlabor\PartKeepr\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\AnonService,
	de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\User\UserManager,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class AuthService extends AnonService {
	/**
	 * Logs in the given user. If the login was successful,
	 * a session is automatically started.
	 * 
	 * @throws InvalidLoginDataException
	 */
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
