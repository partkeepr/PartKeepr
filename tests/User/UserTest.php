<?php 
namespace de\RaumZeitLabor\PartKeepr\Tests\User;

use de\RaumZeitLabor\PartKeepr\User\User;

class UserTest extends \PHPUnit_Framework_TestCase {
	protected $backupGlobals = false;
	
	/**
     * Tests if the admin user can be loaded by it's name
     */
	public function testloadByName () {
		$user = User::loadByName("admin");
	}
	
	/**
	 * Tests for an invalid user
	 * @expectedException Doctrine\ORM\NoResultException
	 */
	public function testloadByNameException () {
		$user = User::loadByName("testloadByNameException");
	}
}