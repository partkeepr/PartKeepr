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
	/**
	 * This is the display name for the user of the underlaying renderer.
	 * 
	 * @var string
	 */
	private $name;
	
	/**
	 * This is the class name with full namespace path of the class created from 
	 * this factory. This value will be used to have an unique reference name
	 * to find a class.
	 * 
	 * @var string
	 */
	private $className;
	
	/**
	 * This array holds all names for supported data classes. These data classes
	 * can be handled by the renderer via its passRenderingData method. 
	 * 
	 * @var array of strings
	 */
	private $supportedClasses;
	
	/**
	 * The array of configuration parameters the renderer needs to operate.
	 * This array holds strings off class names with full namespace. They must be
	 * passed to the createInstance via the $configuration parameter.
	 * 
	 * @var array of string
	 */
	private $neededParameterObjectTypes;
	
	/**
	 * Constructas a new simple factory for the given class.
	 * 
	 * @param string $name
	 * @param string $className
	 * @param array $supportedClasses
	 * @param array $neededParameterObjectTypes
	 */
	public function __construct( $name, $className, array $supportedClasses, array $neededParameterObjectTypes){
		$this->name = $name;
		$this->className = $className;
		$this->supportedClasses = $supportedClasses;
		$this->neededParameterObjectTypes = $neededParameterObjectTypes;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Printing\RendererFactoryIfc::createInstance()
	 */
	public function createInstance(array $objects, $configuration){
		return new $this->className($objects, $configuration);
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Printing\RendererFactoryIfc::getName()
	 */
	public function getName(){
		return $this->name;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Printing\RendererFactoryIfc::getCreatedClassname()
	 */
	public function getCreatedClassname(){
		return $this->className;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Printing\RendererFactoryIfc::getSupportedClassesForRendering()
	 */
	public function getSupportedClassesForRendering(){
		return $this->supportedClasses;
	}	
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Printing\RendererFactoryIfc::getParameterObjectTypes()
	 */
	public function getParameterObjectTypes(){
		return $this->neededParameterObjectTypes;
	}
}

