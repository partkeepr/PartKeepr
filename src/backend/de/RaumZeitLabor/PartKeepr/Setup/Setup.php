<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Configuration as PartKeeprConfiguration;

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
		$this->runStep("all");
	}

	/**
	 * Runs a specific setup step, or all steps.
	 * @param string $step 
	 * @throws \Exception
	 */
	public function runStep ($step) {
		$entityManager = PartKeepr::getEM();
		
		$aSteps = array(
				"schema" => new SchemaSetup($entityManager),
				"adminuser" => new UserSetup($entityManager),
				"partunit" => new PartUnitSetup($entityManager),
				"footprint" => new FootprintSetup($entityManager),
				"partcategory" => new PartCategorySetup($entityManager),
				"siprefix" => new SiPrefixSetup($entityManager),
				"unit" => new UnitSetup($entityManager),
				"manufacturer" => new ManufacturerSetup($entityManager),
				"schemamigration" => new SchemaMigrationSetup($entityManager)
				);
		
		if ($step == "all") {
			foreach ($aSteps as $step) {
				$step->run();
			}
		} else {
			if (array_key_exists($step, $aSteps)) {
				$aSteps[$step]->run();
			} else {
				throw new \Exception(sprintf("Setup step %s doesn't exist", $step));
			}
		}
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
	
	/**
	 * Sets the database configuration array from $_REQUEST
	 */
	public static function setDatabaseConfigurationFromRequest () {
		switch ($_REQUEST["driver"]) {
			case "mysql":
				PartKeeprConfiguration::setOption("partkeepr.database.driver","pdo_mysql");
				PartKeeprConfiguration::setOption("partkeepr.database.dbname", $_REQUEST["dbname"]);
				PartKeeprConfiguration::setOption("partkeepr.database.username", $_REQUEST["user"]);
				PartKeeprConfiguration::setOption("partkeepr.database.password", $_REQUEST["password"]);
				PartKeeprConfiguration::setOption("partkeepr.database.hostname", $_REQUEST["host"]);

				if (isset($_REQUEST['port'])) {
					PartKeeprConfiguration::setOption("partkeepr.database.mysql_port", $_REQUEST["port"]);
				}
				break;
			default:
				throw new \Exception(sprintf("Invalid driver %s specified.", $_REQUEST["driver"]));
				break;
		}
	}
	
	/**
	 * Sets the database configuration from 
	 * @param unknown_type $options
	 */
	public static function setDatabaseConfigurationFromOptions ($options) {
		
	}
}