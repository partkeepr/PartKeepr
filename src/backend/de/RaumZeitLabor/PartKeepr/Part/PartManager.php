<?php
namespace de\RaumZeitLabor\PartKeepr\Part;

use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter,
	Doctrine\ORM\QueryBuilder,
	de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter,
	de\RaumZeitLabor\PartKeepr\Manager\AbstractManager,
	de\RaumZeitLabor\PartKeepr\Unit\Unit,
	de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix,
	de\RaumZeitLabor\PartKeepr\Part\PartDistributor,
	de\RaumZeitLabor\PartKeepr\Part\PartManufacturer,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation,
	de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationManager,
	de\RaumZeitLabor\PartKeepr\Part\Part,
	de\RaumZeitLabor\PartKeepr\PartUnit\PartUnitManager,
	de\RaumZeitLabor\PartKeepr\Distributor\Distributor,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerManager;

class PartManager extends AbstractManager {
	
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. de\RaumZeitLabor\PartKeepr\Part
	 */
	public function getEntityName () {
		return 'de\RaumZeitLabor\PartKeepr\Part\Part';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array("name", "averagePrice", "status", "needsReview", "createDate", "id", "stockLevel",
					"minStockLevel", "comment", "st.id AS storageLocation_id", "categoryPath",
					"st.name as storageLocationName", "f.id AS footprint_id", "f.name AS footprintName",
					"c.id AS category", "c.name AS categoryName", "pu.id AS partUnit", "pu.name AS partUnitName",
					"pu.is_default AS partUnitDefault"			 
				);
	}
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	public function getDefaultSortField () {
		return "dateTime";
	}
	
	/**
	 * Appends various join tables to the result set
	 * 
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Manager.AbstractManager::applyCustomQuery()
	 */
	protected function applyCustomQuery (QueryBuilder $qb, ManagerFilter $filter) {
		/**
		 * Pull in additional tables
		 */
		$qb	->join("q.storageLocation", "st")
			->leftJoin("q.footprint", "f")
			->join("q.category", "c")
			->leftJoin("q.partUnit", "pu");
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