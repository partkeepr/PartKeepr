<?php
namespace de\RaumZeitLabor\PartDB2\PartDistributor;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Manufacturer\Exceptions\ManufacturerNotFoundException;

class PartDistributorManager extends Singleton {
	public function getPartDistributors ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("pd.orderNumber, part.id AS part_id, dist.id AS distributor_id")->from("de\RaumZeitLabor\PartDB2\Part\PartDistributor","pd")
			->leftJoin('pd.distributor', "dist")
			->leftJoin("pd.part", "part");

		/*if ($filter != "") {
			$manufacturer = Manufacturer::loadById($filter);
			$qb = $qb->where("st.manufacturer = :manufacturer");
			$qb->setParameter("manufacturer", $manufacturer);
		}*/
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("pd.".$sort, $dir);

		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(pd.id)")->from("de\RaumZeitLabor\PartDB2\Part\PartDistributor","pd");
		
		
		/*
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.manufacturer = :manufacturer");
			$totalQueryBuilder->setParameter("manufacturer", $manufacturer);
		}*/
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getPartDistributor ($id) {
		$partDistributor = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Part\PartDistributor", $id);
		
		if ($partDistributor) {
			return $partDistributor;
		} else {
			throw new PartDistributorNotFoundException();
		}
	}
	
	public function addPartDistributor ($orderNumber) {
		$partDistributor = new PartDistributor();
		$partDistributor->setName($orderNumber);
		
		PartDB2::getEM()->persist($partDistributor);
		PartDB2::getEM()->flush();
		
		return $partDistributor;
	}
	public function deletePartDistributor ($id) {
		$manufacturer = $this->getManufacturer($id);
		
		PartDB2::getEM()->remove($manufacturer);
		PartDB2::getEM()->flush();
	}
}