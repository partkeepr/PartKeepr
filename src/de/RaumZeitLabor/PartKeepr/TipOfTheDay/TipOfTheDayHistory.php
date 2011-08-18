<?php
namespace de\RaumZeitLabor\PartKeepr\TipOfTheDay;

use de\RaumZeitLabor\PartKeepr\User\User;

use de\RaumZeitLabor\PartKeepr\Util\Serializable;

use de\RaumZeitLabor\PartKeepr\PartKeepr;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

/**
 * Represents a tip of the day history entry.
 * 
 * This entity stores each tip of the day the user has already seen.
 * 
 * @Entity
 **/
class TipOfTheDayHistory extends BaseEntity {
	/**
	 * @Column(type="string")
	 * @var string
	 */
	private $name;
	
	/**
	 * Defines the user
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\User\User")
	 * @var StorageLocation
	 */
	private $user;
	
	/**
	 * Sets the user for this entry
	 * @param User $user
	 */
	public function setUser (User $user) {
		$this->user = $user;
	}
	
	/**
	 * Sets the tip of the day name the user already has seen
	 * @param string $name The tip name
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
}