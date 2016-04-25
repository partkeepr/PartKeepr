<?php

namespace PartKeepr\StatisticBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as Mapping;

/**
 * @Mapping\Entity()
 */
class StatisticSnapshot
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
     * Defines the date when this snapshot has been taken.
     *
     * @Mapping\Column(type="datetime")
     *
     * @var \DateTime
     */
    private $dateTime;

    /**
     * Defines the amount of different parts in the database.
     *
     * @Mapping\Column(type="integer")
     *
     * @var int
     */
    private $parts;

    /**
     * Defines the amount of categories.
     *
     * @Mapping\Column(type="integer")
     *
     * @var int
     */
    private $categories;

    /**
     * Holds all defined units in the database.
     *
     * @Mapping\OneToMany(targetEntity="PartKeepr\StatisticBundle\Entity\StatisticSnapshotUnit",mappedBy="statisticSnapshot",cascade={"persist", "remove"})
     */
    private $units;

    /**
     * Creates a new statistic snapshot.
     */
    public function __construct()
    {
        $this->units = new ArrayCollection();
        $this->setDateTime(new \DateTime());
    }

    /**
     * Sets the date+time for the snapshot.
     *
     * @param \DateTime $dateTime The date+time for the snapshot
     */
    public function setDateTime(\DateTime $dateTime)
    {
        $this->dateTime = $dateTime;
    }

    /**
     * Returns the date+time for the snapshot.
     *
     * @return \DateTime The date+time for the snapshot
     */
    public function getDateTime()
    {
        return $this->dateTime;
    }

    /**
     * Sets the amount of overall parts for the snapshot.
     *
     * @param int $parts The amount of parts
     */
    public function setParts($parts)
    {
        $this->parts = $parts;
    }

    /**
     * Returns the amount of overall parts for the snapshot.
     *
     * @return int The amount of parts
     */
    public function getParts()
    {
        return $this->parts;
    }

    /**
     * Sets the amount of categories for the snapshot.
     *
     * @param int $categories The amount of categories
     */
    public function setCategories($categories)
    {
        $this->categories = $categories;
    }

    /**
     * Returns the amount of categories.
     *
     * @return int The amount of categories
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Returns the ID of this snapshot.
     *
     * @return int The ID of this snapshot
     */
    public function getId()
    {
        return $this->id;
    }

    public function getUnits()
    {
        return $this->units;
    }
}
