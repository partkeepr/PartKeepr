<?php

namespace PartKeepr\SystemPreferenceBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;
use PartKeepr\SystemPreferenceBundle\Exceptions\SystemPreferenceNotFoundException;

class SystemPreferenceTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testSystemPreferenceService()
    {
        $this->getContainer()->get("partkeepr.system_preference_service")->setSystemPreference("foo", "bar");

        $this->assertEquals("bar", $this->getContainer()->get("partkeepr.system_preference_service")->getSystemPreferenceValue("foo"));

        $this->getContainer()->get("partkeepr.system_preference_service")->setSystemPreference("foo", "bar2");

        $this->assertEquals("bar2", $this->getContainer()->get("partkeepr.system_preference_service")->getSystemPreferenceValue("foo"));

        $preference = $this->getContainer()->get("partkeepr.system_preference_service")->getPreference("foo");
        $this->assertEquals("foo", $preference->getPreferenceKey());

        $this->expectException(SystemPreferenceNotFoundException::class);
        $this->assertEquals("bar2", $this->getContainer()->get("partkeepr.system_preference_service")->getSystemPreferenceValue("foo2"));
    }

    public function testSystemPreferenceCreate()
    {
        $client = static::makeClient(true);

        $parameters = [
            "preferenceKey"   => "foobar",
            "@type"           => "SystemPreference",
            "preferenceValue" => "test",
        ];

        // First test: Ensure invalid auth key is returned
        $client->request(
            'POST',
            '/api/system_preferences',
            [],
            [],
            [],
            json_encode($parameters)
        );

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}
