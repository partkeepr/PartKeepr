<?php

namespace PartKeepr\DoctrineReflectionBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class AdvancedSearchFilterTest extends WebTestCase
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


    public function testEqualFilter()
    {
        $client = static::makeClient(true);

        $filter = array(
            array(
                "property" => "storageLocation.name",
                "operator" => "=",
                "value" => "test"
            )
        );


        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );


        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(1, $data["hydra:member"]);
        $this->assertArrayHasKey("@id", $data["hydra:member"][0]);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $this->assertEquals($iriConverter->getIriFromItem($this->fixtures->getReference("part.1")),
            $data["hydra:member"][0]["@id"]);
    }

    public function testEqualFilterSame()
    {
        $client = static::makeClient(true);

        $filter = array(
            array(
                "property" => "name",
                "operator" => "=",
                "value" => "FOOBAR"
            )
        );


        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );


        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(1, $data["hydra:member"]);
        $this->assertArrayHasKey("@id", $data["hydra:member"][0]);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $this->assertEquals($iriConverter->getIriFromItem($this->fixtures->getReference("part.1")),
            $data["hydra:member"][0]["@id"]);
    }

    public function testIDReference()
    {
        $client = static::makeClient(true);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $filter = array(
            array(
                "property" => "storageLocation",
                "operator" => "=",
                "value" => $iriConverter->getIriFromItem($this->fixtures->getReference("storagelocation.first"))
            )
        );

        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );


        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(1, $data["hydra:member"]);
    }

    public function testIDReferenceArray()
    {
        $client = static::makeClient(true);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $filter = array(
            array(
                "property" => "storageLocation",
                "operator" => "IN",
                "value" => [
                    $iriConverter->getIriFromItem($this->fixtures->getReference("storagelocation.first")),
                    $iriConverter->getIriFromItem($this->fixtures->getReference("storagelocation.second"))
                ]
            )
        );

        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );


        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertGreaterThan(1, $data["hydra:member"]);
    }

    public function testLikeFilter()
    {
        $client = static::makeClient(true);

        $filter = array(
            array(
                "property" => "storageLocation.name",
                "operator" => "LIKE",
                "value" => "%test%"
            )
        );


        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );


        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(2, $data["hydra:member"]);
    }

    public function testSorter()
    {
        $client = static::makeClient(true);

        $order = array(
            array(
                "property" => "storageLocation.name",
                "direction" => "ASC"
            )
        );


        $client->request(
            'GET',
            "/api/parts?order=" . json_encode($order),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );

        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(2, $data["hydra:member"]);
    }

    public function testOrFilter()
    {
        $client = static::makeClient(true);

        $filter = array(
            array(
                "mode" => "OR",
                "subfilters" => array(
                    array(
                        "property" => "storageLocation.name",
                        "operator" => "=",
                        "value" => "test"
                    ),
                    array(
                        "property" => "storageLocation.name",
                        "operator" => "=",
                        "value" => "test2"
                    )
                )
            )
        );


        $client->request(
            'GET',
            "/api/parts?filter=" . json_encode($filter),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json']
        );

        $data = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey("hydra:member", $data);
        $this->assertCount(2, $data["hydra:member"]);
    }
}
