<?php
namespace de\RaumZeitLabor\PartKeepr\Unit;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit,
	de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class UnitService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return UnitManager::getInstance()->getUnit($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return UnitManager::getInstance()->getUnits(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	public function setUnitPrefixes () {
		$this->requireParameter("id");
		
		$unit = UnitManager::getInstance()->getUnit($this->getParameter("id"));
		
		$prefixes = $unit->getPrefixes();
		
		$prefixes->clear();
		
		foreach ($this->getParameter("prefixes") as $prefix) {
			$prefix = SiPrefix::loadById($prefix);
			$prefixes->add($prefix);
		}

	}
	
	public function create () {
		$this->requireParameter("name");
		
		$unit = new Unit;
		
		$this->setUnitData($unit);
		
		PartKeepr::getEM()->persist($unit);
		PartKeepr::getEM()->flush();
		
		return array("data" => $unit->serialize());
	}
	
	private function setUnitData (Unit $unit) {
		$unit->setName($this->getParameter("name"));
		$unit->setSymbol($this->getParameter("symbol"));
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$unit = UnitManager::getInstance()->getUnit($this->getParameter("id"));

		$this->setUnitData($unit);
		PartKeepr::getEM()->flush();
		
		return array("data" => $unit->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		UnitManager::getInstance()->deleteUnit($this->getParameter("id"));
		
		return array("data" => null);
	}
	
}