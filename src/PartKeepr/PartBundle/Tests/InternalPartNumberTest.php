<?php

namespace PartKeepr\PartBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class InternalPartNumberTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            [
                'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
                'PartKeepr\ManufacturerBundle\Tests\DataFixtures\ManufacturerDataLoader',
                'PartKeepr\DistributorBundle\Tests\DataFixtures\DistributorDataLoader',
            ]
        )->getReferenceRepository();
    }

    public function testInternalPartNumberUniqueness()
    {
        $client = static::makeClient(true);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $part = [
            "name"               => "foobar",
            "storageLocation"    => $iriConverter->getIriFromItem($this->fixtures->getReference("storagelocation.first")),
            "category"           => $iriConverter->getIriFromItem($this->fixtures->getReference("partcategory.first")),
            "partUnit"           => $iriConverter->getIriFromItem($this->fixtures->getReference("partunit.default")),
            "internalPartNumber" => "foo123",
        ];

        $client->request(
            'POST',
            '/api/parts',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($part)
        );
        $client->request(
            'POST',
            '/api/parts',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($part)
        );

        $this->assertEquals(500, $client->getResponse()->getStatusCode());

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute("@type", $response);
        $this->assertObjectHasAttribute("@context", $response);
        $this->assertObjectHasAttribute('hydra:title', $response);
        $this->assertObjectHasAttribute('hydra:description', $response);

        $this->assertEquals('/api/contexts/Error', $response->{'@context'});
        $this->assertEquals('Error', $response->{'@type'});
        $this->assertEquals('An error occurred', $response->{'hydra:title'});
        $this->assertEquals('The internal part number is already used', $response->{'hydra:description'});
    }
}
