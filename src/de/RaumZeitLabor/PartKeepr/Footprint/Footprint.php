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
	 * Serializes the footprint 
	 * @return array the serialized footprint
	 */
	public function serialize () {
		return array("id" => $this->getId(), "name" => $this->getName());
	}
}