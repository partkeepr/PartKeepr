<?php
namespace de\RaumZeitLabor\PartKeepr\Util\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Thrown when an entity via loadById() was not found.
 */
class EntityNotPersistantException extends SerializableException {
	public function __construct () {
		parent::__construct("The entity is not persistant.");
	}
}
