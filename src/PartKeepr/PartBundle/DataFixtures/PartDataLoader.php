<?php
namespace PartKeepr\PartBundle\DataFixtures;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\PartBundle\Entity\Part;

class PartDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $part = new Part();
        $part->setName("FOOBAR");

        $category = $this->getReference("partcategory.first");
        $storageLocation = $this->getReference("storagelocation.first");

        $part->setCategory($category);
        $part->setStorageLocation($storageLocation);

        $manager->persist($part);
        $manager->flush();

        $this->addReference("part", $part);
    }
}
