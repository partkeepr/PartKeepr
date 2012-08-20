<?php
namespace PartKeepr\Part;

use PartKeepr\User\User,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Manager\ManagerFilter,
	PartKeepr\Part\PartManager,
	PartKeepr\Stock\StockEntry,
	PartKeepr\PartKeepr,
	PartKeepr\PartCategory\PartCategory,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\Session\SessionManager;

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

			$fulltextSearch = new PartFulltextSearch($this->getParameter("query"));
			$fulltextSearchResults = $fulltextSearch->query();
			
			$queryBuilder->andWhere("q.id IN (".implode(",", $fulltextSearchResults).")");
			
		}
		
		/**
		 * Applies filtering by the storage location id
		 */
		if ($this->getParameter("storageLocation") !== null) {
			$queryBuilder->andWhere("st.id = :storageLocation");
			$queryBuilder->setParameter("storageLocation", $this->getParameter("storageLocation"));
		}
		
		// We need that join multiple times. Not exactly nice, as this should get pulled in only when needed.
		// @todo Refactor so that this join only gets inside when needed
		$queryBuilder->leftJoin("q.distributors", "di");
		
		if ($this->getParameter("distributor") !== null) {
			$queryBuilder->leftJoin("di.distributor", "did");
			$queryBuilder->andWhere("did.id = :distributor");
			$queryBuilder->setParameter("distributor", $this->getParameter("distributor"));
		}
		
		if ($this->getParameter("manufacturer") !== null) {
			$queryBuilder->leftJoin("q.manufacturers", "ma");
			$queryBuilder->leftJoin("ma.manufacturer", "mam");
			$queryBuilder->andWhere("mam.id = :manufacturer");
			$queryBuilder->setParameter("manufacturer", $this->getParameter("manufacturer"));
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
			$queryBuilder->andWhere("LOWER(di.orderNumber) LIKE :orderNumber");
			$queryBuilder->setParameter("orderNumber", "%".strtolower($this->getParameter("distributorOrderNumber"))."%");
		}
		
		/**
		 * Filter by the price
		 */
		if ($this->getParameter("withoutPrice") === true || $this->getParameter("withoutPrice") === "true") {
			$queryBuilder->andWhere("q.averagePrice IS NULL");
		}
		
		if ($this->getParameter("createDateRestriction") !== "") {
			try {
				$dateTime = new \DateTime($this->getParameter("createDate"));
				$date = $dateTime->format("Y-m-d");
				
				switch ($this->getParameter("createDateRestriction")) {
					case ">":
						$queryBuilder->andWhere("q.createDate > :createDate");
						$queryBuilder->setParameter("createDate", $date);
						break;
					case "<":
						$queryBuilder->andWhere("q.createDate < :createDate");
						$queryBuilder->setParameter("createDate", $date);
						break;
					case "=":
						$queryBuilder->andWhere("q.createDate > :createDate AND q.createDate < :createDate2");
						$queryBuilder->setParameter("createDate", $date. " 00:00:00");
						$queryBuilder->setParameter("createDate2", $date. " 23:59:59");
						break;
					default:
						break;
				}
			} catch (\Exception $e) {
				// Do nothing for now
			}
		}
		
		if ($this->getParameter("withoutStockRemovals", false) === true || $this->getParameter("withoutStockRemovals", false) === "true") {
			$q = PartKeepr::getEM()->createQueryBuilder();
			$q->select("p.id")->from("PartKeepr\Part\Part", "p")->leftJoin("p.stockLevels", "sl")->where("sl.stockLevel < 0");
			$query = $q->getQuery();
			
			$result = $query->getResult();
			$filter = array();
			foreach ($result as $res) {
				$filter[] = $res["id"];
			}
			
			$queryBuilder->andWhere("q.id NOT IN (".implode(",", $filter).")");
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::create()
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
	 * @see PartKeepr\Service.RestfulService::update()
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
		$dql = "SELECT pp.name FROM PartKeepr\PartParameter\PartParameter pp GROUP BY pp.name";
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
		
		if ($this->hasParameter("comment")) {
			$stock->setComment($this->getParameter("comment"));
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