<?php
namespace PartKeepr\Util\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Thrown when an entity via loadById() was not found.
 */
class EntityNotPersistantException extends SerializableException {
	public function __construct () {
		parent::__construct("The entity is not persistant.");
	}
}
