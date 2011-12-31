<?php
namespace de\RaumZeitLabor\PartKeepr\CronLogger;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Manager\AbstractManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class CronLoggerManager extends AbstractManager {
	/**
	 * Returns the FQCN for the target entity to operate on.
	 * @return string The FQCN, e.g. de\RaumZeitLabor\PartKeepr\Part
	 */
	public function getEntityName () {
		return 'de\RaumZeitLabor\PartKeepr\CronLogger\CronLogger';
	}
	
	/**
	 * Returns all fields which need to appear in the getList ResultSet.
	 * @return array An array of all fields which should be returned
	 */
	public function getQueryFields () {
		return array("id", "title", "date");
	}
	
	/**
	 * Returns the default sort field
	 *
	 * @return string The default sort field
	 */
	public function getDefaultSortField () {
		return "date";
	}
	
	public function markCronRun ($cronjob) {
		$dql = "SELECT c FROM de\RaumZeitLabor\PartKeepr\CronLogger\CronLogger c WHERE c.cronjob = :cronjob";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("cronjob", $cronjob);
		
		try {
			$result = $query->getSingleResult();
		} catch (\Exception $e) {
			$result = new CronLogger();
			$result->setCronjob($cronjob);
			PartKeepr::getEM()->persist($result);
		}
		
		$result->setLastRunDate(new \DateTime());
		
		PartKeepr::getEM()->flush();
	}
	
	public function getInactiveCronjobs () {
		$dql = "SELECT c.cronjob FROM de\RaumZeitLabor\PartKeepr\CronLogger\CronLogger c WHERE c.cronjob = :cronjob";
		$dql .= " AND c.lastRunDate > :date";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		
		$date = new \DateTime();
		$date->sub(new \DateInterval('P1D'));
		$query->setParameter("date", $date);
		
		$failedCronjobs = array();
		
		foreach (PartKeepr::getRequiredCronjobs() as $cronjob) {
			$query->setParameter("cronjob", $cronjob);
			
			try {
				$query->getSingleResult();
			} catch (\Exception $e) {
				$failedCronjobs[] = $cronjob;
			}
			
		}
		
		return $failedCronjobs;
	}
}