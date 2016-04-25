<?php

namespace PartKeepr\PartBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;

class PartDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $partUnit = new PartMeasurementUnit();
        $partUnit->setName('pieces');
        $partUnit->setShortName('pcs');
        $partUnit->setDefault(true);

        $part = new Part();
        $part->setName('FOOBAR');
        $part->setPartUnit($partUnit);
        $category = $this->getReference('partcategory.first');
        $storageLocation = $this->getReference('storagelocation.first');

        $part->setCategory($category);
        $part->setStorageLocation($storageLocation);

        $part2 = new Part();
        $part2->setName('FOOBAR2');

        $category = $this->getReference('partcategory.first');
        $storageLocation = $this->getReference('storagelocation.first');

        $part2->setCategory($category);
        $part2->setStorageLocation($storageLocation);
        $part2->setPartUnit($partUnit);

        $manager->persist($partUnit);
        $manager->persist($part);
        $manager->persist($part2);

        $manager->flush();

        $this->addReference('part.1', $part);
        $this->addReference('part.2', $part2);
    }
}
