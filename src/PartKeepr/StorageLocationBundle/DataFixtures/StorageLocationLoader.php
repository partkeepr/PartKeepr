<?php

namespace PartKeepr\StorageLocationBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\StorageLocationBundle\Entity\StorageLocation;

class StorageLocationLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $storageLocation = new StorageLocation();
        $storageLocation->setName('test');
        $storageLocation->setCategory($this->getReference('storagelocationcategory.first'));

        $manager->persist($storageLocation);
        $manager->flush();

        $this->addReference('storagelocation.first', $storageLocation);
    }
}
