<?php
namespace de\RaumZeitLabor\PartKeepr\Manufacturer;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerManager extends Singleton {
	public function getManufacturers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address")->from("de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getManufacturer ($id) {
		$manufacturer = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer", $id);
		
		if ($manufacturer) {
			return $manufacturer;
		} else {
			throw new ManufacturerNotFoundException();
		}
	}
	
	public function addManufacturer ($name) {
		$manufacturer = new Manufacturer();
		$manufacturer->setName($name);
		
		PartKeepr::getEM()->persist($manufacturer);
		PartKeepr::getEM()->flush();
		
		return $manufacturer;
	}
	public function deleteManufacturer ($id) {
		$manufacturer = $this->getManufacturer($id);
		
		PartKeepr::getEM()->remove($manufacturer);
		PartKeepr::getEM()->flush();
	}
}