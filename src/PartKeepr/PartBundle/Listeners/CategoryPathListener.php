<?php

namespace PartKeepr\PartBundle\Listeners;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Event\OnFlushEventArgs;
use PartKeepr\PartBundle\Entity\PartCategory;
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
            if ($updated instanceof PartCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }

        foreach ($uow->getScheduledEntityUpdates() as $updated) {
            if ($updated instanceof PartCategory) {
                $this->updateCategoryPaths($updated, $eventArgs);
            }
        }
    }

    /**
     * Recursively updates the category paths.
     *
     * @param PartCategory  $partCategory  The footprint category to update
     * @param EntityManager $entityManager The entity manager
     */
    public function updateCategoryPaths(PartCategory $partCategory, OnFlushEventArgs $eventArgs)
    {
        $entityManager = $eventArgs->getEntityManager();
        $pathSeparator = $this->container->getParameter('partkeepr.category.path_separator');

        $partCategory->setCategoryPath($partCategory->generateCategoryPath($pathSeparator));

        $entityManager->getUnitOfWork()->recomputeSingleEntityChangeSet(
            $entityManager->getClassMetadata(get_class($partCategory)),
            $partCategory
        );

        foreach ($partCategory->getChildren() as $child) {
            $this->updateCategoryPaths($child, $eventArgs);
        }
    }
}
