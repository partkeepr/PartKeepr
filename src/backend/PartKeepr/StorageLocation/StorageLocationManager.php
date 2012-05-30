<?php
namespace PartKeepr\StorageLocation;

use PartKeepr\Util\Singleton,
	PartKeepr\StorageLocation\StorageLocation,
	PartKeepr\PartKeepr,
	PartKeepr\Category\CategoryManager,
	PartKeepr\StorageLocation\Exceptions\StorageLocationNotFoundException;

class StorageLocationManager extends Singleton {
	public function getStorageLocations ($start = 0, $limit = 10, $sort = "footprint", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name")->from("PartKeepr\StorageLocation\StorageLocation","st");

		if ($filter != "") {
			$qb = $qb->where("LOWER(st.name) LIKE :filter");
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
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\StorageLocation\StorageLocation","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.name) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "start" => $start, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getStorageLocation ($id) {
		$storageLocation = PartKeepr::getEM()->find("PartKeepr\StorageLocation\StorageLocation", $id);
		
		if ($storageLocation) {
			return $storageLocation;
		} else {
			throw new StorageLocationNotFoundException();
		}
	}
	
	public function getStorageLocationByName ($name) {
		$query = PartKeepr::getEM()->createQuery("SELECT s FROM PartKeepr\StorageLocation\StorageLocation s WHERE s.name = :name");
		$query->setParameter("name", $name);
		
		return $query->getSingleResult();
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