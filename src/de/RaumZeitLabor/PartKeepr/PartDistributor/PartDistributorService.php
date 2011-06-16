<?php
namespace de\RaumZeitLabor\PartKeepr\ManufacturerICLogo;
use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;

use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class PartDistributorService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return PartDistributorManager::getInstance()->getManufacturerICLogo($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "id",
					"direction" => "ASC");
			}

			$filter = "";
			
			if ($this->hasParameter("filter")) {
				$tmp = json_decode($this->getParameter("filter"), true);
				
				foreach ($tmp as $item) {
					if (array_key_exists("property", $item)) {
						if ($item["property"] == "manufacturer_id") {
							if (array_key_exists("value", $item)) {
								$filter = $item["value"];
							}
						}
					}
				}
			}
			// @todo This seems wrong?!?
			return ManufacturerICLogoManager::getInstance()->getManufacturerICLogos(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$filter);
		}
	}
	
	public function create () {
		$this->requireParameter("tmp_id");
		$this->requireParameter("manufacturer_id");
		
		$tmpImage = TempImage::loadById($this->getParameter("tmp_id"));
		
		$image = new ManufacturerICLogo();
		
		$manufacturer = Manufacturer::loadById($this->getParameter("manufacturer_id"));
		
		$image->setManufacturer($manufacturer);
		$image->replace($tmpImage->getFilename());
		PartKeepr::getEM()->persist($image);
		PartKeepr::getEM()->flush();
		
		return $image->serialize();
	}
	
	public function update () {

	}
	
	public function destroy () {
		$this->requireParameter("id");

		$logo = ManufacturerICLogo::loadById($this->getParameter("id"));
		
		PartKeepr::getEM()->remove($logo);
		PartKeepr::getEM()->flush();

		return array("data" => null);
	}
	
}