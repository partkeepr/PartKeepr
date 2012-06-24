<?php
namespace PartKeepr\Statistic;

use PartKeepr\Util\Singleton,
	PartKeepr\Part\PartUnit,
	PartKeepr\Part\PartManager,
	PartKeepr\PartUnit\PartUnitManager,
	PartKeepr\PartKeepr,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\PartUnit\Exceptions\PartUnitNotFoundException;

class StatisticSnapshotManager extends Singleton {
	public function createSnapshot () {
		
		$snapshot = new StatisticSnapshot();
		$snapshot->setParts(PartManager::getInstance()->getPartCount());
		$snapshot->setCategories(PartCategoryManager::getInstance()->getCategoryCount());
		
		$result = PartUnitManager::getInstance()->getUnitCounts();
		
		foreach ($result as $row) {
			$snapshotUnit = new StatisticSnapshotUnit();
			$snapshotUnit->setPartUnit(PartUnit::loadById($row["puid"]));
			$snapshotUnit->setStatisticSnapshot($snapshot);
			
			if ($row["stockLevel"] !== null) {
				$snapshotUnit->setStockLevel($row["stockLevel"]);
			} else {
				$snapshotUnit->setStockLevel(0);
			}
			
			$snapshot->getUnits()->add($snapshotUnit);
		}
		
		PartKeepr::getEM()->persist($snapshot);
		PartKeepr::getEM()->flush();
	}
}