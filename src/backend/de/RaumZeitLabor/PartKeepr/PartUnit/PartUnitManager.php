<?php
namespace de\RaumZeitLabor\PartKeepr\PartUnit;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	de\RaumZeitLabor\PartKeepr\PartUnit\Exceptions\PartUnitNotFoundException;

class PartUnitManager extends Singleton {
	public function getPartUnits ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "") {
			
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("st.id, st.name, st.shortName, st.is_default AS default")->from("de\RaumZeitLabor\PartKeepr\Part\PartUnit","st");

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
		$totalQueryBuilder->select("COUNT(st.id)")->from("de\RaumZeitLabor\PartKeepr\Part\PartUnit","st");
		
		
		
		if ($filter != "") {
			$totalQueryBuilder = $totalQueryBuilder->where("st.name LIKE :filter");
			$totalQueryBuilder->setParameter("filter", "%".$filter."%");
		}
		
		$totalQuery = $totalQueryBuilder->getQuery();
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function getPartUnit ($id) {
		$partUnit = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Part\PartUnit", $id);
		
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
		$dql = 'SELECT pu FROM de\RaumZeitLabor\PartKeepr\Part\PartUnit pu WHERE pu.is_default = :default';
		return PartKeepr::getEM()->createQuery($dql)->setParameter("default", true)->getSingleResult();
	}
	
	public function setDefaultPartUnit ($id) {
		PartKeepr::getEM()->beginTransaction();
		
		$dql = 'UPDATE de\RaumZeitLabor\PartKeepr\Part\PartUnit pu SET pu.is_default = :default WHERE pu.id = :id';
		PartKeepr::getEM()->createQuery($dql)->setParameter("id", $id)->setParameter("default", true, \PDO::PARAM_BOOL)->execute();

		$dql = 'UPDATE de\RaumZeitLabor\PartKeepr\Part\PartUnit pu SET pu.is_default = :default WHERE pu.id != :id';
		PartKeepr::getEM()->createQuery($dql)->setParameter("id", $id)->setParameter("default", false, \PDO::PARAM_BOOL)->execute();
		
		PartKeepr::getEM()->commit();
	}
	
	public function getUnitCounts () {
		$dql = 'SELECT SUM(p.stockLevel) AS stockLevel, pu.id AS puid FROM de\RaumZeitLabor\PartKeepr\Part\PartUnit pu LEFT JOIN pu.parts p GROUP BY pu.id';
		
		$result = PartKeepr::getEM()->createQuery($dql)->getResult();
		
		return $result;
	}
}