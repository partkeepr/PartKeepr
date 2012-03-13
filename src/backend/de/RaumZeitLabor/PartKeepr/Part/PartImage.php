<?php
namespace de\RaumZeitLabor\PartKeepr\Part;

use de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Image\Image;

/**
 * Holds a part image
 * @Entity
 **/
class PartImage extends Image implements Serializable {
	/**
	 * The part object
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part")
	 * @var Part
	 */
	private $part = null;

	/**
	 * Creates a new part image instance
	 */
	public function __construct () {
		parent::__construct(Image::IMAGE_PART);
	}

	/**
	 * Sets the part
	 * @param Part $part The part to set
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}

	/**
	 * Returns the part
	 * @return Part the part
	 */
	public function getPart () {
		return $this->part;
	}

	/**
	 *
	 * Serializes this part image
	 * @return array The serialized part imaage
	 */
	public function serialize () {
		return array("id" => $this->getId(), "part_id" => $this->getPart()->getId());
	}
}