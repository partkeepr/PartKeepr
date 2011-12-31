<?php
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

declare(encoding = 'UTF-8');

include(__DIR__."/../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Statistic\StatisticSnapshotManager,
	de\RaumZeitLabor\PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();
StatisticSnapshotManager::getInstance()->createSnapshot();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));