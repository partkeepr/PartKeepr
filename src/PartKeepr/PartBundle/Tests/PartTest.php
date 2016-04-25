<?php

namespace PartKeepr\PartBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Entity\PartAttachment;
use PartKeepr\PartBundle\Entity\PartDistributor;
use PartKeepr\PartBundle\Entity\PartManufacturer;

class PartTest extends WebTestCase
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

    /**
     * @expectedException PartKeepr\PartBundle\Exceptions\CategoryNotAssignedException
     */
    public function testCategoryRequired()
    {
        $part = new Part();
        $part->setName('TEST');
        $part->setStorageLocation($this->fixtures->getReference('storagelocation.first'));

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($part);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($part);
    }

    /**
     * @expectedException PartKeepr\PartBundle\Exceptions\StorageLocationNotAssignedException
     */
    public function testStorageLocationRequired()
    {
        $part = new Part();
        $part->setName('TEST');
        $part->setCategory($this->getContainer()->get('partkeepr.part.category_service')->getRootNode());

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($part);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($part);
    }

    public function testBasics()
    {
        $part = new Part();
        $part->setName('TEST');
        $part->setCategory($this->getContainer()->get('partkeepr.part.category_service')->getRootNode());
        $part->setStorageLocation($this->fixtures->getReference('storagelocation.first'));

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($part);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($part);
    }

    public function testAssociationRemoval()
    {
        $part = new Part();
        $part->setName('TEST');
        $part->setCategory($this->getContainer()->get('partkeepr.part.category_service')->getRootNode());
        $part->setStorageLocation($this->fixtures->getReference('storagelocation.first'));

        $partManufacturer = new PartManufacturer();
        $partManufacturer->setManufacturer($this->fixtures->getReference('manufacturer.first'));
        $part->addManufacturer($partManufacturer);

        $partDistributor = new PartDistributor();
        $partDistributor->setDistributor($this->fixtures->getReference('distributor.first'));
        $part->addDistributor($partDistributor);

        $partAttachment = new PartAttachment();

        $fileService = $this->getContainer()->get('partkeepr_uploadedfile_service');
        $fileService->replaceFromData($partAttachment, 'BLA', 'test.txt');

        $part->addAttachment($partAttachment);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($part);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($part);

        $part->removeDistributor($partDistributor);
        $part->removeManufacturer($partManufacturer);
        $part->removeAttachment($partAttachment);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($part);

        $storage = $fileService->getStorage($partAttachment);

        $this->assertNull($partDistributor->getId());
        $this->assertNull($partDistributor->getId());
        $this->assertNull($partAttachment->getId());
        $this->assertFalse($storage->has($partAttachment->getFullFilename()));
    }
}
