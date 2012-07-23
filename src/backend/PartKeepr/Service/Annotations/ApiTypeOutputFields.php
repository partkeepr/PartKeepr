<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a list of type ApiTypeOutputField. This is used by the TypeReflector to get information
 * about the type.
 *
 * @see PartKeepr\Service\TypeReflector
 *
 * @Annotation
 * @Target({"METHOD"})
 */
class ApiTypeOutputFields
{
	/**
	 * The output fields
	 * @var array<PartKeepr\Service\Annotations\ApiTypeOutputField>
	 */
	public $outputFields;

	/**
	 * Returns the output fields
	 * @return \PartKeepr\Service\Annotations\ApiTypeOutputField[] The output fields
	 */
	public function getOutputFields () {
		return $this->outputFields;
	}
}

