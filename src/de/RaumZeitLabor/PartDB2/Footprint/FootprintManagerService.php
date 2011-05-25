<?php
namespace de\raumzeitlabor\PartDB2\Footprint;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Footprint\FootprintManager;

class FootprintManagerService extends Service {
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
		
		FootprintManager::getInstance()->addFootprint($this->getParameter("footprint"));
	}
	
	public function deleteFootprint () {
		$this->requireParameter("id");
		
		FootprintManager::getInstance()->deleteFootprint($this->getParameter("id"));
	}
	
	public function getFootprint () {
		$this->requireParameter("id");
		
		return FootprintManager::getInstance()->getFootprint($this->getParameter("id"))->serialize();
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