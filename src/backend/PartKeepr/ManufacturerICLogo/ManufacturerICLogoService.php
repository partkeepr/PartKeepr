<?php
namespace PartKeepr\ManufacturerICLogo;

use PartKeepr\Manufacturer\ManufacturerICLogo,
	PartKeepr\TempImage\TempImage,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\PartKeepr,
	PartKeepr\Manufacturer\Manufacturer,
	PartKeepr\Session\SessionManager;

class ManufacturerICLogoService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
	 */
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
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("tmp_id");
		$this->requireParameter("manufacturer_id");
		
		$tmpImage = TempImage::loadById($this->getParameter("tmp_id"));
		
		$image = new ManufacturerICLogo();
		
		$manufacturer = Manufacturer::loadById($this->getParameter("manufacturer_id"));
		
		$image->setManufacturer($manufacturer);
		$image->replace($tmpImage->getFilename());
		$image->setOriginalFilename($tmpImage->getOriginalFilename());
		PartKeepr::getEM()->persist($image);
		PartKeepr::getEM()->flush();
		
		return $image->serialize();
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {

	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");

		$logo = ManufacturerICLogo::loadById($this->getParameter("id"));
		
		PartKeepr::getEM()->remove($logo);
		PartKeepr::getEM()->flush();

		return array("data" => null);
	}
	
}