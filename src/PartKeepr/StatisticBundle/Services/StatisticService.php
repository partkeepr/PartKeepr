<?php
namespace PartKeepr\StatisticBundle\Services;

use Doctrine\ORM\EntityManager;

class StatisticService
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getPartCount($withPrice = false)
    {
        $dql = "SELECT COUNT(p.id) FROM PartKeepr\PartBundle\Entity\Part p";

        if ($withPrice === true) {
            $dql .= " WHERE p.averagePrice IS NOT NULL";
        }

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    public function getPartCategoryCount()
    {
        $dql = "SELECT COUNT(c.id) FROM PartKeepr\PartBundle\Entity\PartCategory c";

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    /**
     * Returns the total price for all parts. Only parts with a price are calculated.
     *
     * @return float The total price
     */
    public function getTotalPrice()
    {
        $dql = "SELECT SUM(p.averagePrice * p.stockLevel) FROM PartKeepr\PartBundle\Entity\Part p";

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    /**
     * Returns the average price for all parts. Only parts with a price are calculated.
     *
     * @return float The average price
     */
    public function getAveragePrice()
    {
        $dql = "SELECT AVG(p.averagePrice) FROM PartKeepr\PartBundle\Entity\Part p";

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    public function getUnitCounts()
    {
        $dql = 'SELECT SUM(p.stockLevel) AS stockLevel, pu.name AS name FROM ';
        $dql .= 'PartKeepr\PartBundle\Entity\PartMeasurementUnit pu LEFT JOIN pu.parts p GROUP BY pu.id';

        return $this->entityManager->createQuery($dql)->getArrayResult();
    }
}
