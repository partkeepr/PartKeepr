<?php
namespace de\RaumZeitLabor\PartKeepr\Manufacturer;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class ManufacturerService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
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
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("name");
		
		$manufacturer = new Manufacturer;
		
		$this->setManufacturerData($manufacturer);
		
		PartKeepr::getEM()->persist($manufacturer);
		PartKeepr::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
	}
	
	/**
	* Sets the data for the manufacturer.
	* @param Manufacturer $manufacturer The manufacturer to process
	*/
	private function setManufacturerData (Manufacturer $manufacturer) {
		$manufacturer->setName($this->getParameter("name"));
		$manufacturer->setComment($this->getParameter("comment", ""));
		$manufacturer->setAddress($this->getParameter("address", ""));
		$manufacturer->setURL($this->getParameter("url", ""));
		$manufacturer->setEmail($this->getParameter("email", ""));
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$manufacturer = ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"));

		$this->setManufacturerData($manufacturer);
		PartKeepr::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
		
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");
		
		ManufacturerManager::getInstance()->deleteManufacturer($this->getParameter("id"));
		
		return array("data" => null);
	}
}