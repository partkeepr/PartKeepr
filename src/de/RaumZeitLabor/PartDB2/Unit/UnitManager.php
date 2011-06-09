<?php
namespace de\RaumZeitLabor\PartDB2\Unit;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Unit\Exceptions\UnitNotFoundException;

class UnitManager extends Singleton {
	public function getUnits ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("u.id, u.name, u.symbol")->from("de\RaumZeitLabor\PartDB2\Unit\Unit","u");

		if ($filter != "") {
			$qb = $qb->where("u.name LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("u.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(u.id)")->from("de\RaumZeitLabor\PartDB2\Unit\Unit","u");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("u.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		foreach ($result as $key => $value) {
			$result[$key]["prefixes"] = $this->getSiPrefixes($value["id"]);
		}
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getSiPrefixes ($id) {
		$unit = UnitManager::getInstance()->getUnit($id);
		
		$aData = array();
		
		foreach ($unit->getPrefixes() as $prefix) {
			$aData[] = $prefix->serialize();	
		}
		
		return array("response" => array("totalCount" => count($aData), "data" => $aData));
	}
	
	public function getUnit ($id) {
		$unit = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Unit\Unit", $id);
		
		if ($unit) {
			return $unit;
		} else {
			throw new UnitNotFoundException();
		}
	}
	
	public function deleteUnit ($id) {
		$unit = $this->getUnit($id);
		
		PartDB2::getEM()->remove($unit);
		PartDB2::getEM()->flush();
	}
	

}