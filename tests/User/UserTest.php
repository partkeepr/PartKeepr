<?php 
namespace PartKeepr\Tests\User;

use PartKeepr\AuthBundle\Entity\User\User;
use PartKeepr\AuthBundle\Entity\User\UserManager;
use PartKeepr\PartKeepr;

class UserTest extends \PHPUnit_Framework_TestCase {
	protected $backupGlobals = false;
	
	/**
	 * Clear out any non-flushed changes from the EntityManager after the test is complete
	 */
	public static function tearDownAfterClass () {
		PartKeepr::getEM()->clear();
	}
	
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
	
	/**
	 * Tests creating new users.
	 */
	public function testCreateUser () {
		$username = "test1";
		$password = "123";
		
		$user = new User($username, $password);
		
		// Make sure that the new user isn't an admin.
		$this->assertEquals(false, $user->isAdmin());
		
		$this->assertEquals($username, $user->getUsername());
		$this->assertEquals(true, $user->comparePassword($password));
	}
	
	/**
	 * Tests the password hashing
	 */
	public function testPasswordHashing () {
		$username = "test2";
		$password = "123";
		$hashedPassword = md5($password);
		
		$user = new User($username, $password);
		
		$this->assertEquals($hashedPassword, $user->getHashedPassword());
		
		// Makes sure that the compareHashedPassword method works
		$this->assertEquals(true, $user->compareHashedPassword($hashedPassword));
		
		// This must fail, because we aren't comparing a hashed password
		$this->assertEquals(false, $user->compareHashedPassword($password));
	}
	
	/**
	 * Tests the serialize method
	 */
	public function testSerialize () {
		$username = "test3";
		$password = "123";
		
		$user = new User($username, $password);
		
		$expectedArray = array ("id" => null, "username" => $username);
		
		$this->assertEquals($expectedArray, $user->serialize());
	}
	
	/**
	 * Tests the deserialize method
	 */
	public function testDeserialize () {
		$username = "test4";
		$password = "123";
		$hashedPassword = md5($password);
		
		$input = array("username" => $username, "password" => $password);
		
		$user = new User();
		$user->deserialize($input);
		
		$this->assertEquals($username, $user->getUsername());
		$this->assertEquals($hashedPassword, $user->getHashedPassword());
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to set a preference if the user is not persistant yet.
	 * 
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testSetNonPersistantUserPreference () {
		$user = new User();
		$user->setPreference("test", "foo");
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to get a preference if the user is not persistant yet.
	 *
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testGetNonPersistantUserPreference () {
		$user = new User();
		$user->getPreference("test");
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to delete a preference if the user is not persistant yet.
	 *
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testDeleteNonPersistantUserPreference () {
		$user = new User();
		$user->deletePreference("test");
	}
	
	/**
	 * Test the helper methods for setting / getting / deleting user preferences
	 */
	public function testUserPreference () {
		$username = "test5";
		$user = new User($username, "123");
		PartKeepr::getEM()->persist($user);
		PartKeepr::getEM()->flush();
		
		$user->setPreference("test", "foo");
		
		$this->assertEquals("foo", $user->getPreferenceValue("test"));
		$this->assertEquals("foo", $user->getPreference("test")->getValue());
		
		$this->assertEquals(1, count($user->getPreferences()));
		
		$user->deletePreference("test");
		
		
		
		UserManager::getInstance()->deleteUser($user->getId());
	}
}