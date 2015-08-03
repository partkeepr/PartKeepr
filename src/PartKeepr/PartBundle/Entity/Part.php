<?php
namespace PartKeepr\PartBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\FootprintBundle\Entity\Footprint;
use PartKeepr\Part\Exceptions\CategoryNotAssignedException;
use PartKeepr\Part\Exceptions\StorageLocationNotAssignedException;
use PartKeepr\Part\PartImage;
use PartKeepr\PartKeepr;
use PartKeepr\StorageLocationBundle\Entity\StorageLocation;
use PartKeepr\Util\BaseEntity;
use PartKeepr\Util\Exceptions\OutOfRangeException;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a part in the database. The heart of our project. Handle with care!
 *
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 * @TargetService(uri="/api/parts")
 */
class Part extends BaseEntity
{
    /**
     * The category of the part
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\PartCategory")
     * @Groups({"default"})
     * @var PartCategory
     */
    private $category;

    /**
     * The part's name
     *
     * @ORM\Column
     * @Groups({"default"})
     * @var string
     */
    private $name;

    /**
     * The part's short description
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * The footprint of this part
     * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint")
     * @Groups({"default"})
     * @var Footprint
     */
    private $footprint;

    /**
     * The unit in which the part's "amount" is calculated. This is necessary to count parts
     * in "pieces", "meters" or "grams".
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\PartMeasurementUnit", inversedBy="parts")
     * @Groups({"default"})
     * @var PartMeasurementUnit
     */
    private $partUnit;

    /**
     * Defines the storage location of this part
     * @ORM\ManyToOne(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocation")
     * @Groups({"default"})
     * @var StorageLocation
     */
    private $storageLocation;

    /**
     * Holds the manufacturers which can manufacture this part
     * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartManufacturer",mappedBy="part",cascade={"persist", "remove"})
     *
     * @var ArrayCollection
     */
    private $manufacturers;

    /**
     * Holds the distributors from where we can buy the part
     * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartDistributor",mappedBy="part",cascade={"persist", "remove"})
     *
     * @var ArrayCollection
     */
    private $distributors;

    /**
     * Holds the part images
     * @ORM\OneToMany(targetEntity="PartKeepr\Part\PartImage",mappedBy="part",cascade={"persist", "remove"})
     *
     * @var PartImage
     */
    private $images;

    /**
     * Holds the part attachments
     * @ORM\OneToMany(targetEntity="PartKeepr\PartBundle\Entity\PartAttachment",
     *                mappedBy="part",cascade={"persist", "remove"})
     * @Groups({"default"})
     *
     * @var PartAttachment
     */
    private $attachments;

    /**
     * The comment for this part
     * @ORM\Column(type="text")
     * @Groups({"default"})
     */
    private $comment = "";

    /**
     * The stock level. Note that this is a cached value, because it makes our summary queries easier.
     *
     * @todo It would be nice if we could get rid of that.
     * @ORM\Column(type="integer")
     * @Groups({"default"})
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
     *
     * @var ArrayCollection
     */
    private $stockLevels;

    /**
     * The parameters for this part
     * @ORM\OneToMany(targetEntity="PartKeepr\PartParameter\PartParameter",
     *                mappedBy="part",cascade={"persist", "remove"})
     *
     * @var ArrayCollection
     */
    private $parameters;

    /**
     * The part status for this part
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     * @var string
     */
    private $status;

    /**
     * Defines if the part needs review
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     * @var boolean
     */
    private $needsReview;

    /**
     * Defines the condition of the part
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     * @var string
     */
    private $partCondition;

    /**
     * The create date+time for this part
     * @ORM\Column(type="datetime",nullable=true)
     * @Groups({"default"})
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
     * @Groups({"default"})
     * @var string
     */
    private $internalPartNumber;

    public function __construct()
    {
        $this->distributors = new ArrayCollection();
        $this->manufacturers = new ArrayCollection();
        $this->parameters = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->attachments = new ArrayCollection();
        $this->setCreateDate(new \DateTime());
        $this->setReviewFlag(false);
    }

