<?php
namespace PartKeepr\Part;

use PartKeepr\StorageLocation\StorageLocation,
	PartKeepr\Footprint\Footprint,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\Util\Deserializable,
	PartKeepr\PartCategory\PartCategory,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
	PartKeepr\PartKeepr,
	PartKeepr\Part\Exceptions\CategoryNotAssignedException,
	PartKeepr\Util\Exceptions\OutOfRangeException,
	PartKeepr\Part\Exceptions\StorageLocationNotAssignedException,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\HasLifecycleCallbacks ;


/**
 * Represents a part in the database. The heart of our project. Handle with care!
 * 
 * @ORM\Entity @ORM\HasLifecycleCallbacks
 */
class Part extends BaseEntity implements Serializable, Deserializable {
	/**
	 * The category of the part
	 * @ORM\ManyToOne(targetEntity="PartKeepr\PartCategory\PartCategory")
	 * @var Category 
	 */
	private $category;
	
	/**
	 * The part's name
	 * @ORM\Column
	 * @var string
	 */
	private $name;

	/**
	 * The part's short description
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $description;

	/**
	 * The footprint of this part
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Footprint\Footprint")
	 * @var Footprint
	 */
	private $footprint;
	
	/**
	 * The unit in which the part's "amount" is calculated. This is necessary to count parts
	 * in "pieces", "meters" or "grams".
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\PartUnit", inversedBy="parts")
	 * @var PartUnit
	 */
	private $partUnit;
	
	/**
	 * Defines the storage location of this part
	 * @ORM\ManyToOne(targetEntity="PartKeepr\StorageLocation\StorageLocation")
	 * @var StorageLocation
	 */
	private $storageLocation;
	
	/**
	 * Holds the manufacturers which can manufacture this part
	 * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartManufacturer",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $manufacturers;
	
	/**
	 * Holds the distributors from where we can buy the part
	 * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartDistributor",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $distributors;
	
	/**
	 * Holds the part images
	 * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartImage",mappedBy="part",cascade={"persist", "remove"})
	 * @var PartImage
	 */
	private $images;
	
	/**
	* Holds the part attachments
	* @ORM\OneToMany(targetEntity="PartKeepr\Part\PartAttachment",mappedBy="part",cascade={"persist", "remove"})
	* @var PartAttachment
	*/
	private $attachments;
	
	/**
	 * The comment for this part
	 * @ORM\Column(type="text")
	 */
	private $comment = "";
	
	/**
	 * The stock level. Note that this is a cached value, because it makes our summary queries easier.
	 * @todo It would be nice if we could get rid of that.
	 * @ORM\Column(type="integer")
	 * @var integer
	 */
	private $stockLevel = 0;
	
	/**
	 * The minimum stock level for this part. If we run out of this part (e.g. stockLevel < minStockLevel),
	 * we can see that in the system and re-order parts.
	 * 
	 * @ORM\Column(type="integer")
	 * @var integer
	 */
	private $minStockLevel = 0;
	
	/**
	 * The average price for the part. Note that this is a cached value.
	 * 
	 * @todo It would be nice if we could get rid of that
	 * @ORM\Column(type="decimal",precision=13,scale=4,nullable=true)
	 * @var float
	 */
	private $averagePrice = null;
	
	/**
	 * The stock level history
	 * @ORM\OneToMany(targetEntity="PartKeepr\Stock\StockEntry",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $stockLevels;
	
	/**
	 * The parameters for this part
	 * @ORM\OneToMany(targetEntity="PartKeepr\PartParameter\PartParameter",mappedBy="part",cascade={"persist", "remove"})
	 * @var ArrayCollection
	 */
	private $parameters;
	
	/**
	 * The part status for this part
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $status;
	
	/**
	 * Defines if the part needs review
	 * @ORM\Column(type="boolean")
	 * @var boolean
	 */
	private $needsReview;

	/**
	 * Defines the condition of the part
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $partCondition;
	
	/**
	 * The create date+time for this part
	 * @ORM\Column(type="datetime",nullable=true)
	 * @var \DateTime
	 */
	private $createDate;
	
	/**
	 * @ORM\OneToMany(targetEntity="PartKeepr\Project\ProjectPart", mappedBy="part")
	 **/
	private $projectParts;
	
	/**
	 * The internal part number
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $internalPartNumber;
	
	public function __construct () {
		$this->distributors = new \Doctrine\Common\Collections\ArrayCollection();
		$this->manufacturers = new \Doctrine\Common\Collections\ArrayCollection();
		$this->parameters = new \Doctrine\Common\Collections\ArrayCollection();
		$this->images = new \Doctrine\Common\Collections\ArrayCollection();
		$this->attachments = new \Doctrine\Common\Collections\ArrayCollection();
		$this->setCreateDate(new \DateTime());
		$this->setReviewFlag(false);
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
	 * Sets the internal part number for this part
	 * @param string $partnumber
	 */
	public function setInternalPartNumber ($partNumber) {
		$this->internalPartNumber = $partNumber;
	}
	
