<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Configuration as PartKeeprConfiguration;

class Setup {
	/**
	 * Specifies if setup runs in console mode.
	 * @var boolean
	 */
	private $console = false;
	
	/**
	 * Defines if the setup runs in verbose mode.
	 * @var boolean
	 */
	private static $verbose = false;
	
	/**
	 * Runs the migration with all steps
	 */
	public function run () {
		$this->runStep("all");
	}
	
	/**
	 * Sets console mode.
	 * 
	 * In this mode, messages are directly written to the console.
	 */
	public function setConsole () {
		$this->console = true;
	}

	/**
	 * Runs a specific setup step, or all steps.
	 * 
	 * @param string $step The step to execute 
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
				"miscsettings" => new MiscSettingsSetup($entityManager)
				);
		
		$aActions = array(
				"configfile" => new ConfigFileSetup($entityManager)
				);
		if ($step == "all") {
			foreach ($aSteps as $step) {
				$step->setConsole($this->console);
				$step->run();
			}
		} else {
			if (array_key_exists($step, $aSteps)) {
				return $aSteps[$step]->run();
			}

			if (array_key_exists($step, $aActions)) {
				return $aActions[$step]->run();
			}

			throw new \Exception(sprintf("Setup step %s doesn't exist", $step));
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
		return \Symfony\Component\Yaml\Yaml::parse($file);
	}
	
	/**
	 * Sets the database configuration array from $_REQUEST
	 */
	public static function setDatabaseConfigurationFromRequest () {
		if (isset($_REQUEST["dbname"])) {
			PartKeeprConfiguration::setOption("partkeepr.database.dbname", $_REQUEST["dbname"]);
		}

		if (isset($_REQUEST["user"])) {
			PartKeeprConfiguration::setOption("partkeepr.database.username", $_REQUEST["user"]);
		}
		if (isset($_REQUEST["password"])) {
			PartKeeprConfiguration::setOption("partkeepr.database.password", $_REQUEST["password"]);
		}
		if (isset($_REQUEST["host"])) {
			PartKeeprConfiguration::setOption("partkeepr.database.host", $_REQUEST["host"]);
		}

		if (isset($_REQUEST['port'])) {
			PartKeeprConfiguration::setOption("partkeepr.database.port", $_REQUEST["port"]);
		}
		
		switch ($_REQUEST["driver"]) {
			case "mysql":
				PartKeeprConfiguration::setOption("partkeepr.database.driver","pdo_mysql");
				break;
			case "pgsql":
				PartKeeprConfiguration::setOption("partkeepr.database.driver","pdo_pgsql");
				break;
			default:
				throw new \Exception(sprintf("Invalid driver %s specified.", $_REQUEST["driver"]));
				break;
		}
	}
	
	/**
	 * Runs some checks for the CLI setup
	 */
	public function runCLIChecks () {
		
		if (PartKeeprConfiguration::getOption("partkeepr.database.driver") == "pdo_mysql") {
			$dbname = PartKeeprConfiguration::getOption("partkeepr.database.dbname");
			if (!SchemaSetup::mysqlHasUTF8Encoding(PartKeepr::getEM()->getConnection(), $dbname )) {
				echo "Error: The database $dbname hasn't got the UTF-8 encoding. You need to set the database encoding to UTF-8. Aborting.\n";
				die;
			}	
		}
		
	}
}