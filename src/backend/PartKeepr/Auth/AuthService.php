<?php
namespace PartKeepr\Auth;

use PartKeepr\Service\AnonService,
	PartKeepr\User\User,
	PartKeepr\User\UserManager,
	PartKeepr\User\Exceptions\InvalidLoginDataException,
	PartKeepr\Session\SessionManager,
	PartKeepr\Auth\LDAP\LDAP,
	PartKeepr\Service\Annotations\ServiceParameter as ServiceParameter,
	PartKeepr\Service\Annotations\ServiceCall as ServiceCall,
	PartKeepr\Service\Annotations\ServiceReturnValue as ServiceReturnValue,
	PartKeepr\Service\Annotations\Service as ServiceDescription,
	PartKeepr\Util\Configuration as PartKeeprConfiguration;


/**
 * Implements the AuthService
 * @ServiceDescription(description="Manages authentication against PartKeepr")
 */
class AuthService extends AnonService {
	/**
	 * Logs in the given user. If the login was successful, a session is automatically started.
	 *
	 * @return array The data
	 * @throws InvalidLoginDataException
	 *
	 * @ServiceCall(description="Authenticates a user against the system",
	 * 				documentation="Authenticates a user and starts a new session upon success.",
	 * 				returnValues={
	 * 					@ServiceReturnValue(
	 * 											name="username",
	 * 											type="string:50",
	 * 											description="The logged in username"
	 * 										),
	 * 					@ServiceReturnValue(
	 * 											name="sessionid",
	 * 											type="string:50",
	 * 											description="The session ID"
	 * 										),
	 * 					@ServiceReturnValue(
	 * 											name="admin",
	 * 											type="boolean",
	 *	 										description="True if the logged in user has admin rights"
	 * 										),
	 * 					@ServiceReturnValue(
	 * 											name="userPreferences",
	 * 											type="UserPreference[]",
	 * 											description="An array of UserPreferences"
	 * 										)
	 * 					},
	 * 				parameters={
	 * 					@ServiceParameter(	name="username",
	 * 										type="string:50",
	 * 										required=true,
	 * 										description="The username to authenticate"
	 * 										),
	 * 					@ServiceParameter(	name="password",
	 * 										type="string:32",
	 * 										required=true,
	 * 										description="The password, hashed in MD5"
	 * 										)
	 * 				})
	 *
	 */
	public function login () {
		$this->requireParameter("username");
		$this->requireParameter("password");
		
		/* Build a temporary user */
		$user = new User;
		$user->setRawUsername($this->getParameter("username"));
		$user->setHashedPassword($this->getParameter("password"));

		/* Check for another authentification */
		if (PartKeeprConfiguration::getOption("partkeepr.auth.method") == 'internal') {
			$extAuthenticatedUser = true;
		} elseif (PartKeeprConfiguration::getOption("partkeepr.auth.method") == 'ldap') {
			$ldap = new LDAP;
			$extAuthenticatedUser = $ldap->authenticate($this->getParameter("username"), $this->getParameter("password"));
		}

		// First authentificate user via LDAP etc.
		if ($extAuthenticatedUser !== false) {
		
			$authenticatedUser = UserManager::getInstance()->authenticate($user, PartKeeprConfiguration::getOption("partkeepr.auth.method"));
			
			// Next check if user exist in partkeepr database
			if ($authenticatedUser !== false) {
				/* Start Session */
				$session = SessionManager::getInstance()->startSession($authenticatedUser);
				
				$session->getUser()->updateSeen();
				
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

		} else {
			throw new InvalidLoginDataException();
		}
	}
}
