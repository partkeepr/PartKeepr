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
	 * Holds the footprint description
	 * @Column(type="text",nullable=true)
	 * @var string
	 */
	private $description;
	
	/**
	 * Holds the footprint image
	 * @OneToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\FootprintImage",mappedBy="footprint",cascade={"persist", "remove"})
	 * @var FootprintImage
	 */
	private $image;
	
	/**
	 * Holds the footprint attachments
	 * @OneToMany(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\FootprintAttachment",mappedBy="footprint",cascade={"persist", "remove"})
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
	 * Sets the description of this footprint
	 * @param string $description The description
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}
	
	/**
	 * Returns the description of this footprint
	 * @return string The description
	 */
	public function getDescription () {
		return $this->description;
	}
	
	/**
	 * Sets the footprint image
	 * @param FootprintImage $image The footprint image
	 */
	public function setImage (FootprintImage $image) {
		$this->image = $image;
	}
	
	/**
	 * Returns the footprint image
	 * @return FootprintImage The footprint image
	 */
	public function getImage () {
		return $this->image;
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
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"description" => $this->getDescription(),
			"image" => is_object($this->getImage()) ? $this->getImage()->serialize() : null
		);
	}
}