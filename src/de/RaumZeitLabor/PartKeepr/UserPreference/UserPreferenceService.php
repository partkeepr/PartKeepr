<?php
namespace de\RaumZeitLabor\PartKeepr\UserPreference;
use de\RaumZeitLabor\PartKeepr\User\User;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

use de\RaumZeitLabor\PartKeepr\Service\RestfulService;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

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
	 * Returns the preferences for the current user.
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$aPreferences = array();
		
		/* Extract all preferences */ 
		$dql =  "SELECT up FROM de\RaumZeitLabor\PartKeepr\UserPreference\UserPreference up WHERE up.user = :user";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", SessionManager::getCurrentSession()->getUser());
		
		foreach ($query->getResult() as $result) {
			$aPreferences[] = $result->serialize();	
		}
		
		return array("data" => $aPreferences);
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
		UserPreference::deletePreference($this->getUser(), $this->getParameter("key"));
	}
}