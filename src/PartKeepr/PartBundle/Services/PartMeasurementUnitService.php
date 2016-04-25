<?php

namespace PartKeepr\PartBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;

class PartMeasurementUnitService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function setDefault(PartMeasurementUnit $partMeasurementUnit)
    {
        $this->entityManager->beginTransaction();

        $dql = 'UPDATE PartKeepr\PartBundle\Entity\PartMeasurementUnit pu SET pu.default = :default WHERE pu.id = :id';

        $this->entityManager->createQuery($dql)
            ->setParameter('id', $partMeasurementUnit->getId())
            ->setParameter(
            'default',
            true,
            \PDO::PARAM_BOOL
        )->execute();

        $dql = 'UPDATE PartKeepr\PartBundle\Entity\PartMeasurementUnit pu SET pu.default = :default WHERE pu.id != :id';

        $this->entityManager->createQuery($dql)
            ->setParameter('id', $partMeasurementUnit->getId())
            ->setParameter(
            'default',
            false,
            \PDO::PARAM_BOOL
        )->execute();

        $this->entityManager->commit();
    }
}
