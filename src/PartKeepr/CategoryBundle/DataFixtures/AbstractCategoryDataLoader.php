<?php

namespace PartKeepr\CategoryBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;

abstract class AbstractCategoryDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $entityClass = $this->getEntityClass();
        $rootNode = new $entityClass();
        $rootNode->setName('Root Node');

        $firstCategory = new $entityClass();
        $firstCategory->setParent($rootNode);
        $firstCategory->setName('First Category');

        $secondCategory = new $entityClass();
        $secondCategory->setParent($firstCategory);
        $secondCategory->setName('Second Category');

        $manager->persist($rootNode);
        $manager->persist($firstCategory);
        $manager->persist($secondCategory);
        $manager->flush();

        $this->addReference($this->getReferencePrefix().'.root', $rootNode);
        $this->addReference($this->getReferencePrefix().'.first', $firstCategory);
        $this->addReference($this->getReferencePrefix().'.second', $secondCategory);
    }

    /**
     * @return string The name of the target entity class
     */
    abstract protected function getEntityClass();

    /**
     * @return string Returns the prefix for the reference
     */
    abstract protected function getReferencePrefix();
}
