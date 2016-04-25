<?php

namespace PartKeepr\SetupBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;

class PartUnitSetupService
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        EntityManager $entityManager
    ) {
        $this->entityManager = $entityManager;
    }

    /**
     * Sets up the default part unit (pieces) if it doesn't exist.
     *
     * @return bool True if a default unit was created, false if it already exists
     */
    public function setupDefaultPartUnit()
    {
        $dql = "SELECT COUNT(p) FROM PartKeepr\PartBundle\Entity\PartMeasurementUnit p WHERE p.default = :default";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('default', true);

        if ($query->getSingleScalarResult() == 0) {
            $partUnit = new PartMeasurementUnit();
            $partUnit->setName('Pieces');
            $partUnit->setShortName('pcs');
            $partUnit->setDefault(true);

            $this->entityManager->persist($partUnit);
            $this->entityManager->flush();

            return true;
        } else {
            return false;
        }
    }
}
