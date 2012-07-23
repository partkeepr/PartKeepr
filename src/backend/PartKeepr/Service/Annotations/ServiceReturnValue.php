<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a single service return value
 *
 * @Annotation
 * @Target({"ANNOTATION"})
 */
class ServiceReturnValue
{
	/**
	 * The name of the return value
	 * @var string
	 */
	public $name;

	/**
	 * The description of the return value
	 * @var string */
	public $description;

	/**
	 * The type of the return value
	 * @var string
	 */
	public $type;

	/**
	 * Returns the description of the return value
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Returns the name of the return value
	 * @return string
	 */
	public function getName () {
		return $this->name;
	}

	/**
	 * Returns the type of the return value
	 * @return string
	 */
	public function getType () {
		return $this->type;
	}
}