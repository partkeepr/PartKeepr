<?php
namespace PartKeepr\Stock;

use PartKeepr\Part\Part,
	PartKeepr\User\User,
	PartKeepr\PartKeepr,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Serializable,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\HasLifecycleCallbacks;

/** @ORM\Entity @ORM\HasLifecycleCallbacks **/
class StockEntry extends BaseEntity implements Serializable {
	/**
	 * @ORM\Column(type="integer")
	 */
	private $stockLevel;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Part\Part", inversedBy="stockLevels")
	 */
	private $part;
	
	/**
	 * @ORM\ManyToOne(targetEntity="PartKeepr\User\User")
	 */
	private $user;
	
	/**
	 * @ORM\Column(type="decimal",precision=13,scale=4,nullable=true)
	 * @var float
	 */
	private $price;

	/**
	 * @ORM\Column(type="datetime")
	 * @var DateTime
	 */
	private $dateTime;
	
	/**
	 * Indicates if the stock level is a correction entry.
	 * 
	 * @ORM\Column(type="boolean")
	 * @var boolean
	 */
	private $correction;
	
	/**
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $comment;
	
	
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
		$this->setDateTime(new \DateTime());
		$this->setCorrection(false);
	}
	
	
	/**
	 * Sets the date+time
	 * @param \DateTime $dateTime The date+time
	 */
	private function setDateTime (\DateTime $dateTime) {
		$this->dateTime = $dateTime;	
	}
	
	/**
	 * Returns the date+time when the record was created.
	 * @return \DateTime The date+time when the record was created
	 */
	public function getDateTime () {
		return $this->dateTime;
	}
	
	/**
	 * Sets if the stock entry is a correction record.
	 * @param $bCorrection boolean True if the record is a correction record, false otherwise
	 */
	public function setCorrection ($bCorrection) {
		$this->correction = $bCorrection;
	}
	
	/**
	 * Returns if the entry is a correction entry.
	 * @return boolean True if the entry is a correction entry, false otherwise
	 */
	public function getCorrection () {
		return $this->correction;
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
	 * Returns the part assigned to this entry.
	 * @return Part $part The part
	 */
	public function getPart () {
		return $this->part;
	}
	
	/**
	 * Sets the user assigned to this entry.
	 * @param User $user The user The user to set
	 */
	public function setUser (User $user = null) {
		$this->user = $user;
	}
	
	/**
	 * Returns the user for this entry
	 * @return User the user
	 */
	public function getUser () {
		return $this->user;
	}
	
	/**
	 * If the stock level is negative, we can't have a price.
	 * @ORM\PrePersist
	 */
	public function checkPrice () {
		if ($this->getStockLevel()  < 0 && $this->getPrice() !== null) {
			$this->setPrice(null);
		}
	}
	
	/**
	 * Updates the stock leve for a part
	 * @ORM\PostPersist
	 */
	public function postPersist () {
		$this->part->updateStockLevel();
		$this->part->updatePrice();	
	}
	
	/**
	 * Returns if the current stock entry is a removal.
	 * @return boolean True if the entry is a removal, false otherwise
	 */
	public function isRemoval () {
		if ($this->getStockLevel() < 0) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Sets a comment
	 * @param string $comment
	 */
	public function setComment ($comment) {
		$this->comment = $comment;
	}
	
	/**
	 * Returns the comment
	 * @return string The comment
	 */
	public function getComment () {
		return $this->comment;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"part_name" => $this->getPart()->getName(),
				"part_id" => $this->getPart()->getId(),
				"storageLocation_name" => $this->getPart()->getStorageLocation()->getName(),
				"username" => is_object($this->getUser()) ? $this->getUser()->getUsername() : PartKeepr::i18n("Unknown User"),
				"user_id" => is_object($this->getUser()) ? $this->getUser()->getId() : null,
				"stockLevel" => abs($this->getStockLevel()),
				"comment" => $this->getComment(),
				"dateTime" => $this->getDateTime()->format("Y-m-d H:i:s"),
				"direction" => ($this->getStockLevel() < 0) ? "out" : "in",
				"price" => $this->getPrice()
				);
	}
}
