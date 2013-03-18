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
	 * This is the passed begin token for detection at the beginning.
	 * @var string
	 */
	private $beginToken;
	
	/**
	 * This is the passed end token for detecting the end of the replacement.
	 * @var string
	 */
	private $endToken;
	
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
					'barcodeId' => $object->getId() * 10 + 1,
					'name' => $object->getName(),
					'internalNumber' => $object->getInternalPartNumber(),
					'description' => $object->getDescription(),
					'categoryFull' => $object->getCategory()->getCategoryPath(),
					'categoryLast' => $object->getCategory()->getName(),
					'footprintName' => $object->getFootprint() === null ? '': $object->getFootprint()->getName(),
					'storageLocationName' => $object->getStorageLocation() === null ? '': $object->getStorageLocation()->getName()
			);			
		}else if ( $object instanceof StorageLocation ){
			$replace = array(
					'id' => $object->getId(),
					'barcodeId' => $object->getId() * 10 + 2,
					'name' => $object->getName()
			);			
		}
		
		$this->beginToken = $begin;
		$this->endToken = $end;
		$this->replacements = $replace;
	}
	
	/**
	 * Applies the placeholders and retruns the replaced string.
	 * 
	 * @param string $text Text to replace the placeholders in.
	 */
	public function apply( $text ){
		$beginEscaped = preg_quote( $this->beginToken, '/');
		$endEscaped = preg_quote( $this->endToken, '/');
		
		$replacements = $this->replacements;
		$callback = function( $matches ) use ($replacements) {
			if (!array_key_exists($matches[1],$replacements))
				return "Error: Unknown field!";
			$filedContent = $replacements[$matches[1]];
			if (strlen($matches[2])==0){
				return $filedContent;
			}else{
				return sprintf($matches[3],$filedContent);	
			}				
		};
		
		$regex = '/'.$beginEscaped."([a-zA-Z]+)(|,(.*?))".$endEscaped.'/';
		$text = preg_replace_callback( $regex
				, $callback, $text);
		
		return $text;
	}
	
}