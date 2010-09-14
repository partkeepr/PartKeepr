<?php
namespace de\RaumZeitLabor\PartDB2\setup\tests;
declare(encoding = 'UTF-8');

class PDOTest extends \PHPUnit_Framework_TestCase {
	

	/**
	 * Tests if the PDO class exists.
	 * 
	 * @param none
	 * @return nothing
	 * @author Felicitus <felicitus-partdb@felicitus.de>
	 */
	public function testPDO () {
		
		/* If the PDO class doesn't exist, PDO is probably not loaded. */
		if (!class_exists("\PDO")) {
			$this->fail("PDO class doesn't exist. Perhaps the PDO extension is not loaded?");
		}
	}

	/**
	 * Tests if the PDO class exists.
	 * 
	 * @param none
	 * @return nothing
	 * @author Felicitus <felicitus-partdb@felicitus.de>
	 */
	public function testPDOMySQL () {
		$drivers = \PDO::getAvailableDrivers();
		
		if (!in_array("mysql", $drivers)) {
			$this->fail("PDO_MySQL driver not found. Perhaps the PDO-MySQL extension is not loaded?");
		}
	}
	
}
?>