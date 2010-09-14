<?php
namespace de\RaumZeitLabor\PartDB2\Util;

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
}
?>