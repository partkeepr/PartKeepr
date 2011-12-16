<?php
namespace de\raumzeitlabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile;

use de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter;

use de\RaumZeitLabor\PartKeepr\Unit\Unit;
use de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix;

use de\RaumZeitLabor\PartKeepr\Part\PartDistributor;
use de\RaumZeitLabor\PartKeepr\Part\PartManufacturer;

use de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation;

use de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationManager;

use de\RaumZeitLabor\PartKeepr\Part\Part;
use de\RaumZeitLabor\PartKeepr\PartUnit\PartUnitManager;
use de\RaumZeitLabor\PartKeepr\Distributor\Distributor;
use de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;
use de\RaumZeitLabor\PartKeepr\Stock\StockEntry;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerManager;

class PartManager extends Singleton {
	/**
	 * Returns a list of parts.
	 *
	 * @todo The parameter list. We need to invent something so that we don't have like 20 parameters for this method.
	 */
	public function getParts ($start = 0, $limit = 10, $sort = null, $filter = "", $category = 0, $categoryScope = "all", $stockMode = "all", $withoutPrice = false, $storageLocation = "") {
		
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select("COUNT(p.id)")->from("de\RaumZeitLabor\PartKeepr\Part\Part","p")
		->join("p.storageLocation", "st")
		->leftJoin("p.footprint", "f")
		->join("p.category", "c")
		->leftJoin("p.partUnit", "pu");
		

		$qb->where("1=1");
		if ($filter != "") {
			$qb = $qb->where("p.name LIKE :filter");
			$qb->setParameter("filter", "%".$filter."%");
		}
		
		if ($storageLocation != "") {
			$qb->andWhere("st.name = :storageLocation");
			$qb->setParameter("storageLocation", $storageLocation);
		}
		
		$category = intval($category);
		
		
		
		if ($category !== 0) {
			/* Fetch all children */
			if ($categoryScope == "selected") {
				$qb->andWhere("p.category = :category");
				$qb->setParameter("category", $category);
			} else {
				$childs = PartCategoryManager::getInstance()->getChildNodes($category);
				$childs[] = $category;
				$qb->andWhere("p.category IN (".implode(",", $childs).")");
			}
		}
		
		switch ($stockMode) {
			case "all":
				break;
			case "zero":
				$qb->andWhere("p.stockLevel = 0");
				break;
			case "nonzero":
				$qb->andWhere("p.stockLevel > 0");
				break;
			case "below":
				$qb->andWhere("p.stockLevel < p.minStockLevel");
				break;
		}
		
		if ($withoutPrice === true || $withoutPrice === "true") {
			$qb->andWhere("p.averagePrice IS NULL");
		}
		
		$totalQuery = $qb->getQuery();
		
		
		
		
		$qb->select("p.averagePrice, p.status, p.name, p.needsReview, p.createDate, p.id, p.stockLevel, p.minStockLevel, p.comment, st.id AS storageLocation_id, p.categoryPath, st.name as storageLocationName, f.id AS footprint_id, f.name AS footprintName, c.id AS category, c.name AS categoryName, pu.id AS partUnit, pu.name AS partUnitName, pu.is_default AS partUnitDefault");
		if ($sort === null) {
			$qb->addOrderBy("p.name", "ASC");
		} else {
			$sortArray = json_decode($sort, true);
			
			foreach ($sortArray as $sortParam) {
				switch ($sortParam["property"]) {
					case "storageLocationName":
						$orderBy  = "st.name";
						break;
					case "footprintName":
						$orderBy = "f.name";
						break;
					default;
						$orderBy = "p.".$sortParam["property"];
					break;
				}
				
				$qb->addOrderBy($orderBy, $sortParam["direction"]);
			}
		}
		
		
		if ($limit > -1) {
			$qb->setMaxResults($limit);
			$qb->setFirstResult($start);
		}
		
		$query = $qb->getQuery();
		
		$result = $query->getArrayResult();
		
		foreach ($result as $key => $item) {
			$dql = "SELECT COUNT(pa) FROM de\RaumZeitLabor\PartKeepr\Part\PartAttachment pa WHERE pa.part = :part";
			$query = PartKeepr::getEM()->createQuery($dql);
			$query->setParameter("part", $item["id"]);
			
			$result[$key]["attachmentCount"] = $query->getSingleScalarResult(); 
		}
		
		
		
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
				PartKeepr::getEM()->persist($stock);
			}
		} else {
			$part = new Part();
			
			$user = SessionManager::getCurrentSession()->getUser();
		
			$stock = new StockEntry($part, $aParameters["quantity"], $user);
			PartKeepr::getEM()->persist($stock);
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
			$category = PartCategoryManager::getInstance()->getCategory($aParameters["category"]);
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
		
		if (array_key_exists("parameterChanges", $aParameters)) {
			if (is_array($aParameters["parameterChanges"])) {
				$this->processParameterChanges($part, $aParameters["parameterChanges"]);
			}
		}
		
		if (array_key_exists("attachmentChanges", $aParameters)) {
			if (is_array($aParameters["attachmentChanges"])) {
				$this->processAttachmentChanges($part, $aParameters["attachmentChanges"]);
			}
		}
		
		if (array_key_exists("partUnit", $aParameters)) {
			if ($aParameters["partUnit"] === null || $aParameters["partUnit"] === 0) {
				$part->setPartUnit(null);
			} else {
				$part->setPartUnit(PartUnitManager::getInstance()->getPartUnit($aParameters["partUnit"]));
			}
		}
		
		
		PartKeepr::getEM()->persist($part);
		PartKeepr::getEM()->flush();
		
	}
	
	private function processParameterChanges (Part $part, Array $data) {
		if (array_key_exists("updates", $data)) {
			foreach ($data["updates"] as $record) {
				foreach ($part->getParameters() as $partParameter) {
					if ($partParameter->getId() == $record["id"]) {
						$partParameter->setName($record["name"]);
						$partParameter->setDescription($record["description"]);
						$partParameter->setValue($record["value"]);
						$partParameter->setSiPrefix(SiPrefix::loadById($record["siprefix_id"]));
						$partParameter->setUnit(Unit::loadById($record["unit_id"]));
						break;
					}
				}
			}
		}
		
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getParameters() as $partParameter) {
					if ($partParameter->getId() == $record["id"]) {
						PartKeepr::getEM()->remove($partParameter);
						$part->getParameters()->removeElement($partParameter);
						break;
					}
				}
			}
		}
		
		if (array_key_exists("inserts", $data)) {
			foreach ($data["inserts"] as $record) {
				$partParameter = new PartParameter();
				$partParameter->setPart($part);
				
				$partParameter->setName($record["name"]);
				$partParameter->setDescription($record["description"]);
				$partParameter->setValue($record["value"]);
				$partParameter->setSiPrefix(SiPrefix::loadById($record["siprefix_id"]));
				$partParameter->setUnit(Unit::loadById($record["unit_id"]));
				
				$part->getParameters()->add($partParameter);
			}
		}
	}
	
	private function processDistributorChanges (Part $part, Array $data) {
		if (array_key_exists("updates", $data)) {
			foreach ($data["updates"] as $record) {
				foreach ($part->getDistributors() as $partDistributor) {
					if ($partDistributor->getId() == $record["id"]) {
						$partDistributor->setOrderNumber($record["orderNumber"]);
						$partDistributor->setDistributor(Distributor::loadById($record["distributor_id"]));
						$partDistributor->setPackagingUnit($record["packagingUnit"]);
						break;
					}
				}
			}
		}
		
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getDistributors() as $partDistributor) {
					if ($partDistributor->getId() == $record["id"]) {
						PartKeepr::getEM()->remove($partDistributor);
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
						break;
					}
				}
			}
		}
		
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getManufacturers() as $partManufacturer) {
					if ($partManufacturer->getId() == $record["id"]) {
						PartKeepr::getEM()->remove($partManufacturer);
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
	
	private function processAttachmentChanges (Part $part, Array $data) {
		if (array_key_exists("updates", $data)) {
			foreach ($data["updates"] as $record) {
				foreach ($part->getAttachments() as $partAttachment) {
					if ($partAttachment->getId() == $record["id"]) {
						$partAttachment->setDescription($record["description"]);
						break;
					}
				}
			}
		}
	
		if (array_key_exists("removals", $data)) {
			foreach ($data["removals"] as $record) {
				foreach ($part->getAttachments() as $partAttachment) {
					if ($partAttachment->getId() == $record["id"]) {
						PartKeepr::getEM()->remove($partAttachment);
						$part->getAttachments()->removeElement($partAttachment);
						break;
					}
				}
			}
		}
	
		if (array_key_exists("inserts", $data)) {
			foreach ($data["inserts"] as $record) {
				$attachment = new PartAttachment();
				$attachment->setPart($part);
				$attachment->setDescription($record["description"]); 
				
				$file = TempUploadedFile::loadById($record["tmp_id"]);
				
				$attachment->replace($file->getFilename());
				$attachment->setOriginalFilename($file->getOriginalFilename());
	
				$part->getAttachments()->add($attachment);
			}
		}
	}
	
	public function deletePart ($id) {
		$part = PartManager::getInstance()->getPart($id);
		
		PartKeepr::getEM()->remove($part);
		PartKeepr::getEM()->flush();
	}
	
	public function getPart ($id) {
		$part = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Part\Part", $id);
		
		return $part;
	}
	
	/**
	 * Returns the overall part count currently existing.
	 * @param boolean $withPrice Only consider parts with a price
	 * @return int The amount of parts in the database
	 */
	public function getPartCount ($withPrice = false) {
		$dql = "SELECT COUNT(p.id) FROM de\RaumZeitLabor\PartKeepr\Part\Part p";
		
		if ($withPrice === true) {
			$dql .= " WHERE p.averagePrice IS NOT NULL";
		}
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
	
	/**
	 * Returns the total price for all parts. Only parts with a price are calculated.
	 * @return float The total price
	 */
	public function getTotalPrice () {
		$dql = "SELECT SUM(p.averagePrice * p.stockLevel) FROM de\RaumZeitLabor\PartKeepr\Part\Part p";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
	
	/**
	 * Returns the average price for all parts. Only parts with a price are calculated.
	 * @return float The average price
	 */
	public function getAveragePrice () {
		$dql = "SELECT AVG(p.averagePrice) FROM de\RaumZeitLabor\PartKeepr\Part\Part p";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
}