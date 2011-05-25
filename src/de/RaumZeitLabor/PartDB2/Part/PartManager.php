<?php
namespace de\raumzeitlabor\PartDB2\Part;
use de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation;

use de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocationManager;

use de\RaumZeitLabor\PartDB2\Part\Part;
use de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;
use de\RaumZeitLabor\PartDB2\Session\SessionManager;
use de\RaumZeitLabor\PartDB2\Stock\StockEntry;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Footprint\Footprint,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerManager,
	de\RaumZeitLabor\PartDB2\Footprint\Exceptions\FootprintNotFoundException;

class PartManager extends Singleton {
	public function getParts ($aParameters = array()) {
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("COUNT(p)")->from("de\RaumZeitLabor\PartDB2\Part\Part","p")->leftJoin('p.storageLocation', "st");
		
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
		
		if (array_key_exists("stockmode", $aParameters)) {
			switch (strtolower($aParameters["stockmode"])) {
				case "all":
				case "zero":
				case "nonzero":
					$stockmode = strtolower($aParameters["stockmode"]);
					break;
				default:
					$stockmode = "all";
			}
		} else {
			$stockmode = "all";
		}
		
		if (array_key_exists("sort", $aParameters)) {
			$sortby = $aParameters["sort"];
			
			switch (strtolower($sortby)) {
				case "name":
					$sortby = "p.name";
					break;
				case "storagelocation":
					$sortby = "st.name";
					break;
				default:
					$sortby = "p.name";
			}
		} else {
			$sortby = "p.name";
		}
		
		if (array_key_exists("category", $aParameters)) {
			$category = intval($aParameters["category"]);
		} else {
			$category = 0;
		}
		
		$qb->where("1=1");
		
		switch ($stockmode) {
			case "all":
				break;
			case "zero":
				$qb->andWhere("p.stockLevel = 0");
				break;
			case "nonzero":
				$qb->andWhere("p.stockLevel > 0");	
		}
		
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
		$qb->select("p.id, p.name, p.stockLevel, st.name AS storagelocation");
		
		$qb->orderBy($sortby, $dir);
		
		$query = $qb->getQuery();
		
		$result = $query->getArrayResult();
		
		return array("parts" => $result, "totalCount" => $count);
	}
	
	public function addOrUpdatePart ($aParameters) {
		
		if ($aParameters["part"] !== null) {
			try {
				$part = $this->getPart($aParameters["part"]);
			} catch (\Exception $e) {
				$part = new Part();
				$user = SessionManager::getCurrentSession()->getUser();
		
				$stock = new StockEntry($part, $aParameters["quantity"], $user);
				PartDB2::getEM()->persist($stock);
			}
		} else {
			$part = new Part();
			
			$user = SessionManager::getCurrentSession()->getUser();
		
			$stock = new StockEntry($part, $aParameters["quantity"], $user);
			PartDB2::getEM()->persist($stock);
		}
		
		$part->setName($aParameters["name"]);
		$part->setMinStockLevel($aParameters["minstock"]);
		$part->setComment($aParameters["comment"]);
		
		try {
			$footprint = FootprintManager::getInstance()->getFootprint($aParameters["footprint"]);
			$part->setFootprint($footprint);	
		} catch (\Exception $e) {}
		
		try {
			$storageLocation = StorageLocationManager::getInstance()->getStorageLocation($aParameters["storagelocation"]);
			$part->setStorageLocation($storageLocation);	
		} catch (\Exception $e) {
			$storageLocation = new StorageLocation();
			$storageLocation->setName($aParameters["storagelocation"]);
			$part->setStorageLocation($storageLocation);
			
			PartDB2::getEM()->persist($storageLocation);
		}
		
		try {
			$manufacturer = ManufacturerManager::getInstance()->getManufacturer($aParameters["manufacturer"]);
			$part->setManufacturer($manufacturer);	
		} catch (\Exception $e) {
			$manufacturer = new Manufacturer();
			$manufacturer->setName($aParameters["manufacturer"]);
			$part->setManufacturer($manufacturer);
			
			PartDB2::getEM()->persist($manufacturer);
		}
		
		
		$category = CategoryManager::getInstance()->getCategory($aParameters["category"]);
		$part->setCategory($category->getNode());
		
		PartDB2::getEM()->persist($part);
		PartDB2::getEM()->flush();
		
	}
	public function deletePart ($id) {
		$part = PartManager::getInstance()->getPart($id);
		
		PartDB2::getEM()->remove($part);
		PartDB2::getEM()->flush();
	}
	
	public function getPart ($id) {
		$part = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Part\Part", $id);
		
		return $part;
	}
}