<?php
namespace de\RaumZeitLabor\PartDB2\Distributor;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Distributor\Distributor,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\Distributor\Exceptions\DistributorNotFoundException;

class DistributorManager extends Singleton {
	public function getDistributors ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address")->from("de\RaumZeitLabor\PartDB2\Distributor\Distributor","st");

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
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\Distributor\Distributor","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getDistributor ($id) {
		$distributor = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Distributor\Distributor", $id);
		
		if ($distributor) {
			return $distributor;
		} else {
			throw new DistributorNotFoundException();
		}
	}
	
	public function addDistributor ($name) {
		$distributor = new Distributor();
		$distributor->setName($name);
		
		PartDB2::getEM()->persist($distributor);
		PartDB2::getEM()->flush();
		
		return $distributor;
	}
	public function deleteDistributor ($id) {
		$distributor = $this->getDistributor($id);
		
		PartDB2::getEM()->remove($distributor);
		PartDB2::getEM()->flush();
	}
}