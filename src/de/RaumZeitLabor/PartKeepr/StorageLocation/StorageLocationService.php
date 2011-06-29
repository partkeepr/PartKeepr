<?php
namespace de\RaumZeitLabor\PartKeepr\StorageLocation;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\Stock\StockEntry,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class StorageLocationService extends Service implements RestfulService {
	
	public function get () {
		if ($this->hasParameter("id")) {
			return  array("data" => StorageLocationManager::getInstance()->getStorageLocation($this->getParameter("id"))->serialize());
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "name",
					"direction" => "ASC");
			}
			return StorageLocationManager::getInstance()->getStorageLocations(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$this->getParameter("query", ""));
		}
	}
	
	public function create () {
		$this->requireParameter("name");
		
		$storageLocation = new StorageLocation();
		$storageLocation->deserialize($this->getParameters());
		
		PartKeepr::getEM()->persist($storageLocation);
		PartKeepr::getEM()->flush();
		
		return array("data" => $storageLocation->serialize());
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		$storageLocation = StorageLocationManager::getInstance()->getStorageLocation($this->getParameter("id"));
		$storageLocation->deserialize($this->getParameters());
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $storageLocation->serialize());
		
	}
	
	public function destroy () {
		$this->requireParameter("id");
		
		StorageLocationManager::getInstance()->deleteStorageLocation($this->getParameter("id"));
		
		return array("data" => null);
	}
	
	// Old Stuff below
	public function getStorageLocations() {
		return StorageLocationManager::getInstance()->getStorageLocations(
			$this->getParameter("start", 0),
			$this->getParameter("limit", 10),
			$this->getParameter("sortby", "name"),
			$this->getParameter("dir", "asc"),
			$this->getParameter("filter", ""));
	}

	public function addStorageLocation () {
		$this->requireParameter("name");
		
		StorageLocationManager::getInstance()->addStorageLocation($this->getParameter("name"));
	}
	
	public function deleteStorageLocation () {
		$this->requireParameter("id");
		
		StorageLocationManager::getInstance()->deleteStorageLocation($this->getParameter("id"));
	}
	
	public function getStorageLocation () {
		$this->requireParameter("id");
		
		return StorageLocationManager::getInstance()->getStorageLocation($this->getParameter("id"))->serialize();
	}
	
	public function saveStorageLocation () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$storageLocation = StorageLocationManager::getInstance()->getStorageLocation($this->getParameter("id"));
		
		$storageLocation->setName($this->getParameter("name"));
		
		PartKeepr::getEM()->flush();
		
		return $storageLocation->serialize();
	}
}