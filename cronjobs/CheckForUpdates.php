<?php
/**
 * Checks for PartKeepr updates
 * Typically scheduled every one or two days.
 * 
 * @author felicitus
 *
 */
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

declare(encoding = 'UTF-8');

include(__DIR__."/../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();

PartKeepr::doVersionCheck();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));