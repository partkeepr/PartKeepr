<?php
namespace PartKeepr\Util\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Thrown when an entity via loadById() was not found.
 */
class EntityNotFoundException extends SerializableException {
	public function __construct ($class, $id) {
		parent::__construct(
			sprintf(
				PartKeepr::i18n("The entity %s with the id %d could not be found"),
				$class,	$id));
	}
}
