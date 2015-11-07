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

    /**
     * Returns the part count
     *
     * @param bool|false $withoutPrice Set to true to retrieve all parts where the average price is null
     *
     * @return mixed
     */
    public function getPartCount($withoutPrice = false)
    {
        $dql = "SELECT COUNT(p.id) FROM PartKeepr\PartBundle\Entity\Part p";

        if ($withoutPrice === true) {
            $dql .= " WHERE p.averagePrice IS NOT NULL";
        }

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    /**
     * Returns the part category count
     * @return int
     */
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

    /**
     * Returns the part counts per part unit
     * @return array An array of arrays with the keys "name" and "stockLevel"
     */
    public function getUnitCounts()
    {
        $dql = 'SELECT SUM(p.stockLevel) AS stockLevel, pu.name AS name FROM ';
        $dql .= 'PartKeepr\PartBundle\Entity\PartMeasurementUnit pu LEFT JOIN pu.parts p GROUP BY pu.id';

        return $this->entityManager->createQuery($dql)->getArrayResult();
    }
}
