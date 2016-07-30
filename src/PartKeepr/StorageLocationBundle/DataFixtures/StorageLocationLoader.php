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

        $storageLocation2 = new StorageLocation();
        $storageLocation2->setName('test2');
        $storageLocation2->setCategory($this->getReference('storagelocationcategory.second'));

        $manager->persist($storageLocation);
        $manager->persist($storageLocation2);
        $manager->flush();

        $this->addReference('storagelocation.first', $storageLocation);
        $this->addReference('storagelocation.second', $storageLocation2);
    }
}
