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
	
	/**
	 * Creates multiple storage locations at once. 
	 * 
	 * Requires that the parameter "storageLocations" is set to an array with the names of the storage locations.
	 * Returns all error messages as "data" index in the result array.
	 */
	public function massCreate () {
		$this->requireParameter("storageLocations");
		
		$aMessages = array();
		
		foreach ($this->getParameter("storageLocations") as $storageLocation) {
			try {
				$obj = StorageLocationManager::getInstance()->getStorageLocationByName($storageLocation);
				$aMessages[] = sprintf(PartKeepr::i18n("Storage Location %s already exists"), $storageLocation);
			} catch (\Exception $e) {
				$obj = new StorageLocation();
				$obj->setName($storageLocation);
				PartKeepr::getEM()->persist($obj);
			}
			
		}
		
		PartKeepr::getEM()->flush();
		
		return array("data" => $aMessages);
	}
}