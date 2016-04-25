<?php

namespace PartKeepr\CoreBundle\Tests;

use PartKeepr\CoreBundle\Services\VersionService;

class VersionServiceTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testVersionService()
    {

        /**
         * @var VersionService
         */
        $versionService = $this->getContainer()->get('partkeepr.versionservice');

        $versionService->setVersion('0.1.8');
        $versionService->setVersionURI(__DIR__.'/Fixtures/versions.json');

        $versionService->doVersionCheck();

        $client = static::makeClient(true);

        $client->request(
            'GET',
            '/api/system_notices'
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('hydra:member', $response);
        $this->assertEquals(1, count($response->{'hydra:member'}));

        $versionEntry = $response->{'hydra:member'}[0];

        $this->assertEquals('New PartKeepr Version 0.1.9 available', $versionEntry->title);
    }
}
