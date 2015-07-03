<?php
namespace PartKeepr\Util;

use Doctrine\ORM\Mapping as ORM;

/** @ORM\MappedSuperclass */
abstract class BaseEntity {
	/**
	* @ORM\Id @ORM\Column(type="integer")
	* @ORM\GeneratedValue(strategy="AUTO")
	* @var integer
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
	
}