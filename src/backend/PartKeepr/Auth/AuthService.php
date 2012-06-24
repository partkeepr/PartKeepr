<?php
namespace PartKeepr\Auth;

use PartKeepr\Service\AnonService,
	PartKeepr\User\User,
	PartKeepr\User\UserManager,
	PartKeepr\User\Exceptions\InvalidLoginDataException,
	PartKeepr\Session\SessionManager;

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
			
			$aPreferences = array();
			
			foreach ($session->getUser()->getPreferences() as $result) {
				$aPreferences[] = $result->serialize();
			}
			
			return array(
				"sessionid" => $session->getSessionID(),
				"username" => $this->getParameter("username"),
				"admin" => $session->getUser()->isAdmin(),
				"userPreferences" => array(
						"response" => array(
							"data" => $aPreferences
						)));
		} else {
			throw new InvalidLoginDataException();
		}
		
	
	}	
}
