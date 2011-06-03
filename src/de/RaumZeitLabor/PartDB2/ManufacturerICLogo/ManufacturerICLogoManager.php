<?php
namespace de\RaumZeitLabor\PartDB2\ManufacturerICLogo;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerICLogoManager extends Singleton {
	public function getManufacturerICLogos ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, maf.id AS manufacturer_id")->from("de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo","st")
			->leftJoin('st.manufacturer', "maf");

		if ($filter != "") {
			$manufacturer = Manufacturer::loadById($filter);
			$qb = $qb->where("st.manufacturer = :manufacturer");
			$qb->setParameter("manufacturer", $manufacturer);
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);

		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.manufacturer = :manufacturer");
			$totalQueryBuilder->setParameter("manufacturer", $manufacturer);
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getManufacturerICLogo ($id) {
		$manufacturer = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo", $id);
		
		if ($manufacturer) {
			return $manufacturer;
		} else {
			throw new ManufacturerNotFoundException();
		}
	}
	
	public function addManufacturerICLogo ($name) {
		$manufacturer = new ManufacturerICLogo();
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