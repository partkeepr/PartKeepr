<?php
namespace PartKeepr\Part;

use PartKeepr\Logger\Logger;

use PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\Manager\ManagerFilter,
	Doctrine\ORM\QueryBuilder,
	PartKeepr\PartParameter\PartParameter,
	PartKeepr\Manager\AbstractManager,
	PartKeepr\Unit\Unit,
	PartKeepr\SiPrefixBundle\Entity\SiPrefix,
	PartKeepr\Part\PartDistributor,
	PartKeepr\Part\PartManufacturer,
	PartKeepr\StorageLocation\StorageLocation,
	PartKeepr\StorageLocation\StorageLocationManager,
	PartKeepr\Part\Part,
	Doctrine\ORM\Query,
	PartKeepr\PartUnit\PartUnitManager,
	PartKeepr\Distributor\Distributor,
	PartKeepr\Manufacturer\Manufacturer,
	PartKeepr\Footprint\FootprintManager,
	PartKeepr\Session\SessionManager,
	PartKeepr\Stock\StockEntry,
	PartKeepr\Util\Singleton,
	PartKeepr\Footprint\Footprint,
	PartKeepr\PartKeepr,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\Manufacturer\ManufacturerManager;

class PartManager extends AbstractManager {
	
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. PartKeepr\Part
	 */
	public function getEntityName () {
		return 'PartKeepr\Part\Part';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array("name", "description", "averagePrice", "status", "needsReview", "createDate", "id", "stockLevel",
					"minStockLevel", "comment", "st.id AS storageLocation_id", "c.categoryPath AS categoryPath",
					"st.name as storageLocationName", "f.id AS footprint_id", "f.name AS footprintName",
					"c.id AS category", "c.name AS categoryName", "pu.id AS partUnit", "pu.name AS partUnitName",
                    "pu.shortName AS partUnitShortName", "pu.is_default AS partUnitDefault", "partCondition"
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
	 * @see PartKeepr\Manager.AbstractManager::applyCustomQuery()
	 */
	protected function applyCustomQuery (QueryBuilder $qb, ManagerFilter $filter) {
		/**
		 * Pull in additional tables
		 */
		$qb	->join("q.storageLocation", "st")
			->leftJoin("q.footprint", "f")
			->join("q.category", "c")
			->leftJoin("q.partUnit", "pu");

		// Apply special handling for non-direct fields in relations, where the frontend has no idea about.
		foreach ($filter->getSorters() as $sorter) {
			switch ($sorter->getSortField()) {
				case "q.categoryPath":
					$sorter->setSortField("c.categoryPath");
					break;
				case "q.storageLocationName":
					$sorter->setSortField("st.name");
					break;
				case "q.footprintName":
					$sorter->setSortField("f.name");
					break;
				default:
					break;
			}
		}		
		
	}
	
	/**
	 * Processes the result after it was retrieved. In the default configuration, it returns an array result, or
	 * if no query fields are specified, it tries to serialize all objects.
	 */
	protected function getResult (Query $query) {
		$result = parent::getResult($query);
		
		$partIds = array();
		foreach ($result as $key => $item) {
			$partIds[] = $item["id"];
		}

		$attachmentCounts = $this->getAttachmentCounts($partIds);;
		$projects = $this->getProjects($partIds);
		
		foreach ($result as $key => $item) {
			if (array_key_exists($item["id"], $attachmentCounts)) {
				$result[$key]["attachmentCount"] = $attachmentCounts[$item["id"]];
			} else {
				$result[$key]["attachmentCount"] = 0;
			}
			
			if (array_key_exists($item["id"], $projects)) {
				$result[$key]["projects"] = implode(", ", $projects[$item["id"]]);
			}
			
			$result[$key]["createDate"] = $result[$key]["createDate"]->format("Y-m-d H:i:s");
			
			$part = Part::loadById($item["id"]);
			$result[$key]["attachments"] = $part->serializeChildren($part->getAttachments()); 
		}

		return $result;
	}
	
	/**
	 * Returns a list of projects for a list of part ids.
	 * 
	 * @param $partIds Array an array of part ids to get the project names for
	 * @return Array an array where the key is the part id and the value is an array of project names
	 */
	private function getProjects (array $partIds) {
		if (count($partIds) == 0) {
			return array();
		}
		
		$dql2 = "SELECT DISTINCT pr.id, pr.name, part.id FROM PartKeepr\Project\Project pr JOIN pr.parts ppart JOIN ppart.part part WHERE ppart.part IN (:partids)";
		$projectQuery = PartKeepr::getEM()->createQuery($dql2);
		$projectQuery->setParameter("partids", $partIds);

		$projects = array();
		
		foreach ($projectQuery->getResult() as $projectResult) {
			if (!array_key_exists($projectResult["id"], $projects)) {
				$projects[$projectResult["id"]] = array();
			}
			$projects[$projectResult["id"]][] = $projectResult["name"];
		}

		return $projects;
	}
	
	/**
	 * Returns a list of attachment counts for a list of part ids.
	 * 
	 * @param $partIds Array an array of part ids to get the attachment counts for
	 * @return Array an array where the key is the part id and the value is the attachment count
	 */
	private function getAttachmentCounts (array $partIds) {
		if (count($partIds) == 0) {
			return array();
		}
		
		$dql = "SELECT p.id, COUNT(pa) AS cnt FROM PartKeepr\Part\PartAttachment pa JOIN pa.part p WHERE pa.part IN ";
        $dql .= "(:partids) GROUP BY pa.part, p.id";

		$partAttachmentQuery = PartKeepr::getEM()->createQuery($dql);
		$partAttachmentQuery->setParameter("partids", $partIds);
		
		$attachmentCounts = array();
		
		foreach ($partAttachmentQuery->getResult() as $attachmentResult) {
			$attachmentCounts[$attachmentResult["id"]] = intval($attachmentResult["cnt"]);
		}
		
		return $attachmentCounts;
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
		
		if (array_key_exists("description", $aParameters)) {
			$part->setDescription($aParameters["description"]);
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
		$part = PartKeepr::getEM()->find("PartKeepr\Part\Part", $id);
		
		return $part;
	}
	
	/**
	 * Returns the overall part count currently existing.
	 * @param boolean $withPrice Only consider parts with a price
	 * @return int The amount of parts in the database
	 */
	public function getPartCount ($withPrice = false) {
		$dql = "SELECT COUNT(p.id) FROM PartKeepr\Part\Part p";
		
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
		$dql = "SELECT SUM(p.averagePrice * p.stockLevel) FROM PartKeepr\Part\Part p";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
	
	/**
	 * Returns the average price for all parts. Only parts with a price are calculated.
	 * @return float The average price
	 */
	public function getAveragePrice () {
		$dql = "SELECT AVG(p.averagePrice) FROM PartKeepr\Part\Part p";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
}
