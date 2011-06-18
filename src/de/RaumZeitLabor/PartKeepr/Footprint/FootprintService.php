<?php
namespace de\RaumZeitLabor\PartKeepr\Footprint;
use de\RaumZeitLabor\PartKeepr\TempImage\TempImage;

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
			return FootprintManager::getInstance()->getFootprint($this->getParameter("id"))->serialize();
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
	
}
