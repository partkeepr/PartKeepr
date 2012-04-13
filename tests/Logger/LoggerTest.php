<?php 
namespace de\RaumZeitLabor\PartKeepr\Tests\Logger;

use de\RaumZeitLabor\PartKeepr\Logger\Logger,
	de\RaumZeitLabor\PartKeepr\Util\Configuration;

class LoggerTest extends \PHPUnit_Framework_TestCase {
	
	/**
	 * Specifies the temporary logging file to be used for our tests
	 * @var string
	 */
	private $tempName;
	
	/**
	 * @inheritdoc
	 */
	public function setUp () {
		$this->tempName = tempnam(sys_get_temp_dir(), "pk");
		
		Configuration::setOption("partkeepr.logger.outputfile", $this->tempName);
		Configuration::setOption("partkeepr.logger.enable", true);
	}
	
	/**
	 * Tests the logging
	 */
	public function testLogging () {
		$this->outputLog(Logger::LOGLEVEL_CRITICAL, "test");
		$this->outputLog(Logger::LOGLEVEL_ERROR, 	"test");
		$this->outputLog(Logger::LOGLEVEL_WARNING, 	"test");
		$this->outputLog(Logger::LOGLEVEL_INFO, 	"test");
		$this->outputLog(Logger::LOGLEVEL_DEBUG, 	"test");
	}
	
	public function testLoggingWithHelperMethods () {
		$this->outputLog(Logger::LOGLEVEL_CRITICAL, "test", true);
		$this->outputLog(Logger::LOGLEVEL_ERROR, 	"test", true);
		$this->outputLog(Logger::LOGLEVEL_WARNING, 	"test", true);
		$this->outputLog(Logger::LOGLEVEL_INFO, 	"test", true);
		$this->outputLog(Logger::LOGLEVEL_DEBUG, 	"test", true);
	}
	
	/**
	 * Tests that no output file is written if logging is disabled
	 */
	public function testDisabledLogging () {
		unlink($this->tempName);
		Configuration::setOption("partkeepr.logger.enable", false);
		
			Logger::log("test", Logger::LOGLEVEL_CRITICAL);
		
		
		$this->assertEquals(false, file_exists($this->tempName));
	}
	
	/**
	 * Writes a specific string with a specific severity to the log file and checks if the file was written correctly.
	 * @param string $severity	The severity
	 * @param string $string 	The string
	 * @param $useHelperMethods boolean True to use the helper methods
	 */
	public function outputLog ($severity, $string, $useHelperMethods = false) {
		unlink($this->tempName);
		
		if ($useHelperMethods == true) {
			$helperMethod = "log".ucfirst($severity);
			Logger::$helperMethod($string);
		} else {
			Logger::log($string, $severity);
		}
		
		
		$data = file_get_contents($this->tempName);
		$this->matchLogLine($data, $severity, $string);
	}
	
	/**
	 * Splits the given line into tokens and tries to find out if the log message is correct.
	 * @param string $line		The line to test
	 * @param string $severity	The given severity
	 * @param string $text		The logged text
	 */
	public function matchLogLine ($line, $severity, $text) {
		// Match the date section
		$tokens = explode(" ", $line);
		
		$this->assertEquals(11, strlen($tokens[0]));
		$this->assertEquals(9, strlen($tokens[1]));
		
		$severityMatch = "[" . str_pad($severity, 8) . "]";
		$this->assertNotEquals(false, strpos($line, $severityMatch));
		
		$this->assertNotEquals(false, strpos($line, $text));
	} 
}