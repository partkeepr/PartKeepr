<?php
namespace PartKeepr\Util;

interface Serializable {
	/**
	 * Serializes the entity into an array format, which in turn can
	 * be used by json_encode.
	 * @return array The serialized form of the entity
	 */
	public function serialize ();
}