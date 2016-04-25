<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\FootprintBundle\Entity\Footprint;
use PartKeepr\PartBundle\Exceptions\CategoryNotAssignedException;
use PartKeepr\PartBundle\Exceptions\MinStockLevelOutOfRangeException;
use PartKeepr\PartBundle\Exceptions\StorageLocationNotAssignedException;
use PartKeepr\ProjectBundle\Entity\Project;
use PartKeepr\ProjectBundle\Entity\ProjectPart;
use PartKeepr\StockBundle\Entity\StockEntry;
use PartKeepr\StorageLocationBundle\Entity\StorageLocation;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection;
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
     * The category of the part.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\PartCategory")
     * @Groups({"default"})
     *
     * @var PartCategory
     */
    private $category;

    /**
     * The part's name.
     *
     * @ORM\Column
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * The part's short description.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * The footprint of this part.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint")
     * @Groups({"default"})
     *
     * @var Footprint
     */
    private $footprint;

    /**
     * The unit in which the part's "amount" is calculated. This is necessary to count parts
     * in "pieces", "meters" or "grams".
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\PartMeasurementUnit", inversedBy="parts")
     * @Groups({"default"})
     *
     * @var PartMeasurementUnit
     */
    private $partUnit;

    /**
     * Defines the storage location of this part.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocation")
     * @Groups({"default"})
     *
     * @var StorageLocation
     */
    private $storageLocation;

    /**
     * Holds the manufacturers which can manufacture this part.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\PartBundle\Entity\PartManufacturer",mappedBy="part",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $manufacturers;

    /**
     * Holds the distributors from where we can buy the part.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\PartBundle\Entity\PartDistributor",mappedBy="part",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $distributors;

    /**
     * Holds the part attachments.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\PartBundle\Entity\PartAttachment",
     *                mappedBy="part",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     * @UploadedFileCollection()
     *
     * @var PartAttachment
     */
    private $attachments;

    /**
     * The comment for this part.
     *
     * @ORM\Column(type="text")
     * @Groups({"default"})
     */
    private $comment = '';

    /**
     * The stock level. Note that this is a cached value, because it makes our summary queries easier.
     *
     * @todo It would be nice if we could get rid of that.
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $stockLevel = 0;

    /**
     * The minimum stock level for this part. If we run out of this part (e.g. stockLevel < minStockLevel),
     * we can see that in the system and re-order parts.
     *
     * @Groups({"default"})
     * @ORM\Column(type="integer")
     *
     * @var int
     */
    private $minStockLevel = 0;

    /**
     * The average price for the part. Note that this is a cached value.
     *
     * @ORM\Column(type="decimal",precision=13,scale=4,nullable=false)
     * @Groups({"default"})
     *
     * @var float
     */
    private $averagePrice = 0;

    /**
     * The stock level history.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\StockBundle\Entity\StockEntry",mappedBy="part",cascade={"persist", "remove"})
     * @Groups({"stock"})
     *
     * @var ArrayCollection
     */
    private $stockLevels;

    /**
     * The parameters for this part.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\PartBundle\Entity\PartParameter",
     *                mappedBy="part",cascade={"persist", "remove"}, orphanRemoval=true)
     *
     * @var ArrayCollection
     */
    private $parameters;

    /**
     * The part status for this part.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $status;

    /**
     * Defines if the part needs review.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $needsReview;

    /**
     * Defines the condition of the part.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $partCondition;

    /**
     * The create date+time for this part.
     *
     * @ORM\Column(type="datetime",nullable=true)
     * @Groups({"default"})
     *
     * @var \DateTime
     */
    private $createDate;

    /**
     * @ORM\OneToMany(targetEntity="PartKeepr\ProjectBundle\Entity\ProjectPart", mappedBy="part")
     *
     * @var ProjectPart[]
     **/
    private $projectParts;

    /**
     * The internal part number.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $internalPartNumber;

    /**
     * @ORM\Column(type="boolean",nullable=false)
     *
     * @var bool
     */
    private $removals = false;

    /**
     * @ORM\Column(type="boolean",nullable=false)
     *
     * @var bool
     */
    private $lowStock = false;

    public function __construct()
    {
        $this->distributors = new ArrayCollection();
        $this->manufacturers = new ArrayCollection();
        $this->parameters = new ArrayCollection();
        $this->attachments = new ArrayCollection();
        $this->stockLevels = new ArrayCollection();
        $this->projectParts = new ArrayCollection();
        $this->setCreateDate(new \DateTime());
        $this->setNeedsReview(false);
    }

    /**
     * Sets the create date for this part.
     *
     * @param \DateTime $dateTime The create date+time
     */
    private function setCreateDate(\DateTime $dateTime)
    {
        $this->createDate = $dateTime;
    }

    /**
     * @return bool
     */
    public function isLowStock()
    {
        return $this->lowStock;
    }

    /**
     * @param bool $lowStock
     */
    public function setLowStock($lowStock)
    {
        $this->lowStock = $lowStock;
    }

    /**
     * @return mixed
     */
    public function hasRemovals()
    {
        return $this->removals;
    }

    /**
     * Returns the name of this part.
     *
     * @return string The part name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the name for this part.
     *
     * @param string $name The part's name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the internal part number for this part.
     *
     * @return string the internal part number
     */
    public function getInternalPartNumber()
    {
        return $this->internalPartNumber;
    }

    /**
     * Sets the internal part number for this part.
     *
     * @param string $partNumber
     */
    public function setInternalPartNumber($partNumber)
    {
        $this->internalPartNumber = $partNumber;
    }

    /**
     * Returns the short description of this part.
     *
     * @return string The part description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the description for this part.
     *
     * @param string $description The part's short description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the part unit.
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
     * Sets the part unit.
     *
     * @param PartMeasurementUnit $partUnit The part unit object to set
     */
    public function setPartUnit(PartMeasurementUnit $partUnit)
    {
        $this->partUnit = $partUnit;
    }

    /**
     * Returns the review flag.
     *
     * @return bool True if the part needs review, false otherwise
     */
    public function getNeedsReview()
    {
        return $this->needsReview;
    }

    /**
     * Sets the review flag.
     *
     * @param bool $bReview True if the part needs review, false otherwise
     */
    public function setNeedsReview($bReview)
    {
        $this->needsReview = $bReview;
    }

    /**
     * Returns the condition of this part.
     *
     * @return string The part condition
     */
    public function getPartCondition()
    {
        return $this->partCondition;
    }

    /**
     * Sets the condition for this part.
     *
     * @param string $partCondition The part's condition
     */
    public function setPartCondition($partCondition)
    {
        $this->partCondition = $partCondition;
    }

    /**
     * Returns the category path.
     *
     * @Groups({"default"})
     *
     * @return string
     */
    public function getCategoryPath()
    {
        if ($this->category !== null) {
            return $this->category->getCategoryPath();
        } else {
            return '';
        }
    }

    /**
     * Retrieves the footprint.
     */
    public function getFootprint()
    {
        return $this->footprint;
    }

    /**
     * Sets the footprint for this part.
     *
     * @param \PartKeepr\FootprintBundle\Entity\Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint = null)
    {
        $this->footprint = $footprint;
    }

    /**
     * Returns the comment for this part.
     *
     * @return string The comment
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Sets the comment for this part.
     *
     * @param string $comment The comment for this part
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * Returns the distributors array.
     *
     * @return ArrayCollection the distributors
     */
    public function getDistributors()
    {
        return $this->distributors;
    }

    /**
     * Returns the part attachments array.
     *
     * @return ArrayCollection the part attachments
     */
    public function getAttachments()
    {
        return $this->attachments;
    }

    /**
     * Returns the manufacturers array.
     *
     * @return ArrayCollection the manufacturers
     */
    public function getManufacturers()
    {
        return $this->manufacturers;
    }

    /**
     * Returns the parameters assigned to this part.
     *
     * @return array An array of PartParameter objects
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * Returns the create date.
     *
     * @return \DateTime The create date+time
     */
    public function getCreateDate()
    {
        return $this->createDate;
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
     * Checks if the requirements for database persisting are given.
     *
     * @throws CategoryNotAssignedException        Thrown if no category is set
     * @throws StorageLocationNotAssignedException Thrown if no storage location is set
     *
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->executeSaveListener();
    }

    public function executeSaveListener()
    {
        $this->checkCategoryConsistency();
        $this->checkStorageLocationConsistency();
    }

    /**
     * Checks if the part category is set.
     *
     * @throws CategoryNotAssignedException
     */
    private function checkCategoryConsistency()
    {
        if ($this->getCategory() === null) {
            throw new CategoryNotAssignedException();
        }
    }

    /**
     * Returns the assigned category.
     *
     * @return PartCategory
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the category for this part.
     *
     * @param PartCategory $category The category
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }

    /**
     * Checks if the part storage location is set.
     *
     * @throws \PartKeepr\PartBundle\Exceptions\StorageLocationNotAssignedException
     */
    private function checkStorageLocationConsistency()
    {
        if ($this->getStorageLocation() === null) {
            throw new StorageLocationNotAssignedException();
        }
    }

    /**
     * Returns the storage location for this part.
     *
     * @return \PartKeepr\StorageLocationBundle\Entity\StorageLocation $storageLocation The storage location
     */
    public function getStorageLocation()
    {
        return $this->storageLocation;
    }

    /**
     * @param mixed $removals
     */
    public function setRemovals($removals = false)
    {
        $this->removals = $removals;
    }

    /**
     * Returns all stock entries.
     *
     * @return ArrayCollection
     */
    public function getStockLevels()
    {
        return $this->stockLevels;
    }

    /**
     * Returns the minimum stock level.
     *
     * @return int
     */
    public function getMinStockLevel()
    {
        return $this->minStockLevel;
    }

    /**
     * Set the minimum stock level for this part.
     *
     * Only positive values are allowed.
     *
     * @param int $minStockLevel A minimum stock level, only values >= 0 are allowed.
     *
     * @throws MinStockLevelOutOfRangeException If the passed stock level is not in range (>=0)
     */
    public function setMinStockLevel($minStockLevel)
    {
        $minStockLevel = intval($minStockLevel);

        if ($minStockLevel < 0) {
            throw new MinStockLevelOutOfRangeException();
        }

        $this->minStockLevel = $minStockLevel;

        if ($this->getStockLevel() < $this->getMinStockLevel()) {
            $this->setLowStock(true);
        } else {
            $this->setLowStock(false);
        }
    }

    /**
     * Sets the average price for this part.
     *
     * @param float $price The price to set
     */
    public function setAveragePrice($price)
    {
        $this->averagePrice = $price;
    }

    /**
     * Returns the acrage price.
     *
     * @return float
     */
    public function getAveragePrice()
    {
        return $this->averagePrice;
    }

    /**
     * Sets the storage location for this part.
     *
     * @param \PartKeepr\StorageLocationBundle\Entity\StorageLocation $storageLocation The storage location
     */
    public function setStorageLocation(StorageLocation $storageLocation)
    {
        $this->storageLocation = $storageLocation;
    }

    /**
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
        $this->executeSaveListener();
    }

    /**
     * Returns the stock level.
     *
     * @return int The stock level
     */
    public function getStockLevel()
    {
        return $this->stockLevel;
    }

    /**
     * Sets the stock level.
     *
     * @param $stockLevel int The stock level to set
     */
    public function setStockLevel($stockLevel)
    {
        $this->stockLevel = $stockLevel;
    }

    /**
     * Adds a new stock entry to this part.
     *
     * @param StockEntry $stockEntry
     */
    public function addStockLevel(StockEntry $stockEntry)
    {
        $stockEntry->setPart($this);
        $this->stockLevels->add($stockEntry);
    }

    /**
     * Removes a stock entry from this part.
     *
     * @param StockEntry $stockEntry
     */
    public function removeStockLevel($stockEntry)
    {
        $stockEntry->setPart(null);
        $this->stockLevels->removeElement($stockEntry);
    }

    /**
     * Adds a Part Attachment.
     *
     * @param PartAttachment $partAttachment An attachment to add
     */
    public function addAttachment($partAttachment)
    {
        if ($partAttachment instanceof PartAttachment) {
            $partAttachment->setPart($this);
        }
        $this->attachments->add($partAttachment);
    }

    /**
     * Removes a Part Attachment.
     *
     * @param PartAttachment $partAttachment An attachment to remove
     */
    public function removeAttachment($partAttachment)
    {
        $partAttachment->setPart(null);
        $this->attachments->removeElement($partAttachment);
    }

    /**
     * Adds a Part Manufacturer.
     *
     * @param PartManufacturer $partManufacturer A part manufacturer to add
     */
    public function addManufacturer(PartManufacturer $partManufacturer)
    {
        $partManufacturer->setPart($this);
        $this->manufacturers->add($partManufacturer);
    }

    /**
     * Removes a part manufacturer.
     *
     * @param PartManufacturer $partManufacturer A part manufacturer to remove
     */
    public function removeManufacturer(PartManufacturer $partManufacturer)
    {
        $partManufacturer->setPart(null);
        $this->manufacturers->removeElement($partManufacturer);
    }

    /**
     * Adds a Part Distributor.
     *
     * @param PartDistributor $partDistributor A part distributor to add
     */
    public function addDistributor(PartDistributor $partDistributor)
    {
        $partDistributor->setPart($this);
        $this->distributors->add($partDistributor);
    }

    /**
     * Removes a part distributor.
     *
     * @param PartDistributor $partDistributor A part distributor to remove
     */
    public function removeDistributor(PartDistributor $partDistributor)
    {
        $partDistributor->setPart(null);
        $this->distributors->removeElement($partDistributor);
    }

    /**
     * Returns the project parts.
     *
     * @return ArrayCollection
     */
    public function getProjectParts()
    {
        return $this->projectParts;
    }

    /**
     * Returns the project names this part is used in.
     *
     * @Groups({"default"})
     *
     * @return array
     */
    public function getProjectNames()
    {
        $projectNames = [];
        foreach ($this->projectParts as $projectPart) {
            if ($projectPart->getProject() instanceof Project) {
                $projectNames[] = $projectPart->getProject()->getName();
            }
        }

        return array_unique($projectNames);
    }

    public function recomputeStockLevels()
    {
        $currentStock = 0;
        $avgPrice = 0;

        $totalPartStockPrice = 0;
        $lastPosEntryQuant = 0;
        $lastPosEntryPrice = 0;
        $negativeStock = 0;

        foreach ($this->getStockLevels() as $stockLevel) {
            $currentStock += $stockLevel->getStockLevel();

            if ($currentStock <= 0) {
                $avgPrice = 0;
                $totalPartStockPrice = 0;
                $negativeStock = $currentStock;
            } else {
                if ($stockLevel->getStockLevel() > 0) {
                    $lastPosEntryQuant = $stockLevel->getStockLevel();
                    $lastPosEntryPrice = $stockLevel->getPrice();
                    $totalPartStockPrice += $lastPosEntryPrice * ($lastPosEntryQuant + $negativeStock);
                    $avgPrice = $totalPartStockPrice / $currentStock;
                } else {
                    if ($currentStock < $lastPosEntryQuant) {
                        $totalPartStockPrice = $currentStock * $lastPosEntryPrice;
                        $avgPrice = $totalPartStockPrice / $currentStock;
                    } else {
                        $totalPartStockPrice += $stockLevel->getStockLevel() * $avgPrice;
                        $avgPrice = $totalPartStockPrice / $currentStock;
                    }
                    $negativeStock = 0;
                }
            }
        }

        $this->setStockLevel($currentStock);
        $this->setAveragePrice($avgPrice);

        if ($currentStock < $this->getMinStockLevel()) {
            $this->setLowStock(true);
        } else {
            $this->setLowStock(false);
        }
    }
}
