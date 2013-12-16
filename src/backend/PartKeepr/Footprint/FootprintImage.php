<?php
namespace PartKeepr\Footprint;

use PartKeepr\Util\Serializable,
	PartKeepr\Image\Image,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a footprint image
 * @ORM\Entity
 **/
class FootprintImage extends Image implements Serializable {
	/**
	 * The footprint object
	 * @ORM\OneToOne(targetEntity="PartKeepr\Footprint\Footprint",inversedBy="image")
	 * @var Footprint 
	 */
	private $footprint = null;
	
	/**
	 * Creates a new IC logo instance
	 */
	public function __construct () {
		parent::__construct(Image::IMAGE_FOOTPRINT);
	}

	/**
	 * Sets the footprint
	 * @param Footprint $footprint The footprint to set
	 */
	public function setFootprint (Footprint $footprint) {
		$this->footprint = $footprint;
	}
	
	/**
	 * Returns the footprint
	 * @return Footprint the footprint
	 */
	public function getFootprint () {
		return $this->footprint;
	}
	
	/**
	 * 
	 * Serializes this ic logo
	 * @return array The serialized ic logo
	 */
	public function serialize () {
		return array("id" => $this->getId(), "footprint_id" => $this->getFootprint()->getId());
	}
}