<?php

namespace PartKeepr\StockBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 * @TargetService(uri="/api/stock_entries")
 */
class StockEntry extends BaseEntity
{
    /**
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     */
    private $stockLevel;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="stockEntries")
     * @Groups({"default"})
     */
    private $part;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User")
     * @Groups({"default"})
     */
    private $user;

    /**
     * The price per item.
     *
     * @ORM\Column(type="decimal",precision=13,scale=4,nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"default"})
     *
     * @var \DateTime
     */
    private $dateTime;

    /**
     * Indicates if the stock level is a correction entry.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $correction;

    /**
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $comment;

    /**
     * Creates a new stock entry. A stock entry tracks how many parts
     * were the stockLevel is the amount of items added/removed,
     * by which user and how much the user paid for it (for adding parts only!).
     */
    public function __construct()
    {
        $this->setDateTime(new \DateTime());
        $this->setCorrection(false);
    }

    /**
     * Sets the date+time.
     *
     * @param \DateTime $dateTime The date+time
     */
    private function setDateTime(\DateTime $dateTime)
    {
        $this->dateTime = $dateTime;
    }

    /**
     * Returns the date+time when the record was created.
     *
     * @return \DateTime The date+time when the record was created
     */
    public function getDateTime()
    {
        return $this->dateTime;
    }

    /**
     * Sets if the stock entry is a correction record.
     *
     * @param $bCorrection boolean True if the record is a correction record, false otherwise
     */
    public function setCorrection($bCorrection)
    {
        $this->correction = $bCorrection;
    }

    /**
     * Returns if the entry is a correction entry.
     *
     * @return bool True if the entry is a correction entry, false otherwise
     */
    public function getCorrection()
    {
        return $this->correction;
    }

    /**
     * Sets the price for the item stored.
     *
     * Please note that the price is for a single item only, and can be null.
     *
     * @param float $price The price to set
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    /**
     * Returns the price for this entry. The price is for a single item only.
     *
     * @return float The price for this entry.
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Sets the stock level for this entry.
     *
     * Negative values means part removal, positive values means part adding.
     *
     * @param int $stockLevel The stock level
     */
    public function setStockLevel($stockLevel)
    {
        $this->stockLevel = $stockLevel;
    }

    /**
     * Returns the stock level for this entry.
     *
     * @return int The stock level
     */
    public function getStockLevel()
    {
        return $this->stockLevel;
    }

    /**
     * Sets the part assigned to this entry.
     *
     * @param Part $part The part to set
     */
    public function setPart(Part $part = null)
    {
        $this->part = $part;
    }

    /**
     * Returns the part assigned to this entry.
     *
     * @return Part $part The part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Sets the user assigned to this entry.
     *
     * @param User $user The user The user to set
     */
    public function setUser(User $user = null)
    {
        $this->user = $user;
    }

    /**
     * Returns the user for this entry.
     *
     * @return User the user
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * If the stock level is negative, we can't have a price.
     *
     * @ORM\PrePersist
     */
    public function checkPrice()
    {
        if ($this->getStockLevel() < 0 && $this->getPrice() !== null) {
            $this->setPrice(null);
        }
    }

    /**
     * Returns if the current stock entry is a removal.
     *
     * @return bool True if the entry is a removal, false otherwise
     */
    public function isRemoval()
    {
        if ($this->getStockLevel() < 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Sets a comment.
     *
     * @param string $comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * Returns the comment.
     *
     * @return string The comment
     */
    public function getComment()
    {
        return $this->comment;
    }
}
