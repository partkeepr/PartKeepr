<?php
namespace de\RaumZeitLabor\PartKeepr\Tests\Util;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

class ConfigurationTest extends \PHPUnit_Framework_TestCase {
	public function testConfiguration () {
		Configuration::setOption("test", "value");
		
		$this->assertEquals(Configuration::getOption("test"), "value");
		
		/* Test for the default value of bool false */
		$this->assertEquals(Configuration::getOption("test2"), false);
		
		/* Test for an user-specified default value */
		$this->assertEquals(Configuration::getOption("test2", "default"), "default");
		
		
	}
}
?>