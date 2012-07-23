<?php
namespace PartKeepr\Service;

use Doctrine\Common\Annotations\AnnotationRegistry,
	PartKeepr\PartKeepr,
	PartKeepr\Service\Service;

/**
 * Reflects a service.
 */
class ServiceReflector {
	/**
	 * The class name to reflect on
	 * @var string
	 */
	private $className;

	/**
	 * The reflected class
	 * @var \ReflectionClass
	 */
	private $reflClass;

	/**
	 * The annotation reader
	 * @var \Doctrine\Common\Annotations\AnnotationReader
	 */
	private $reader;

	/**
	 * Creates a new service reflector
	 *
	 * @param $className string The FQCN of the service class to reflect
	 * @throws \Exception If the passed class name isn't a subclass of PartKeepr\Service\Service
	 */
	public function __construct ($className) {
		$this->reflClass = new \ReflectionClass($className);

		if (!$this->reflClass->isSubclassOf("PartKeepr\\Service\\Service")) {
			throw new \Exception(sprintf("%s isn't a subclass of PartKeepr\\Service\\Service, can't reflect", $className));
		}
		$this->className = $className;
		$this->reader = new \Doctrine\Common\Annotations\AnnotationReader();
		$this->registerAnnotationLoaders();
	}

	/**
	 * Returns the name of the service
	 * @return string The name of the service
	 */
	public function getName () {
		return $this->reflClass->getShortName();
	}

	/**
	 * Returns the description of the service
	 * @return string The description of the service
	 */
	public function getDescription () {
		return $this->reader->getClassAnnotation($this->reflClass, "PartKeepr\\Service\\Annotations\\Service")->getDescription();
	}

	/**
	 * Returns all calls for the service
	 * @return ServiceCallReflector[] An array of ServiceCallReflector objects
	 */
	public function getCalls () {
		$calls = array();

		foreach ($this->reflClass->getMethods() as $method) {
			if (ServiceCallReflector::isServiceCall($method, $this->reader)) {
				$calls[] = new ServiceCallReflector($method, $this->reader);
			}
		}

		return $calls;
	}

	/**
	 * Returns a call by name
	 * @param $name The call name to retrieve
	 * @return null|ServiceCallReflector The call name
	 */
	public function getCall ($name) {
		foreach ($this->getCalls() as $call) {
			if ($call->getName() == $name) {
				return $call;
			}
		}

		return null;
	}
	/**
	 * Register the annotation loader.
	 * @todo This will happen multiple times, needs a fix to do this only once
	 */
	public function registerAnnotationLoaders () {
		AnnotationRegistry::registerLoader(function($class) {
			$file = str_replace("\\", DIRECTORY_SEPARATOR, $class) . ".php";

			$fullFile = PartKeepr::getRootDirectory(). "/src/backend/" . $file;

			if (file_exists($fullFile)) {
				// file exists makes sure that the loader fails silently
				require $fullFile;
				return true;

			}
		});

		AnnotationRegistry::registerAutoloadNamespace('PartKeepr\Service\Annotations', PartKeepr::getRootDirectory() . "/src/backend/PartKeepr/Service/Annotations");
	}
}