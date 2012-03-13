<?php
namespace de\RaumZeitLabor\PartKeepr\Footprint;

use de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Image\Image;

/**
 * Holds a footprint image
 * @Entity
 **/
class FootprintImage extends Image implements Serializable {
	/**
	 * The footprint object
	 * @OneToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Footprint\Footprint",inversedBy="image")
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