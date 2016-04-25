<?php

namespace PartKeepr\TipOfTheDayBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDay;

class TipOfTheDayLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $tipOfTheDay = new TipOfTheDay();
        $tipOfTheDay->setName('FOO');

        $manager->persist($tipOfTheDay);
        $manager->flush();

        $this->addReference('tipoftheday', $tipOfTheDay);
    }
}
