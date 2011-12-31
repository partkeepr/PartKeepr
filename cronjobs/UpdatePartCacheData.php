<?php
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

declare(encoding = 'UTF-8');

include(__DIR__."/../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Statistic\StatisticSnapshotManager,
	de\RaumZeitLabor\PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();

$query = PartKeepr::getEM()->createQuery("SELECT p FROM de\RaumZeitLabor\PartKeepr\Part\Part p");
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