<?php
namespace de\RaumZeitLabor\PartKeepr\Footprint;

use de\RaumZeitLabor\PartKeepr\TempImage\TempImage,
	de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategory,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\Service\RestfulService,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Footprint\FootprintManager;

class FootprintService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => FootprintManager::getInstance()->getFootprint($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
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
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$footprint = new Footprint();
		$footprint->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($footprint);
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $footprint->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$footprint = Footprint::loadById($this->getParameter("id"));
		
		$footprint->deserialize($this->getParameters());
				
		PartKeepr::getEM()->flush();
		
		return array("data" => $footprint->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		FootprintManager::getInstance()->deleteFootprint($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	public function moveFootprint () {
		$this->requireParameter("targetCategory");
		$this->requireParameter("id");
		
		$footprint = Footprint::loadById($this->getParameter("id"));
		$category = FootprintCategory::loadById($this->getParameter("targetCategory"));
			
		$footprint->setCategory($category);
				
		PartKeepr::getEM()->flush();
	}
	
}
