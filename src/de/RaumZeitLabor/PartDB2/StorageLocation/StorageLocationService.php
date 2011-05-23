<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Stock\StockEntry,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Session\SessionManager;

class StorageLocationService extends Service {
	public function getStorageLocations () {
		return StorageLocationManager::getInstance()->getStorageLocations();
	}
}