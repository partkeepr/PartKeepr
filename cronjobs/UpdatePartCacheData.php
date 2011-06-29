<?php
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

declare(encoding = 'UTF-8');

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Statistic\StatisticSnapshotManager;
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

