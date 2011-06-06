<?php
namespace de\raumzeitlabor\PartDB2\Part;
use de\RaumZeitLabor\PartDB2\Part\PartDistributor;

use de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation;

use de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocationManager;

use de\RaumZeitLabor\PartDB2\Part\Part;
use de\RaumZeitLabor\PartDB2\Distributor\Distributor;
use de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer;
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
	public function getParts ($start = 0, $limit = 10, $sort = "name", $dir = "asc", $filter = "", $category = 0) {
		
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("COUNT(p.id)")->from("de\RaumZeitLabor\PartDB2\Part\Part","p")
		->join("p.storageLocation", "st")
		->leftJoin("p.footprint", "f")
		->join("p.category", "c");

		$qb->where("1=1");
		if ($filter != "") {
			$qb = $qb->where("p.name LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
				
		switch ($sort) {
			case "storageLocationName":
				$orderBy  = "st.name";
				break;
			case "footprintName":
				$orderBy = "f.footprint";
				break;
			default;
				$orderBy = "p.".$sort;
				break;
		}
		$qb->orderBy($orderBy, $dir);

		
		$category = intval($category);
		
		
		
		if ($category !== 0) {
			/* Fetch all children */
			$childs = CategoryManager::getInstance()->getChildNodes($category);
			$childs[] = $category;
			$qb->andWhere("p.category IN (".implode(",", $childs).")");
		}
		
		$totalQuery = $qb->getQuery();
		
		
		
		
		$qb->select("p.name, p.id, p.stockLevel, p.minStockLevel, p.comment, st.id AS storageLocation_id, st.name as storageLocationName, f.id AS footprint_id, f.footprint AS footprintName, c.id AS category_id, c.name AS categoryName");

		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$query = $qb->getQuery();
		
		$result = $query->getArrayResult();
		
		
		
		return array("data" => $result, "totalCount" => $totalQuery->getSingleScalarResult());
	}
	
	public function addOrUpdatePart ($aParameters) {
		
		if (!array_key_exists("quantity", $aParameters)) {
			$aParameters["quantity"] = 0;
		}
		
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
		
		if (array_key_exists("name", $aParameters)) {
			$part->setName($aParameters["name"]);
		}
		
		if (array_key_exists("minstock", $aParameters)) {
			$part->setMinStockLevel($aParameters["minstock"]);
		}
		
		if (array_key_exists("comment", $aParameters)) {
			$part->setComment($aParameters["comment"]);
		}
		
		if (array_key_exists("footprint", $aParameters)) {
			
			if ($aParameters["footprint"] === null) {
				$part->setFootprint(null);	
			} else {
				$footprint = FootprintManager::getInstance()->getOrCreateFootprint($aParameters["footprint"]);
				$part->setFootprint($footprint);
			}
		}
		
		if (array_key_exists("storagelocation", $aParameters)) {
			$storageLocation = StorageLocationManager::getInstance()->getOrCreateStorageLocation($aParameters["storagelocation"]);
			$part->setStorageLocation($storageLocation);
		}
		
		if (array_key_exists("category", $aParameters)) {
			$category = CategoryManager::getInstance()->getCategory($aParameters["category"]);
			$part->setCategory($category->getNode());	
		}
		
		/* Process linked changes */
		if (array_key_exists("distributorChanges", $aParameters)) {
			if (is_array($aParameters["distributorChanges"])) {
				$this->processDistributorChanges($part, $aParameters["distributorChanges"]);
			}
		}
		
		if (array_key_exists("manufacturerChanges", $aParameters)) {
			if (is_array($aParameters["manufacturerChanges"])) {
				$this->processManufacturerChanges($part, $aParameters["manufacturerChanges"]);
			}
		}
		
		PartDB2::getEM()->persist($part);
		PartDB2::getEM()->flush();
		
	}
	
	private function processDistributorChanges (Part $part, Array $data) {
		if (array_key_exists("updates", $data)) {
			foreach ($data["updates"] as $record) {
				foreach ($part->getDistributors() as $partDistributor) {
					if ($partDistributor->getId() == $record["id"]) {
						$partDistributor->setOrderNumber($record["orderNumber"]);
						$partDistributor->setDistributor(Distributor::loadById($record["distributor_id"]));
						$partDistributor->setPackagingUnit($record["packagingUnit"]);
					}
				}
			}
		}
		
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getDistributors() as $partDistributor) {
					if ($partDistributor->getId() == $record["id"]) {
						PartDB2::getEM()->remove($partDistributor);
						$part->getDistributors()->removeElement($partDistributor);
						break;
					}
				}
			}
		}
		
		if (array_key_exists("inserts", $data)) {
			foreach ($data["inserts"] as $record) {
				$distributor = new PartDistributor($part, Distributor::loadById($record["distributor_id"]));
				$distributor->setOrderNumber($record["orderNumber"]);
				$distributor->setPackagingUnit($record["packagingUnit"]);
				
				$part->getDistributors()->add($distributor);
			}
		}
	}
	
	private function processManufacturerChanges (Part $part, Array $data) {
		if (array_key_exists("updates", $data)) {
			foreach ($data["updates"] as $record) {
				foreach ($part->getManufacturers() as $partManufacturer) {
					if ($partManufacturer->getId() == $record["id"]) {
						$partManufacturer->setPartNumber($record["partNumber"]);
						$partManufacturer->setManufacturer(Manufacturer::loadById($record["manufacturer_id"]));
					}
				}
			}
		}
		
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getManufacturers() as $partManufacturer) {
					if ($partManufacturer->getId() == $record["id"]) {
						PartDB2::getEM()->remove($partManufacturer);
						$part->getManufacturers()->removeElement($partManufacturer);
						break;
					}
				}
			}
		}
		
		if (array_key_exists("inserts", $data)) {
			foreach ($data["inserts"] as $record) {
				$manufacturer = new PartManufacturer($part, Manufacturer::loadById($record["manufacturer_id"]));
				$manufacturer->setPartNumber($record["partNumber"]);
				
				$part->getManufacturers()->add($manufacturer);
			}
		}
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