    /**
     * Sets the name for this part
     *
     * @param string $name The part's name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of this part
     *
     * @return string The part name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the internal part number for this part
     *
     * @param string $partNumber
     */
    public function setInternalPartNumber($partNumber)
    {
        $this->internalPartNumber = $partNumber;
    }

    /**
     * Returns the internal part number for this part
     *
     * @return string the internal part number
     */
    public function getInternalPartNumber()
    {
        return $this->internalPartNumber;
    }

    /**
     * Sets the description for this part
     *
     * @param string $description The part's short description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the short description of this part
     *
     * @return string The part description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the part unit
     *
     * @param PartMeasurementUnit $partUnit The part unit object to set
     *
     */
    public function setPartUnit(PartMeasurementUnit $partUnit)
    {
        $this->partUnit = $partUnit;
    }

    /**
     * Returns the part unit
     *
     * @param none
     *
     * @return PartMeasurementUnit The part unit object
     */
    public function getPartUnit()
    {
        return $this->partUnit;
    }

    /**
     * Sets the average price for this unit
     *
     * @todo Is this actually used?
     *
     * @param float $price The price to set
     */
    public function setAveragePrice($price)
    {
        $this->averagePrice = $price;
    }

    /**
     * Updates the internal stock level from the stock history
     */
    public function updateStockLevel()
    {
        $this->stockLevel = $this->getStockLevel();
    }

    /**
     * Sets the review flag
     *
     * @param boolean $bReview True if the part needs review, false otherwise
     */
    public function setReviewFlag($bReview)
    {
        $this->needsReview = $bReview;
    }

    /**
     * Returns the review flag
     *
     * @return boolean True if the part needs review, false otherwise
     */
    public function getReviewFlag()
    {
        return $this->needsReview;
    }

    /**
     * Sets the condition for this part
     *
     * @param string $partCondition The part's condition
     */
    public function setCondition($partCondition)
    {
        $this->partCondition = $partCondition;
    }

    /**
     * Returns the condition of this part
     *
     * @return string The part condition
     */
    public function getCondition()
    {
        return $this->partCondition;
    }


    /**
     * Set the minimum stock level for this part
     *
     * Only positive values are allowed.
     *
     * @param int $minStockLevel A minimum stock level, only values >= 0 are allowed.
     *
     * @throws \PartKeepr\Util\Exceptions\OutOfRangeException If the passed stock level is not in range (>=0)
     */
    public function setMinStockLevel($minStockLevel)
    {
        $minStockLevel = intval($minStockLevel);

        if ($minStockLevel < 0) {
            $exception = new OutOfRangeException(PartKeepr::i18n("Minimum Stock Level is out of range"));
            $exception->setDetail(PartKeepr::i18n("The minimum stock level must be 0 or higher"));
            throw $exception;
        }
        $this->minStockLevel = $minStockLevel;
    }

    /**
     * Returns the category path
     * @Groups({"default"})
     *
     * @return string
     */
    public function getCategoryPath()
    {
        if ($this->category !== null) {
            return $this->category->getCategoryPath();
        } else {
            return "";
        }
    }

    /**
     * Sets the category for this part
     *
     * @param PartCategory $category The category
     */
    public function setCategory(PartCategory $category)
    {
        $this->category = $category;
    }

    /**
     * Returns the assigned category
     *
     * @return PartCategory
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the storage location for this part
     *
     * @param \PartKeepr\StorageLocationBundle\Entity\StorageLocation $storageLocation The storage location
     */
    public function setStorageLocation(StorageLocation $storageLocation)
    {
        $this->storageLocation = $storageLocation;
    }

    /**
     * Returns the storage location for this part
     *
     * @return \PartKeepr\StorageLocationBundle\Entity\StorageLocation $storageLocation The storage location
     */
    public function getStorageLocation()
    {
        return $this->storageLocation;
    }

    /**
     * Sets the footprint for this part
     *
     * @param \PartKeepr\FootprintBundle\Entity\Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint = null)
    {
        $this->footprint = $footprint;
    }

    /**
     * Retrieves the footprint
     */
    public function getFootprint()
    {
        return $this->footprint;
    }