	/**
	 * Returns the internal part number for this part
	 * @return string the internal part number
	 */
	public function getInternalPartNumber () {
		return $this->internalPartNumber;
	}
	
	/**
	 * Sets the description for this part
	 * @param string $description The part's short description
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}

	/**
	 * Returns the short description of this part
	 * @return string The part description
	 */
	public function getDescription () {
		return $this->description;
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
	 * Sets the review flag
	 * @param boolean $bReview True if the part needs review, false otherwise
	 */
	public function setReviewFlag ($bReview) {
		$this->needsReview = $bReview;
	}
	
	/**
	 * Returns the review flag
	 * @return boolean True if the part needs review, false otherwise
	 */
	public function getReviewFlag () {
		return $this->needsReview;
	}

	/**
	 * Sets the condition for this part
	 * @param string $partCondition The part's condition
	 */
	public function setCondition ($partCondition) {
		$this->partCondition = $partCondition;
	}

	/**
	 * Returns the condition of this part
	 * @return string The part condition
	 */
	public function getCondition () {
		return $this->partCondition;
	}
	
	
	/**
	 * Set the minimum stock level for this part
	 * 
	 * Only positive values are allowed.
	 * 
	 * @param int $minStockLevel A minimum stock level, only values >= 0 are allowed. 
	 * @throws \PartKeepr\Util\Exceptions\OutOfRangeException If the passed stock level is not in range (>=0)
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
	 * @param \PartKeepr\PartCategory\PartCategory $category The category
	 */
	public function setCategory (PartCategory $category) {
		$this->category = $category;
	}
	
	/**
	 * Returns the assigned category
	 * @return \PartKeepr\PartCategory\PartCategory
	 */
	public function getCategory () {
		return $this->category;
	}
	
	/**
	 * Sets the storage location for this part
	 * @param \PartKeepr\StorageLocation\StorageLocation $storageLocation The storage location
	 */
	public function setStorageLocation (StorageLocation $storageLocation) {
		$this->storageLocation = $storageLocation;
	}
	
	/**
	 * Returns the storage location for this part
	 * @return \PartKeepr\StorageLocation\StorageLocation $storageLocation The storage location
	 */
	public function getStorageLocation () {
		return $this->storageLocation;
	}
	
	/**
	 * Sets the footprint for this part
	 * @param \PartKeepr\Footprint\Footprint $footprint The footprint to set
	 */
	public function setFootprint (Footprint $footprint = null) {
		$this->footprint = $footprint;
	}
	
	/**
	 * Retrieves the footrpint
	 */
	public function getFootprint () {
		return $this->footprint;
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
		$query = PartKeepr::getEM()->createQuery("SELECT SUM(s.stockLevel) FROM PartKeepr\Stock\StockEntry s WHERE s.part = :part");
		$query->setParameter("part", $this);
		
		return $query->getSingleScalarResult();
	}

	/**
	 * Sets the create date for this part
	 * @param \DateTime $dateTime The create date+time
	 */
	private function setCreateDate (\DateTime $dateTime) {
		$this->createDate = $dateTime;
	}
	
	/**
	 * Returns the create date
	 * @return \DateTime The create date+time
	 */
	public function getCreateDate () {
		return $this->createDate;
	}
	
	/**
	 * Sets the status for this part. A status is any string describing the status,
	 * e.g. "new", "used", "broken" etc.
	 * @param string $status The status
	 */
	public function setStatus ($status) {
		$this->status = $status;
	}
	
	/**
	 * Returns the status for this part.
	 * @return string The status
	 */
	public function getStatus () {
		return $this->status;
	}
	
	public function updateCacheData () {
		$this->updateStockLevel();
		$this->updatePrice();
	}
	
	/**
	* Updates the average price for a part
	*/
	public function updatePrice () {
		$query = PartKeepr::getEM()->createQuery("SELECT SUM(se.price*se.stockLevel)  / SUM(se.stockLevel) FROM PartKeepr\Stock\StockEntry se WHERE se.part = :part AND se.stockLevel > 0");
		$query->setParameter("part", $this);
		$val = $query->getSingleScalarResult();
	
		$query = PartKeepr::getEM()->createQuery('UPDATE PartKeepr\Part\Part p SET p.averagePrice = :val WHERE p = :part');
		$query->setParameter("val", $val);
		$query->setParameter("part", $this);
		$query->execute();
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
					"id" => $this->getId(),
					"name" => $this->getName(),
					"description" => $this->getDescription(),
					"comment" => $this->getComment(),
					"stockLevel" => $this->getStockLevel(),
					"footprint" => is_object($this->footprint) ? $this->footprint->getId() : null,
					"minStockLevel" => $this->minStockLevel,
					"status" => $this->getStatus(),
					"storageLocation" => is_object($this->storageLocation) ? $this->storageLocation->getId() : null,
					"category" => is_object($this->category) ?  $this->category->getId() : null,
					"partUnit" => is_object($this->partUnit) ? $this->getPartUnit()->getId() : null,
					"manufacturers" => $this->serializeChildren($this->getManufacturers()),
					"distributors" => $this->serializeChildren($this->getDistributors()),
					"images" => $this->serializeChildren($this->getImages()),
					"attachments" => $this->serializeChildren($this->getAttachments()),
					"parameters" => $this->serializeChildren($this->getParameters()),
					"createDate" => $this->getCreateDate()->format("Y-m-d H:i:s"),
					"needsReview" => $this->getReviewFlag(),
					"partCondition" => $this->getCondition(),
					"internalPartNumber" => $this->getInternalPartNumber(),
					// Additional things we serialize to make displaying stuff in the frontend easier
					"categoryName" => is_object($this->category) ?  $this->category->getName() : null,
					"footprintName" => is_object($this->footprint) ? $this->footprint->getName() : null,
					"storageLocationName" => is_object($this->storageLocation) ? $this->storageLocation->getName() : null
		);
	}
	
