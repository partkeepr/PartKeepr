<?php
namespace de\RaumZeitLabor\PartKeepr\User;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\AdminService;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Auth\User,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class UserService extends AdminService implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return UserManager::getInstance()->getUser($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "username",
					"direction" => "ASC");
			}
			return UserManager::getInstance()->getUsers(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("username");
		
		$user = new User;
		
		$this->setUserData($user);
		
		PartKeepr::getEM()->persist($user);
		PartKeepr::getEM()->flush();
		
		return array("data" => $user->serialize());
	}
	
	private function setUserData (User $user) {
		$user->setUsername($this->getParameter("username"));
		
		if ($this->hasParameter("password") && $this->getParameter("password") !== "") {
			$user->setHashedPassword($this->getParameter("password"));
		} else {
			$user->setHashedPassword("");
		}
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("username");
		$user = UserManager::getInstance()->getUser($this->getParameter("id"));

		$this->setUserData($user);
		PartKeepr::getEM()->flush();
		
		return array("data" => $user->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		UserManager::getInstance()->deleteUser($this->getParameter("id"));
		
		return array("data" => null);
	}
}