<?php
namespace de\RaumZeitLabor\PartDB2\PartUnit;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Part\PartUnit,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\PartUnit\Exceptions\PartUnitNotFoundException;

class PartUnitManager extends Singleton {
	public function getPartUnits ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.shortName")->from("de\RaumZeitLabor\PartDB2\Part\PartUnit","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartDB2\Part\PartUnit","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getPartUnit ($id) {
		$partUnit = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Part\PartUnit", $id);
		
		if ($partUnit) {
			return $partUnit;
		} else {
			throw new PartUnitNotFoundException();
		}
	}
	
	public function deletePartUnit ($id) {
		$partUnit = $this->getPartUnit($id);
		
		PartDB2::getEM()->remove($partUnit);
		PartDB2::getEM()->flush();
	}
}