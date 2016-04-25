<?php

namespace PartKeepr\CoreBundle\Tests;

class SystemInformationTest extends WebTestCase
{
    public function testSystemInformation()
    {
        $client = static::makeClient(true);

        $client->request(
            'GET',
            '/api/system_information'
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('array', $response);

        $this->assertInternalType('object', $response[0]);
        $this->assertObjectHasAttribute('category', $response[0]);
        $this->assertObjectHasAttribute('name', $response[0]);
        $this->assertObjectHasAttribute('value', $response[0]);
    }

    public function testSystemStatus()
    {
        $client = static::makeClient(true);

        $client->request(
            'GET',
            '/api/system_status'
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('object', $response);
        $this->assertObjectHasAttribute('inactiveCronjobCount', $response);
        $this->assertObjectHasAttribute('inactiveCronjobs', $response);
        $this->assertInternalType('array', $response->inactiveCronjobs);
        $this->assertObjectHasAttribute('schemaStatus', $response);
    }
}
