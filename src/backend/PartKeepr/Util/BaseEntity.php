<?php
namespace PartKeepr\Util;

use JMS\Serializer\Annotation\Type;
use Doctrine\ORM\Mapping as ORM;

/** @ORM\MappedSuperclass */
class BaseEntity {
	/**
	* @ORM\Id @ORM\Column(type="integer")
	* @ORM\GeneratedValue(strategy="AUTO")
	* @Type("integer")
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