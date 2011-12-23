<?php
namespace de\raumzeitlabor\PartKeepr\Stock;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager,
	de\RaumZeitLabor\PartKeepr\Service\RestfulService,
	de\RaumZeitLabor\PartKeepr\Service\Service;;
	

class StockService extends Service implements RestfulService {
	public function get () {
		$qb = PartKeepr::getEM()->createQueryBuilder();
		
		$qb->select("se")->from("de\RaumZeitLabor\PartKeepr\Stock\StockEntry","se")
		->where("se.part = :part")
		->orderBy("se.dateTime", "DESC")
		->setParameter("part", $this->getParameter("item"));
		
		$results = $qb->getQuery()->getResult();
		
		$aData = array();
		
		foreach ($results as $result) {
			$aData[] = array(
				"username" => is_object($result->getUser()) ? $result->getUser()->getUsername() : PartKeepr::i18n("Unknown User"),
				"user_id" => is_object($result->getUser()) ? $result->getUser()->getId() : null,
				"amount" => abs($result->getStockLevel()),
				"datetime" => $result->getDateTime()->format("Y-m-d H:i:s"),
				"id" => $result->getId(),
				"direction" => ($result->getStockLevel() < 0) ? "out" : "in",
				"price" => $result->getPrice()
			);	
		}
		

		return array("data" => $aData);
	}
	
	public function create () {
		throw new \Exception("Not yet implemented");
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		
		$stockEntry = StockEntry::loadById($this->getParameter("id"));
		
		if (!SessionManager::getCurrentSession()->getUser()->isAdmin() &&
			!(SessionManager::getCurrentSession()->getUser() && $stockEntry->getUser() && SessionManager::getCurrentSession()->getUser()->getId() == $stockEntry->getUser()->getId() )) {
			throw new \Exception("Permission denied");
		}
		
		/* It's not allowed to edit a price for a removal */
		if (!$stockEntry->isRemoval()) {
			$stockEntry->setPrice(abs($this->getParameter("price")));
		}
		
		/**
		 * Only an admin user may correct the in&out stock levels
		 */
		if (SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			if ($this->getParameter("direction") == "out") {
				$stockEntry->setStockLevel(-(abs($this->getParameter("amount"))));
			} else {
				$stockEntry->setStockLevel($this->getParameter("amount"));
			}
			
		}
		
		if (SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			try {
				$stockEntry->setUser(User::loadById($this->getParameter("user_id")));
			} catch (\Exception $e) {
				$stockEntry->setUser(null);
			}
			
		}
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $stockEntry->serialize());
	}
	
	public function destroy () {
		throw new \Exception("Not yet implemented");
	} 
}