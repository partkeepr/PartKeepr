<?php


namespace PartKeepr\PartBundle\Tests\Issues;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\CoreBundle\Tests\WebTestCase;
use PartKeepr\DistributorBundle\Entity\Distributor;
use PartKeepr\ManufacturerBundle\Entity\Manufacturer;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Entity\PartDistributor;
use PartKeepr\PartBundle\Entity\PartManufacturer;

/**
 * Class DistributorAndManufacturerSearchTest
 *
 * Unit test against issue #647 (Filters for Distributor and Manufacturer don't return any results)
 */
class DistributorAndManufacturerSearchTest extends WebTestCase
{
       /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
                'PartKeepr\ManufacturerBundle\Tests\DataFixtures\ManufacturerDataLoader',
                'PartKeepr\DistributorBundle\Tests\DataFixtures\DistributorDataLoader',
            )
        )->getReferenceRepository();
    }

    public function testManufacturerFilter () {
        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part.1");

        /**
         * @var $manufacturer Manufacturer
         */
        $manufacturer = $this->fixtures->getReference("manufacturer.first");

        $partManufacturer = new PartManufacturer();
        $partManufacturer->setManufacturer($manufacturer);
        $partManufacturer->setPartNumber("1");

        $part->addManufacturer($partManufacturer);
        $this->getContainer()->get("doctrine.orm.default_entity_manager")->flush();

        $filter = array(
            "property" => "manufacturers.manufacturer",
            "operator" => "=",
            "value" => $this->getContainer()->get("api.iri_converter")->getIriFromItem($manufacturer)
        );

        $filters = array($filter);

        $client = static::makeClient(true);

        $partResource = $this->getContainer()->get("resource.part");
        $iri = $this->getContainer()->get("api.iri_converter")->getIriFromResource($partResource);

        $client->request("GET", $iri, array("filter" => json_encode($filters) ));

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        $data = json_decode($client->getResponse()->getContent());

        $this->assertEquals(1, $data->{"hydra:totalItems"});
    }

    public function testDistributorFilter () {
        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part.1");

        /**
         * @var $distributor Distributor
         */
        $distributor = $this->fixtures->getReference("distributor.first");

        $partDistributor = new PartDistributor();
        $partDistributor->setDistributor($distributor);

        $part->addDistributor($partDistributor);
        $this->getContainer()->get("doctrine.orm.default_entity_manager")->flush();

        $filter = array(
            "property" => "distributors.distributor",
            "operator" => "=",
            "value" => $this->getContainer()->get("api.iri_converter")->getIriFromItem($distributor)
        );

        $filters = array($filter);

        $client = static::makeClient(true);

        $partResource = $this->getContainer()->get("resource.part");
        $iri = $this->getContainer()->get("api.iri_converter")->getIriFromResource($partResource);

        $client->request("GET", $iri, array("filter" => json_encode($filters) ));

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        $data = json_decode($client->getResponse()->getContent());

        $this->assertEquals(1, $data->{"hydra:totalItems"});
    }
}
