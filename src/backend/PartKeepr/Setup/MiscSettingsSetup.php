<?php
namespace PartKeepr\Setup;

use PartKeepr\CronLoggerBundle\Services\CronLoggerManager;
use PartKeepr\PartKeepr;

/**
 * Sets up misc stuff, which doesn't fit into other steps
 */
class MiscSettingsSetup extends AbstractSetup {
	public function run () {
		$this->markCronjobsAsRun();
		$this->clearAPCCache();
		$this->regenerateProxies();
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
	
	/**
	 * Clears the APC cache to push out old entries
	 */
	public function clearAPCCache () {
		if (function_exists("apc_clear_cache")) {
			apc_clear_cache();
			apc_clear_cache("user");
		}
	}
	
	/**
	 * Re-generates all proxies. This is analog to doctrine orm:generate-proxies
	 * 
	 * @throws \InvalidArgumentException
	 */
	public function regenerateProxies () {
		$em = $this->entityManager;
		
		$metadatas = $em->getMetadataFactory()->getAllMetadata();
		$destPath = $em->getConfiguration()->getProxyDir();
	
		if ( ! is_dir($destPath)) {
			mkdir($destPath, 0777, true);
		}
	
		$destPath = realpath($destPath);
	
		if ( ! file_exists($destPath)) {
			throw new \InvalidArgumentException(
					sprintf("Proxies destination directory '<info>%s</info>' does not exist.", $em->getConfiguration()->getProxyDir())
			);
		} else if ( ! is_writable($destPath)) {
			throw new \InvalidArgumentException(
					sprintf("Proxies destination directory '<info>%s</info>' does not have write permissions.", $destPath)
			);
		}
	
		$em->getProxyFactory()->generateProxyClasses($metadatas, $destPath);
	}
	
}
