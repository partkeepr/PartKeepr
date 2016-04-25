<?php

namespace PartKeepr\ManufacturerBundle\Tests\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\ManufacturerBundle\Entity\Manufacturer;

class ManufacturerDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $manufacturer = new Manufacturer();
        $manufacturer->setName('TEST');

        $manager->persist($manufacturer);
        $manager->flush();

        $this->addReference('manufacturer.first', $manufacturer);
    }
}
