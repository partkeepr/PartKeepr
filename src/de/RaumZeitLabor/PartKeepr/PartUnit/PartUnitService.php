<?php
namespace de\RaumZeitLabor\PartKeepr\PartUnit;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class PartUnitService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => PartUnitManager::getInstance()->getPartUnit($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return PartUnitManager::getInstance()->getPartUnits(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("name");
		
		$partUnit = new PartUnit;
		$partUnit->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($partUnit);
		PartKeepr::getEM()->flush();
		
		return array("data" => $partUnit->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$partUnit = PartUnitManager::getInstance()->getPartUnit($this->getParameter("id"));
		$partUnit->deserialize($this->getParameters());
		PartKeepr::getEM()->flush();
		
		return array("data" => $partUnit->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		PartUnitManager::getInstance()->deletePartUnit($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	public function setDefault () {
		$this->requireParameter("id");
		
		$partUnit = PartUnitManager::getInstance()->setDefaultPartUnit($this->getParameter("id"));
		
		return array("data" => null);
	}
}