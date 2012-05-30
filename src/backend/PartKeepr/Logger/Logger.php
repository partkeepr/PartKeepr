<?php
namespace PartKeepr\Logger;

/**
 * This class implements a simple logging mechanism.
 * 
 * Might be replaced with some more advanced logging framework, but it serves its purpose for now.
 */
use PartKeepr\Util\Configuration;

class Logger {
	/**
	 * Loglevel "debug"
	 *
	 * You want to use this loglevel for debugging messages.
	 * @var string
	 */
	const LOGLEVEL_DEBUG 	= "debug";
	
	/**
	 * Loglevel "info"
	 *
	 * You want to use this loglevel for informational messages where the program flow can continue normally and no
	 * impacts occur.
	 *
	 * @var string
	 */
	const LOGLEVEL_INFO 	= "info";
	
	/**
	 * Loglevel "warning"
	 * 
	 * You want to use this loglevel for messages where program flow can continue normally, but a minor
	 * impact can occur.
	 * 
	 * @var string
	 */
	const LOGLEVEL_WARNING 	= "warning";
	
	/**
	 * Loglevel "error"
	 * 
	 * You want to use this loglevel for messages where program flow could be interrupted and major impacts occur.
	 * 
	 * @var string
	 */
	const LOGLEVEL_ERROR 	= "error";
	
	/**
	 * Loglevel "critical"
	 * 
	 * You want to use this loglevel for messages where program flow could be interrupted and major impacts occur.
	 * 
	 * @var string
	 */
	const LOGLEVEL_CRITICAL	= "critical";
	
	/**
	 * Logs a message.
	 * 
	 * @param string $message The message to log
	 * @param string $severity One of the Logger::LOGLEVEL_* constants
	 */
	public static function log ($message, $severity = Logger::LOGLEVEL_INFO) {
		if (Configuration::getOption("partkeepr.logger.enable", false) === false) {
			// No logging wanted
			return;
		}
		
		$logFormat = "[%-19s] [%-8s] %s";
		
		$outputFile = Configuration::getOption("partkeepr.logger.outputfile", sys_get_temp_dir() . "/partkeepr.log");
		$fp = fopen($outputFile, "a");
		
		$date = date("Y-m-d H:i:s");
		
		fputs($fp, sprintf($logFormat, $date, $severity, $message)."\n");
		
		fclose($fp);
	}
	
	/**
	 * Logs a message with the Logger::LOGLEVEL_DEBUG severity.
	 * @param string $message
	 */
	public static function logDebug ($message) {
		self::log($message, Logger::LOGLEVEL_DEBUG);	
	}
	
	/**
	 * Logs a message with the Logger::LOGLEVEL_INFO severity.
	 * @param string $message
	 */
	public static function logInfo ($message) {
		self::log($message, Logger::LOGLEVEL_INFO);
	}
	
	/**
	 * Logs a message with the Logger::LOGLEVEL_WARNING severity.
	 * @param string $message
	 */
	public static function logWarning ($message) {
		self::log($message, Logger::LOGLEVEL_WARNING);
	}
	
	/**
	 * Logs a message with the Logger::LOGLEVEL_ERROR severity.
	 * @param string $message
	 */
	public static function logError ($message) {
		self::log($message, Logger::LOGLEVEL_ERROR);
	}
	
	/**
	 * Logs a message with the Logger::LOGLEVEL_CRITICAL severity.
	 * @param string $message
	 */	
	public static function logCritical ($message) {
		self::log($message, Logger::LOGLEVEL_CRITICAL);
	}
}