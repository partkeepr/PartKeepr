<?php
namespace de\raumzeitlabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Util\SerializableException,
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
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function addFootprint ($footprint) {
		$fp = new Footprint();
		$fp->setFootprint($footprint);
		
		// @todo Port the UniqueEntityValidator from Symfony2 to here.
		try {
			PartDB2::getEM()->persist($fp);
			PartDB2::getEM()->flush();
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				$exception = new SerializableException(sprintf(PartDB2::i18n("Footprint %s already exists!"), $footprint));
				$exception->setDetail(sprintf(PartDB2::i18n("You tried to add the footprint %s, but a footprint with the same name already exists."), $footprint));
				
				throw $exception;
			} else {
				throw $e;
			}
		}
		
		return $fp;
	}
	
	public function deleteFootprint ($id) {
		$footprint = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Footprint\Footprint", $id);
		
		if ($footprint) {
			try {
				PartDB2::getEM()->remove($footprint);
				PartDB2::getEM()->flush();	
			} catch (\PDOException $e) {
				if ($e->getCode() == "23000") {
					$exception = new SerializableException(sprintf(PartDB2::i18n("Footprint %s is in use by some parts!"), $footprint->getFootprint()));
					$exception->setDetail(sprintf(PartDB2::i18n("You tried to delete the footprint %s, but there are parts which use this footprint."), $footprint->getFootprint()));
				
					throw $exception;
				}
			}
			
		} else {
			throw new FootprintNotFoundException;
		}
	}
	
	public function getOrCreateFootprint ($footprint) {
		try {
			return $this->getFootprint($footprint);
		} catch (FootprintNotFoundException $e) {
			$fp = new Footprint();
			$fp->setFootprint($footprint);

			PartDB2::getEM()->persist($fp);
			
			return $fp;
		}
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