<?php
namespace de\raumzeitlabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service,
	de\RaumZeitLabor\PartDB2\Service\RestfulService,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;

class FootprintService extends Service implements RestfulService {
	public function get () {
		if ($this->hasParameter("id")) {
			return FootprintManager::getInstance()->getFootprint($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "footprint",
					"direction" => "ASC");
			}
			return FootprintManager::getInstance()->getFootprints(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("footprint");
		
		$fp = FootprintManager::getInstance()->addFootprint($this->getParameter("footprint"));
		
		return array("data" => $fp->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("footprint");
		$footprint = FootprintManager::getInstance()->getFootprint($this->getParameter("id"));
		$footprint->setFootprint($this->getParameter("footprint"));
		
		PartDB2::getEM()->flush();
		
		return array("data" => $footprint->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		FootprintManager::getInstance()->deleteFootprint($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	/* Old stuff below */
	public function getFootprints () {
		return FootprintManager::getInstance()->getFootprints(
			$this->getParameter("start", 0),
			$this->getParameter("limit", 10),
			$this->getParameter("sortby", "footprint"),
			$this->getParameter("dir", "asc"),
			$this->getParameter("filter", ""));
	}

	public function addFootprint () {
		$this->requireParameter("footprint");
		
		
	}
	
	public function deleteFootprint () {
		$this->requireParameter("id");
		
		FootprintManager::getInstance()->deleteFootprint($this->getParameter("id"));
	}
	
	public function getFootprint () {
		$this->requireParameter("id");
		
		return $this->get($this->getParameter("id"));
	}
	
	public function saveFootprint () {
		$this->requireParameter("id");
		$this->requireParameter("footprint");
		
		$footprint = FootprintManager::getInstance()->getFootprint($this->getParameter("id"));
		
		$footprint->setFootprint($this->getParameter("footprint"));
		
		PartDB2::getEM()->flush();
		
		return $footprint->serialize();
	}
}
?>