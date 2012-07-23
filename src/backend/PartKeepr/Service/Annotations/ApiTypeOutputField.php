<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a single API output field. This is used by the TypeReflector to get information
 * about the type.
 *
 * @see PartKeepr\Service\TypeReflector
 *
 * @Annotation
 * @Target({"ANNOTATION"})
 */
class ApiTypeOutputField
{
	/**
	 * The name of the field
	 * @var string
	 */
	public $name;

	/**
	 * The type of the field
	 * @var string
	 */
	public $type;

	/**
	 * The description of the field
	 * @var string
	 */
	public $description;

	/**
	 * Returns the name of the output field
	 * @return string
	 */
	public function getName () {
		return $this->name;
	}

	/**
	 * Returns the description of the output field
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Returns the type of the output field
	 * @return string
	 */
	public function getType () {
		return $this->type;
	}
}
