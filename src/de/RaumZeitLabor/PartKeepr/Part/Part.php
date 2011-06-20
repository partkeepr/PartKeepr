<?php
namespace de\RaumZeitLabor\PartKeepr\Part;
use de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory;

use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Exceptions\OutOfRangeException;


/**
 * Represents a part in the database. The heart of our project. Handle with care!
 * @Entity **/
class Part extends BaseEntity implements Serializable {
	/**
	 * The category of the part
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory")
	 * @var Category 
	 */
	private $category;
	
	/**
	 * The part's name
	 * @Column
	 * @var string
	 */
	private $name;

	/**
	 * The footprint of this part
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\Footprint")
	 * @var Footprint
	 */
	private $footprint;
	
	/**
	 * The unit in which the part's "amount" is calculated. This is necessary to count parts
	 * in "pieces", "meters" or "grams".
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartUnit")
	 * @var PartUnit
	 */
	private $partUnit;
	
	/**
	 * Defines the storage location of this part
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation")
	 * @var StorageLocation
	 */
	private $storageLocation;
	
	/**
	 * Holds the manufacturers which can manufacture this part
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartManufacturer",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $manufacturers;
	
	/**
	 * Holds the distributors from where we can buy the part
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartDistributor",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $distributors;
	
	/**
	 * Holds the part images
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartImage",mappedBy="part",cascade={"persist", "remove"})
	 * @var PartImage
	 */
	private $images;
	
	/**
	* Holds the part attachments
	* @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Part\PartAttachment",mappedBy="part",cascade={"persist", "remove"})
	* @var PartAttachment
	*/
	private $attachments;
	
	/**
	 * The comment for this part
	 * @Column(type="text")
	 */
	private $comment;
	
	/**
	 * The stock level. Note that this is a cached value, because it makes our summary queries easier.
	 * @todo It would be nice if we could get rid of that.
	 * @Column(type="integer")
	 * @var integer
	 */
	private $stockLevel = 0;
	
	/**
	 * The minimum stock level for this part. If we run out of this part (e.g. stockLevel < minStockLevel),
	 * we can see that in the system and re-order parts.
	 * 
	 * @Column(type="integer")
	 * @var integer
	 */
	private $minStockLevel;
	
	/**
	 * The average price for the part. Note that this is a cached value.
	 * 
	 * @todo It would be nice if we could get rid of that
	 * @Column(type="decimal",precision=5, scale=2,nullable=true)
	 * @var float
	 */
	private $averagePrice = null;
	
	/**
	 * The stock level history
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Stock\StockEntry",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $stockLevels;
	
	/**
	 * The parameters for this part
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\PartParameter\PartParameter",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $parameters;
	
	public function __construct () {
		$this->distributors = new \Doctrine\Common\Collections\ArrayCollection();
		$this->manufacturers = new \Doctrine\Common\Collections\ArrayCollection();
		$this->parameters = new \Doctrine\Common\Collections\ArrayCollection();
		$this->images = new \Doctrine\Common\Collections\ArrayCollection();
		$this->attachments = new \Doctrine\Common\Collections\ArrayCollection();
	}
	
	/**
	 * Sets the name for this part
	 * @param string $name The part's name
	 */
	public function setName ($name) {
		$this->name = $name;
	}
		
	/**
	 * Returns the name of this part
	 * @return string The part name
	 */
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
	
	/**
	 * Sets the average price for this unit
	 * @todo Is this actually used?
	 * @param float $price The price to set
	 */
	public function setAveragePrice ($price) {
		$this->averagePrice = $price;
	}
	
	/**
	 * Updates the internal stock level from the stock history
	 */
	public function updateStockLevel () {
		$this->stockLevel = $this->getStockLevel();
	}

	/**
	 * Set the minimum stock level for this part
	 * 
	 * Only positive values are allowed.
	 * 
	 * @param int $minStockLevel A minimum stock level, only values >= 0 are allowed. 
	 * @throws \de\RaumZeitLabor\PartKeepr\Util\Exceptions\OutOfRangeException If the passed stock level is not in range (>=0)
	 */
	public function setMinStockLevel ($minStockLevel) {
		$minStockLevel = intval($minStockLevel);
		
		if ($minStockLevel < 0) {
			$exception = new OutOfRangeException(PartKeepr::i18n("Minimum Stock Level is out of range"));
			$exception->setDetail(PartKeepr::i18n("The minimum stock level must be 0 or higher"));
			throw $exception;
		}
		$this->minStockLevel = $minStockLevel;
	}
	
	/**
	 * Sets the category for this part
	 * @param \de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory $category The category
	 */
	public function setCategory (PartCategory $category) {
		$this->category = $category;
	}
	
	/**
	 * Sets the storage location for this part
	 * @param \de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation $storageLocation The storage location
	 */
	public function setStorageLocation (\de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocation $storageLocation) {
		$this->storageLocation = $storageLocation;
	}
	
	/**
	 * Sets the footprint for this part
	 * @param \de\RaumZeitLabor\PartKeepr\Footprint\Footprint $footprint The footprint to set
	 */
	public function setFootprint (\de\RaumZeitLabor\PartKeepr\Footprint\Footprint $footprint = null) {
		$this->footprint = $footprint;
	}
	
	/**
	 * Sets the comment for this part
	 * @param string $comment The comment for this part
	 */
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	/**
	 * Returns the comment for this part
	 * @return string The comment
	 */
	public function getComment () {
		return $this->comment;
	}
	
	/**
	* Returns the distributors array
	* @return ArrayCollection the distributors
	*/
	public function getDistributors () {
		return $this->distributors;
	}
	
	/**
	 * Returns the part images array
	 * @return ArrayCollection the part images
	 */
	public function getImages () {
		return $this->images;
	}
	
	/**
	 * Returns the part attachments array
	 * @return ArrayCollection the part attachments
	 */
	public function getAttachments () {
		return $this->attachments;
	}
	
	/**
	 * Returns the manufacturers array
	 * @return ArrayCollection the manufactuers
	 */
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
	
	/**
	 * Returns the stock level of this part. This is a realtime function which
	 * actually creates a query over the StockEntry table.
	 * @return int The stock level
	 */
	public function getStockLevel () {
		$query = PartKeepr::getEM()->createQuery("SELECT SUM(s.stockLevel) FROM de\RaumZeitLabor\PartKeepr\Stock\StockEntry s WHERE s.part = :part");
		$query->setParameter("part", $this);
		
		return $query->getSingleScalarResult();
	}

	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Util.Serializable::serialize()
	 */
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
		
		$aImages = array();
		foreach ($this->getImages() as $image) {
			$aImages[] = $image->serialize();
		}
		
		$aAttachments = array();
		foreach ($this->getAttachments() as $attachment) {
			$aAttachments[] = $attachment->serialize();
		}
		
		return array(
					"id" => $this->getId(),
					"name" => $this->getName(),
					"comment" => $this->getComment(),
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
					"images" => $aImages,
					"attachments" => $aAttachments,
					"parameters" => $aParameters
		
		);
	}
}