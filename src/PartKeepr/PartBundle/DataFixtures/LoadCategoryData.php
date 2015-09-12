<?php
namespace PartKeepr\PartBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\PartBundle\Entity\PartCategory;

class LoadCategoryData extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $rootNode = new PartCategory();
        $rootNode->setName("Root Node");

        $firstCategory = new PartCategory();
        $firstCategory->setParent($rootNode);
        $firstCategory->setName("First Category");

        $secondCategory = new PartCategory();
        $secondCategory->setParent($firstCategory);
        $secondCategory->setName("Second Category");

        $manager->persist($rootNode);
        $manager->persist($firstCategory);
        $manager->persist($secondCategory);
        $manager->flush();

        $this->addReference("partcategory.root", $rootNode);
        $this->addReference("partcategory.first", $firstCategory);
        $this->addReference("partcategory.second", $secondCategory);

    }
}