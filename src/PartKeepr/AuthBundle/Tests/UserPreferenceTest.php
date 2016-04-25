<?php

namespace PartKeepr\AuthBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;

class UserPreferenceTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures(
            [
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            ]
        )->getReferenceRepository();
    }

    public function testPreferences()
    {
        $client = static::makeClient(true);

        $request = [
            'preferenceKey'   => 'foobar',
            'preferenceValue' => '1234',
        ];

        $client->request(
            'POST',
            '/api/user_preferences',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('object', $response, var_export($client->getResponse()->getContent(), true));

        $this->assertObjectHasAttribute('preferenceKey', $response);
        $this->assertObjectHasAttribute('preferenceValue', $response);
        $this->assertEquals('foobar', $response->preferenceKey);
        $this->assertEquals('1234', $response->preferenceValue);

        $client->request(
            'GET',
            '/api/user_preferences',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('array', $response);

        $preference = $response[0];

        $this->assertObjectHasAttribute('preferenceKey', $preference);
        $this->assertObjectHasAttribute('preferenceValue', $preference);
        $this->assertEquals('foobar', $preference->preferenceKey);
        $this->assertEquals('1234', $preference->preferenceValue);
    }
}
