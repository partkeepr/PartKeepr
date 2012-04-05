<?php
namespace de\RaumZeitLabor\PartKeepr\Part;

use de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Service\RestfulService,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter,
	de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class PartService extends Service implements RestfulService {
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => PartManager::getInstance()->getPart($this->getParameter("id"))->serialize());
		} else {
			
			$filter = new ManagerFilter($this);
			$filter->setFilterCallback(array($this, "filterCallback"));
			
			return PartManager::getInstance()->getList($filter);
		}
	}
	
	/**
	 * Advanced filtering for the list
	 * @param QueryBuilder The $queryBuilder
	 */
	public function filterCallback ($queryBuilder) {
		
		/**
		 * Applies text-based filtering
		 */
		if ($this->hasParameter("query") && $this->getParameter("query") != "") {
			$queryBuilder->where("LOWER(q.name) LIKE :filter");
			$queryBuilder->setParameter("filter", "%".strtolower($this->getParameter("query"))."%");
		}
		
		/**
		 * Applies filtering by the storage location name
		 */
		if ($this->getParameter("storageLocation") !== null) {
			$queryBuilder->andWhere("st.name = :storageLocation");
			$queryBuilder->setParameter("storageLocation", $this->getParameter("storageLocation"));
		}
		
		/**
		 * Filter by the category id and set the category mode
		 * 
		 */
		$category = intval($this->getParameter("category", 0));
		
		if ($category !== 0) {
			/* Fetch all children */
			if ($this->getParameter("categoryScope") == "selected") {
				$queryBuilder->andWhere("q.category = :category");
				$queryBuilder->setParameter("category", $category);
			} else {
				$childs = PartCategoryManager::getInstance()->getChildNodes($category);
				$childs[] = $category;
				$queryBuilder->andWhere("q.category IN (".implode(",", $childs).")");
			}
		}
		
		/**
		 * Filter by the stock mode
		 */
		switch ($this->getParameter("stockMode")) {
			case "all":
				break;
			case "zero":
				$queryBuilder->andWhere("q.stockLevel = 0");
				break;
			case "nonzero":
				$queryBuilder->andWhere("q.stockLevel > 0");
				break;
			case "below":
				$queryBuilder->andWhere("q.stockLevel < q.minStockLevel");
				break;
		}
		
		/**
		 * Query by the distributor's order number
		 */
		if ($this->getParameter("distributorOrderNumber")) {
			$queryBuilder->leftJoin("q.distributors", "di");
			$queryBuilder->andWhere("LOWER(di.orderNumber) LIKE :orderNumber");
			$queryBuilder->setParameter("orderNumber", "%".strtolower($this->getParameter("distributorOrderNumber"))."%");
		}
		
		/**
		 * Filter by the price
		 */
		if ($this->getParameter("withoutPrice") === true || $this->getParameter("withoutPrice") === "true") {
			$queryBuilder->andWhere("q.averagePrice IS NULL");
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$entity = PartManager::getInstance()->createEntity($this->getParameters());
		
		if ($this->getParameter("initialStockLevel") > 0) {
			try {
				$user = User::loadById($this->getParameter("initialStockLevelUser"));
			} catch (\Exception $e) {
				$user = SessionManager::getCurrentSession()->getUser();
			}
				
			$stock = new StockEntry($entity, intval($this->getParameter("initialStockLevel")), $user);
		
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
				
			$entity->updateStockLevel();
			PartKeepr::getEM()->flush();
		}
		
		return array("data" => $entity->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$entity = PartManager::getInstance()->getEntity($this->getParameter("id"));
		$entity->deserialize($this->getParameters());
			
		PartKeepr::getEM()->flush();
		
		return array("data" => $entity->serialize());
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
	
	public function massDeleteStock () {
		$data = $this->getParameter("removals");
		
		$updateStockLevels = array();
		
		foreach ($data as $item) {
			$part = PartManager::getInstance()->getPart($item["part"]);
			$user = SessionManager::getCurrentSession()->getUser();
			
			$stock = new StockEntry($part, 0-intval($item["amount"]), $user);
			$stock->setComment($item["comment"]);
			PartKeepr::getEM()->persist($stock);
			
			$updateStockLevels[$item["part"]] = $part;
		}
		
		PartKeepr::getEM()->flush();
		
		foreach ($updateStockLevels as $part) {
			$part->updateStockLevel();
		}
		
		PartKeepr::getEM()->flush();
		return array();
	}
	
	public function deletePart () {
		PartManager::getInstance()->deletePart($this->getParameter("part"));
	}
}