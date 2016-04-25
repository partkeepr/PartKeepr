<?php

namespace PartKeepr\PartBundle\Tests\Issues;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\CoreBundle\Tests\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\StockBundle\Entity\StockEntry;

/**
 * Class StockHistoryLostTest.
 *
 * Unit test against issue #551 (stock history gets removed after saving part)
 */
class StockHistoryLostTest extends WebTestCase
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
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
                'PartKeepr\ManufacturerBundle\Tests\DataFixtures\ManufacturerDataLoader',
                'PartKeepr\DistributorBundle\Tests\DataFixtures\DistributorDataLoader',
            ]
        )->getReferenceRepository();
    }

    public function testStockHistory()
    {
        $client = static::makeClient(true);

        /**
         * @var Part
         */
        $part1 = $this->fixtures->getReference('part.1');

        $stockLevel = new StockEntry();
        $stockLevel->setPart($part1);
        $stockLevel->setStockLevel(5);

        $fosUser = $this->fixtures->getReference('user.admin');
        $userService = $this->getContainer()->get('partkeepr.userservice');
        $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);

        $stockLevel->setUser($user);
        $part1->addStockLevel($stockLevel);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush();

        $iriCoverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriCoverter->getIriFromItem($part1);

        $client->request('GET', $iri);

        $response = $client->getResponse()->getContent();
        $responseObj = json_decode($response, true);
        $responseObj['stockLevels'] = [];

        $client->request('PUT', $iri, [], [], [], json_encode($responseObj));

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->refresh($part1);
        $this->assertEquals(1, count($part1->getStockLevels()));
    }
}
