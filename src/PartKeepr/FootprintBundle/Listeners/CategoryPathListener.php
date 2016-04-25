<?php

namespace PartKeepr\FootprintBundle\Listeners;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Event\OnFlushEventArgs;
use PartKeepr\FootprintBundle\Entity\FootprintCategory;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerAware;

class CategoryPathListener extends ContainerAware
{
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
            if ($updated instanceof FootprintCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }

        foreach ($uow->getScheduledEntityUpdates() as $updated) {
            if ($updated instanceof FootprintCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }
    }

    /**
     * Recursively updates the category paths.
     *
     * @param FootprintCategory $footprintCategory The footprint category to update
     * @param EntityManager     $entityManager     The entity manager
     */
    public function updateCategoryPaths(FootprintCategory $footprintCategory, OnFlushEventArgs $eventArgs)
    {
        $entityManager = $eventArgs->getEntityManager();
        $pathSeparator = $this->container->getParameter('partkeepr.category.path_separator');

        $footprintCategory->setCategoryPath($footprintCategory->generateCategoryPath($pathSeparator));

        $entityManager->getUnitOfWork()->recomputeSingleEntityChangeSet(
            $entityManager->getClassMetadata(get_class($footprintCategory)),
            $footprintCategory
        );

        foreach ($footprintCategory->getChildren() as $child) {
            $this->updateCategoryPaths($child, $eventArgs);
        }
    }
}
