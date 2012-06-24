<?php
/**
 * Checks for PartKeepr updates
 * Typically scheduled every one or two days.
 * 
 * @author felicitus
 *
 */
namespace PartKeepr\Cronjobs;

include(__DIR__."/../src/backend/PartKeepr/PartKeepr.php");

use PartKeepr\PartKeepr,
	PartKeepr\CronLogger\CronLoggerManager;

PartKeepr::initialize();

PartKeepr::doVersionCheck();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));