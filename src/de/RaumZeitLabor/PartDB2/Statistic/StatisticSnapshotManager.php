<?php
namespace de\RaumZeitLabor\PartDB2\Statistic;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Part\PartUnit,
	de\RaumZeitLabor\PartDB2\Part\PartManager,
	de\RaumZeitLabor\PartDB2\PartUnit\PartUnitManager,
	de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Category\CategoryManager,
	de\RaumZeitLabor\PartDB2\PartUnit\Exceptions\PartUnitNotFoundException;

class StatisticSnapshotManager extends Singleton {
	public function createSnapshot () {
		
		$snapshot = new StatisticSnapshot();
		$snapshot->setParts(PartManager::getInstance()->getPartCount());
		$snapshot->setCategories(CategoryManager::getInstance()->getCategoryCount());
		
		$result = PartUnitManager::getInstance()->getUnitCounts();
		
		foreach ($result as $row) {
			$snapshotUnit = new StatisticSnapshotUnit();
			$snapshotUnit->setPartUnit($row[0]);
			$snapshotUnit->setStatisticSnapshot($snapshot);
			$snapshotUnit->setStockLevel($row["stockLevel"]);
			$snapshot->getUnits()->add($snapshotUnit);
		}
		
		PartDB2::getEM()->persist($snapshot);
		PartDB2::getEM()->flush();
	}
}