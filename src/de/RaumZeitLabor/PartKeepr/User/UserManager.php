<?php
namespace de\RaumZeitLabor\PartKeepr\User;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Auth\User,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	de\RaumZeitLabor\PartKeepr\User\Exceptions\UserNotFoundException;

class UserManager extends Singleton {
	public function getUsers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.username")->from("de\RaumZeitLabor\PartKeepr\Auth\User","st");

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
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Auth\User","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getUser ($id) {
		$user = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Auth\User", $id);
		
		if ($user) {
			return $user;
		} else {
			throw new UserNotFoundException();
		}
	}
	
	public function deleteUser ($id) {
		$user = $this->getUser($id);
		
		PartKeepr::getEM()->remove($user);
		PartKeepr::getEM()->flush();
	}
}