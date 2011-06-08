<?php
namespace de\RaumZeitLabor\PartDB2\Stock;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Part\Part;
use de\RaumZeitLabor\PartDB2\Auth\User;
use de\RaumZeitLabor\PartDB2\PartDB2;

/** @Entity @HasLifecycleCallbacks **/
class StockEntry {
	
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var unknown_type
	 */
	private $id;
	
	/**
	 * @Column(type="integer")
	 */
	private $stockLevel;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Part\Part")
	 */
	private $part;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Auth\User")
	 */
	private $user;
	
	/**
	 * @Column(type="decimal",precision=5, scale=2,nullable=true)
	 * @var float
	 */
	private $price;
	
	/**
	 * Creates a new stock entry. A stock entry tracks how many parts
	 * were the stockLevel is the amount of items added/removed,
	 * by which user and how much the user paid for it (for adding parts only!)
	 * 
	 * @param Part $part The part which was added/removed
	 * @param int $stockLevel The stock level. Positive value means added parts, negative values means removed parts.
	 * @param User $user The user who removed/added parts
	 */
	public function __construct (Part $part, $stockLevel, User $user = null) {
		$this->setPart($part);
		$this->setStockLevel($stockLevel);
		$this->setUser($user);
	}
	
	/**
	 * Sets the price for the item stored.
	 * 
	 * Please note that the price is for a single item only, and can be null. 
	 * @param float $price The price to set
	 */
	public function setPrice ($price) {
		$this->price = $price;
	}
	
	/**
	 * Returns the price for this entry. The price is for a single item only.
	 * 
	 * @return float The price for this entry.
	 */
	public function getPrice () {
		return $this->price;
	}
	
	/**
	 * Sets the stock level for this entry.
	 * 
	 * Negative values means part removal, positive values means part adding.
	 * @param int $stockLevel The stock level
	 */
	public function setStockLevel($stockLevel) {
		$this->stockLevel = $stockLevel;
	}
	
	/**
	 * Returns the stock level for this entry.
	 * @return int The stock level
	 */
	public function getStockLevel () {
		return $this->stockLevel;
	}
	
	/**
	 * Sets the part assigned to this entry.
	 * @param Part $part The part to set
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	/**
	 * Sets the user assigned to this entry.
	 * @param User $user The user The user to set
	 */
	public function setUser (User $user = null) {
		$this->user = $user;
	}
	
	/**
	 * If the stock level is negative, we can't have a price.
	 * @PrePersist
	 */
	public function checkPrice () {
		if ($this->getStockLevel()  < 0 && $this->getPrice() !== null) {
			$this->setPrice(null);
		}
	}
	
	/**
	 * @PostPersist
	 */
	public function updateStockLevel () {
		$query = PartDB2::getEM()->createQuery('UPDATE de\RaumZeitLabor\PartDB2\Part\Part p SET p.stockLevel = p.stockLevel + :val WHERE p = :part');
		$query->setParameter("val", $this->stockLevel);
		$query->setParameter("part", $this->part);
		$query->execute();
	} 
}