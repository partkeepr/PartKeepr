<?php
namespace de\RaumZeitLabor\PartKeepr\Statistic;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\PartUnit\PartUnitManager;

class StatisticService extends Service {
		public function getCurrentStats () {

			$aData = array();
			$aData["partCount"] = PartManager::getInstance()->getPartCount();
			$aData["categoryCount"] = PartCategoryManager::getInstance()->getCategoryCount();
			$aData["totalPrice"] = PartManager::getInstance()->getTotalPrice();
			$aData["averagePrice"] = PartManager::getInstance()->getAveragePrice();
			$aData["partsWithPrice"] = PartManager::getInstance()->getPartCount(true);
			$aData["partsWithoutPrice"] = $aData["partCount"] - $aData["partsWithPrice"];
			
			$result = PartUnitManager::getInstance()->getUnitCounts();
	
			$aUnits = array();
			
			foreach ($result as $row) {
				$aUnits[] = array(
					"name" => $row[0]->getName(),
					"stockLevel" => $row["stockLevel"]);
			}
			
			$aData["units"] = $aUnits;
			
			return $aData;
		}
	
}