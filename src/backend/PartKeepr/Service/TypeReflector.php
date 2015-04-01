<?php
namespace PartKeepr\Service;

use Doctrine\Common\Annotations\AnnotationRegistry,
	PartKeepr\PartKeepr,
	PartKeepr\Service\Service;

/**
 * Reflects a type.
 */
class TypeReflector {
	private $className;
	private $reflClass;
	private $reader;

	/**
	 * Creates a new service reflector
	 *
	 * @param $className string The FQCN of the service class to reflect
	 */
	public function __construct ($className) {
		$this->reflClass = new \ReflectionClass($className);

		$this->className = $className;
		$this->reader = new \Doctrine\Common\Annotations\AnnotationReader();
		$this->reader->addNamespace('Doctrine\ORM\Mapping');
		$this->reader->addNamespace('PartKeepr\\Service\\Annotations');

		$this->registerAnnotationLoaders();
	}

	/**
	 * Returns the name of the type
	 *
	 * @return string The name of the type
	 */
	public function getName () {
		return $this->reflClass->getShortName();
	}

	/**
	 * Returns the description of the type
	 * @return string The description of the type
	 */
	public function getDescription () {
		return $this->reader->getClassAnnotation($this->reflClass, "PartKeepr\\Service\\Annotations\\ApiType")->getDescription();
	}

	/**
	 * Returns the documentation of the type
	 * @return string The documentation of the type
	 */
	public function getDocumentation () {
		return $this->reader->getClassAnnotation($this->reflClass, "PartKeepr\\Service\\Annotations\\ApiType")->getDocumentation();
	}

	/**
	 * Returns the output fields
	 * @return \PartKeepr\Service\Annotations\ApiTypeOutputField The output fields
	 */
	public function getOutputFields () {
		$serializeReflMethod = $this->reflClass->getMethod("serialize");

		$outputs = $this->reader->getMethodAnnotation($serializeReflMethod, "PartKeepr\\Service\\Annotations\\ApiTypeOutputFields");

		return $outputs->getOutputFields();
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

		AnnotationRegistry::registerAutoloadNamespace('PartKeepr\\Service\\Annotations', PartKeepr::getRootDirectory() . "/src/backend/PartKeepr/Service/Annotations");
		require_once('Doctrine/ORM/Mapping/Driver/DoctrineAnnotations.php');
	}
}