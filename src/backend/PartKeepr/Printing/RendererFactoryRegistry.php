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
	/**
	 * Our list of known factories.
	 * 
	 * @var array of RendererFactoryIfc instances.
	 */
	var $factories = array();
	
	/**
	 * Indicates wheather the renderer finding has been exectued so far.
	 * @var unknown
	 */
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
	 * loads them. The class itself ensures to run this method once before
	 * the data from this run is needed.
	 */
	public function findRenderer(){
		if (!$this->findRendererAlreadyRun){
			foreach (glob(dirname(__FILE__).DIRECTORY_SEPARATOR."Renderer".DIRECTORY_SEPARATOR."*.php") as $filename) {
				if (is_file($filename)) {
					$className = 'PartKeepr\\Printing\\Renderer\\'.basename($filename,'.php');
					$exists = class_exists($className);
					if ( $exists
						&& is_subclass_of($className, "\PartKeepr\Printing\RendererIfc") ){
						try {
							$onRegister = new \ReflectionMethod($className,'onRegister');
							if ($onRegister->isStatic()){
								// Enough sanity checks, if now something goes wrong, we will fail.
								$onRegister->invoke(null,$this);
							}else{
								trigger_error("Method onRegister in class $className is not static, ignoring class.",E_USER_WARNING );
							}
						} catch( \ReflectionException $e)
						{
							trigger_error("Method onRegister in class $className gave an error: ".$e->getMessage().". Ignoring class.",E_USER_WARNING );
						}
					}else{
						if ($exists){
							trigger_error("Class $className is not using the RenderingIfc.",E_USER_WARNING );
						} else {
							// Sanemly ignore this case, because this may arise often if a needed library is not present.
							// trigger_error("File $filename does not contain a class with $className.",E_USER_WARNING );
						}
					}
				}
			}
			
			$this->findRendererAlreadyRun = true;
		}
	}
}
