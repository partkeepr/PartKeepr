<?php

namespace PartKeepr\TipOfTheDayBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class TipOfTheDayTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            [
                'PartKeepr\TipOfTheDayBundle\DataFixtures\TipOfTheDayLoader',
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            ]
        )->getReferenceRepository();
    }

    public function testTips()
    {
        $client = static::makeClient(true);

        $tip = $this->fixtures->getReference('tipoftheday');

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $iri = $iriConverter->getIriFromItem($tip);
        $iri .= '/markTipRead';

        $client->request(
            'PUT',
            $iri
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('name', $response);
        $this->assertObjectHasAttribute('@type', $response);

        $this->assertEquals('TipOfTheDay', $response->{'@type'});
        $this->assertEquals('FOO', $response->name);

        $client->request(
            'GET',
            '/api/tip_of_the_day_histories'
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('@type', $response);
        $this->assertObjectHasAttribute('hydra:member', $response);

        $this->assertEquals('hydra:Collection', $response->{'@type'});

        $this->assertArrayHasKey(0, $response->{'hydra:member'});
        $this->assertEquals('FOO', $response->{'hydra:member'}[0]->name);

        $client->request(
            'POST',
            '/api/tip_of_the_days/markAllTipsAsUnread'
        );

        $this->assertEquals('OK', $client->getResponse()->getContent());

        $client->request(
            'GET',
            '/api/tip_of_the_day_histories'
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('@type', $response);
        $this->assertObjectHasAttribute('hydra:member', $response);

        $this->assertEquals('hydra:Collection', $response->{'@type'});

        $this->assertEquals(0, count($response->{'hydra:member'}));
    }
}
