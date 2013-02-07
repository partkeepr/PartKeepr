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
	public function getRendererFactory( $classNameWithNamespace ){
		$this->findRenderer();
		
		if ($classNameWithNamespace===null){
			return $this->factories;
		}
	
		if (!array_key_exists($classNameWithNamespace, $this->factories) ){
			throw new RendererNotFoundException("No renderer found in registry.",$classNameWithNamespace, array_keys($this->factories));
		}
		
		return $this->factories[ $classNameWithNamespace ];
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
			foreach (glob(dirname(__FILE__).DIRECTORY_SEPARATOR."Renderer".DIRECTORY_SEPARATOR."*Renderer") as $filename) {
				$filename = $filename . DIRECTORY_SEPARATOR . basename($filename) . ".php";
				if (is_file($filename)) {
					$className = basename($filename,'.php');
					$classNameWithNamespace = 'PartKeepr\\Printing\\Renderer\\'.$className.'\\'.$className;
					$exists = class_exists($classNameWithNamespace);
					if ( $exists ){
						try {
							$onRegister = new \ReflectionMethod($classNameWithNamespace,'onRegister');
							if ($onRegister->isStatic()){
								// Enough sanity checks, if now something goes wrong, we will fail.
								$onRegister->invoke(null,$this);
							}else{
								trigger_error("Method onRegister in class $classNameWithNamespace is not static, ignoring class.",E_USER_WARNING );
							}
						} catch( \ReflectionException $e)
						{
							trigger_error("Method onRegister in class $classNameWithNamespace gave an error: ".$e->getMessage().". Ignoring class.",E_USER_WARNING );
						}
					}else{
						// Sanely ignore this case, because this may arise often if a needed library is not present.
						// trigger_error("File $filename does not contain a class with $classNameWithNamespace.",E_USER_WARNING );
					}
				}
			}
			
			$this->findRendererAlreadyRun = true;
		}
	}
}
