<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException;

/**
 * Creates a new config file
 */
class ConfigFileSetup extends AbstractSetup {
	public function run () {
		$configFile = PartKeepr::getRootDirectory()."/config.php";
		if (file_exists($configFile)) {
			if (!is_writable($configFile)) {
				$message = "The config.php file could not be written, because it already exists and the webserver has ";
				$message .= "no write access to it.";
				
				throw new SerializableException($message, 10000);
				/*echo json_encode(array("error" => true, "errormessage" => ));
				exit;*/
			}
		} else {
			if (!is_writable(PartKeepr::getRootDirectory())) {
				$message = "The config.php file could not be written, because the webserver has no write access to it.";
				
				throw new SerializableException($message, 10001);
			}
		}
		file_put_contents($configFile, Configuration::dumpConfig());
	}
}