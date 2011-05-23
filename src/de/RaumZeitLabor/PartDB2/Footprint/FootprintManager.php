<?php
namespace de\raumzeitlabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Footprint\Footprint,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Footprint\Exceptions\FootprintNotFoundException;

class FootprintManager extends Singleton {
	public function getFootprints ($start = 0, $limit = 10, $sort = "footprint", $dir = "asc", $filter = "") {
		
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("f.id, f.footprint")->from("de\RaumZeitLabor\PartDB2\Footprint\Footprint","f");

		if ($filter != "") {
			$qb = $qb->where("f.footprint LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("f.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		$totalQueryBuilder = PartDB2::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(f.id)")->from("de\RaumZeitLabor\PartDB2\Footprint\Footprint","f");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("f.footprint LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("footprints" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function addFootprint ($footprint) {
		$fp = new Footprint();
		$fp->setFootprint($footprint);
		
		PartDB2::getEM()->persist($fp);
		
	}
	
	public function deleteFootprint ($id) {
		$footprint = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Footprint\Footprint", $id);
		
		if ($footprint) {
			PartDB2::getEM()->remove($footprint);
		} else {
			throw new FootprintNotFoundException;
		}
	}
	
	public function saveFootprint (Footprint $footprint) {
		PartDB2::getEM()->persist($footprint);
	}
	
	public function getFootprint ($id) {
		$footprint = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Footprint\Footprint", $id);
		
	if ($footprint) {
			return $footprint;
		} else {
			throw new FootprintNotFoundException;
		}
	}
}