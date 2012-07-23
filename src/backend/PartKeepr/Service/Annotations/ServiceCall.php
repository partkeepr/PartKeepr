<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a service call.
 * @Annotation
 * @Target({"METHOD"})
 */
class ServiceCall
{
	/**
	 * The description of the call
	 * @var string
	 */
	public $description;

	/**
	 * The documentation of the call
	 * @var string
	 */
	public $documentation;

	/**
	 * The return values
	 * @var array<PartKeepr\Service\Annotations\ServiceReturnValue>
	 */
	public $returnValues;

	/**
	 * The parameters
	 * @var array<PartKeepr\Service\Annotations\ServiceParameter>
	 */
	public $parameters;

	/**
	 * Returns the description of this call
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 * Returns the documentation for this call
	 * @return string
	 */
	public function getDocumentation () {
		return $this->documentation;
	}

	/**
	 * Returns the parameters for this service call
	 * @return \PartKeepr\Service\Annotations\ServiceParameter[] The service parameters
	 */
	public function getParameters () {
		return $this->parameters;
	}

	/**
	 * Returns the return values for this service call
	 * @return \PartKeepr\Service\Annotations\ServiceReturnValue[] The returned values
	 */
	public function getReturnValues () {
		return $this->returnValues;
	}
}

