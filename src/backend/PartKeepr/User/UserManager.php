<?php
namespace PartKeepr\User;

use PartKeepr\Util\Singleton,
	PartKeepr\User\User,
	PartKeepr\PartKeepr,
	PartKeepr\User\Exceptions\InvalidLoginDataException,
	PartKeepr\Category\CategoryManager,
	PartKeepr\User\Exceptions\UserAlreadyExistsException,
	PartKeepr\User\Exceptions\UserNotFoundException;

class UserManager extends Singleton {
	/**
	 * Returns a list of users.
	 *  
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter A string to filter the user's name by, default empty
	 */
	public function getUsers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.username")->from("PartKeepr\User\User","st");

		if ($filter != "") {
			$qb = $qb->where("LOWER(st.username) LIKE :filter");
			$qb->setParameter("filter", "%".strtolower($filter)."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\User\User","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.username) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	/**
	 * Checks if the passed user already exists.
	 * 
	 * @param $username string The username to check
	 */
	public function userExists ($username) {
		$dql = "SELECT COUNT(u) FROM PartKeepr\User\User u WHERE u.username = :name";
		
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
			->getRepository("PartKeepr\User\User")
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