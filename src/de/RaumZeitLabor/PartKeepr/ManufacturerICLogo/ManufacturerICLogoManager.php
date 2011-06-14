<?php
namespace de\RaumZeitLabor\PartKeepr\ManufacturerICLogo;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerICLogoManager extends Singleton {
	public function getManufacturerICLogos ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, maf.id AS manufacturer_id")->from("de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo","st")
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
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.manufacturer = :manufacturer");
			$totalQueryBuilder->setParameter("manufacturer", $manufacturer);
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getManufacturerICLogo ($id) {
		$manufacturer = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo", $id);
		
		if ($manufacturer) {
			return $manufacturer;
		} else {
			throw new ManufacturerNotFoundException();
		}
	}
	
	public function addManufacturerICLogo ($name) {
		$manufacturer = new ManufacturerICLogo();
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