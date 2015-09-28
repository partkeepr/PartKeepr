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

use PartKeepr\CronLoggerBundle\Services\CronLoggerManager;
use PartKeepr\PartKeepr;

PartKeepr::initialize();

PartKeepr::doVersionCheck();

CronLoggerManager::getInstance()->markCronRun(basename(__FILE__));
