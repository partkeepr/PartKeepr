<?php

namespace PartKeepr\CategoryBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CoreBundle\Tests\WebTestCase;

abstract class AbstractCategoryCreateTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            [
                $this->getFixtureLoaderClass(),
            ]
        )->getReferenceRepository();
    }

    public function testCreateCategory()
    {
        $client = static::makeClient(true);

        $rootCategory = $this->fixtures->getReference($this->getReferencePrefix().'.root');

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $request = [
            'parent' => $iriConverter->getIriFromItem($rootCategory),
            'name'   => 'test',
        ];

        $resource = $this->getContainer()->get('api.resource_collection')->getResourceForEntity($this->getResourceClass());
        $iri = $iriConverter->getIriFromResource($resource);

        $client->request(
            'POST',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $responseObject = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('object', $responseObject);

        $this->assertObjectHasAttribute('@id', $responseObject);
        $this->assertObjectHasAttribute('name', $responseObject);

        $item = $iriConverter->getItemFromIri($responseObject->{'@id'});

        $this->assertNotNull($item->getParent());
        $this->assertEquals($item->getParent()->getId(), $rootCategory->getId());
    }

    public function testCreateRootCategory()
    {
        $client = static::makeClient(true);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $request = [
            'name' => 'test',
        ];

        $resource = $this->getContainer()->get('api.resource_collection')->getResourceForEntity($this->getResourceClass());
        $iri = $iriConverter->getIriFromResource($resource);

        $client->request(
            'POST',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $responseObject = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('@type', $responseObject);
        $this->assertObjectHasAttribute('hydra:description', $responseObject);

        $this->assertEquals('There may be only one root node', $responseObject->{'hydra:description'});
    }

    abstract public function getFixtureLoaderClass();

    abstract public function getReferencePrefix();

    abstract public function getResourceClass();
}
