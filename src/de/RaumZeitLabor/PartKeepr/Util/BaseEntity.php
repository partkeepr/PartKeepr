<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

use de\RaumZeitLabor\PartKeepr\Util\Exceptions\EntityNotFoundException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/** @MappedSuperclass */
class BaseEntity {
	/**
	* @Id @Column(type="integer")
	* @GeneratedValue(strategy="AUTO")
	* @var unknown_type
	*/
	private $id;
	
	/**
	 * Returns the ID of this object.
	 * @param none
	 * @return int The ID of this object
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Loads the entity from the database.
	 * @param integer $id The entity's id
	 */
	public static function loadById ($id) {
		$entity = PartKeepr::getEM()->find(get_called_class(), $id);
		
		if (!is_object($entity)) {
			throw new EntityNotFoundException(get_called_class(), $id);
		}
		return $entity;
	}
}