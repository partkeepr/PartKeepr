<?php
namespace de\RaumZeitLabor\PartKeepr\Distributor;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Distributor\Distributor,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	de\RaumZeitLabor\PartKeepr\Distributor\Exceptions\DistributorNotFoundException;

class DistributorManager extends Singleton {
	public function getDistributors ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address")->from("de\RaumZeitLabor\PartKeepr\Distributor\Distributor","st");

		if ($filter != "") {
			$qb = $qb->where("st.name LIKE :filter");
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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Distributor\Distributor","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getDistributor ($id) {
		$distributor = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Distributor\Distributor", $id);
		
		if ($distributor) {
			return $distributor;
		} else {
			throw new DistributorNotFoundException();
		}
	}
	
	public function addDistributor ($name) {
		$distributor = new Distributor();
		$distributor->setName($name);
		
		PartKeepr::getEM()->persist($distributor);
		PartKeepr::getEM()->flush();
		
		return $distributor;
	}
	public function deleteDistributor ($id) {
		$distributor = $this->getDistributor($id);
		
		PartKeepr::getEM()->remove($distributor);
		PartKeepr::getEM()->flush();
	}
}