<?php
namespace de\RaumZeitLabor\PartDB2\Statistic;

use de\RaumZeitLabor\PartDB2\Statistic\StatisticSnapshot;
use de\RaumZeitLabor\PartDB2\Part\PartUnit;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;


/** @Entity **/
class StatisticSnapshotUnit {
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Statistic\StatisticSnapshot")
	 * The statistic snapshot this entity belongs to
	 * @var StatisticSnapshot
	 */
	private $statisticSnapshot;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Part\PartUnit")
	 * The statistic snapshot this entity belongs to
	 * @var StatisticSnapshot
	 */
	private $partUnit;
	
	/**
	 * The stockLevel for the unit
	 * @Column(type="integer")
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