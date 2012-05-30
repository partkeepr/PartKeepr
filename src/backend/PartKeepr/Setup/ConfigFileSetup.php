<?php
namespace PartKeepr\Setup;

use PartKeepr\Util\Configuration,
	PartKeepr\PartKeepr,
	PartKeepr\Util\SerializableException;

/**
 * Creates or returns a new config file
 */
class ConfigFileSetup extends AbstractSetup {
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Setup.AbstractSetup::run()
	 */
	public function run () {
		switch ($_REQUEST["mode"]) {
			case "save":
				$this->saveConfig();
				break;
			case "display":
				return $this->displayConfig();
				break;
		}
		
		return null;
	}
	
	/**
	 * Returns the configuration file as string, so that it can be displayed
	 * during setup.
	 * 
	 * @param none
	 * @return array An array, where the "config" key contains the configuration.
	 */
	private function displayConfig () {
		return array("config" => Configuration::dumpConfig());
	}
	
	/**
	 * Saves the configuration file.
	 * 
	 * @throws SerializableException An exception which describes what has been going wrong
	 */
	private function saveConfig () {
		$configFile = PartKeepr::getRootDirectory()."/config.php";
		
		if (file_exists($configFile)) {
			if (!is_writable($configFile)) {
				$message = "The config.php file could not be written, because it already exists and the webserver has ";
				$message .= "no write access to it.";
		
				throw new SerializableException($message, 10000);
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