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
	
	/**
	 * Returns sampled statistics from the database. 
	 * 
	 * This call takes a start and an end time, and calculates a set of statistics
	 * for each interval.
	 * 
	 *  The sampleSize, which has a default of 50, specifies how many single statistic
	 *  points in the given date interval will be returned.
	 *  
	 *  This function interpolates the statistics if there are not enough statistic samples available.
	 */
	public function getSampledStatistics () {
		$fooStart = microtime(true);
		
		$this->requireParameter("startDateTime");
		$this->requireParameter("endDateTime");
		
		
		$start = \DateTime::createFromFormat("Y-m-d H:i:s", $this->getParameter("startDateTime"));
		$end = \DateTime::createFromFormat("Y-m-d H:i:s", $this->getParameter("endDateTime"));
		
		if ($this->hasParameter("sampleSize")) {
			$sampleSize = $this->getParameter("sampleSize");
		} else {
			$sampleSize = 50;
		}
		
		$intervalSize = intval(($end->getTimestamp() - $start->getTimestamp()) / $sampleSize);
		
		$queryStartTime = clone $start;
		$queryEndTime = clone $start;
		$queryEndTime->add(new \DateInterval("PT".$intervalSize."S"));
		
		$partUnitQuery = "SELECT pu FROM de\RaumZeitLabor\PartKeepr\Part\PartUnit pu";
		$query = PartKeepr::getEM()->createQuery($partUnitQuery);
		
		$aPartUnits = $query->getResult();
		
		$aRecords = array();
		
		$dql = "SELECT AVG(sts.parts) AS parts, AVG(sts.categories) AS categories FROM de\RaumZeitLabor\PartKeepr\Statistic\StatisticSnapshot sts WHERE sts.dateTime >= :start AND sts.dateTime <= :end";
		$mainQuery = PartKeepr::getEM()->createQuery($dql);
		
		$dql = "SELECT AVG(stsu.stockLevel) AS stockLevel FROM de\RaumZeitLabor\PartKeepr\Statistic\StatisticSnapshotUnit stsu JOIN stsu.statisticSnapshot sts WHERE sts.dateTime >= :start AND sts.dateTime <= :end AND stsu.partUnit = :partUnit";
		$subQuery = PartKeepr::getEM()->createQuery($dql);
		
		for ($i=0;$i<$sampleSize;$i++) {
			
			
			$mainQuery->setParameter("start", $queryStartTime);
			$mainQuery->setParameter("end", $queryEndTime);
			
			$result = $mainQuery->getResult();
			
			$record = $result[0];
			
			if ($record["parts"] !== null) {
				$record["parts"] = floatval($record["parts"]);
			}
			
			if ($record["categories"] !== null) {
				$record["categories"] = floatval($record["categories"]);
			}
			
			foreach ($aPartUnits as $partUnit) {
				$subQuery->setParameter("start", $queryStartTime);
				$subQuery->setParameter("end", $queryEndTime);
				$subQuery->setParameter("partUnit", $partUnit);
				
				$aResult = $subQuery->getResult();
				
				if ($aResult[0]["stockLevel"] !== null) {
					$record["units"][$partUnit->getName()] = floatval($aResult[0]["stockLevel"]);
				} else {
					$record["units"][$partUnit->getName()] = null;
				}
				 
			}
			
			$record["start"] = $queryStartTime->format("Y-m-d H:i:s");
			
			$aRecords[] = $record;
			
			$queryStartTime->add(new \DateInterval("PT".$intervalSize."S"));
			$queryEndTime->add(new \DateInterval("PT".$intervalSize."S"));
		}
		
		
		return array("status" => "ok", "data" => $aRecords);
	}
	
}