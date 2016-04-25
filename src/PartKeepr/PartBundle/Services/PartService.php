<?php

namespace PartKeepr\PartBundle\Services;

use Doctrine\ORM\EntityManager;

class PartService
{
    /**
     * The maximum number of parts allowed.
     *
     * @var int|bool
     */
    private $partLimit;

    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        EntityManager $entityManager,
        $partLimit = false
    ) {
        $this->entityManager = $entityManager;
        $this->partLimit = $partLimit;
    }

    /**
     * Returns the number of parts present in the system.
     *
     * @return mixed
     */
    public function getPartCount()
    {
        $dql = 'SELECT COUNT(p) FROM PartKeepr\\PartBundle\\Entity\\Part p';
        $query = $this->entityManager->createQuery($dql);

        return $query->getSingleScalarResult();
    }

    /**
     * Checks if the amount of parts is exceeded.
     *
     * @return bool
     */
    public function checkPartLimit()
    {
        if ($this->partLimit !== false) {
            if ($this->getPartCount() >= $this->partLimit) {
                return true;
            }
        }

        return false;
    }
}
