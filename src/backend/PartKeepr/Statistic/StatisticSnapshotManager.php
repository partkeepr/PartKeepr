<?php
namespace PartKeepr\Statistic;

use PartKeepr\Part\PartManager;
use PartKeepr\PartBundle\Entity\PartCategoryManager;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use PartKeepr\PartKeepr;
use PartKeepr\Util\Singleton;

class StatisticSnapshotManager extends Singleton {
	public function createSnapshot () {
		
		$snapshot = new StatisticSnapshot();
		$snapshot->setParts(PartManager::getInstance()->getPartCount());
		$snapshot->setCategories(PartCategoryManager::getInstance()->getCategoryCount());
		
		$result = PartUnitManager::getInstance()->getUnitCounts();
		
		foreach ($result as $row) {
			$snapshotUnit = new StatisticSnapshotUnit();
			$snapshotUnit->setPartUnit(PartMeasurementUnit::loadById($row["puid"]));
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