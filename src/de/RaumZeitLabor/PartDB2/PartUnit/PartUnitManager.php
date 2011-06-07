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
		$qb->select("st.id, st.name, st.shortName, st.is_default AS default")->from("de\RaumZeitLabor\PartDB2\Part\PartUnit","st");

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
	
	public function setDefaultPartUnit ($id) {
		PartDB2::getEM()->beginTransaction();
		
		$dql = 'UPDATE de\RaumZeitLabor\PartDB2\Part\PartUnit pu SET pu.is_default = 1 WHERE pu.id = :id';
		PartDB2::getEM()->createQuery($dql)->setParameter("id", $id)->execute();

		$dql = 'UPDATE de\RaumZeitLabor\PartDB2\Part\PartUnit pu SET pu.is_default = 0 WHERE pu.id != :id';
		PartDB2::getEM()->createQuery($dql)->setParameter("id", $id)->execute();
		
		PartDB2::getEM()->commit();
	}
}