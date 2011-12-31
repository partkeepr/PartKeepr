<?php
namespace de\RaumZeitLabor\PartKeepr\SystemNotice;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\UploadedFile\UploadedFile,
	de\RaumZeitLabor\PartKeepr\Util\BaseEntity,
	de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Util\Deserializable;

/**
 * Holds a project attachment
 * @Entity
 **/
class SystemNotice extends BaseEntity implements Serializable {
	/**
	 * @Column(type="datetime")
	 * @var \DateTime
	 */
	private $date;
	
	/**
	 * @Column(type="string") 
	 * @var string
	 */
	private $title;
	
	/**
	 * The description of this attachment
	 * @Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Defines if the system notice has been acknowledged
	 * @Column(type="boolean")
	 * @var boolean
	 */
	private $acknowledged;
	
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
	 *
	 * Serializes this project attachment
	 * @return array The serialized project  attachment
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