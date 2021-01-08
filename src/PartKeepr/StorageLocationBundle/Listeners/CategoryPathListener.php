<?php

namespace PartKeepr\StorageLocationBundle\Listeners;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Event\OnFlushEventArgs;
use PartKeepr\StorageLocationBundle\Entity\StorageLocationCategory;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;

class CategoryPathListener implements ContainerAwareInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * {@inheritDoc}
     */
    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }
    
    public function __construct(Container $container)
    {
        $this->setContainer($container);
    }

    /**
     * Updates the child category paths when their parent name has changed.
     *
     * @param OnFlushEventArgs $eventArgs The event arguments as given by Doctrine
     */
    public function onFlush(OnFlushEventArgs $eventArgs)
    {
        $entityManager = $eventArgs->getEntityManager();
        $uow = $entityManager->getUnitOfWork();

        foreach ($uow->getScheduledEntityInsertions() as $updated) {
            if ($updated instanceof StorageLocationCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }

        foreach ($uow->getScheduledEntityUpdates() as $updated) {
            if ($updated instanceof StorageLocationCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }
    }

    /**
     * Recursively updates the category paths.
     *
     * @param StorageLocationCategory $storageLocationCategory The storage location category to update
     * @param EntityManager           $entityManager           The entity manager
     */
    public function updateCategoryPaths(StorageLocationCategory $storageLocationCategory, OnFlushEventArgs $eventArgs)
    {
        $entityManager = $eventArgs->getEntityManager();
        $pathSeparator = $this->container->getParameter('partkeepr.category.path_separator');

        $storageLocationCategory->setCategoryPath($storageLocationCategory->generateCategoryPath($pathSeparator));

        $entityManager->getUnitOfWork()->recomputeSingleEntityChangeSet(
            $entityManager->getClassMetadata(get_class($storageLocationCategory)),
            $storageLocationCategory
        );

        foreach ($storageLocationCategory->getChildren() as $child) {
            $this->updateCategoryPaths($child, $eventArgs);
        }
    }
}
