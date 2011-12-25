<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Creates a new config file
 */
class ConfigFileSetup extends AbstractSetup {
	public function run () {
		$configFile = PartKeepr::getRootDirectory()."/config.php";
		if (file_exists($configFile)) {
			if (!is_writable($configFile)) {
				echo json_encode(array("error" => true, "errormessage" => "The config.php file could not be written, because it already exists and the webserver has no write access to it."));
				exit;
			}
		} else {
			if (!is_writable(PartKeepr::getRootDirectory())) {
				echo json_encode(array("error" => true, "errormessage" => "The config.php file could not be written, because the webserver has no write access to it."));
				exit;
			}
		}
		file_put_contents($configFile, Configuration::dumpConfig());
	}
}