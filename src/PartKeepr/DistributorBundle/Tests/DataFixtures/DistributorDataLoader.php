<?php

namespace PartKeepr\DistributorBundle\Tests\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\DistributorBundle\Entity\Distributor;

class DistributorDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $distributor = new Distributor();
        $distributor->setName('TEST');

        $manager->persist($distributor);
        $manager->flush();

        $this->addReference('distributor.first', $distributor);
    }
}
