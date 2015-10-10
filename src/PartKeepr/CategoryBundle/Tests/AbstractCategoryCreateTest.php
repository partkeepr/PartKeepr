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
            array(
                $this->getFixtureLoaderClass(),
            )
        )->getReferenceRepository();
    }

    public function testRootCreateCateory () {
        $client = static::makeClient(true);

        $request = array(
            "parent" => "@local-tree-root",
            "name" => "test"
        );

        /**
         * @var $iriConverter IriConverter
         */
        $iriConverter = $this->getContainer()->get("api.iri_converter");

        $resource = $this->getContainer()->get("api.resource_collection")->getResourceForEntity($this->getResourceClass());
        $iri = $iriConverter->getIriFromResource($resource);

        $client->request(
            'POST',
            $iri,
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $responseObject = json_decode($client->getResponse()->getContent());

        $this->assertInternalType("object", $responseObject);

        $this->assertObjectHasAttribute("@id", $responseObject);
        $this->assertObjectHasAttribute("name", $responseObject);

        $item = $iriConverter->getItemFromIri($responseObject->{"@id"});
        $rootCategory = $this->fixtures->getReference($this->getReferencePrefix().".root");

        $this->assertNotNull($item->getParent());
        $this->assertEquals($item->getParent()->getId(), $rootCategory->getId());
    }

    abstract public function getFixtureLoaderClass();

    abstract public function getReferencePrefix();

    abstract public function getResourceClass();
}
