<?php

namespace PartKeepr\PartBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\DoctrineReflectionBundle\Filter\Filter;
use PartKeepr\DoctrineReflectionBundle\Services\FilterService;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Entity\PartParameter;
use PartKeepr\PartBundle\Exceptions\NotAMetaPartException;

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

    /**
     * @var FilterService
     */
    private $filterService;

    public function __construct(
        EntityManager $entityManager,
        FilterService $filterService,
        $partLimit = false,
        $checkInternalPartNumberUniqueness = false
    ) {
        $this->entityManager = $entityManager;
        $this->filterService = $filterService;
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
        if ($this->partLimit !== false && $this->partLimit != "-1") {
            if ($this->getPartCount() >= $this->partLimit) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns the matching parts for a given meta part.
     *
     * @param Part $metaPart
     *
     * @return Part[]
     */
    public function getMatchingMetaParts(Part $metaPart)
    {
        $paramCount = 0;
        $paramPrefix = ":param";
        $results = [];

        if (!$metaPart->isMetaPart()) {
            throw new NotAMetaPartException();
        }

        foreach ($metaPart->getMetaPartParameterCriterias() as $metaPartParameterCriteria) {
            $qb = $this->entityManager->createQueryBuilder();
            $qb->select("p.id AS id")
                ->from("PartKeeprPartBundle:PartParameter", "pp")
                ->join("pp.part", "p")
                ->where("1=1");

            $filter = new Filter();
            $filter->setOperator($metaPartParameterCriteria->getOperator());
            $filter->setProperty("name");

            switch ($metaPartParameterCriteria->getValueType()) {
                case PartParameter::VALUE_TYPE_NUMERIC:
                    $expr = $this->filterService->getExpressionForFilter(
                        $filter,
                        "pp.normalizedValue",
                        $paramPrefix.$paramCount
                    );

                    $qb->setParameter($paramPrefix.$paramCount, $metaPartParameterCriteria->getNormalizedValue());
                    $paramCount++;
                    break;
                case PartParameter::VALUE_TYPE_STRING:
                    $expr = $this->filterService->getExpressionForFilter(
                        $filter,
                        "pp.stringValue",
                        $paramPrefix.$paramCount
                    );
                    $qb->setParameter($paramPrefix.$paramCount, $metaPartParameterCriteria->getStringValue());
                    $paramCount++;
                    break;
                default:
                    throw new \InvalidArgumentException("Unknown value type");
            }

            $expr2 = $qb->expr()->eq("pp.name", $paramPrefix.$paramCount);
            $qb->setParameter($paramPrefix.$paramCount, $metaPartParameterCriteria->getPartParameterName());

            $qb->andWhere(
                $qb->expr()->andX($expr, $expr2)
            );

            $result = [];
            foreach ($qb->getQuery()->getScalarResult() as $partId) {
                $result[] = $partId["id"];
            }

            $results[] = $result;
        }

        if (count($results) > 1) {
            $result = call_user_func_array("array_intersect", $results);
        } else {
            if (count($results) === 1) {
                $result = $results[0];
            } else {
                $result = [];
            }
        }

        if (count($result) > 0) {
            $qb = $this->entityManager->createQueryBuilder();
            $qb->select("p")->from("PartKeeprPartBundle:Part", "p")
                ->where(
                    $qb->expr()->in("p.id", ":result")
                );

            $qb->setParameter(":result", $result);

            return $qb->getQuery()->getResult();
        } else {
            return [];
        }
    }
}
