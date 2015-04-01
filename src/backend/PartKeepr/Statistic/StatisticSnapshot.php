<?php
namespace PartKeepr\Statistic;

use PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;

/** @ORM\Entity **/
class StatisticSnapshot {
	/**
	 * @ORM\Id @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * Defines the date when this snapshot has been taken
	 * @ORM\Column(type="datetime")
	 * @var DateTime
	 */
	private $dateTime;
	
	/**
	 * Defines the amount of different parts in the database
	 * @ORM\Column(type="integer")
	 * @var int
	 */
	private $parts;
	
	/**
	 * Defines the amount of categories
	 * @ORM\Column(type="integer")
	 * @var int
	 */
	private $categories;
	
	/**
	 * Holds all defined units in the database
	 * @ORM\OneToMany(targetEntity="PartKeepr\Statistic\StatisticSnapshotUnit",mappedBy="statisticSnapshot",cascade={"persist", "remove"})
	 */
	private $units;

	/**
	 * Creates a new statistic snapshot
	 */
	public function __construct () {
		$this->units = new \Doctrine\Common\Collections\ArrayCollection();
		$this->setDateTime(new \DateTime());
	}
	
	/**
	 * Sets the date+time for the snapshot
	 * @param \DateTime $dateTime The date+time for the snapshot
	 */
	public function setDateTime (\DateTime $dateTime) {
		$this->dateTime = $dateTime;
	}
	
	/**
	 * Returns the date+time for the snapshot
	 * @return DateTime The date+time for the snapshot
	 */
	public function getDateTime () {
		return $this->dateTime;
	}
	
	/**
	 * Sets the amount of overall parts for the snapshot
	 * @param int $parts The amount of parts
	 */
	public function setParts ($parts) {
		$this->parts = $parts;
	}
	
	/**
	 * Returns the amount of overall parts for the snapshot
	 * @return int The amount of parts
	 */
	public function getParts () {
		return $this->parts;
	}
	
	/**
	 * Sets the amount of categories for the snapshot
	 * @param int $categories The amount of categories
	 */
	public function setCategories ($categories) {
		$this->categories = $categories;
	}
	
	/**
	 * Returns the amount of categories
	 * @return int The amount of categories
	 */
	public function getCategories () {
		return $this->categories;
	}
	
	/**
	 * Returns the ID of this snapshot
	 * @return int The ID of this snapshot
	 */
	public function getId () {
		return $this->id;
	}
	
	public function getUnits () {
		return $this->units;
	}
}