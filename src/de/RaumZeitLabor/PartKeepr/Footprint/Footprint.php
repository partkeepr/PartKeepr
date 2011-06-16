<?php 
namespace de\RaumZeitLabor\PartKeepr\Footprint;
use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

/** @Entity */

class Footprint extends BaseEntity implements Serializable {
	/**
	 * Holds the footprint name
	 * @Column(length=64,unique=true)
	 * @var string
	 */
	private $name;
	
	/**
	* Holds the footprint attachments
	* @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\FootprintAttachment",mappedBy="part",cascade={"persist", "remove"})
	* @var FootprintAttachment
	*/
	private $attachments;
	
	/**
	 * Constructs a new Footprint entity
	 */
	public function __construct () {
		$this->attachments = new \Doctrine\Common\Collections\ArrayCollection();
	}
	
	/**
	 * Sets the name of this footprint
	 * 
	 * @param string $name The footprint name
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name of this footprint
	 * @return string The name of this footprint
	 */
	public function getName () {
		return $this->name;
	}
	
	
	/**
	 * Returns the attachments for this footprint
	 * @return ArrayCollection The attachments
	 */
	public function getAttachments () {
		return $this->attachments;
	}
	
	/**
	 * Serializes the footprint 
	 * @return array the serialized footprint
	 */
	public function serialize () {
		$aAttachments = array();
		foreach ($this->getAttachments() as $attachment) {
			$aAttachments[] = $attachment->serialize();
		}
		
		return array("id" => $this->getId(), "name" => $this->getName(), "attachments" => $aAttachments);
	}
}