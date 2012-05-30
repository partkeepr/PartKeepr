<?php
namespace PartKeepr\PartDistributor;

use PartKeepr\Util\Singleton,
	PartKeepr\Manufacturer\Manufacturer,
	PartKeepr\PartKeepr,
	PartKeepr\Manufacturer\Exceptions\ManufacturerNotFoundException;

class PartDistributorManager extends Singleton {
	public function getPartDistributors ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("pd.orderNumber, part.id AS part_id, dist.id AS distributor_id")->from("PartKeepr\Part\PartDistributor","pd")
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
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(pd.id)")->from("PartKeepr\Part\PartDistributor","pd");
		
		
		/*
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.manufacturer = :manufacturer");
			$totalQueryBuilder->setParameter("manufacturer", $manufacturer);
		}*/
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getPartDistributor ($id) {
		$partDistributor = PartKeepr::getEM()->find("PartKeepr\Part\PartDistributor", $id);
		
		if ($partDistributor) {
			return $partDistributor;
		} else {
			throw new PartDistributorNotFoundException();
		}
	}
	
	public function addPartDistributor ($orderNumber) {
		$partDistributor = new PartDistributor();
		$partDistributor->setName($orderNumber);
		
		PartKeepr::getEM()->persist($partDistributor);
		PartKeepr::getEM()->flush();
		
		return $partDistributor;
	}
	public function deletePartDistributor ($id) {
		$manufacturer = $this->getManufacturer($id);
		
		PartKeepr::getEM()->remove($manufacturer);
		PartKeepr::getEM()->flush();
	}
}