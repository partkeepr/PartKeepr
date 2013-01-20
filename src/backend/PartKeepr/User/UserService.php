<?php
namespace PartKeepr\User;

use
	PartKeepr\PartKeepr,
	PartKeepr\Service\FilterExtractor,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Session\SessionManager,
	PartKeepr\User\User;

class UserService extends Service implements RestfulService {
	
	/**
	 * Implements the get() call for the RestfulService.
	 * 
	 * If the "id" parameter is passed, try to return the user by id. If not,
	 * return a list.
	 * 
	 * @see PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			if (!SessionManager::getCurrentSession()->getUser()->isAdmin()) {
				throw new \Exception("Permission denied");
			}
			
			return array("data" => UserManager::getInstance()->getUser($this->getParameter("id"))->serialize());
		} else {
			$filter = new ManagerFilter($this);
			$filter->setFilterCallback(array($this, "filterCallback"));
			return UserManager::getInstance()->getList($filter);
		}
	}
	

	public function filterCallback ($queryBuilder) {
		$filter = new FilterExtractor($this);
		
		if ( $this->hasParameter("query") 
			&& $query = $this->getParameter("query") ){
			
			$queryBuilder->andWhere("LOWER(q.username) LIKE :query");
			$queryBuilder->setParameter("query", $query );
		}
	}
	
	/**
	 * Creates a new user.
	 * 
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		if (!SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			throw new \Exception("Permission denied");
		}
		
		$this->requireParameter("username");
		
		$user = new User;
		$user->deserialize($this->getParameters());
		
		UserManager::getInstance()->createUser($user);
		
		return array("data" => $user->serialize());
	}
	
	/**
	 * Updates the user informations.
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		if (!SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			throw new \Exception("Permission denied");
		}
		
		$this->requireParameter("id");
		$this->requireParameter("username");
		$user = UserManager::getInstance()->getUser($this->getParameter("id"));

		$user->deserialize($this->getParameters());
		PartKeepr::getEM()->flush();
		
		return array("data" => $user->serialize());
		
	}
	
	/**
	 * Deletes the user from the database.
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		if (!SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			throw new \Exception("Permission denied");
		}
		
		$this->requireParameter("id");
		
		UserManager::getInstance()->deleteUser($this->getParameter("id"));
		
		return array("data" => null);
	}
}