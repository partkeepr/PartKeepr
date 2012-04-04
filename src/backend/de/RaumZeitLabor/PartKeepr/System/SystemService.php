<?php
namespace de\RaumZeitLabor\PartKeepr\System;

use de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\CronLogger\CronLoggerManager,
	de\RaumZeitLabor\PartKeepr\Util\OS\OperatingSystem;

class SystemService extends Service {
	/**
	 * Returns a list of system information records.
	 * 
	 * Please note that it is not defined which information is returned; the result
	 * should be seen as "informational" to the system operator, not for automated purposes.
	 */
	public function getSystemInformation () {
		$aData  = array();
		
		$aData[] = new SystemInformationRecord("Doctrine ORM", \Doctrine\ORM\Version::VERSION, "Libraries");
		$aData[] = new SystemInformationRecord("Doctrine DBAL", \Doctrine\DBAL\Version::VERSION, "Libraries");
		
		$aData[] = new SystemInformationRecord("PHP Version", phpversion(), "System");
		
		$os = new OperatingSystem();
		
		$aData[] = new SystemInformationRecord("Operating System Type", $os->getPlatform(), "System");
		$aData[] = new SystemInformationRecord("Operating System Release", $os->getRelease(), "System");
		 
		$aData[] = new SystemInformationRecord("memory_limit", ini_get("memory_limit"), "PHP");
		$aData[] = new SystemInformationRecord("post_max_size", ini_get("post_max_size"), "PHP");
		$aData[] = new SystemInformationRecord("upload_max_filesize", ini_get("upload_max_filesize"), "PHP");
		$aData[] = new SystemInformationRecord("post_max_size", ini_get("post_max_size"), "PHP");
		$aData[] = new SystemInformationRecord("allow_url_fopen", ini_get("allow_url_fopen"), "PHP");
		$aData[] = new SystemInformationRecord("max_execution_time", ini_get("max_execution_time"), "PHP");
		$aData[] = new SystemInformationRecord("APC enabled", (extension_loaded("apc") ? PartKeepr::i18n("Yes") : PartKeepr::i18n("No")), "PHP");
		
		$aData[] = new SystemInformationRecord("PartKeepr Version", PartKeepr::getVersion(), "PartKeepr");
		
		
		foreach (Configuration::getOptions() as $key => $value) {
			
			// Hide passwords
			if ($key == "partkeepr.database.password" || $key == "partkeepr.migration.partdb.password") {
				$value = "<hidden>";
			}
			
			$aData[] = new SystemInformationRecord($key, $value, "PartKeepr Configuration Information");
		}

		return array("data" => $aData);
	}
	
	/**
	 * Returns the database schema status.
	 * 
	 * This method is usuall called once the user logs in, and alerts him if the schema is not up-to-date.
	 * 
	 * Returns either status incomplete if the schema is not up-to-date, or complete if everything is OK.
	 */
	public function getSystemStatus () {
		
		if (Configuration::getOption("partkeepr.cronjobs.disablecheck", false) === true) {
			// Skip cronjob tests
			$inactiveCronjobs = array();
		} else {
			$inactiveCronjobs = CronLoggerManager::getInstance()->getInactiveCronjobs();
		}
		
		
		return array("data" =>
				array(
					"inactiveCronjobCount" => count($inactiveCronjobs),
					"inactiveCronjobs" => $inactiveCronjobs,
					"schemaStatus" => $this->getSchemaStatus()));
	}
	
	/**
	 * Checks if the schema is up-to-date. If yes, it returns "complete", if not, it returns "incomplete".
	 */
	protected function getSchemaStatus () {
		$metadatas = PartKeepr::getEM()->getMetadataFactory()->getAllMetadata();
		
		$schemaTool = new \Doctrine\ORM\Tools\SchemaTool(PartKeepr::getEM());
		
		$queries = $schemaTool->getUpdateSchemaSql($metadatas, true);
		
		if (count($queries) > 0) {
			return "incomplete";
		} else {
			return "complete";
		}
	}
}