<?php
namespace de\RaumZeitLabor\PartKeepr\Statistic;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Part\PartUnit,
	de\RaumZeitLabor\PartKeepr\Part\PartManager,
	de\RaumZeitLabor\PartKeepr\PartUnit\PartUnitManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\PartUnit\Exceptions\PartUnitNotFoundException;

class StatisticSnapshotManager extends Singleton {
	public function createSnapshot () {
		
		$snapshot = new StatisticSnapshot();
		$snapshot->setParts(PartManager::getInstance()->getPartCount());
		$snapshot->setCategories(PartCategoryManager::getInstance()->getCategoryCount());
		
		$result = PartUnitManager::getInstance()->getUnitCounts();
		
		foreach ($result as $row) {
			$snapshotUnit = new StatisticSnapshotUnit();
			$snapshotUnit->setPartUnit($row[0]);
			$snapshotUnit->setStatisticSnapshot($snapshot);
			$snapshotUnit->setStockLevel($row["stockLevel"]);
			$snapshot->getUnits()->add($snapshotUnit);
		}
		
		PartKeepr::getEM()->persist($snapshot);
		PartKeepr::getEM()->flush();
	}
}