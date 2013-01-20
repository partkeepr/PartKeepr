<?php 

namespace PartKeepr\Printing;

use PartKeepr\Printing\PageBasicLayout\PageBasicLayout;

/**
 * This factory is used to select a concrete renderer for 
 * rendering the content later.
 * 
 * One renderer can support a specific layout of the later
 * printed labels or the sheet. The factory itself supports
 * extending it by adding a plugable extension interface.
 * 
 * The constructor of the given object must match the following signature:
 * __construct( PrintingPageBasicLayout $layout, array $configuration )
 */
class SimpleRendererFactory implements RendererFactoryIfc{
	private $name;
	
	private $className;
	
	private $supportedClasses;
	
	private $neededParameterObjectTypes;
	
	/**
	 * Constructas a new simple factory for the given class.
	 * 
	 * @param string $name
	 * @param string $className
	 * @param array $supportedClasses
	 */
	public function __construct( $name, $className, array $supportedClasses, array $neededParameterObjectTypes){
		$this->name = $name;
		$this->className = $className;
		$this->supportedClasses = $supportedClasses;
		$this->neededParameterObjectTypes = $neededParameterObjectTypes;
	}
	
	public function createInstance(array $objects, array $configuration){
		return new $this->className($objects, $configuration);
	}
	
	public function getName(){
		return $this->name;
	}
	
	public function getCreatedClassname(){
		return $this->className;
	}
	
	public function getSupportedClassesForRendering(){
		return $this->supportedClasses;
	}	
	
	public function getParameterObjectTypes(){
		return $this->neededParameterObjectTypes;
	}
}

