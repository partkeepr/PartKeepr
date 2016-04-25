<?php

namespace PartKeepr\CategoryBundle\Services;

use Doctrine\ORM\EntityManager;
use Gedmo\Tree\Entity\Repository\AbstractTreeRepository;
use PartKeepr\CategoryBundle\Entity\AbstractCategory;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;

class CategoryService
{
    /**
     * @var AbstractTreeRepository
     */
    private $entityRepository;

    /**
     * @var EntityManager
     */
    private $entityManager;

    private $entityClass;

    public function __construct(EntityManager $entityManager, $entityClass)
    {
        $this->entityRepository = $entityManager->getRepository($entityClass);
        $this->entityManager = $entityManager;
        $this->entityClass = $entityClass;
    }

    /**
     * Returns the root node for a tree.
     *
     * @throws RootNodeNotFoundException
     *
     * @return AbstractCategory
     */
    public function getRootNode()
    {
        $rootNodes = $this->entityRepository->getRootNodes();

        if (count($rootNodes) == 0) {
            throw new RootNodeNotFoundException();
        }

        $rootNode = reset($rootNodes);

        return $rootNode;
    }

    public function getEntityClass()
    {
        return $this->entityClass;
    }

    /**
     * Creates the root node for a tree if it doesn't exist.
     */
    public function ensureRootNodeExists()
    {
        try {
            $this->getRootNode();
        } catch (RootNodeNotFoundException $e) {
            /**
             * @var AbstractCategory
             */
            $rootNode = new $this->entityClass();
            $rootNode->setName('Root Category');

            $this->entityManager->persist($rootNode);
            $this->entityManager->flush();
        }
    }
}
