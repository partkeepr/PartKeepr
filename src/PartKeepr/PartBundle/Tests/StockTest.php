<?php
namespace PartKeepr\PartBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;

class StockTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
            )
        )->getReferenceRepository();
    }

    private function getStockLevel(Part $part)
    {
        $query = $this->getContainer()->get("doctrine")->getManager()->createQuery("SELECT p.stockLevel FROM PartKeeprPartBundle:Part p WHERE p.id = :id")->setParameter("id",
            $part->getId());

        return $query->getSingleScalarResult();
    }

    public function testAddStock()
    {
        $client = static::makeClient(true);

        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part");
        $oldStockLevel = $this->getStockLevel($part);

        /**
         * @var $iriConverter IriConverter
         */
        $iriConverter = $this->getContainer()->get("api.iri_converter");

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= "/addStock";

        $request = array(
            "quantity" => 5,
        );

        $client->request(
            'PUT',
            $iri,
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);


        $this->assertEquals($oldStockLevel + 5, $newStockLevel);
        $this->assertObjectHasAttribute("stockLevel", $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }

    public function testRemoveStock()
    {
        $client = static::makeClient(true);

        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part");
        $oldStockLevel = $this->getStockLevel($part);

        /**
         * @var $iriConverter IriConverter
         */
        $iriConverter = $this->getContainer()->get("api.iri_converter");

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= "/removeStock";

        $request = array(
            "quantity" => 7,
        );

        $client->request(
            'PUT',
            $iri,
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);


        $this->assertEquals($oldStockLevel - 7, $newStockLevel);
        $this->assertObjectHasAttribute("stockLevel", $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }

    public function testSetStock()
    {
        $client = static::makeClient(true);

        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part");

        /**
         * @var $iriConverter IriConverter
         */
        $iriConverter = $this->getContainer()->get("api.iri_converter");

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= "/setStock";

        $request = array(
            "quantity" => 33,
        );

        $client->request(
            'PUT',
            $iri,
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);


        $this->assertEquals(33, $newStockLevel);
        $this->assertObjectHasAttribute("stockLevel", $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }

}
