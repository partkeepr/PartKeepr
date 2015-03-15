<?php 
namespace PartKeepr\Tests\UserPreference;

use PartKeepr\AuthBundle\Entity\User\User;
use PartKeepr\PartKeepr;
use PartKeepr\UserPreference\UserPreference;

class UserPreferenceTest extends \PHPUnit_Framework_TestCase {
	protected $user;
	
	/**
	 * Assigns the "regular" user for this test and deletes all user preferences for testing
	 * (non-PHPdoc)
	 * @see PHPUnit_Framework_TestCase::setUp()
	 */
	protected function setUp () {
		$this->user = User::loadByName("regular");
		
		$this->deleteUserPreferences();
	}
	
	/**
	 * Deletes all user preferences after testing
	 * (non-PHPdoc)
	 * @see PHPUnit_Framework_TestCase::tearDown()
	 */
	protected function tearDown () {
		$this->deleteUserPreferences();
	}
	
	/**
	 * Deletes all user preferences for the test user.
	 * 
	 * @param none
	 * @return nothing
	 */
	protected function deleteUserPreferences () {
		$dql = "DELETE FROM PartKeepr\UserPreference\UserPreference up WHERE up.user = :user";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $this->user);
		$query->execute();
	}
	
	/**
     * Tests if user preferences can be set
     */
	public function testSetUserPreference () {
		$preferenceKey = "test1";
		$preferenceValue = "123";
		
		UserPreference::setPreference($this->user, $preferenceKey, $preferenceValue);
		
		// Read back the set user preference to make sure it's valid
		$this->assertEquals($preferenceValue, UserPreference::getPreferenceValue($this->user, $preferenceKey));
		
		// Make sure that the user is set correctly
		$this->assertEquals($this->user, UserPreference::getPreference($this->user, $preferenceKey)->getUser());
		
		// Make sure the key is set correctly
		$this->assertEquals($preferenceKey, UserPreference::getPreference($this->user, $preferenceKey)->getKey());
		
		// Make sure that we only get one result when we set the same preference twice
		UserPreference::setPreference($this->user, $preferenceKey, $preferenceValue);
		
		$dql =  "SELECT COUNT(up) FROM PartKeepr\UserPreference\UserPreference up WHERE ";
		$dql .= "up.user = :user AND up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $this->user);
		$query->setParameter("key", $preferenceKey);
		
		$this->assertEquals(1, $query->getSingleScalarResult());
	}
	
	/**
	 * Tests if the correct exception is thrown when attempting to load a non-existing user preference
	 * @expectedException PartKeepr\UserPreference\Exceptions\UserPreferenceNotFoundException
	 */
	public function testGetNonExistingUserPreference () {
		$preferenceKey = "test2";
		
		UserPreference::getPreferenceValue($this->user, $preferenceKey);
	}
	
	/**
	 * Make sure that deleting a user preference actually works.
	 * 
	 * We're expecting the UserPreferenceNotFoundException because we are attempting to retrieve the value of the
	 * previously deleted value.
	 * 
	 * @expectedException PartKeepr\UserPreference\Exceptions\UserPreferenceNotFoundException
	 */
	public function testDeleteUserPreference () {
		$preferenceKey = "test3";
		$preferenceValue = "123";
		
		UserPreference::setPreference($this->user, $preferenceKey, $preferenceValue);
		
		UserPreference::deletePreference($this->user, $preferenceKey);
		
		// This one should give us the UserPreferenceNotFoundException
		UserPreference::getPreferenceValue($this->user, $preferenceKey);
	}
	
	/**
	 * This test makes sure that the format in the database is a PHP serialized string. In case somebody
	 * decides to change the format, this test will fail. IF THIS TEST FAILS, YOU NEED TO PROVIDE A DATABASE
	 * UPGRADE METHOD! DO NOT CHANGE THIS TEST SO THAT IT SIMPLY PASSES!
	 */
	public function testDatabaseFormat () {
		$preferenceKey = "test4";
		$preferenceValue = "123";
		
		UserPreference::setPreference($this->user, $preferenceKey, $preferenceValue);
		
		$dql =  "SELECT up.preferenceValue FROM PartKeepr\UserPreference\UserPreference up WHERE ";
		$dql .= "up.user = :user AND up.preferenceKey = :key";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $this->user);
		$query->setParameter("key", $preferenceKey);
		
		$this->assertEquals('s:3:"123";', $query->getSingleScalarResult());
	}
	
	/**
	 * Tests if the serialized format matches our requirements. Change this test if you've changed the 
	 * implementation of the user preferences.
	 */
	public function testSerialize () {
		$preferenceKey = "test5";
		$preferenceValue = "123";
		
		$expectedArray = array(
				"key" => $preferenceKey,
				"value" => $preferenceValue,
				"user_id" => $this->user->getId()
			);
		
		$userPreference = UserPreference::setPreference($this->user, $preferenceKey, $preferenceValue);
		
		$this->assertEquals($expectedArray, $userPreference->serialize());
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to set a preference if the user is not persistant yet.
	 *
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testSetNonPersistantUserPreference () {
		$user = new User();
		UserPreference::setPreference($user, "test", "foo");
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to get a preference if the user is not persistant yet.
	 *
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testGetNonPersistantUserPreference () {
		$user = new User();
		UserPreference::getPreference($user, "test");
	}
	
	/**
	 * Makes sure that an exception is thrown when attempting to delete a preference if the user is not persistant yet.
	 *
	 * @expectedException PartKeepr\Util\Exceptions\EntityNotPersistantException
	 */
	public function testDeleteNonPersistantUserPreference () {
		$user = new User();
		UserPreference::deletePreference($user, "test");
	}
}