<?php
namespace PartKeepr\Cronjobs;

include(__DIR__."/../src/backend/PartKeepr/PartKeepr.php");

use PartKeepr\CronLoggerBundle\Services\CronLoggerManager;
use PartKeepr\PartKeepr;
use PartKeepr\Statistic\StatisticSnapshotManager;

PartKeepr::initialize();
StatisticSnapshotManager::getInstance()->createSnapshot();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));
