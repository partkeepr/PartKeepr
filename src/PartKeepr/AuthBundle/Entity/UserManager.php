<?php
namespace PartKeepr\AuthBundle\Entity;

use PartKeepr\AuthBundle\Entity\User\Exceptions\InvalidLoginDataException;
use PartKeepr\AuthBundle\Entity\User\Exceptions\UserAlreadyExistsException;
use PartKeepr\AuthBundle\Entity\User\Exceptions\UserNotFoundException;
use PartKeepr\AuthBundle\Entity\User\User;
use PartKeepr\Category\CategoryManager;
use PartKeepr\Manager\AbstractManager;
use PartKeepr\PartKeepr;

class UserManager extends AbstractManager {
	public function getEntityName () {
		return 'PartKeepr\AuthBundle\Entity\User\User';
	}
	
	public function getQueryFields () {
		return array("id","username");
	}
	
	public function getDefaultSortField () {
		return "username";
	}
	
	/**
	 * Checks if the passed user already exists.
	 * 
	 * @param $username string The username to check
	 */
	public function userExists ($username) {
		$dql = "SELECT COUNT(u) FROM PartKeepr\AuthBundle\Entity\User\User u WHERE u.username = :name";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("name", $username);
		
		$count = $query->getSingleScalarResult();
		
		if ($count == 0) {
			return false;
		} else {
			return true;
		}	
	}
	
	/**
	* Creates the given user. Checks if the user already exists
	*
	* @param User $user The user to create
	* @throws UserAlreadyExistsException
	*/
	public function createUser (User $user) {
		if ($this->userExists($user->getUsername())) {
			throw new UserAlreadyExistsException($user->getUsername());
		}
	
		PartKeepr::getEM()->persist($user);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Returns the user for a given user id
	 * @param integer $id The user id
	 */
	public function getUser ($id) {
		return User::loadById($id);
	}
	
	/**
	 * Deletes an user by id
	 * @param int $id The user's id
	 */
	public function deleteUser ($id) {
		$user = User::loadById($id);
		
		PartKeepr::getEM()->remove($user);
		PartKeepr::getEM()->flush();
	}
	
	/**
	* Authenticates the given user. If successful, an instance
	* of the user is returned.
	*
	* @param User $user The user to authenticate
	* @throws InvalidLoginDataException Thrown if the user's credentials are not valid
	*/
	public function authenticate (User $user) {
		$result = 	PartKeepr::getEM()
			->getRepository("PartKeepr\AuthBundle\Entity\User\User")
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