<?php
namespace PartKeepr\Util;

use PartKeepr\PartKeepr,
	PartKeepr\Util\Exceptions\ObjectNotFoundException,
	PartKeepr\Util\Singleton;

class SimpleObjectManager extends Singleton{
	/**
	 * Contains the object we are responsible for.
	 * @var string
	 */
	private $classType;

	protected function __construct ($classType) {
		$this->classType = $classType;
	}	
	
	public function getObjectById ($id) {
		$obj = PartKeepr::getEM()->find($classType, $id);		
		if ($obj) {
			return $obj;
		} else {
			throw new ObjectNotFoundException($classType, $id);
		}
	}
	
	public function addObject ($obj) {
		PartKeepr::getEM()->persist($obj);
		PartKeepr::getEM()->flush();		
		return $obj;
	}
	public function deleteObjectById ($id) {
		$obj = $this->getPageBasicLayout($id);
		
		PartKeepr::getEM()->remove($obj);
		PartKeepr::getEM()->flush();
	}
}