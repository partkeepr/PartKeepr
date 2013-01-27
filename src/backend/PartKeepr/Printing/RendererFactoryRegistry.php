<?php 

namespace PartKeepr\Printing;

use PartKeepr\Util\Singleton,
	PartKeepr\Printing\RendererFactoryIfc,
	PartKeepr\Printing\Exceptions\RendererNotFoundException;

/**
 * This registry is used to collect all possible RendererFactories
 * and provide an interface to fetch them as needed.
 */
class RendererFactoryRegistry extends Singleton {
	var $factories = array();
	
	var $findRendererAlreadyRun = false;
	
	/**
	 * Returns a renderer factory by its class name.
	 * @param string className The name of the class to fetch the factory for.
	 */
	public function getRendererFactory( $className ){
		$this->findRenderer();
		
		if ($className===null){
			return $this->factories;
		}
	
		if (!array_key_exists($className, $this->factories) ){
			throw new RendererNotFoundException("No renderer found in registry.",$className, array_keys($this->factories));
		}
		
		return $this->factories[ $className ];
	}
	
	/**
	 * Retruns all renderer which are suitable for rendering the fiven data.
	 * 
	 * @param string $renderDataClassName
	 */
	public function getRendererFactoryForRenderData( $renderDataClassName ){
		$this->findRenderer();
		
		$rval = array();		
		foreach ($this->factories as $factory) {
			$supported = $factory->getSupportedClassesForRendering();
			if ( array_search( $renderDataClassName, $supported ) !== false ){
				array_push($rval, $factory);
			}
		}
		return $rval;
	}
	
	/**
	 * Registers a new factory to the tregistry.
	 * 
	 * @param RendererFactoryIfc $factory The factory to register.
	 */
	public function registerFactory( RendererFactoryIfc $factory ){
		$this->factories[ $factory->getCreatedClassname() ] = $factory;
	}	
	
	/**
	 * This method searches for the renderer in den Renderer directory and
	 * loads them.
	 */
	public function findRenderer(){
		if (!$this->findRendererAlreadyRun){
			foreach (glob(dirname(__FILE__).DIRECTORY_SEPARATOR."Renderer".DIRECTORY_SEPARATOR."*.php") as $filename) {
				if (is_file($filename)) {
					require_once($filename);
				}
			}
			
			$this->findRendererAlreadyRun = true;
		}
	}
}
