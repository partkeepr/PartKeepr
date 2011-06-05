<?php
namespace de\RaumZeitLabor\PartDB2\Manufacturer;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerManager extends Singleton {
	public function getManufacturers ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.url, st.email, st.comment, st.address")->from("de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getManufacturer ($id) {
		$manufacturer = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer", $id);
		
		if ($manufacturer) {
			return $manufacturer;
		} else {
			throw new ManufacturerNotFoundException();
		}
	}
	
	public function addManufacturer ($name) {
		$manufacturer = new Manufacturer();
		$manufacturer->setName($name);
		
		PartDB2::getEM()->persist($manufacturer);
		PartDB2::getEM()->flush();
		
		return $manufacturer;
	}
	public function deleteManufacturer ($id) {
		$manufacturer = $this->getManufacturer($id);
		
		PartDB2::getEM()->remove($manufacturer);
		PartDB2::getEM()->flush();
	}
}