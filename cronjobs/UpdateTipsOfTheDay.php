<?php
/**
 * Updates the tip of the day title index.
 * Typically scheduled once or twice a day.
 * 
 * The API to retrieve tips has an upper limit of 500 requests/day, so don't schedule this each minute.
 * 
 * @author felicitus
 *
 */
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

declare(encoding = 'UTF-8');

include(__DIR__."/../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\TipOfTheDay\TipOfTheDay;
PartKeepr::initialize();

TipOfTheDay::syncTips();