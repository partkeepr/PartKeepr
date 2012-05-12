<?php
namespace de\RaumZeitLabor\PartKeepr\UserPreference;

use de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Service\RestfulService,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Represents the user preference service. This service is implemented as a RestfulService, however,
 * only setting and deleting properties is supported, as we don't want to have duplicate values per key.
 * 
 * For convinience, create() and update() perform the exact same function.
 * @author felicitus
 *
 */
class UserPreferenceService extends Service implements RestfulService {
	/**
	 * Returns the preferences for the current user, or a user specified by user_id (admin only).
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$user = null;
		
		if ($this->hasParameter("user_id") && SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			if ($this->getParameter("user_id") != 0) {
				$user = User::loadById($this->getParameter("user_id"));
			}
		} else {
			$user = SessionManager::getCurrentSession()->getUser();
		}
		
		$aPreferences = array();
		
		foreach (self::getPreferencesForUser($user) as $result) {
			$aPreferences[] = $result->serialize();	
		}
		
		return array("data" => $aPreferences);
	}
	
	/**
	 * Returns the user preferences for a specific user
	 * @param User $user The user to retrieve the user preferences for
	 * @return array An array of UserPreference objects
	 */
	public static function getPreferencesForUser (User $user) {
		$aPreferences = array();
		
		/* Extract all preferences */
		$dql =  "SELECT up FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $user);
		
		return $query->getResult();
	}
	
	/**
	 * Creates or updates a value for a specific key.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create() {
		$userPreference = UserPreference::setPreference($this->getUser(), $this->getParameter("key"), $this->getParameter("value"));
		
		return array("data" => $userPreference->serialize());
	}
	
	/**
	 * Creates or updates a value for a specific key.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		return $this->create();
	}
	
	/**
	 * Deletes a key-value combination from the database.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		if ($this->hasParameter("user_id") && SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			UserPreference::deletePreference(User::loadById($this->getParameter("user_id")), $this->getParameter("key"));
		} else {
			UserPreference::deletePreference($this->getUser(), $this->getParameter("key"));
		}
	}
	
	public function changePassword () {
		if (Configuration::getOption("partkeepr.frontend.allow_password_change", true) === false) {
			throw new \Exception("Password changing has been disabled on this server");
		}
		
		if (!$this->getUser()->compareHashedPassword($this->getParameter("oldpassword"))) {
			throw new \Exception("Invalid Password");
		} else {
			$this->getUser()->setHashedPassword($this->getParameter("newpassword"));
		}
		
		return array("data" => PartKeepr::i18n("Password changed successfully"));
		
	}
}