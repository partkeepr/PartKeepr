<?php
namespace PartKeepr;

use PartKeepr\SystemNotice\SystemNoticeManager,
    Doctrine\ORM\EntityManager,
    PartKeepr\Util\Configuration as PartKeeprConfiguration;



class PartKeepr {
	/**
	 * Initializes the PartKeepr system
	 * 
	 * You *need* to call this method before doing anything else.
	 * 
	 * An environment is used to load a different configuration file.
	 * Usually, you don't need to pass anything here.
	 * 
	 * @param $environment	string	The environment to use, null otherwise.
	 */
	public static function initialize ($environment = null) {
		self::initializeConfig($environment);
	}
	
	/**
	 * Returns an array of all cronjobs which are required for proper execution of PartKeepr.
	 * 
	 * @return Array The filenames of each cronjob which is required
	 */
	public static function getRequiredCronjobs () {
		return array(
				"CreateStatisticSnapshot.php",
				"UpdatePartCacheData.php",
				"UpdateTipsOfTheDay.php",
				"CheckForUpdates.php"
				);
	}

	/**
	 * Initializes the configuration for a given environment.
	 * 
	 * An environment is used to load a different configuration file.
	 * 
	 * Usually, you don't need to pass anything here.
	 * 
	 * 
	 * @param $environment	string	The environment to use, null otherwise.
	 */
	public static function initializeConfig ($environment = null) {
		if ($environment != null) {
			$config = self::getRootDirectory()."/config-$environment.php";
		} else {
			$config = self::getRootDirectory()."/config.php";
		}

		if (file_exists($config)) {
			include($config);
		}
		
		// Check if the files path is set. If not, fall back to <partkeepr-root>/data/
		if (PartKeeprConfiguration::getOption("partkeepr.files.path", null) === null) {
			
			PartKeeprConfiguration::setOption("partkeepr.files.path",
				PartKeepr::getRootDirectory() . "/data/");
		}

		// Check if the image path is set. If not, fall back to <configured-files-directory>/images/
		if (PartKeeprConfiguration::getOption("partkeepr.images.path", null) === null) {
			
			PartKeeprConfiguration::setOption("partkeepr.images.path",
				PartKeeprConfiguration::getOption("partkeepr.files.path") . "images/");
		}
		
		// Check if the image cache path is set. If not, fall back to <configured-images-directory>/images/	
		if (PartKeeprConfiguration::getOption("partkeepr.images.cache", null) === null) {
			
			PartKeeprConfiguration::setOption("partkeepr.images.cache",
				PartKeeprConfiguration::getOption("partkeepr.images.path") . "cache/");
				
		}
		
	}

	/**
	 * Checks against the versions at partkeepr.org.
	 * 
	 * If a newer version was found, create a system notice entry.
	 */
	public static function doVersionCheck () {
		
		$data = file_get_contents("http://www.partkeepr.org/versions.json");
		$versions = json_decode($data, true);
		
		if (PartKeeprVersion::PARTKEEPR_VERSION == "{V_GIT}") { return; }
		if (substr(PartKeeprVersion::PARTKEEPR_VERSION,0,17) == "partkeepr-nightly") { return; }
		
		if (version_compare(PartKeepr::getVersion(), $versions[0]["version"], '<')) {
			
			SystemNoticeManager::getInstance()->createUniqueSystemNotice(
					"PARTKEEPR_VERSION_".$versions[0]["version"],
					sprintf(PartKeepr::i18n("New PartKeepr Version %s available"), $versions[0]["version"]),
					sprintf(PartKeepr::i18n("PartKeepr Version %s changelog:"), $versions[0]["version"]) . "\n\n".
					$versions[0]["changelog"]
					);
			
		}
	}
	
	/**
	 * Returns the EntityManager. Shortcut for getEntityManager().
	 * @return EntityManager The EntityManager
	 */
	public static function getEM () {
		return self::getEntityManager();
	}

	public static function getRootDirectory () {
		return dirname(dirname(dirname(__DIR__)));
	}
	
	/**
	 * Returns the EntityManager.
	 * @return EntityManager The EntityManager
	 */
	public static function getEntityManager () {
        $container = \AppKernel::getMigrationContainer();
        return $container->get('doctrine')->getManager();
	}
	
	/**
	 * Returns the class metadata for all entity classes
	 * @return array an array of class metadata objects
	 */
	public static function getClassMetaData () {
		$classes = self::getEntityClasses();

		$aClasses = array();
		
		foreach ($classes as $class) {
			$aClasses[] = PartKeepr::getEM()->getClassMetadata($class);
		}
		
		return $aClasses;
	}
	
