<?php
namespace PartKeepr\Service;

use Doctrine\Common\Annotations\AnnotationRegistry,
	PartKeepr\PartKeepr,
	PartKeepr\Service\Service;

/**
 * Reflects on a specific service call
 */
class ServiceCallReflector {

	/**
	 * Holds the annotation reader
	 * @var \Doctrine\Common\Annotations\AnnotationReader
	 */
	private $reader;

	/**
	 * Holds the method to reflect on
	 * @var \ReflectionMethod
	 */
	private $reflectionMethod;

	/**
	 * Creates a new service call reflector
	 *
	 * @param \ReflectionMethod $reflectionMethod The method to reflect on
	 * @param \Doctrine\Common\Annotations\AnnotationReader $reader The
	 * @throws \Exception If the method is not reflectable
	 */
	public function __construct (\ReflectionMethod $reflectionMethod, \Doctrine\Common\Annotations\AnnotationReader $reader) {
		if (!self::isServiceCall($reflectionMethod, $reader)) {
			throw new \Exception("Given method is not a reflectable method");
		}

		$this->reader = $reader;
		$this->reflectionMethod = $reflectionMethod;
	}

	/**
	 * Returns the name of the method
	 * @return string The name
	 */
	public function getName () {
		return $this->reflectionMethod->getName();
	}

	/**
	 * Returns the description of the given service call
	 * @return string The description
	 */
	public function getDescription () {
		return $this->reader->getMethodAnnotation($this->reflectionMethod, "PartKeepr\Service\Annotations\ServiceCall")->getDescription();
	}

	/**
	 * Returns the documentation for the API call
	 * @return string The documentaton
	 */
	public function getDocumentation () {
		return $this->reader->getMethodAnnotation($this->reflectionMethod, "PartKeepr\Service\Annotations\ServiceCall")->getDocumentation();
	}

	/**
	 * Returns the parameters of the API call
	 * @return \PartKeepr\Service\Annotations\ServiceParameter[] The service parameters
	 */
	public function getParameters () {
		return $this->reader->getMethodAnnotation($this->reflectionMethod, "PartKeepr\Service\Annotations\ServiceCall")->getParameters();
	}

	/**
	 * Returns the returned values
	 * @return PartKeepr\Service\Annotations\ServiceReturnValue[] The returned values
	 */
	public function getReturnValues () {
		return $this->reader->getMethodAnnotation($this->reflectionMethod, "PartKeepr\Service\Annotations\ServiceCall")->getReturnValues();
	}

	/**
	 * Returns if the given method is a ServiceCall
	 * @static
	 * @param \ReflectionMethod $reflectionMethod The method to reflect on
	 * @param \Doctrine\Common\Annotations\AnnotationReader $reader The annotation reader
	 * @return bool true if the method is a service call, false otherwise
	 */
	public static function isServiceCall (\ReflectionMethod $reflectionMethod, \Doctrine\Common\Annotations\AnnotationReader $reader ) {
		if ($reader->getMethodAnnotation($reflectionMethod, "PartKeepr\Service\Annotations\ServiceCall") === null) {
			return false;
		} else {
			return true;
		}
	}
}
