<?php
namespace de\RaumZeitLabor\PartKeepr\StorageLocation;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	de\RaumZeitLabor\PartKeepr\StorageLocation\Exceptions\StorageLocationNotFoundException;

class StorageLocationManager extends Singleton {
	public function getStorageLocations ($start = 0, $limit = 10, $sort = "footprint", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name")->from("de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "start" => $start, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getStorageLocation ($id) {
		$storageLocation = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation", $id);
		
		if ($storageLocation) {
			return $storageLocation;
		} else {
			throw new StorageLocationNotFoundException();
		}
	}
	
	public function addStorageLocation ($name) {
		$storageLocation = new StorageLocation();
		$storageLocation->setName($name);
		
		PartKeepr::getEM()->persist($storageLocation);
		PartKeepr::getEM()->flush();
		
		return $storageLocation;
	}
	public function deleteStorageLocation ($id) {
		$storageLocation = $this->getStorageLocation($id);
		
		PartKeepr::getEM()->remove($storageLocation);
		PartKeepr::getEM()->flush();
	}
	
	public function getOrCreateStorageLocation ($storageLocation) {
		if (is_int($storageLocation)) {
			try {
				return $this->getStorageLocation($storageLocation);
			} catch (StorageLocationNotFoundException $e) {}	
		}
		
		$sl = new StorageLocation();
		$sl->setName($storageLocation);
			
		PartKeepr::getEM()->persist($sl);
			
		return $sl;
	}
}