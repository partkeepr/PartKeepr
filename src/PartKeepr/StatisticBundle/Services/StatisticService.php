<?php

namespace PartKeepr\StatisticBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use PartKeepr\StatisticBundle\Entity\StatisticSnapshot;
use PartKeepr\StatisticBundle\Entity\StatisticSnapshotUnit;

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
     * Returns the part count.
     *
     * @param bool|false $withoutPrice Set to true to retrieve all parts where the average price is null
     *
     * @return mixed
     */
    public function getPartCount($withoutPrice = false)
    {
        $dql = "SELECT COUNT(p.id) FROM PartKeepr\PartBundle\Entity\Part p";

        if ($withoutPrice === true) {
            $dql .= ' WHERE p.averagePrice IS NOT NULL';
        }

        return $this->entityManager->createQuery($dql)->getSingleScalarResult();
    }

    /**
     * Returns the part category count.
     *
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
     * Returns the part counts per part unit.
     *
     * @return array An array of arrays with the keys "name" and "stockLevel"
     */
    public function getUnitCounts()
    {
        $dql = 'SELECT SUM(p.stockLevel) AS stockLevel, pu AS partMeasurementUnit FROM ';
        $dql .= 'PartKeepr\PartBundle\Entity\PartMeasurementUnit pu LEFT JOIN pu.parts p GROUP BY pu.id';

        return $this->entityManager->createQuery($dql)->getArrayResult();
    }

    /**
     * Returns the range of all recorded statistic snapshots.
     */
    public function getStatisticRange()
    {
        $dql = 'SELECT MIN(sts.dateTime) AS startDate, MAX(sts.dateTime) AS endDate FROM PartKeepr\\StatisticBundle\\Entity\\StatisticSnapshot sts';
        $query = $this->entityManager->createQuery($dql);

        return $query->getSingleResult();
    }

    /**
     * Gets the sampled statistics.
     *
     * @param \DateTime $startDate
     * @param \DateTime $endDate
     * @param int       $sampleSize
     *
     * @return array
     */
    public function getSampledStatistics(\DateTime $startDate, \DateTime $endDate, $sampleSize = 25)
    {
        if ($startDate->getTimestamp() > $endDate->getTimestamp()) {
            // Swap both times
            list($startDate, $endDate) = [$endDate, $startDate];
        }

        $intervalSize = intval(($endDate->getTimestamp() - $startDate->getTimestamp()) / $sampleSize);

        $queryStartTime = clone $startDate;
        $queryEndTime = clone $startDate;
        $queryEndTime->add(new \DateInterval('PT'.$intervalSize.'S'));

        $partUnitQuery = "SELECT pu FROM PartKeepr\PartBundle\Entity\PartMeasurementUnit pu";
        $query = $this->entityManager->createQuery($partUnitQuery);

        $aPartUnits = $query->getResult();

        $dql = "SELECT AVG(sts.parts) AS parts, AVG(sts.categories) AS categories FROM PartKeepr\StatisticBundle\Entity\StatisticSnapshot sts WHERE sts.dateTime >= :start AND sts.dateTime <= :end";
        $mainQuery = $this->entityManager->createQuery($dql);

        $dql = "SELECT AVG(stsu.stockLevel) AS stockLevel FROM PartKeepr\StatisticBundle\Entity\StatisticSnapshotUnit stsu JOIN stsu.statisticSnapshot sts WHERE sts.dateTime >= :start AND sts.dateTime <= :end AND stsu.partUnit = :partUnit";
        $subQuery = $this->entityManager->createQuery($dql);

        $aRecords = [];

        for ($i = 0; $i < $sampleSize; $i++) {
            $mainQuery->setParameter('start', $queryStartTime);
            $mainQuery->setParameter('end', $queryEndTime);

            $result = $mainQuery->getResult();

            $record = $result[0];

            if ($record['parts'] !== null) {
                $record['parts'] = floatval($record['parts']);
            }

            if ($record['categories'] !== null) {
                $record['categories'] = floatval($record['categories']);
            }

            foreach ($aPartUnits as $partUnit) {
                /*
                 * @var $partUnit PartMeasurementUnit
                 */
                $subQuery->setParameter('start', $queryStartTime);
                $subQuery->setParameter('end', $queryEndTime);
                $subQuery->setParameter('partUnit', $partUnit);

                $aResult = $subQuery->getResult();

                if ($aResult[0]['stockLevel'] !== null) {
                    $record['units'][$partUnit->getName()] = floatval($aResult[0]['stockLevel']);
                } else {
                    $record['units'][$partUnit->getName()] = null;
                }
            }

            $record['start'] = $queryStartTime->format('Y-m-d H:i:s');

            if ($record['parts'] !== null) {
                $aRecords[] = $record;
            }

            $queryStartTime->add(new \DateInterval('PT'.$intervalSize.'S'));
            $queryEndTime->add(new \DateInterval('PT'.$intervalSize.'S'));
        }

        return $aRecords;
    }

    public function createStatisticSnapshot()
    {
        $snapshot = new StatisticSnapshot();
        $snapshot->setParts($this->getPartCount());
        $snapshot->setCategories($this->getPartCategoryCount());

        $unitCounts = $this->getUnitCounts();
        $partUnitRepository = $this->entityManager->getRepository('PartKeeprPartBundle:PartMeasurementUnit');

        foreach ($unitCounts as $unitCount) {
            $snapshotUnit = new StatisticSnapshotUnit();
            $snapshotUnit->setPartUnit($partUnitRepository->findOneBy(['id' => $unitCount['partMeasurementUnit']['id']]));
            $snapshotUnit->setStatisticSnapshot($snapshot);

            if ($unitCount['stockLevel'] !== null) {
                $snapshotUnit->setStockLevel($unitCount['stockLevel']);
            } else {
                $snapshotUnit->setStockLevel(0);
            }

            $snapshot->getUnits()->add($snapshotUnit);
        }

        $this->entityManager->persist($snapshot);
        $this->entityManager->flush();
    }
}
