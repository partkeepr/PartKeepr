<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Footprint\Footprint,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\Footprint\Exceptions\FootprintNotFoundException;

class StorageLocationManager extends Singleton {
	public function getStorageLocations () {
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("COUNT(st)")->from("de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation","st");
		
		$countQuery = $qb->getQuery();
		$count = $countQuery->getSingleScalarResult();
		
		$qb->select("st.name, st.id");
		
		$qb->orderBy("st.name", "asc");
		
		$query = $qb->getQuery();
		
		$result = $query->getArrayResult();
		
		return array("storageLocations" => $result, "totalCount" => $count);
	}
	
	public function getStorageLocation ($id) {
		$storageLocation = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation", $id);
		
		if ($storageLocation) {
			return $storageLocation;
		} else {
			throw new \Exception("StorageLocation not found");
		}
	}
}