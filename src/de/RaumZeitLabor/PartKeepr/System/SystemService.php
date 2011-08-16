<?php
namespace de\RaumZeitLabor\PartKeepr\System;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

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
		
		$aData[] = new SystemInformationRecord("PHP", phpversion(), "System");
		$aData[] = new SystemInformationRecord("Operating System", php_uname(), "System");
		
		if (file_exists("/etc/lsb-release")) {
			// Quick'n'dirty extract of the release information
			$aReleaseData = explode("\n", file_get_contents("/etc/lsb-release"));
			
			foreach ($aReleaseData as $releaseData) {
				if (strpos($releaseData, "DISTRIB_ID") !== false) {
					$data = explode("\"", $releaseData);
					$aData[] = new SystemInformationRecord("Distribution", $data[1], "System");
				}
			}
			
			
		}
		
		$aData[] = new SystemInformationRecord("memory_limit", ini_get("memory_limit"), "PHP");
		$aData[] = new SystemInformationRecord("post_max_size", ini_get("post_max_size"), "PHP");
		$aData[] = new SystemInformationRecord("upload_max_filesize", ini_get("upload_max_filesize"), "PHP");
		$aData[] = new SystemInformationRecord("post_max_size", ini_get("post_max_size"), "PHP");
		$aData[] = new SystemInformationRecord("allow_url_fopen", ini_get("allow_url_fopen"), "PHP");
		
		// TODO: add information about post max, file upload size, timeout, memory limit
		return array("data" => $aData);
	}
	
}