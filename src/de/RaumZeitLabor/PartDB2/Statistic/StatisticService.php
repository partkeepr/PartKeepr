<?php
namespace de\RaumZeitLabor\PartDB2\Statistic;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\PartUnit\PartUnitManager;

class StatisticService extends Service {
		public function getCurrentStats () {

			$aData = array();
			$aData["partCount"] = PartManager::getInstance()->getPartCount();
			$aData["categoryCount"] = CategoryManager::getInstance()->getCategoryCount();
			
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