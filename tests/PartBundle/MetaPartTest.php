<?php

namespace PartKeepr\Tests\PartBundle;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\Tests\CoreBundle\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;

class MetaPartTest extends WebTestCase
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
                'PartKeepr\Tests\ManufacturerBundle\DataFixtures\ManufacturerDataLoader',
                'PartKeepr\Tests\DistributorBundle\DataFixtures\DistributorDataLoader',
            ]
        )->getReferenceRepository();
    }

    public function testMetaPartMatching()
    {
        /**
         * @var Part $metaPart1
         */
        $metaPart1 = $this->fixtures->getReference("metapart.1");
        $metaSourcePart1 = $this->fixtures->getReference("metapart.source.1");
        $metaSourcePart2 = $this->fixtures->getReference("metapart.source.2");
        $metaSourcePart3 = $this->fixtures->getReference("metapart.source.3");

        $matches = $this->getContainer()->get("partkeepr.part_service")->getMatchingMetaParts($metaPart1);

        $this->assertContains($metaSourcePart1, $matches);
        $this->assertContains($metaSourcePart2, $matches);
        $this->assertNotContains($metaSourcePart3, $matches);

        /**
         * @var Part $metaPart2
         */
        $metaPart2 = $this->fixtures->getReference("metapart.2");

        $matches2 = $this->getContainer()->get("partkeepr.part_service")->getMatchingMetaParts($metaPart2);

        $this->assertNotContains($metaSourcePart1, $matches2);
        $this->assertContains($metaSourcePart2, $matches2);
        $this->assertNotContains($metaSourcePart3, $matches2);
    }
}
