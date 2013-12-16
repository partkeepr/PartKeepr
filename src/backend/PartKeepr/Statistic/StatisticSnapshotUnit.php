<?php
namespace PartKeepr\Statistic;

use PartKeepr\Statistic\StatisticSnapshot,
	PartKeepr\Part\PartUnit,
	PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;


/** @ORM\Entity **/
class StatisticSnapshotUnit {
	/**
	 * @ORM\Id @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Statistic\StatisticSnapshot",inversedBy="units")
	 * The statistic snapshot this entity belongs to
	 * @var StatisticSnapshot
	 */
	private $statisticSnapshot;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\PartUnit")
	 * The statistic snapshot this entity belongs to
	 * @var StatisticSnapshot
	 */
	private $partUnit;
	
	/**
	 * The stockLevel for the unit
	 * @ORM\Column(type="integer")
	 * @var int
	 */
	private $stockLevel;
	
	/**
	 * Sets the statistic snapshot this entity belongs to
	 * @param StatisticSnapshot $snapshot The snapshot
	 */
	public function setStatisticSnapshot (StatisticSnapshot $snapshot) {
		$this->statisticSnapshot = $snapshot;
	}
	
	/**
	 * Returns the snapshot this entity belongs to
	 * @return StatisticSnapshot The snapshot
	 */
	public function getStatisticSnapshot () {
		return $this->statisticSnapshot;
	}
	
	/**
	 * 
	 * Sets the part unit for this entity
	 * @param PartUnit $unit The part unit
	 */
	public function setPartUnit (PartUnit $unit) {
		$this->partUnit = $unit;
	}
	
	/**
	 * Returns the part unit for this entity
	 * @return PartUnit The part unit
	 */
	public function getPartUnit () {
		return $this->partUnit;
	}
	
	/**
	 * Returns the ID of this statistic snapshot unit
	 * @return int The ID
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Sets the stock level for this unit snapshot
	 * @param int $stockLevel
	 */
	public function setStockLevel ($stockLevel) {
		$this->stockLevel = $stockLevel;
	}
	
	/**
	 * Returns the stock level for this unit snapshot
	 * @return int The stock level
	 */
	public function getStockLevel () {
		return $this->stockLevel;
	}
}