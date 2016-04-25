<?php

namespace PartKeepr\PartBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Doctrine\ORM\Query;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CoreBundle\Tests\WebTestCase;
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
            [
                'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
            ]
        )->getReferenceRepository();
    }

    private function getStockLevel(Part $part)
    {
        /**
         * @var Query
         */
        $query = $this->getContainer()->get('doctrine')->getManager()->createQuery('SELECT p.stockLevel FROM PartKeeprPartBundle:Part p WHERE p.id = :id')->setParameter('id',
            $part->getId());

        return $query->getSingleScalarResult();
    }

    public function testAddStock()
    {
        $client = static::makeClient(true);

        /**
         * @var Part
         */
        $part = $this->fixtures->getReference('part.1');
        $oldStockLevel = $this->getStockLevel($part);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= '/addStock';

        $request = [
            'quantity' => 5,
        ];

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);

        $this->assertEquals($oldStockLevel + 5, $newStockLevel);
        $this->assertObjectHasAttribute('stockLevel', $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }

    public function testRemoveStock()
    {
        $client = static::makeClient(true);

        /**
         * @var Part
         */
        $part = $this->fixtures->getReference('part.1');
        $oldStockLevel = $this->getStockLevel($part);

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= '/removeStock';

        $request = [
            'quantity' => 7,
        ];

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);

        $this->assertEquals($oldStockLevel - 7, $newStockLevel);
        $this->assertObjectHasAttribute('stockLevel', $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }

    public function testSetStock()
    {
        $client = static::makeClient(true);

        /**
         * @var Part
         */
        $part = $this->fixtures->getReference('part.1');

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $iri = $iriConverter->getIriFromItem($part);
        $iri .= '/setStock';

        $request = [
            'quantity' => 33,
        ];

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $result = json_decode($client->getResponse()->getContent());
        $newStockLevel = $this->getStockLevel($part);

        $this->assertEquals(33, $newStockLevel);
        $this->assertObjectHasAttribute('stockLevel', $result);
        $this->assertEquals($newStockLevel, $result->stockLevel);
    }
}
