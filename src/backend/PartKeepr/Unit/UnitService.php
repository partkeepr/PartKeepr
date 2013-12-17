<?php
namespace PartKeepr\Unit;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\PartKeepr,
	PartKeepr\Part\PartUnit,
	PartKeepr\SiPrefixBundle\Entity\SiPrefix,
	PartKeepr\Session\SessionManager;

class UnitService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			 return array("data" => UnitManager::getInstance()->getUnit($this->getParameter("id"))->serialize());
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
	
	public function create () {
		$this->requireParameter("name");
		
		$unit = new Unit;
		$unit->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($unit);
		PartKeepr::getEM()->flush();
		
		return array("data" => $unit->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$unit = UnitManager::getInstance()->getUnit($this->getParameter("id"));
		$unit->deserialize($this->getParameters());

		PartKeepr::getEM()->flush();
		
		return array("data" => $unit->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		UnitManager::getInstance()->deleteUnit($this->getParameter("id"));
		
		return array("data" => null);
	}
	
}