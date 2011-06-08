<?php
namespace de\raumzeitlabor\PartDB2\Stock;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Service\RestfulService,
	de\RaumZeitLabor\PartDB2\Service\Service;;
	

class StockService extends Service implements RestfulService {
	public function get () {
		$qb = PartDB2::getEM()->createQueryBuilder();
		
		$qb->select("se")->from("de\RaumZeitLabor\PartDB2\Stock\StockEntry","se")
		->where("se.part = :part")
		->orderBy("se.dateTime", "DESC")
		->setParameter("part", $this->getParameter("item"));
		
		$results = $qb->getQuery()->getResult();
		
		$aData = array();
		
		foreach ($results as $result) {
			$aData[] = array(
				"username" => is_object($result->getUser()) ? $result->getUser()->getUsername() : PartDB2::i18n("Unknown User"),
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
	
	public function update () {
		throw new \Exception("Not yet implemented");
	}
	
	public function destroy () {
		throw new \Exception("Not yet implemented");
	} 
}