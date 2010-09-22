<?php
namespace de\raumzeitlabor\PartDB2\Auth;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Auth\User,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Auth\Exceptions\UserAlreadyExistsException,
	de\RaumZeitLabor\PartDB2\Auth\Exceptions\UserDoesNotExistException,
	de\RaumZeitLabor\PartDB2\Auth\Exceptions\InvalidLoginDataException;

class UserManager extends Singleton {
	
	public function createUser (User $user) {
		if ($this->userExists($user)) {
			throw new UserAlreadyExistsException($user->getUsername());
		}
		
		PartDB2::getEM()->persist($user);
	}
	
	public function userExists (User $user) {
		$user = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Auth\User", $user->getUsername());
		
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
		PartDB2::getEM()->remove($user);
	}
	
	public function authenticate (User $user) {
		$result = 	PartDB2::getEM()
					->getRepository("de\RaumZeitLabor\PartDB2\Auth\User")
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