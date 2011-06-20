<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class PartService extends Service implements RestfulService {
	public function get () {
		if ($this->hasParameter("id")) {
			return PartManager::getInstance()->getPart($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return PartManager::getInstance()->getParts(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""),
			$this->getParameter("category", 0),
			$this->getParameter("categoryScope", "all"),
			$this->getParameter("stockMode", "all"),
			$this->getParameter("withoutPrice", false),
			$this->getParameter("storageLocation", ""));
		}
	}
	
	public function create () {
		throw new \Exception("Not yet implemented");
	}
	
	public function update () {
		throw new \Exception("Not yet implemented");
	}
	
	public function destroy () {
		throw new \Exception("Not yet implemented");
	}
	
	public function getPartParameterNames () {
		$dql = "SELECT pp.name FROM de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter pp GROUP BY pp.name";
		$query = PartKeepr::getEM()->createQuery($dql);
		
		return array("data" => $query->getArrayResult());
	}
	
	public function movePart () {
		$this->requireParameter("targetCategory");
		
		if ($this->getParameter("parts", false) !== false) {
			/* We are moving multiple parts */
			foreach ($this->getParameter("parts") as $part) {
				$part = Part::loadById($part);
				$category = PartCategory::loadById($this->getParameter("targetCategory"));
					
				$part->setCategory($category);
			}
		} else {
			$part = Part::loadById($this->getParameter("part"));
			$category = PartCategory::loadById($this->getParameter("targetCategory"));
			
			$part->setCategory($category);
				
		}
		
		
		PartKeepr::getEM()->flush();
	}
	// Old stuff below
	public function getParts () {
		$aParameters = array(
			"start" => $this->getParameter("start", 0),
			"limit" => $this->getParameter("limit", 15),
			"sort" => $this->getParameter("sort", "name"),
			"dir" => $this->getParameter("dir", "asc"),
			"filter" => $this->getParameter("filter", ""),
			"category" => $this->getParameter("category", 0),
			"stockmode" => $this->getParameter("stockmode", "all")
		);
		return PartManager::getInstance()->getParts($aParameters);
	}
	
	public function addStock () {
		$part = PartManager::getInstance()->getPart($this->getParameter("part"));
		
		$user = SessionManager::getCurrentSession()->getUser();
		
		$stock = new StockEntry($part, intval($this->getParameter("stock")), $user);
		
		$price = floatval($this->getParameter("price"));
		
		if ($price != 0) {
			$stock->setPrice($price);
		}
		
		PartKeepr::getEM()->persist($stock);
		PartKeepr::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartKeepr::getEM()->flush();
		
		return true;
	}
	
	public function addOrUpdatePart () {
		$aParameters = array();
		
		$aParameters["part"] = $this->getParameter("part", null);
		
		if ($this->hasParameter("name")) {
			$aParameters["name"] = $this->getParameter("name");
		}
		
		if ($this->hasParameter("minStockLevel")) {
			$aParameters["minstock"] = $this->getParameter("minStockLevel");
		}
		
		if ($this->hasParameter("storageLocation_id")) {
			$aParameters["storagelocation"] = $this->getParameter("storageLocation_id");
		}
		
		if ($this->hasParameter("category_id")) {
			$aParameters["category"] = $this->getParameter("category_id");
		}
		
		if ($this->hasParameter("footprint_id")) {
			$aParameters["footprint"] = $this->getParameter("footprint_id");
		}
		
		if ($this->hasParameter("comment")) {
			$aParameters["comment"]  = $this->getParameter("comment");
		}
		
		if ($this->hasParameter("quantity")) {
			$aParameters["quantity"]  = $this->getParameter("quantity");
		}
		
		if ($this->hasParameter("distributorChanges")) {
			$aParameters["distributorChanges"] = $this->getParameter("distributorChanges");
		}
		
		if ($this->hasParameter("manufacturerChanges")) {
			$aParameters["manufacturerChanges"] = $this->getParameter("manufacturerChanges");
		}
		
		if ($this->hasParameter("parameterChanges")) {
			$aParameters["parameterChanges"] = $this->getParameter("parameterChanges");
		}
		
		if ($this->hasParameter("attachmentChanges")) {
			$aParameters["attachmentChanges"] = $this->getParameter("attachmentChanges");
		}
		
		if ($this->hasParameter("partUnit_id")) {
			$aParameters["partUnit"] = $this->getParameter("partUnit_id");
		}
		
		PartManager::getInstance()->addOrUpdatePart($aParameters);
		
		return true;
	}
		
	public function deleteStock () {
		$part = PartManager::getInstance()->getPart($this->getParameter("part"));
		
		$user = SessionManager::getCurrentSession()->getUser();
		
		$stock = new StockEntry($part, 0-intval($this->getParameter("stock")), $user);
		
		PartKeepr::getEM()->persist($stock);
		PartKeepr::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartKeepr::getEM()->flush();
		
		return true;
	}
	
	public function getPart () {
		$part = PartManager::getInstance()->getPart($this->getParameter("part"));
		
		return $this->serializePart($part);
	}
	
	public function deletePart () {
		PartManager::getInstance()->deletePart($this->getParameter("part"));
	}
	
	private function serializePart ($part) {
		return $part->serialize();
	}
}