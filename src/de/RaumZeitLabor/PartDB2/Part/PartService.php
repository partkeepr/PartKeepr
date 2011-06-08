<?php
namespace de\raumzeitlabor\PartDB2\Part;
use de\RaumZeitLabor\PartDB2\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

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
			$this->getParameter("withoutPrice", false));
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
		
		PartDB2::getEM()->persist($stock);
		PartDB2::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartDB2::getEM()->flush();
		
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
		
		PartDB2::getEM()->persist($stock);
		PartDB2::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartDB2::getEM()->flush();
		
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