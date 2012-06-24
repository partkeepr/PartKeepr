<?php
namespace PartKeepr\Manufacturer;

use PartKeepr\Service\RestfulService;

use PartKeepr\Service\Service,
	PartKeepr\Part\PartManager,
	PartKeepr\Stock\StockEntry,
	PartKeepr\PartKeepr,
	PartKeepr\Session\SessionManager;

class ManufacturerService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return array("data" => ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return ManufacturerManager::getInstance()->getManufacturers(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$manufacturer = new Manufacturer;
		$manufacturer->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($manufacturer);
		PartKeepr::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$manufacturer = ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"));
		$manufacturer->deserialize($this->getParameters());
			
		PartKeepr::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		ManufacturerManager::getInstance()->deleteManufacturer($this->getParameter("id"));
		
		return array("data" => null);
	}
}