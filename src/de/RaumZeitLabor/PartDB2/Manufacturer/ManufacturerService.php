<?php
namespace de\RaumZeitLabor\PartDB2\Manufacturer;
use de\RaumZeitLabor\PartDB2\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class ManufacturerService extends Service implements RestfulService {
		public function get () {
		if ($this->hasParameter("id")) {
			return ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"))->serialize();
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
	
	public function create () {
		$this->requireParameter("name");
		
		$manufacturer = new Manufacturer;
		
		$this->setManufacturerData($manufacturer);
		
		PartDB2::getEM()->persist($manufacturer);
		PartDB2::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
	}
	
	private function setManufacturerData (Manufacturer $manufacturer) {
		$manufacturer->setName($this->getParameter("name"));
		$manufacturer->setComment($this->getParameter("comment", ""));
		$manufacturer->setAddress($this->getParameter("address", ""));
		$manufacturer->setURL($this->getParameter("url", ""));
		$manufacturer->setEmail($this->getParameter("email", ""));
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$manufacturer = ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"));

		$this->setManufacturerData($manufacturer);
		PartDB2::getEM()->flush();
		
		return array("data" => $manufacturer->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		ManufacturerManager::getInstance()->deleteManufacturer($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	
	// Old stuff below
	public function getManufacturers() {
		return ManufacturerManager::getInstance()->getManufacturers(
			$this->getParameter("start", 0),
			$this->getParameter("limit", 10),
			$this->getParameter("sortby", "name"),
			$this->getParameter("dir", "asc"),
			$this->getParameter("filter", ""));
	}

	public function addManufacturer () {
		$this->requireParameter("name");
		
		ManufacturerManager::getInstance()->addManufacturer($this->getParameter("name"));
	}
	
	public function deleteManufacturer () {
		$this->requireParameter("id");
		
		ManufacturerManager::getInstance()->deleteManufacturer($this->getParameter("id"));
	}
	
	public function deleteManufacturerLogo () {
		$this->requireParameter("id");
		
		$logo = ManufacturerICLogo::loadById($this->getParameter("id"));
		
		PartDB2::getEM()->remove($logo);
		PartDB2::getEM()->flush();
	}
	
	public function getManufacturerLogos () {
		$this->requireParameter("id");
		$manufacturer = ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"));
		
		$aData = array();
		
		foreach ($manufacturer->getICLogos() as $logo) {
			$aData[] = array("id" => $logo->getId());
		}
		
		return array("logos" => $aData);
			
	}
	
	public function getManufacturer () {
		$this->requireParameter("id");
		
		return ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"))->serialize();
	}
	
	public function saveManufacturer () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$Manufacturer = ManufacturerManager::getInstance()->getManufacturer($this->getParameter("id"));
		
		$Manufacturer->setName($this->getParameter("name"));
		
		PartDB2::getEM()->flush();
		
		return $Manufacturer->serialize();
	}
}