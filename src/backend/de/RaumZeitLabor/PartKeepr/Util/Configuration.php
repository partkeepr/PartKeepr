<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

use de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * This class manages simple key -> value configurations within the system.
 * 
 * This allows the user to configure certain aspects of the system in a central place.
 * 
 * The convention is to use a dotted format, for example: 
 * 
 * flipbeat.cms.layoutrenderer
 * 
 * @author felicitus
 */
class Configuration {
	private static $options = array();
	
	/**
	 * Sets the option to value.
	 * 
	 * @param string $option	The option to set
	 * @param string $value		The value to set
	 */
	public static function setOption ($option, $value) {
		Configuration::$options[$option] = $value;
	}
	
	/**
	 * Returns the value of an option. The developer
	 * may additionally specify a default value, which
	 * is returned when no option was found.
	 * 
	 * @param string $option	The option to return
	 * @param string $default	The default value if the option was not found
	 */
	public static function getOption ($option, $default = false) {
		if (!array_key_exists($option, Configuration::$options)) {
			return $default;
		}
		return Configuration::$options[$option];
	}
	
	/**
	 * Returns a configuration file, based on all configurations.
	 * 
	 * @param none
	 * @return string A complete configuration file including namespace and use directives
	 */
	public static function dumpConfig () {
		$config = <<<EOD
<?php
namespace de\RaumZeitLabor\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Util\Configuration;


EOD;
		foreach (Configuration::$options as $option => $value) {
			switch (PartKeepr::getType($value)) {
				case "string":
					$config .= 'Configuration::setOption("'.$option.'", "'.$value.'");'."\n";
					break;
				case "boolean":
					$config .= 'Configuration::setOption("'.$option.'", '.($value === true ? 'true' : 'false').');'."\n";
					break;
				case "integer":
					$config .= 'Configuration::setOption("'.$option.'", '.intval($value).');'."\n";
					break;
				case "float":
					$config .= 'Configuration::setOption("'.$option.'", '.floatval($value).');'."\n";
					break;
				default:
					break;
			}
			
		}
		
		return $config;
	}
}
?>