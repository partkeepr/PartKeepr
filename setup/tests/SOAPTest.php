<?php
namespace de\RaumZeitLabor\PartDB2\setup\tests;
declare(encoding = 'UTF-8');

class SOAPTest extends \PHPUnit_Framework_TestCase {
	

	/**
	 * Tests if the SOAP Server class exists.
	 * 
	 * @param none
	 * @return nothing
	 * @author Felicitus <felicitus-partdb@felicitus.de>
	 */
	public function testSOAP () {
		
		/* If the PDO class doesn't exist, PDO is probably not loaded. */
		if (!class_exists("\SoapServer")) {
			$this->fail("SoapServer class doesn't exist. Please install the PHP SOAP Module.");
		}
	}

	
}
?>