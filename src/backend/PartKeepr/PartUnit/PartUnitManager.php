<?php
namespace PartKeepr\PartUnit;

use PartKeepr\Util\Singleton,
	PartKeepr\Part\PartUnit,
	PartKeepr\PartKeepr,
	PartKeepr\Category\CategoryManager,
	PartKeepr\PartUnit\Exceptions\PartUnitNotFoundException;

class PartUnitManager extends Singleton {
	public function getPartUnits ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.shortName, st.is_default AS default")->from("PartKeepr\Part\PartUnit","st");

		if ($filter != "") {
			$qb = $qb->where("LOWER(st.name) LIKE :filter");
			$qb->setParameter("filter", "%".strtolower($filter)."%");
		}
				
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$qb->orderBy("st.".$sort, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getResult();
		
		foreach ($result as $key => $row) {
			foreach ($row as $rowkey => $column) {
				if ($rowkey == "default") {
					if ($column == 0) {
						$result[$key][$rowkey] = false;
					} else {
						$result[$key][$rowkey] = true;
					}
				}
			}
		}
		
		$totalQueryBuilder = PartKeepr::getEM()->createQueryBuilder();
		$totalQueryBuilder->select("COUNT(st.id)")->from("PartKeepr\Part\PartUnit","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("LOWER(st.name) LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".strtolower($filter)."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getPartUnit ($id) {
		$partUnit = PartKeepr::getEM()->find("PartKeepr\Part\PartUnit", $id);
		
		if ($partUnit) {
			return $partUnit;
		} else {
			throw new PartUnitNotFoundException();
		}
	}
	
	public function deletePartUnit ($id) {
		$partUnit = $this->getPartUnit($id);
		
		PartKeepr::getEM()->remove($partUnit);
		PartKeepr::getEM()->flush();
	}
	
	/**
	 * Returns the default part unit for this system
	 * 
	 * @param none
	 * @return PartUnit The default part unit for this system
	 */
	public function getDefaultPartUnit () {
		$dql = 'SELECT pu FROM PartKeepr\Part\PartUnit pu WHERE pu.is_default = :default';
		return PartKeepr::getEM()->createQuery($dql)->setParameter("default", true)->getSingleResult();
	}
	
	public function setDefaultPartUnit ($id) {
		PartKeepr::getEM()->beginTransaction();
		
		$dql = 'UPDATE PartKeepr\Part\PartUnit pu SET pu.is_default = :default WHERE pu.id = :id';
		PartKeepr::getEM()->createQuery($dql)->setParameter("id", $id)->setParameter("default", true, \PDO::PARAM_BOOL)->execute();

		$dql = 'UPDATE PartKeepr\Part\PartUnit pu SET pu.is_default = :default WHERE pu.id != :id';
		PartKeepr::getEM()->createQuery($dql)->setParameter("id", $id)->setParameter("default", false, \PDO::PARAM_BOOL)->execute();
		
		PartKeepr::getEM()->commit();
	}
	
	public function getUnitCounts () {
		$dql = 'SELECT SUM(p.stockLevel) AS stockLevel, pu.id AS puid FROM PartKeepr\Part\PartUnit pu LEFT JOIN pu.parts p GROUP BY pu.id';
		
		$result = PartKeepr::getEM()->createQuery($dql)->getResult();
		
		return $result;
	}
}