<?php

namespace PartKeepr\FrontendBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\FrontendBundle\Entity\GridPreset;

class GridPresetService
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function markGridPresetAsDefault(GridPreset $gridPreset)
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();

        $queryBuilder->update("PartKeeprFrontendBundle:GridPreset", "gp")->set("gp.gridDefault", ":default")
        ->where("gp.grid = :grid");

        $queryBuilder->setParameter("grid", $gridPreset->getGrid());
        $queryBuilder->setParameter("default", false);

        $queryBuilder->getQuery()->execute();

        $gridPreset->setGridDefault(true);
    }

    public function getDefaultPresets()
    {
        $queryBuilder = $this->entityManager->createQueryBuilder();

        $queryBuilder->select("gp.grid", "gp.configuration")->from("PartKeeprFrontendBundle:GridPreset", "gp")->where("gp.gridDefault = :default");
        $queryBuilder->setParameter("default", true);

        return $queryBuilder->getQuery()->getArrayResult();
    }
}
