<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\CronLogger\CronLoggerManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Sets up misc stuff, which doesn't fit into other steps
 */
class MiscSettingsSetup extends AbstractSetup {
	public function run () {
		$this->markCronjobsAsRun();
		$this->clearAPCCache();
	}
	
	/**
	 * Marks the cronjobs as run, so that the user doesn't get an error during the first day.
	 * 
	 * This is necessary because if the user sets up the system and enters the cronjobs, there is a chance
	 * that no cronjob has been ran when he logs in the first time and thus gets confused.
	 */
	public function markCronjobsAsRun () {
		foreach (PartKeepr::getRequiredCronjobs() as $cronjob) {
			CronLoggerManager::getInstance()->markCronRun($cronjob);
		}
	}
	
	public function clearAPCCache () {
		if (function_exists("apc_clear_cache")) {
			apc_clear_cache();
			apc_clear_cache("user");
		}
	}
}