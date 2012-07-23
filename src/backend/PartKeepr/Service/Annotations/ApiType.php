<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a type. This is used by the TypeReflector to get information
 * about the type.
 *
 * @see PartKeepr\Service\TypeReflector
 *
 * @Annotation
 * @Target({"METHOD"})
 */
class ApiType
{
	/**
	 * The description of the type
	 * @var string
	 */
	public $description;

	/**
	 * The documentation of the type
	 * @var string
	 */
	public $documentation;

	/**
	 * Returns the description of the type
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Returns the documentation of the type
	 * @return string
	 */
	public function getDocumentation () {
		return $this->documentation;
	}
}
