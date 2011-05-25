<?php
namespace de\RaumZeitLabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;

/** @Entity **/
class Part {
	
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var unknown_type
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Category\Category") 
	 */
	private $category;
	
	/**
	 * @Column
	 */
	private $name;

	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Footprint\Footprint")
	 */
	private $footprint;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation")
	 */
	private $storageLocation;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer")
	 */
	private $manufacturer;
	
	/**
	 * @Column(type="text")
	 */
	private $comment;
	
	/**
	 * @Column(type="integer")
	 */
	private $stockLevel = 0;
	
	/**
	 * @Column(type="integer")
	 */
	private $minStockLevel;
	
	/**
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartDB2\Stock\StockEntry",mappedBy="part",cascade={"persist", "remove"})
	 * Enter description here ...
	 * @var unknown_type
	 */
	private $stockLevels;
	
	public function updateStockLevel () {
		$this->stockLevel = $this->getStockLevel();
	}
	
	public function setMinStockLevel ($minStockLevel) {
		$this->minStockLevel = $minStockLevel;
	}
	
	public function setCategory (\de\RaumZeitLabor\PartDB2\Category\Category $category) {
		$this->category = $category;
	}
	
	public function setStorageLocation (\de\RaumZeitLabor\PartDB2\StorageLocation\StorageLocation $storageLocation) {
		$this->storageLocation = $storageLocation;
	}
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function setFootprint (\de\RaumZeitLabor\PartDB2\Footprint\Footprint $footprint) {
		$this->footprint = $footprint;
	}
	
	public function setManufacturer (\de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer $manufacturer) {
		$this->manufacturer = $manufacturer;
	}
	
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	public function getStockLevel () {
		$query = PartDB2::getEM()->createQuery("SELECT SUM(s.stockLevel) FROM de\RaumZeitLabor\PartDB2\Stock\StockEntry s WHERE s.part = :part");
		$query->setParameter("part", $this);
		
		return $query->getSingleScalarResult();
		
	}
	public function serialize () {
		return array(
					"id" => $this->id,
					"name" => $this->name,
					"comment" => $this->comment,
					"stockLevel" => $this->getStockLevel(),
					"footprint" => is_object($this->footprint) ? $this->footprint->serialize() : null,
					"minStockLevel" => $this->minStockLevel,
					"storageLocation" => is_object($this->storageLocation) ? $this->storageLocation->serialize() : null,
					"manufacturer" => is_object($this->manufacturer) ? $this->manufacturer->serialize() : null,
					"category" => $this->category->serialize()
		
		
		);
	}
}