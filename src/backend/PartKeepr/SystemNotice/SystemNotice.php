<?php
namespace PartKeepr\SystemNotice;

use PartKeepr\UploadedFile\UploadedFile,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\Deserializable,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a system notice
 * @ORM\Entity
 **/
class SystemNotice extends BaseEntity implements Serializable {
	/**
	 * @ORM\Column(type="datetime")
	 * @var \DateTime
	 */
	private $date;
	
	/**
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $title;
	
	/**
	 * The description of this attachment
	 * @ORM\Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Defines if the system notice has been acknowledged
	 * @ORM\Column(type="boolean")
	 * @var boolean
	 */
	private $acknowledged = false;
	
	/**
	 * Specifies the type. This is required for unique notices which shouldn't pop up every time we create them.
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $type;
	
	/**
	 * Sets the date and time for this entry
	 * @param \DateTime $date The date and time
	 */
	public function setDate (\DateTime $date) {
		$this->date = $date;
	}
	
	/**
	 * Returns the date and time for this entry
	 * 
	 * @return \DateTime the date and time for this entry
	 */
	public function getDate () {
		return $this->date;
	}
	
	/**
	 * Sets the title for this entry
	 * @param string $title the title for this entry
	 */
	public function setTitle ($title) {
		$this->title = $title;
	}
	
	/**
	 * Returns the title for this entry
	 * @return string the title
	 */
	public function getTitle () {
		return $this->title;
	}
	
	/**
	 * Sets the description
	 * @param string $description
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}
	
	/**
	 * Returns the description
	 * @return string The description
	 */
	public function getDescription () {
		return $this->description;
	}
	
	/**
	 * Sets the value of the acknowledged flag
	 * @param boolean $bAck True if the notice should be acknowledged (default), false otherwise
	 */
	public function setAcknowledgedFlag ($bAck = true) {
		$this->acknowledged = $bAck;
	}
	
	/**
	 * Returns the value of the acknowledged flag
	 * 
	 * @return boolean true if this notice has been acknowledged, false otherwise
	 */
	public function getAcknowledgedFlag () {
		return $this->acknowledged;
	}
	
	/**
	 * Sets the type of this entry
	 * @param string $type
	 */
	public function setType ($type) {
		$this->type = $type;
	}
	
	/**
	 * Returns the type of this entry
	 * @return string The type
	 */
	public function getType () {
		return $this->type;
	}
	
	/**
	 * Serializes this system notice attachment
	 * @return array The serialized system notice
	 */
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"date" => $this->getDate()->format("Y-m-d H:i:s"),
				"title" => $this->getTitle(),
				"description" => $this->getDescription(),
				"acknowledged" => $this->getAcknowledgedFlag());
	}
}