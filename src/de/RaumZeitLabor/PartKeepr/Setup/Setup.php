<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

declare(encoding = 'UTF-8');

class Setup {
	/**
	 * Defines if the setup runs in verbose mode.
	 * @var boolean
	 */
	private static $verbose = false;
	
	/**
	 * Runs the setup. Right now, it only tests the prequisites.
	 */
	public function run () {
		$this->testPrequisites();
	}

	/**
	 * Tests all requires prequisites for the system.
	 */
	public function testPrequisites () {
		$this->testAPC();
		$this->testMemoryLimit();
	}

	/**
	 * Tests for APC. Throws an exception if APC is missing or not active.
	 * @throws \Exception
	 */
	public function testAPC () {
		if (!extension_loaded("apc")) {
			throw new \Exception(PartKeepr::i18n("The extension 'apc' is not loaded. Make sure that it is installed (see http://php.net/manual/en/apc.installation.php) and that it is enabled (set apc.enabled=1 in your php.ini)."));
		}	
	}
	
	/**
	 * Tests for suitable memory_limit settings
	 * @todo stub
	 */
	public function testMemoryLimit () {
		//echo ini_get("memory_limit");
	}
	
	/**
	 * Converts strange escpaes in the database to "regular" text.
	 * @param string $string The string to convert
	 * @return string The converted string
	 */
	public static function convertText ($string) {
		$string = stripslashes($string);
		$string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
		$string = str_replace("&#937;", "Ω", $string);
		return $string;
	}
	
	/**
	 * Sets the verbose flag
	 * @param boolean $verbose True if verbose output is wanted, false otherwise
	 */
	public static function setVerbose ($verbose) {
		Setup::$verbose = $verbose;
	}
	
	/**
	 * Outputs a progress message.
	 * 
	 * @param string $string The string to output
	 * @param boolean $verbose True if the string should only be printed if verbosity is turned on
	 */
	public static function progress ($string, $verbose = false) {
		if (!$verbose || ($verbose && Setup::$verbose)) {
			echo $string."\n";
		}
		
	}
	
	/**
	 * Loads the given YAML file. Due to an API brach between Doctrine 2.0.5 and Doctrine 2.0.6,
	 * we need to work it around.
	 * @param string $file The path of the file to load
	 * @return array The parsed YAML file
	 */
	public static function loadYAML ($file) {
		if (method_exists("\Symfony\Component\Yaml\Yaml", "load")) {
			return \Symfony\Component\Yaml\Yaml::load($file);
		} else {
			return \Symfony\Component\Yaml\Yaml::parse($file);
		}
	}
}