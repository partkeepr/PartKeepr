<?php 
namespace PartKeepr\Tests\Service;

use PartKeepr\Service\Service,
	PartKeepr\PartKeepr,
	PartKeepr\Part\Part;


class ServiceTest extends \PHPUnit_Framework_TestCase {
	protected $backupGlobals = false;
	
	/**
	 * Tests injection of service parameters via the constructor.
	 */
	public function testConstructorParameterPassing () {
		$service = new Service(array("foo" => "bar"));
		
		$this->assertEquals($service->getParameter("foo"), "bar");
	}
}
