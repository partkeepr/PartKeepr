<?php

namespace PartKeepr\PartBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\PartBundle\Entity\Part;

class PartService
{
    /**
     * The maximum number of parts allowed.
     *
     * @var int|bool
     */
    private $partLimit;

    /**
     * Whether to check if the internal part number is unique or not.
     *
     * @var bool
     */
    private $checkInternalPartNumberUniqueness;

    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        EntityManager $entityManager,
        $partLimit = false,
        $checkInternalPartNumberUniqueness = false
    ) {
        $this->entityManager = $entityManager;
        $this->partLimit = $partLimit;
        $this->checkInternalPartNumberUniqueness = $checkInternalPartNumberUniqueness;
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
     * Checks if the given internal part number is unique.
     *
     * @param string    $internalPartNumber The internal part number to checkl
     * @param Part|null $part               An optional part to exclude within the check
     *
     * @return bool
     */
    public function isInternalPartNumberUnique($internalPartNumber, Part $part = null)
    {
        if (!$this->checkInternalPartNumberUniqueness) {
            return true;
        }

        /**
         * Empty internal part numbers aren't checked. If you want to require an internal part number, set the
         * field internalPartNumber to mandatory.
         */
        if ($internalPartNumber == "") {
            return true;
        }

        $dql = 'SELECT COUNT(p) FROM PartKeepr\\PartBundle\\Entity\\Part p WHERE p.internalPartNumber = :internalPartNumber';

        if ($part !== null) {
            $dql .= " AND p.id != :partId";
        }

        $query = $this->entityManager->createQuery($dql)->setParameter('internalPartNumber', $internalPartNumber);

        if ($part !== null) {
            $query->setParameter('partId', $part->getId());
        }

        return $query->getSingleScalarResult() == 0 ? true : false;
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
