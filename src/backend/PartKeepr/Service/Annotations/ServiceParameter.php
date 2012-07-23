<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a parameter to a service call
* @Annotation
* @Target({"ANNOTATION"})
*/
class ServiceParameter
{
	/**
	 * The name of the parameter
	 * @var string
	 */
	public $name;

	/**
	 * Defines if the parameter is required
	 * @var boolean
	 */
	public $required;

	/**
	 * The type of the parameter
	 * @var string
	 */
	public $type;

	/**
	 * The description of the parameter
	 * @var string
	 */
	public $description;

	/**
	 * Returns the name of the service parameter
	 * @return string
	 */
	public function getName () {
		return $this->name;
	}

	/**
	 * Returns if the parameter is required
	 * @return bool
	 */
	public function getRequiredFlag () {
		return $this->required;
	}

	/**
	 * Returns the description of the parameter
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Returns the type of the parameter
	 * @return string
	 */
	public function getType () {
		return $this->type;
	}

}