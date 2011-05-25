<?php
namespace de\raumzeitlabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class PartManagerService extends Service {
	public function getParts () {
		$aParameters = array(
			"start" => $this->getParameter("start", 0),
			"limit" => $this->getParameter("start", 15),
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
		
		PartDB2::getEM()->persist($stock);
		PartDB2::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartDB2::getEM()->flush();
		
		return true;
	}
	
	public function addOrUpdatePart () {
		$aParameters = array();
		
		$aParameters["part"] = $this->getParameter("part", null);
		
		$aParameters["category"] = $this->getParameter("category");
		$aParameters["name"] = $this->getParameter("name");
		$aParameters["quantity"] = $this->getParameter("quantity");
		$aParameters["minstock"] = $this->getParameter("minstock");
		$aParameters["storagelocation"] = $this->getParameter("storagelocation");
		$aParameters["footprint"] = $this->getParameter("footprint");
		$aParameters["comment"] = $this->getParameter("comment");
		
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