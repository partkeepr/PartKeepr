<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Exceptions\OutOfRangeException;


/** @Entity **/
class Part {
	
	/**
	 * @Id @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 * @var integer
	 */
	private $id;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Category\Category") 
	 */
	private $category;
	
	/**
	 * @Column
	 */
	private $name;

	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\Footprint")
	 */
	private $footprint;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartUnit")
	 */
	private $partUnit;
	
	/**
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation")
	 */
	private $storageLocation;
	
	/**
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartManufacturer",mappedBy="part",cascade={"persist", "remove"})
	 */
	private $manufacturers;
	
	/**
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartDistributor",mappedBy="part",cascade={"persist", "remove"})
	 */
	private $distributors;
	
	/**
	 * @Column(type="text")
	 */
	private $comment;
	
	/**
	 * The stock level. Note that this is a cached value.
	 * @Column(type="integer")
	 */
	private $stockLevel = 0;
	
	/**
	 * @Column(type="integer")
	 */
	private $minStockLevel;
	
	/**
	 * The average price for the part. Note that this is a cached value.
	 * 
	 * @Column(type="decimal",precision=5, scale=2,nullable=true)
	 * @var float
	 */
	private $averagePrice = null;
	
	/**
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Stock\StockEntry",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $stockLevels;
	
	/**
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $parameters;
	
	public function __construct () {
		$this->distributors = new \Doctrine\Common\Collections\ArrayCollection();
		$this->manufacturers = new \Doctrine\Common\Collections\ArrayCollection();
		$this->parameters = new \Doctrine\Common\Collections\ArrayCollection();
	}
	
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the part unit
	 * 
	 * @param PartUnit $partUnit The part unit object to set
	 * @return nothing
	 */
	public function setPartUnit (PartUnit $partUnit) {
		$this->partUnit = $partUnit;
	}
	
	/**
	 * Returns the part unit
	 * 
	 * @param none
	 * @return PartUnit The part unit object
	 */
	public function getPartUnit () {
		return $this->partUnit;
	}
	
	public function setAveragePrice ($price) {
		$this->averagePrice = $price;
	}
	
	public function updateStockLevel () {
		$this->stockLevel = $this->getStockLevel();
	}
	
	public function setMinStockLevel ($minStockLevel) {
		$minStockLevel = intval($minStockLevel);
		
		if ($minStockLevel < 0) {
			$exception = new OutOfRangeException(PartKeepr::i18n("Minimum Stock Level is out of range"));
			$exception->setDetail(PartKeepr::i18n("The minimum stock level must be 0 or higher"));
			throw $exception;
		}
		$this->minStockLevel = $minStockLevel;
	}
	
	public function setCategory (\de\RaumZeitLabor\PartKeepr\Category\Category $category) {
		$this->category = $category;
	}
	
	public function setStorageLocation (\de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation $storageLocation) {
		$this->storageLocation = $storageLocation;
	}
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function setFootprint (\de\RaumZeitLabor\PartKeepr\Footprint\Footprint $footprint = null) {
		$this->footprint = $footprint;
	}
	
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	public function getDistributors () {
		return $this->distributors;
	}
	
	public function getManufacturers () {
		return $this->manufacturers;
	}
	
	/**
	 * Returns the parameters assigned to this part
	 * @return array An array of PartParameter objects
	 */
	public function getParameters () {
		return $this->parameters;
	}
	
	public function getStockLevel () {
		$query = PartKeepr::getEM()->createQuery("SELECT SUM(s.stockLevel) FROM de\RaumZeitLabor\PartKeepr\Stock\StockEntry s WHERE s.part = :part");
		$query->setParameter("part", $this);
		
		return $query->getSingleScalarResult();
		
	}
	
	 public function getId () {
		return $this->id;
	}
	
	public function serialize () {
		$aManufacturers = array();
		
		foreach ($this->getManufacturers() as $manufacturer) {
			$aManufacturers[] = $manufacturer->serialize();
		}
		
		$aDistributors = array();
		
		foreach ($this->getDistributors() as $distributor) {
			$aDistributors[] = $distributor->serialize();
		}
		
		$aParameters = array();
		foreach ($this->getParameters() as $parameter) {
			$aParameters[] = $parameter->serialize();
		}
		
		return array(
					"id" => $this->id,
					"name" => $this->name,
					"comment" => $this->comment,
					"stockLevel" => $this->getStockLevel(),
					"footprint_id" => is_object($this->footprint) ? $this->footprint->getId() : null,
					"minStockLevel" => $this->minStockLevel,
					"storageLocation_id" => is_object($this->storageLocation) ? $this->storageLocation->getId() : null,
					"storageLocationName" => is_object($this->storageLocation) ? $this->storageLocation->getName() : null,
					"category_id" => is_object($this->category) ?  $this->category->getId() : null,
					"partUnit_id" => is_object($this->partUnit) ? $this->getPartUnit()->getId() : null,
					"partUnit_name" => is_object($this->partUnit) ? $this->getPartUnit()->getId() : PartKeepr::i18n("Pieces"),
					"partUnit_shortName" => is_object($this->partUnit) ? $this->getPartUnit()->getId() : "",
					"manufacturers" => $aManufacturers,
					"distributors" => $aDistributors,
					"parameters" => $aParameters
		
		);
	}
}