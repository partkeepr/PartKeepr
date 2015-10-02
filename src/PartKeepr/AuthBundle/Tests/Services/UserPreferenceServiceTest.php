<?php
namespace PartKeepr\AuthBundle\Tests\Services;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\AuthBundle\Entity\User;

class UserPreferenceServiceTest extends WebTestCase
{
    public function testBasics()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");

        /**
         * @var User $user
         */
        $user = $userService->getProxyUser("admin", $userService->getBuiltinProvider());

        $service->setPreference($user, "foo", "bar");
        $this->assertEquals("bar", $service->getPreferenceValue($user, "foo"));

        $preferences = $service->getPreferences($user);

        $this->assertInternalType("array", $preferences);

        $this->assertArrayHasKey(0, $preferences);
        $this->assertEquals(get_class($preferences[0]), "PartKeepr\AuthBundle\Entity\UserPreference");

        $this->assertEquals("bar", $preferences[0]->getPreferenceValue());
        $this->assertEquals("foo", $preferences[0]->getPreferenceKey());
        $this->assertEquals($user, $preferences[0]->getUser());

        $preference = $service->getPreference($user, "foo");

        $this->assertEquals(get_class($preference), "PartKeepr\AuthBundle\Entity\UserPreference");

        $this->assertEquals("bar", $preference->getPreferenceValue());
        $this->assertEquals("foo", $preference->getPreferenceKey());
        $this->assertEquals($user, $preference->getUser());

        $service->deletePreference($user, "foo");

        $preferences = $service->getPreferences($user);

        $this->assertEquals(0, count($preferences));

    }

    public function testGetPreferencesException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");

        $user = new User("admin", $userService->getBuiltinProvider());
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->getPreferences($user);
    }

    public function testGetPreferenceUserException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");
        $user = new User("admin", $userService->getBuiltinProvider());
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->getPreference($user, "BLA");
    }

    public function testGetPreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");

        /**
         * @var User $user
         */
        $user = $this->getContainer()->get("partkeepr.userservice")->getProxyUser("admin", $userService->getBuiltinProvider());

        $this->setExpectedException("PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException");
        $service->getPreference($user, "BLA");
    }

    public function testSetPreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");

        $user = new User("admin", $userService->getBuiltinProvider());
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->setPreference($user, "FOO", "BAR");
    }

    public function testDeletePreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $userService = $this->getContainer()->get("partkeepr.userservice");

        $user = new User("admin", $userService->getBuiltinProvider());
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->deletePreference($user, "FOO");
    }
}
