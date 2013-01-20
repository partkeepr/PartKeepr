<?php
namespace PartKeepr\Printing\Utils;

use 
	PartKeepr\Part\Part,
	PartKeepr\StorageLocation\StorageLocation;

/**
 * This class is used to provide the ability to replace text inside a string.
 * These texts can have various sources. Previous to the use the placeholder class
 * needs to be initialized with the set to use.
 */
class Placeholder{
	/**
	 * This is our array with the replacements for search and replace.
	 */
	private $replacements = array();
	
	/**
	 * Constructs a new placeholder class and use the object to fill
	 * the placeholder with.
	 * 
	 * @param unknown $object
	 */
	public function __construct ( $object, $begin = "<<", $end = ">>" ) {
		$replace = array();
		if ( $object instanceof Part ){
			$replace = array(
					'id' => $object->getId(),
					'name' => $object->getName(),
					'internalNumber' => $object->getInternalPartNumber(),
					'description' => $object->getDescription(),
					'categoryFull' => $object->getCategory()->getCategoryPath(),
					'categoryLast' => $object->getCategory()->getName(),
					'footprintName' => $object->getFootprint() === null ? '': $object->getFootprint()->getName(),
					'storageLocationName' => $object->getStorageLocation() === null ? '': $object->getStorageLocation()->getName()
			);			
		}
		
		// Finally apply begin and ends.
		foreach( $replace as $key => $value ){
			$this->replacements[$begin.$key.$end] = $value;
		}		
	}
	
	/**
	 * Applies the placeholders and retruns the replaced string.
	 * 
	 * @param string $text Text to replace the placeholders in.
	 */
	public function apply( $text ){
		return strtr($text, $this->replacements);
	}
	
}