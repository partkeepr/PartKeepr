<?php
namespace PartKeepr\Cronjobs;

include(__DIR__."/../src/backend/PartKeepr/PartKeepr.php");

use PartKeepr\PartKeepr,
	PartKeepr\Statistic\StatisticSnapshotManager,
	PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();

$query = PartKeepr::getEM()->createQuery("SELECT p FROM PartKeepr\PartBundle\Entity\Part p");
$result = $query->getResult();

$fc = 0;

foreach ($result as $part) {
	$fc++;
	if ($fc > 50) {
		PartKeepr::getEM()->flush();
		$fc=0;
	}
	$part->updateCacheData();
}

PartKeepr::getEM()->flush();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));