<?php
namespace PartKeepr\Service\Annotations;

/**
 * Describes a service. This is used by the ServiceReflector to get information
 * about the services.
 *
 * @see PartKeepr\Service\ServiceReflector
 *
 * @Annotation
 * @Target({"CLASS"})
 */
class Service
{
	/**
	 * The description of the service
	 * @var string
	 */
	public $description;

	/**
	 * Returns the description of the service
	 * @return string
	 */
	public function getDescription () {
		return $this->description;
	}

    /**
     * The documentation of the service
     *
     * @var string
     */
    public $documentation;

    /**
     * Returns the documentation of the service
     *
     * @return string
     */
    public function getDocumentation()
    {
        return $this->documentation;
    }
}