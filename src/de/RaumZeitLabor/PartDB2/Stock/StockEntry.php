<?php
namespace de\RaumZeitLabor\PartDB2\Stock;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Part\Part;
use de\RaumZeitLabor\PartDB2\Auth\User;

/** @Entity **/
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
	
	public function __construct (Part $part, $stockLevel, User $user = null) {
		$this->setPart($part);
		$this->setStockLevel($stockLevel);
		$this->setUser($user);
	}
	
	public function setStockLevel($stockLevel) {
		$this->stockLevel = $stockLevel;
	}
	
	public function setPart (Part $part) {
		$this->part = $part;
	}
	
	public function setUser (User $user = null) {
		$this->user = $user;
	}
}