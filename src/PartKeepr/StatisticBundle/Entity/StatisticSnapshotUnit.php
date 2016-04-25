<?php

namespace PartKeepr\StatisticBundle\Entity;

use Doctrine\ORM\Mapping as Mapping;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;

/**
 * @Mapping\Entity
 */
class StatisticSnapshotUnit
{
    /**
     * @Mapping\Id
     * @Mapping\Column(type="integer")
     * @Mapping\GeneratedValue(strategy="AUTO")
     *
     * @var int
     */
    private $id;

    /**
     * @Mapping\ManyToOne(targetEntity="PartKeepr\StatisticBundle\Entity\StatisticSnapshot")
     * The statistic snapshot this entity belongs to
     *
     * @var StatisticSnapshot
     */
    private $statisticSnapshot;

    /**
     * @Mapping\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\PartMeasurementUnit")
     * The statistic snapshot this entity belongs to
     *
     * @var StatisticSnapshot
     */
    private $partUnit;

    /**
     * The stockLevel for the unit.
     *
     * @Mapping\Column(type="integer")
     *
     * @var int
     */
    private $stockLevel;

    /**
     * Sets the statistic snapshot this entity belongs to.
     *
     * @param StatisticSnapshot $snapshot The snapshot
     */
    public function setStatisticSnapshot(StatisticSnapshot $snapshot)
    {
        $this->statisticSnapshot = $snapshot;
    }

    /**
     * Returns the snapshot this entity belongs to.
     *
     * @return StatisticSnapshot The snapshot
     */
    public function getStatisticSnapshot()
    {
        return $this->statisticSnapshot;
    }

    /**
     * Sets the part unit for this entity.
     *
     * @param PartMeasurementUnit $unit The part unit
     */
    public function setPartUnit(PartMeasurementUnit $unit)
    {
        $this->partUnit = $unit;
    }

    /**
     * Returns the part unit for this entity.
     *
     * @return PartMeasurementUnit The part unit
     */
    public function getPartUnit()
    {
        return $this->partUnit;
    }

    /**
     * Returns the ID of this statistic snapshot unit.
     *
     * @return int The ID
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Sets the stock level for this unit snapshot.
     *
     * @param int $stockLevel
     */
    public function setStockLevel($stockLevel)
    {
        $this->stockLevel = $stockLevel;
    }

    /**
     * Returns the stock level for this unit snapshot.
     *
     * @return int The stock level
     */
    public function getStockLevel()
    {
        return $this->stockLevel;
    }
}
