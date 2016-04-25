<?php

namespace PartKeepr\SetupBundle\Tests;

use PartKeepr\CoreBundle\Tests\SetupWebTestCase;

class ExistingUsersSetupTest extends SetupWebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testExistingUsers()
    {
        $this->markTestSkipped('Setup tests requires setup refactoring, skipping');
        $authKey = $this->generateAndGetAuthKey();
        $configuration = $this->getConfiguration($authKey);

        $client = static::makeClient();

        $parameters = [];

        // First test: Ensure invalid auth key is returned
        $client->request(
            'GET',
            '/setup/testExistingUsers',
            [],
            [],
            [],
            json_encode($parameters)
        );

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('success', $data);
        $this->assertArrayHasKey('errors', $data);
        $this->assertArrayHasKey('message', $data);

        $this->assertFalse($data['success']);
        $this->assertEquals('Invalid Authentication Key', $data['message']);

        $parameters['authKey'] = $authKey;
        $parameters['values'] = $configuration;

        $client->request(
            'GET',
            '/setup/testExistingUsers',
            [],
            [],
            [],
            json_encode($parameters)
        );

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('success', $data);
        $this->assertArrayHasKey('legacyUsers', $data);
        $this->assertArrayHasKey('totalUsers', $data);
        $this->assertArrayHasKey('errors', $data);
        $this->assertArrayHasKey('message', $data);

        $this->assertTrue($data['success']);
        $this->assertEquals(0, $data['legacyUsers']);
        $this->assertEquals(0, $data['totalUsers']);
        $this->assertEquals(0, count($data['errors']));
    }
}
