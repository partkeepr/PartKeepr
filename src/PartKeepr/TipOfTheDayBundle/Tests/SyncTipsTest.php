<?php

namespace PartKeepr\TipOfTheDayBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;

class SyncTipsTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testSyncTips()
    {
        $this->getContainer()->get('partkeepr.tip_of_the_day_service')->syncTips();

        $dql = "SELECT COUNT(p) FROM PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDay p";

        $query = $this->getContainer()->get('doctrine.orm.entity_manager')->createQuery($dql);

        $this->assertGreaterThan(1, $query->getSingleScalarResult());
    }
}
