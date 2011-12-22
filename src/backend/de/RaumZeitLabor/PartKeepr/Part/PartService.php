<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\User\User;

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
			return array("data" => PartManager::getInstance()->getPart($this->getParameter("id"))->serialize());
		} else {
			return PartManager::getInstance()->getParts(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sort", $this->getParameter("sort")),
			$this->getParameter("query", ""),
			$this->getParameter("category", 0),
			$this->getParameter("categoryScope", "all"),
			$this->getParameter("stockMode", "all"),
			$this->getParameter("withoutPrice", false),
			$this->getParameter("storageLocation", null));
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$part = new Part();
		$part->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($part);
		PartKeepr::getEM()->flush();
		
		if ($this->getParameter("initialStockLevel") > 0) {
			
			try {
				$user = User::loadById($this->getParameter("initialStockLevelUser"));
			} catch (\Exception $e) {
				$user = SessionManager::getCurrentSession()->getUser();
			}
			
			$stock = new StockEntry($part, intval($this->getParameter("initialStockLevel")), $user);

			if ($this->getParameter("initialStockLevelPricePerItem") == true) {
				$price = floatval($this->getParameter("initialStockLevelPrice"));
			} else {
				$price = floatval($this->getParameter("initialStockLevelPrice")) / $this->getParameter("initialStockLevel");
			}
			
			if ($price != 0) {
				$stock->setPrice($price);
			}
			
			PartKeepr::getEM()->persist($stock);
			PartKeepr::getEM()->flush();
			
			$part->updateStockLevel();
			PartKeepr::getEM()->flush();
			
			return array("data" => $part->serialize());
		}
		
		return array("data" => $part->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$part = Part::loadById($this->getParameter("id"));
		$part->deserialize($this->getParameters());
				
		PartKeepr::getEM()->flush();
		
		return array("data" => $part->serialize());
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
		
		return array("data" => $part->serialize());
	}
	
	public function deleteStock () {
		$part = PartManager::getInstance()->getPart($this->getParameter("part"));
		
		$user = SessionManager::getCurrentSession()->getUser();
		
		$stock = new StockEntry($part, 0-intval($this->getParameter("stock")), $user);
		
		PartKeepr::getEM()->persist($stock);
		PartKeepr::getEM()->flush();
		
		$part->updateStockLevel();
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $part->serialize());
	}
	
	public function deletePart () {
		PartManager::getInstance()->deletePart($this->getParameter("part"));
	}
}