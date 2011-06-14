<?php
namespace de\raumzeitlabor\PartKeepr\Footprint;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Footprint\Exceptions\FootprintNotFoundException;

class FootprintManager extends Singleton {
	public function getFootprints ($start = 0, $limit = 10, $sort = "footprint", $dir = "asc", $filter = "") {
		
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("f.id, f.footprint")->from("de\RaumZeitLabor\PartKeepr\Footprint\Footprint","f");

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
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(f.id)")->from("de\RaumZeitLabor\PartKeepr\Footprint\Footprint","f");
		
		
		
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
			PartKeepr::getEM()->persist($fp);
			PartKeepr::getEM()->flush();
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				$exception = new SerializableException(sprintf(PartKeepr::i18n("Footprint %s already exists!"), $footprint));
				$exception->setDetail(sprintf(PartKeepr::i18n("You tried to add the footprint %s, but a footprint with the same name already exists."), $footprint));
				
				throw $exception;
			} else {
				throw $e;
			}
		}
		
		return $fp;
	}
	
	public function deleteFootprint ($id) {
		$footprint = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Footprint\Footprint", $id);
		
		if ($footprint) {
			try {
				PartKeepr::getEM()->remove($footprint);
				PartKeepr::getEM()->flush();	
			} catch (\PDOException $e) {
				if ($e->getCode() == "23000") {
					$exception = new SerializableException(sprintf(PartKeepr::i18n("Footprint %s is in use by some parts!"), $footprint->getFootprint()));
					$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the footprint %s, but there are parts which use this footprint."), $footprint->getFootprint()));
				
					throw $exception;
				}
			}
			
		} else {
			throw new FootprintNotFoundException;
		}
	}
	
	public function getOrCreateFootprint ($footprint) {
		if (is_int($footprint)) {
			try {
				return $this->getFootprint($footprint);
			} catch (FootprintNotFoundException $e) {}
		}
		
		$fp = new Footprint();
		$fp->setFootprint($footprint);

		PartKeepr::getEM()->persist($fp);
			
		return $fp;
	}
	
	public function getFootprint ($id) {
		$footprint = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Footprint\Footprint", $id);
		
	if ($footprint) {
			return $footprint;
		} else {
			throw new FootprintNotFoundException;
		}
	}
}