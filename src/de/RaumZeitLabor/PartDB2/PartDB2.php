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
			array(__DIR__."/Auth"),
			array(__DIR__."/Session")
			
			);
		$config->setMetadataDriverImpl($driverImpl);
		
		$connectionOptions = array(
		    'driver' => 	PartDB2Configuration::getOption("partdb2.database.driver","pdo_mysql"),
			'dbname' => 	PartDB2Configuration::getOption("partdb2.database.dbname", "partdb2"),
			'user' => 		PartDB2Configuration::getOption("partdb2.database.username", "partdb2"),
			'password' => 	PartDB2Configuration::getOption("partdb2.database.password", "partdb2"),
			'host' => 		PartDB2Configuration::getOption("partdb2.database.hostname", "localhost")
		);
		
		$cache = new \Doctrine\Common\Cache\ArrayCache;
		$config->setMetadataCacheImpl($cache);
		
		/* @todo what's up with this proxy stuff? */
		// Proxy configuration
		$config->setProxyDir(dirname(dirname(dirname(__DIR__))) . '/Proxies');
		$config->setProxyNamespace('Proxies');
		$config->setAutoGenerateProxyClasses(true);
		
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
	
	/**
	 *@todo stub
	 */
	public static function i18n ($string) {
		return $string;
	}
}
?>