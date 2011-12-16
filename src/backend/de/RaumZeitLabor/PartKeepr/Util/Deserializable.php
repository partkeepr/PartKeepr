<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

interface Deserializable {
	/**
	 * Deserializes the entity from an array format
	 * @param $parameters array The serialized form of the entity to deserialize
	 */
	public function deserialize (array $parameters);
}