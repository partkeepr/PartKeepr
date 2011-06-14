<?php
namespace de\raumzeitlabor\PartKeepr\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Auth\User,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Auth\Exceptions\UserAlreadyExistsException,
	de\RaumZeitLabor\PartKeepr\Auth\Exceptions\UserDoesNotExistException,
	de\RaumZeitLabor\PartKeepr\Auth\Exceptions\InvalidLoginDataException;

class UserManager extends Singleton {
	
	public function createUser (User $user) {
		if ($this->userExists($user)) {
			throw new UserAlreadyExistsException($user->getUsername());
		}
		
		PartKeepr::getEM()->persist($user);
	}
	
	public function userExists (User $user) {
		$user = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Auth\User", $user->getUsername());
		
		if ($user === null) {
			return false;
		} else {
			return true;
		}
	}
	
	public function deleteUser (User $user) {
		if (!$this->userExists($user)) {
			throw new UserDoesNotExistException($user->getUsername());
		}
		PartKeepr::getEM()->remove($user);
	}
	
	public function authenticate (User $user) {
		$result = 	PartKeepr::getEM()
					->getRepository("de\RaumZeitLabor\PartKeepr\Auth\User")
					->findOneBy(
						array(
							"username" => $user->getUsername(),
							"password" => $user->getHashedPassword()
						)
						);
		
		if ($result == null) {
			throw new InvalidLoginDataException();
		} else {
			return $result;
		}
	}
	
}
?>