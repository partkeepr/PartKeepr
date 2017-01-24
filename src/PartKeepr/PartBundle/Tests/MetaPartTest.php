<?php
namespace PartKeepr\PartBundle\Tests;


use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\CoreBundle\Tests\WebTestCase;
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
                'PartKeepr\ManufacturerBundle\Tests\DataFixtures\ManufacturerDataLoader',
                'PartKeepr\DistributorBundle\Tests\DataFixtures\DistributorDataLoader',
            ]
        )->getReferenceRepository();
    }

    public function testMetaPartMatching () {
        /**
         * @var $metaPart1 Part
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
         * @var $metaPart2 Part
         */
        $metaPart2 = $this->fixtures->getReference("metapart.2");

        $matches2 = $this->getContainer()->get("partkeepr.part_service")->getMatchingMetaParts($metaPart2);

        $this->assertNotContains($metaSourcePart1, $matches2);
        $this->assertContains($metaSourcePart2, $matches2);
        $this->assertNotContains($metaSourcePart3, $matches2);

    }


}