	/**
	 * Deserializes the part
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "description":
					$this->setDescription($value);
					break;
				case "comment":
					$this->setComment($value);
					break;
				case "internalPartNumber":
					$this->setInternalPartNumber($value);
					break;
				case "footprint":
					if ($value === 0) {
						$this->setFootprint(null);
					} else {
						try {
							$footprint = Footprint::loadById($value);
							$this->setFootprint($footprint);
						} catch (\Exception $e) {
							// No footprint was found. Ignore it.
						}	
					}
					break;
				case "minStockLevel":
					$this->setMinStockLevel($value);
					break;
				case "partUnit":
					$partUnit = PartUnit::loadById($value);
					$this->setPartUnit($partUnit);
					break;
				case "category":
					$category = PartCategory::loadById($value);
					$this->setCategory($category);
					break;
				case "status":
					$this->setStatus($value);
					break;
				case "storageLocation":
					$storageLocation = StorageLocation::loadById($value);
					$this->setStorageLocation($storageLocation);
					break;
				case "manufacturers":
					$this->deserializeChildren($value, $this->getManufacturers(), "PartKeepr\Part\PartManufacturer");
					foreach ($this->getManufacturers() as $manufacturer) {
						$manufacturer->setPart($this);
					}
					break;
				case "distributors":
					$this->deserializeChildren($value, $this->getDistributors(), "PartKeepr\Part\PartDistributor");
					foreach ($this->getDistributors() as $distributor) {
						$distributor->setPart($this);
					}
					break;
				case "parameters":
					$this->deserializeChildren($value, $this->getParameters(), "PartKeepr\PartParameter\PartParameter");
					foreach ($this->getParameters() as $parameter) {
						$parameter->setPart($this);
					}
					break;
				case "needsReview":
					$this->setReviewFlag($value);
					break;
				case "partCondition":
					$this->setCondition($value);
					break;
				case "attachments":
					$this->deserializeChildren($value, $this->getAttachments(), "PartKeepr\Part\PartAttachment");
					foreach ($this->getAttachments() as $attachment) {
						$attachment->setPart($this);
					}
					break;
			}
		}
	}
	
	/**
	 * Checks if the part category is set.
	 *  
	 * @throws CategoryNotAssignedException
	 */
	private function checkCategoryConsistency () {
		if ($this->getCategory() === null) {
				throw new CategoryNotAssignedException($this);
		}
	}
	
	/**
	 * Checks if the part storage location is set.
	 * 
	 * @throws StorageLocationNotAssignedException
	 */
	private function checkStorageLocationConsistency () {
		if ($this->getStorageLocation() === null) {
			throw new StorageLocationNotAssignedException();
		}
	}
	
	/**
	 * Checks if the requirements for database persisting are given.
	 * 
	 * @throws CategoryNotAssignedException			Thrown if no category is set
	 * @throws StorageLocationNotAssignedException	Thrown if no storage location is set
	 * 
	 * @ORM\PrePersist
	 */
	public function onPrePersist () {
		$this->checkCategoryConsistency();
		$this->checkStorageLocationConsistency();
	}
	
	/**
	 * 
	 * Checks if the requirements for database persisting are given.
	 * 
	 * For a list of exceptions, see
	 * @see PartKeepr\Part.Part::onPrePersist()
	 * 
	 * @ORM\PreUpdate */
	public function onPreUpdate () {
		$this->checkCategoryConsistency();
		$this->checkStorageLocationConsistency();
	}
	
	/**
	 * Returns a string representation of the part
	 * 
	 * @param none
	 * @return string The name and the ID of the part
	 */
	public function __toString () {
		return $this->getName() . " (".$this->getId().")";
	}
	
}