	/**
	 * Returns a list of all classes we use for entities.
	 * @return array An array of strings with all class names
	 */
	public static function getEntityClasses () {
		return array(
			'PartKeepr\User\User',
			'PartKeepr\Session\Session',
				
			'PartKeepr\EventNotification\Event',
			'PartKeepr\EventNotification\LastNotification',

			'PartKeepr\Footprint\Footprint',
			'PartKeepr\Footprint\FootprintImage',
			'PartKeepr\Footprint\FootprintAttachment',
			'PartKeepr\FootprintCategory\FootprintCategory',

			'PartKeepr\Part\Part',
			'PartKeepr\Part\PartUnit',
			'PartKeepr\Part\PartManufacturer',
			'PartKeepr\Part\PartDistributor',
			'PartKeepr\Part\PartImage',
			'PartKeepr\Part\PartAttachment',
			'PartKeepr\PartCategory\PartCategory',
				
			'PartKeepr\Printing\PageBasicLayout\PageBasicLayout',
			'PartKeepr\Printing\PrintingJob\PrintingJob',
			'PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfiguration',
		
			'PartKeepr\Project\Project',
			'PartKeepr\Project\ProjectPart',
			'PartKeepr\Project\ProjectAttachment',
				
			'PartKeepr\StorageLocation\StorageLocation',
			'PartKeepr\StorageLocation\StorageLocationImage',
		
			'PartKeepr\Stock\StockEntry',
		
			'PartKeepr\Manufacturer\Manufacturer',
			'PartKeepr\Manufacturer\ManufacturerICLogo',
			
			'PartKeepr\Distributor\Distributor',
			
			'PartKeepr\Image\Image',
			'PartKeepr\Image\CachedImage',
			'PartKeepr\TempImage\TempImage',
			
			'PartKeepr\UploadedFile\TempUploadedFile',
			
			'PartKeepr\Statistic\StatisticSnapshot',
			'PartKeepr\Statistic\StatisticSnapshotUnit',
			'PartKeepr\SiPrefixBundle\Model\SiPrefix',
			'PartKeepr\Unit\Unit',
			'PartKeepr\PartParameter\PartParameter',
			
			'PartKeepr\TipOfTheDay\TipOfTheDay',
			'PartKeepr\TipOfTheDay\TipOfTheDayHistory',
			'PartKeepr\UserPreference\UserPreference',
			'PartKeepr\SystemNotice\SystemNotice',
			'PartKeepr\CronLogger\CronLogger'
			
		);
	}
	
	/**
	 * Formats a message and applies internationalization.
	 * 
	 * This method accepts sprintf-like parameters, which are appended after the $string parameter.
	 * 
	 * @param $string string The string to internationalize
	 * @todo stub
	 */
	public static function i18n ($string) {
		if (func_num_args() > 1) {
			$args = func_get_args();
			array_shift($args);
			
			return vsprintf($string, $args);
		} else {
			return $string;
		}		
	}
	
	/**
	 * Returns a new GUID.
	 * @return string The new GUID
	 */
	public static function createGUIDv4() {
	    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
	
	      // 32 bits for "time_low"
	      mt_rand(0, 0xffff), mt_rand(0, 0xffff),
	
	      // 16 bits for "time_mid"
	      mt_rand(0, 0xffff),
	
	      // 16 bits for "time_hi_and_version",
	      // four most significant bits holds version number 4
	      mt_rand(0, 0x0fff) | 0x4000,
	
	      // 16 bits, 8 bits for "clk_seq_hi_res",
	      // 8 bits for "clk_seq_low",
	      // two most significant bits holds zero and one for variant DCE1.1
	      mt_rand(0, 0x3fff) | 0x8000,
	
	      // 48 bits for "node"
	      mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
	    );
	  }
	  
	/**
	 * Returns the current PartKeepr version.
	 * @return string The PartKeepr Version
	 */
	public static function getVersion () {
	 	if (PartKeeprVersion::PARTKEEPR_VERSION == "{V_GIT}") {
	  		return "GIT development version";
	  	}
	  	return PartKeeprVersion::PARTKEEPR_VERSION;
	}
	
	/**
	 * This is a re-implementation of gettype().
	 * 
	 * The PHP documentation states that the "gettype" return values will change in the future, so we need
	 * to make sure we don't get bitten by the change.
	 *  
	 * @param mixed $var
	 * @return string The type
	 */
	public static function getType($var)
	{
		if (is_array($var)) return "array";
		if (is_bool($var)) return "boolean";
		if (is_float($var)) return "float";
		if (is_int($var)) return "integer";
		if (is_null($var)) return "NULL";
		if (is_numeric($var)) return "numeric";
		if (is_object($var)) return "object";
		if (is_resource($var)) return "resource";
		if (is_string($var)) return "string";
		return "unknown type";
	}
	
	/**
	 * Returns the effective size from a human-readable byte format.
	 * 
	 * Example:
	 * getBytesFromHumanReadable("1M") will return 1048576.
	 * 
	 * @param string $size_str The byte
	 * @return int The bytes
	 */
	public static function getBytesFromHumanReadable ($size_str)
	{
	    switch (substr ($size_str, -1))
	    {
	        case 'M': case 'm': return (int)$size_str * 1048576;
	        case 'K': case 'k': return (int)$size_str * 1024;
	        case 'G': case 'g': return (int)$size_str * 1073741824;
	        default: return $size_str;
	    }
	}
}