<?php
namespace de\RaumZeitLabor\PartDB2\ManufacturerICLogo;
use de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo;

use de\RaumZeitLabor\PartDB2\Image\TempImage;

use de\RaumZeitLabor\PartDB2\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class ManufacturerICLogoService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return ManufacturerICLogoManager::getInstance()->getManufacturerICLogo($this->getParameter("id"))->serialize();
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
		$image->replace($tmpImage->getImageFilename());
		PartDB2::getEM()->persist($image);
		PartDB2::getEM()->flush();
		
		return $image->serialize();
	}
	
	public function update () {

	}
	
	public function destroy () {
		$this->requireParameter("id");

		$logo = ManufacturerICLogo::loadById($this->getParameter("id"));
		
		PartDB2::getEM()->remove($logo);
		PartDB2::getEM()->flush();

		return array("data" => null);
	}
	
}