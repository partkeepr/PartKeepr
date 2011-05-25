<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\StorageLocation\Exceptions\StorageLocationNotFoundException;

class StorageLocationManager extends Singleton {
	public function getStorageLocations ($start = 0, $limit = 10, $sort = "footprint", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name")->from("de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("storageLocations" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getStorageLocation ($id) {
		$storageLocation = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation", $id);
		
		if ($storageLocation) {
			return $storageLocation;
		} else {
			throw new StorageLocationNotFoundException();
		}
	}
	
	public function addStorageLocation ($name) {
		$storageLocation = new StorageLocation();
		$storageLocation->setName($name);
		
		PartDB2::getEM()->persist($storageLocation);
	}
	public function deleteStorageLocation ($id) {
		$storageLocation = $this->getStorageLocation($id);
		
		PartDB2::getEM()->remove($storageLocation);
		PartDB2::getEM()->flush();
	}
}