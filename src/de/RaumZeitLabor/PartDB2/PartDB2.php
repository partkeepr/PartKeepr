<?php
namespace de\RaumZeitLabor\PartDB2;

use Doctrine\Common\ClassLoader,
    Doctrine\ORM\Configuration,
    Doctrine\ORM\EntityManager,
    de\RaumZeitLabor\PartDB2\Util\Configuration as PartDB2Configuration;



class PartDB2 {
	/**
	 * 
	 * Contains the doctrine entity manager.
	 * @var Doctrine\ORM\EntityManager
	 */
	private static $entityManager = null;
	
	/**
	 * Initializes the PartDB2 system
	 * 
	 * You *need* to call this method before doing anything else.
	 * 
	 * An environment is used to load a different configuration file.
	 * Usually, you don't need to pass anything here.
	 * 
	 * @param $environment	string	The environment to use, null otherwise.
	 * @return nothing
	 */
	public static function initialize ($environment = null) {
		self::initializeClassLoaders();
		self::initializeConfig($environment);
		self::initializeDoctrine();
	}
	
	/**
	 * Initializes the doctrine class loader and sets up the
	 * directories.
	 * 
	 * @param none
	 * @return nothing
	 */
	public static function initializeClassLoaders() {
		require_once 'Doctrine/Common/ClassLoader.php';
		
		
		$classLoader = new ClassLoader('de\RaumZeitLabor\PartDB2', dirname(dirname(dirname(__DIR__))));
		$classLoader->register(); // register on SPL autoload stack
		
		$classLoader = new ClassLoader('Doctrine\ORM');
		$classLoader->register(); // register on SPL autoload stack
		
		$classLoader = new ClassLoader('Doctrine\DBAL');
		$classLoader->register(); // register on SPL autoload stack
		
		$classLoader = new ClassLoader('Doctrine\Common');
		$classLoader->register(); // register on SPL autoload stack
		
		$classLoader = new ClassLoader('Symfony', 'Doctrine');
		$classLoader->register(); // register on SPL autoload stack
		
		$classLoader = new ClassLoader("DoctrineExtensions\NestedSet", dirname(dirname(dirname(dirname(__DIR__)))) ."/3rdparty/doctrine2-nestedset/lib");
		$classLoader->register();
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
	 * @return nothing
	 */
	public static function initializeConfig ($environment = null) {
		if ($environment != null) {
			include(dirname(dirname(dirname(dirname(__DIR__))))."/config-$environment.php");
		} else {
			include(dirname(dirname(dirname(dirname(__DIR__))))."/config.php");
		}
		
	}
	/**
	 * Initializes the doctrine framework and
	 * sets all required configuration options.
	 * 
	 * @param none
	 * @return nothing
	 */
	public static function initializeDoctrine () {
		
		
		$config = new Configuration;
		
		$driverImpl = $config->newDefaultAnnotationDriver(
			array(__DIR__)
			//array(__DIR__."/Session")
			
			);
		$config->setMetadataDriverImpl($driverImpl);
		
		$connectionOptions = array(
		    'driver' => 	PartDB2Configuration::getOption("partdb2.database.driver","pdo_mysql"),
			'dbname' => 	PartDB2Configuration::getOption("partdb2.database.dbname", "partdb2"),
			'user' => 		PartDB2Configuration::getOption("partdb2.database.username", "partdb2"),
			'password' => 	PartDB2Configuration::getOption("partdb2.database.password", "partdb2"),
			'host' => 		PartDB2Configuration::getOption("partdb2.database.hostname", "localhost")
		);
		
		$cache = new \Doctrine\Common\Cache\ApcCache();
		$config->setMetadataCacheImpl($cache);

		$config->setQueryCacheImpl($cache);
		
		//$logger = new \Doctrine\DBAL\Logging\EchoSQLLogger();
		//$config->setSQLLogger($logger);
		
		/* @todo what's up with this proxy stuff? */
		// Proxy configuration
		$config->setProxyDir(dirname(dirname(dirname(__DIR__))) . '/Proxies');
		$config->setProxyNamespace('Proxies');
		$config->setEntityNamespaces(self::getEntityClasses());
		$config->setAutoGenerateProxyClasses(false);
		
		$logger = new \Doctrine\DBAL\Logging\EchoSQLLogger();
        //$config->setSQLLogger($logger);
		
		self::$entityManager = EntityManager::create($connectionOptions, $config);
	}
	
	/**
	 * Returns the EntityManager. Shortcut for getEntityManager().
	 * @param none
	 * @return Doctrine\ORM\EntityManager The EntityManager
	 */
	public static function getEM () {
		return self::getEntityManager();
	}

	/**
	 * Returns the EntityManager.
	 * @param none
	 * @return Doctrine\ORM\EntityManager The EntityManager
	 */
	public static function getEntityManager () {
		if (!self::$entityManager instanceof EntityManager) {
			throw new Exception("No EntityManager found. Make sure you called initializeDoctrine() or initialize().");
		}
		return self::$entityManager;
	}
	
	public static function getClassMetaData () {
		$classes = self::getEntityClasses();

		$aClasses = array();
		
		foreach ($classes as $class) {
			$aClasses[] = PartDB2::getEM()->getClassMetadata($class);
		}
		
		return $aClasses;
	}
	
	public static function getEntityClasses () {
		return array(
			'de\RaumZeitLabor\PartDB2\Auth\User',
			'de\RaumZeitLabor\PartDB2\Session\Session',
			'de\RaumZeitLabor\PartDB2\Footprint\Footprint',
			'de\RaumZeitLabor\PartDB2\Category\Category',
			'de\RaumZeitLabor\PartDB2\Part\Part',
			'de\RaumZeitLabor\PartDB2\Part\PartUnit',
			'de\RaumZeitLabor\PartDB2\Part\PartManufacturer',
			'de\RaumZeitLabor\PartDB2\Part\PartDistributor',
			'de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation',
			'de\RaumZeitLabor\PartDB2\Stock\StockEntry',
			'de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer',
			'de\RaumZeitLabor\PartDB2\Distributor\Distributor',
			'de\RaumZeitLabor\PartDB2\Image\Image',
			'de\RaumZeitLabor\PartDB2\Image\CachedImage',
			'de\RaumZeitLabor\PartDB2\Image\TempImage',
			'de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo',
			'de\RaumZeitLabor\PartDB2\Statistic\StatisticSnapshot',
			'de\RaumZeitLabor\PartDB2\Statistic\StatisticSnapshotUnit',
			'de\RaumZeitLabor\PartDB2\SiPrefix\SiPrefix',
			'de\RaumZeitLabor\PartDB2\Unit\Unit',
			'de\RaumZeitLabor\PartDB2\PartParameter\PartParameter'
		);
	}
	
	/**
	 *@todo stub
	 */
	public static function i18n ($string) {
		return $string;
	}
	
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
}
?>