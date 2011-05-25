<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class StorageLocationService extends Service {
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
		
		PartDB2::getEM()->flush();
		
		return $storageLocation->serialize();
	}
}