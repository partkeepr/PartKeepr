<?php 
namespace PartKeepr\Footprint;
use PartKeepr\Util\Deserializable;

use PartKeepr\Util\Serializable;
use PartKeepr\FootprintCategory\FootprintCategory;
use PartKeepr\Util\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/** @ORM\Entity */

class Footprint extends BaseEntity implements Serializable, Deserializable {
	/**
	 * Holds the footprint name
	 * @ORM\Column(length=64,unique=true)
	 * @var string
	 */
	private $name;
	
	/**
	 * Holds the footprint description
	 * @ORM\Column(type="text",nullable=true)
	 * @var string
	 */
	private $description;

	/**
	 * The category of the footprint
	 * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintCategory\FootprintCategory")
	 * @var Category 
	 */
	private $category;
	
	/**
	 * Holds the footprint image
	 * @ORM\OneToOne(targetEntity="PartKeepr\Footprint\FootprintImage",mappedBy="footprint",cascade={"persist", "remove"})
	 * @var FootprintImage
	 */
	private $image;
	
	/**
	 * Holds the footprint attachments
	 * @ORM\OneToMany(targetEntity="PartKeepr\Footprint\FootprintAttachment",mappedBy="footprint",cascade={"persist", "remove"})
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
	 * Sets the category for this footprint
	 * @param \PartKeepr\FootprintCategory\FootprintCategory $category The category
	 */
	public function setCategory (FootprintCategory $category) {
		$this->category = $category;
	}
	
	/**
	 * Returns the category of this footprint
	 * @return FootprintCategory The footprint category
	 */
	public function getCategory () {
		return $this->category;
	}
	
	/**
	 * Sets the footprint image
	 * @param FootprintImage $image The footprint image
	 */
	public function setImage (FootprintImage $image) {
		$this->image = $image;
		$image->setFootprint($this);
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
			"image_id" => is_object($this->getImage()) ? $this->getImage()->getId() : null,
			"category" => is_object($this->getCategory()) ? $this->getCategory()->getId() : null,
			"attachments" => $this->serializeChildren($this->getAttachments())
		);
	}
	
	/**
	 * Deserializes the footprint
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
				case "image_id":
					if ($value == "") {
						echo "/** Breaking because of empty value */";
						break; }
					
					try {
						$image = FootprintImage::loadById($value);
						$this->setImage($image);
					} catch (\Exception $e) {
						if ($this->getImage()) {
							// Image was not found, maybe a temporary image?
							$this->getImage()->replaceFromTemporaryFile($value);
						} else {
							$image = FootprintImage::createFromTemporaryFile($value);
							$this->setImage($image);
						}
					}
					
					break;
				case "category":
					try {
						$category = FootprintCategory::loadById($value);
						$this->setCategory($category);	
					} catch (\Exception $e) {
						// Category was not found, do not change category.
					}
					break;
				case "attachments":
					$this->deserializeChildren($value, $this->getAttachments(), "PartKeepr\Footprint\FootprintAttachment");
					foreach ($this->getAttachments() as $attachment) {
						$attachment->setFootprint($this);
					}
					break;
			}
		}
	} 
}
