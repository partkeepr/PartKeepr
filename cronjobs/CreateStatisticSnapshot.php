<?php
namespace PartKeepr\Cronjobs;

include(__DIR__."/../src/backend/PartKeepr/PartKeepr.php");

use PartKeepr\PartKeepr,
	PartKeepr\Statistic\StatisticSnapshotManager,
	PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();
StatisticSnapshotManager::getInstance()->createSnapshot();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));