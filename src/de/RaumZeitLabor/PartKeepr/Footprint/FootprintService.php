<?php
namespace de\RaumZeitLabor\PartKeepr\Footprint;
use de\RaumZeitLabor\PartKeepr\TempImage\TempImage;
use de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategory;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service,
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
		
		$fp = FootprintManager::getInstance()->addFootprint($this->getParameter("name"));
		$fp->setDescription($this->getParameter("description"));
		
		if ($this->getParameter("image_id", false) !== false) {
			if (strpos($this->getParameter("image_id"), "TMP:") !== false) {
				$tmpImage = TempImage::loadById(str_replace("TMP:", "", $this->getParameter("image_id")));
				$image = new FootprintImage();
				$image->replace($tmpImage->getFilename());
				$image->setOriginalFilename($tmpImage->getOriginalFilename());
			
				$fp->setImage($image);
				$image->setFootprint($fp);
			}
			
		}
		
		try {
			$footprintCategory = FootprintCategory::loadById($this->getParameter("category"));
			$fp->setCategory($footprintCategory);	
		} catch (\Exception $e) {}
		
		return array("data" => $fp->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$footprint = Footprint::loadById($this->getParameter("id"));
		$footprint->setName($this->getParameter("name"));
		$footprint->setDescription($this->getParameter("description"));
		
		if ($this->getParameter("image_id", false) !== false) {
			if (strpos($this->getParameter("image_id"), "TMP:") !== false) {
				$tmpImage = TempImage::loadById(str_replace("TMP:", "", $this->getParameter("image_id")));
				
				$image= $footprint->getImage();
				
				if ($image === null) {
					$image = new FootprintImage();	
				}
				
				$image->replace($tmpImage->getFilename());
				$image->setOriginalFilename($tmpImage->getOriginalFilename());
				$image->setFootprint($footprint);
				
				$footprint->setImage($image);	
			}
		}
		
		try {
			$footprintCategory = FootprintCategory::loadById($this->getParameter("category"));
			$footprint->setCategory($footprintCategory);	
		} catch (\Exception $e) {}
		
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
