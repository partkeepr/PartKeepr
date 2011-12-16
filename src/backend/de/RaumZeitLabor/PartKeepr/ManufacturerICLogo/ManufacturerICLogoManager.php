<?php
namespace de\RaumZeitLabor\PartKeepr\ManufacturerICLogo;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Exceptions\ManufacturerNotFoundException;

class ManufacturerICLogoManager extends Singleton {
	/**
	 * Returns a list of manufacturer ic logos.
	 *
	 * @param int $start Start of the list, default 0
	 * @param int $limit Number of users to list, default 10
	 * @param string $sort The field to sort by, default "name"
	 * @param string $dir The direction to sort (ASC or DESC), default ASC
	 * @param string $filter The manufacturer id
	 */
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
	
	/**
	 * Returns a manufacturer ic logo by id
	 * @param int $id The manufacturer ic logo id
	 */
	public function getManufacturerICLogo ($id) {
		return ManufacturerICLogo::loadById($id);
	}

}