    /**
     * Sets the comment for this part
     *
     * @param string $comment The comment for this part
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * Returns the comment for this part
     *
     * @return string The comment
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Returns the distributors array
     *
     * @return ArrayCollection the distributors
     */
    public function getDistributors()
    {
        return $this->distributors;
    }

    /**
     * Returns the part images array
     *
     * @return ArrayCollection the part images
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * Returns the part attachments array
     *
     * @return ArrayCollection the part attachments
     */
    public function getAttachments()
    {
        return $this->attachments;
    }

    /**
     * Returns the manufacturers array
     *
     * @return ArrayCollection the manufacturers
     */
    public function getManufacturers()
    {
        return $this->manufacturers;
    }

    /**
     * Returns the parameters assigned to this part
     *
     * @return array An array of PartParameter objects
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * Returns the stock level of this part. This is a real-time function which
     * actually creates a query over the StockEntry table.
     *
     * @return int The stock level
     */
    public function getStockLevel()
    {
        $query = PartKeepr::getEM()->createQuery("SELECT SUM(s.stockLevel) FROM PartKeepr\Stock\StockEntry s WHERE s.part = :part");
        $query->setParameter("part", $this);

        $count = $query->getSingleScalarResult();
        if ($count == null) {
            $count = 0;
        }

        return $count;
    }

    /**
     * Sets the create date for this part
     *
     * @param \DateTime $dateTime The create date+time
     */
    private function setCreateDate(\DateTime $dateTime)
    {
        $this->createDate = $dateTime;
    }

    /**
     * Returns the create date
     *
     * @return \DateTime The create date+time
     */
    public function getCreateDate()
    {
        return $this->createDate;
    }

    /**
     * Sets the status for this part. A status is any string describing the status,
     * e.g. "new", "used", "broken" etc.
     *
     * @param string $status The status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * Returns the status for this part.
     *
     * @return string The status
     */
    public function getStatus()
    {
        return $this->status;
    }

    public function updateCacheData()
    {
        $this->updateStockLevel();
        $this->updatePrice();
    }

    /**
     * Updates the average price for a part
     */
    public function updatePrice()
    {
        $query = PartKeepr::getEM()->createQuery("SELECT SUM(se.price*se.stockLevel)  / SUM(se.stockLevel) FROM PartKeepr\Stock\StockEntry se WHERE se.part = :part AND se.stockLevel > 0");
        $query->setParameter("part", $this);
        $val = $query->getSingleScalarResult();

        $query = PartKeepr::getEM()->createQuery('UPDATE PartKeepr\PartBundle\Entity\Part p SET p.averagePrice = :val WHERE p = :part');
        $query->setParameter("val", $val);
        $query->setParameter("part", $this);
        $query->execute();
    }

    /**
     * Checks if the part category is set.
     *
     * @throws CategoryNotAssignedException
     */
    private function checkCategoryConsistency()
    {
        if ($this->getCategory() === null) {
            throw new CategoryNotAssignedException($this);
        }
    }

    /**
     * Checks if the part storage location is set.
     *
     * @throws StorageLocationNotAssignedException
     */
    private function checkStorageLocationConsistency()
    {
        if ($this->getStorageLocation() === null) {
            throw new StorageLocationNotAssignedException();
        }
    }

    /**
     * Checks if the requirements for database persisting are given.
     *
     * @throws CategoryNotAssignedException            Thrown if no category is set
     * @throws StorageLocationNotAssignedException    Thrown if no storage location is set
     *
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->checkCategoryConsistency();
        $this->checkStorageLocationConsistency();
    }

    /**
     *
     * Checks if the requirements for database persisting are given.
     *
     * For a list of exceptions, see
     *
     * @see PartKeepr\Part.Part::onPrePersist()
     *
     * @ORM\PreUpdate
     */
    public function onPreUpdate()
    {
        $this->checkCategoryConsistency();
        $this->checkStorageLocationConsistency();
    }

    /**
     * Returns a string representation of the part
     *
     * @param none
     *
     * @return string The name and the ID of the part
     */
    public function __toString()
    {
        return $this->getName()." (".$this->getId().")";
    }
}
