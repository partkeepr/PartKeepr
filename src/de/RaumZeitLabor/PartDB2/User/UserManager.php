<?php
namespace de\RaumZeitLabor\PartDB2\User;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Auth\User,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\User\Exceptions\UserNotFoundException;

class UserManager extends Singleton {
	public function getUsers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, st.username")->from("de\RaumZeitLabor\PartDB2\Auth\User","st");

		if ($filter != "") {
			$qb = $qb->where("st.username LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\Auth\User","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getUser ($id) {
		$user = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Auth\User", $id);
		
		if ($user) {
			return $user;
		} else {
			throw new UserNotFoundException();
		}
	}
	
	public function deleteUser ($id) {
		$user = $this->getUser($id);
		
		PartDB2::getEM()->remove($user);
		PartDB2::getEM()->flush();
	}
}