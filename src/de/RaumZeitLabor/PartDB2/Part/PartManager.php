<?php
namespace de\raumzeitlabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Footprint\Footprint,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\Footprint\Exceptions\FootprintNotFoundException;

class PartManager extends Singleton {
	public function getParts ($aParameters = array()) {
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("COUNT(p)")->from("de\RaumZeitLabor\PartDB2\Part\Part","p");
		
		if (array_key_exists("limit", $aParameters)) {
			$limit = intval($aParameters["limit"]);
		} else {
			$limit = 20;
		}
		
		if (array_key_exists("start", $aParameters)) {
			$start = intval($aParameters["start"]);
		} else {
			$start = 0;
		}
		
		if (array_key_exists("dir", $aParameters)) {
			$dir = $aParameters["dir"];
			
			if (strtolower($dir) != "asc" && strtolower($dir) != "desc") {
				$dir = "asc";
			}
		} else {
			$dir = "asc";
		}
		
		if (array_key_exists("sortby", $aParameters)) {
			$sortby = $aParameters["sortby"];
			
			switch (strtolower($sortby)) {
				case "name":
					break;
				default:
					$sortby = "name";
			}
		} else {
			$sortby = "name";
		}
		
		if (array_key_exists("category", $aParameters)) {
			$category = intval($aParameters["category"]);
		} else {
			$category = 0;
		}
		
		$qb->where("1=1");
		
		if ($category !== 0) {
			/* Fetch all children */
			$childs = CategoryManager::getInstance()->getChildNodes($category);
			$childs[] = $category;
			$qb->andWhere("p.category IN (".implode(",", $childs).")");
		}
		
		$countQuery = $qb->getQuery();
		$count = $countQuery->getSingleScalarResult();
		
		$qb->setMaxResults($limit);
		$qb->setFirstResult($start);
		$qb->select("p.name");
		$qb->orderBy("p.".$sortby, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getArrayResult();
		
		return array("parts" => $result, "totalCount" => $count);
	}
}