<?php
namespace PartKeepr\AuthBundle\Tests\Services;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\AuthBundle\Entity\User;

class UserPreferenceServiceTest extends WebTestCase
{
    public function testBasics()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");

        /**
         * @var User $user
         */
        $user = $this->getContainer()->get("partkeepr.userservice")->getProxyUser("admin", "test");

        $service->setPreference($user, "foo", "bar");
        $this->assertEquals("bar", $service->getPreferenceValue($user, "foo"));

        $preferences = $service->getPreferences($user);

        $this->assertInternalType("array", $preferences);

        $this->assertArrayHasKey(0, $preferences);
        $this->assertEquals(get_class($preferences[0]), "PartKeepr\AuthBundle\Entity\UserPreference");

        $this->assertEquals("bar", $preferences[0]->getValue());
        $this->assertEquals("foo", $preferences[0]->getKey());
        $this->assertEquals($user, $preferences[0]->getUser());

        $preference = $service->getPreference($user, "foo");

        $this->assertEquals(get_class($preference), "PartKeepr\AuthBundle\Entity\UserPreference");

        $this->assertEquals("bar", $preference->getValue());
        $this->assertEquals("foo", $preference->getKey());
        $this->assertEquals($user, $preference->getUser());

        $service->deletePreference($user, "foo");

        $preferences = $service->getPreferences($user);

        $this->assertEquals(0, count($preferences));

    }

    public function testGetPreferencesException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $user = new User("admin", "test");
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->getPreferences($user);
    }

    public function testGetPreferenceUserException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $user = new User("admin", "test");
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->getPreference($user, "BLA");
    }

    public function testGetPreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");

        /**
         * @var User $user
         */
        $user = $this->getContainer()->get("partkeepr.userservice")->getProxyUser("admin", "test");

        $this->setExpectedException("PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException");
        $service->getPreference($user, "BLA");
    }

    public function testSetPreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $user = new User("admin", "test");
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->setPreference($user, "FOO", "BAR");
    }

    public function testDeletePreferenceException()
    {
        $service = $this->getContainer()->get("partkeepr.user_preference_service");
        $user = new User("admin", "test");
        $this->setExpectedException("PartKeepr\Util\Exceptions\EntityNotPersistantException");
        $service->deletePreference($user, "FOO");
    }
}
