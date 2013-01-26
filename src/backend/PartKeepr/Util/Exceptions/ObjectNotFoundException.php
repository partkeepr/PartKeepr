<?php
namespace PartKeepr\Util\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Thrown when an object was no found.
 */
class ObjectNotFoundException extends SerializableException {
	public function __construct ($class, $id) {
		parent::__construct(
			sprintf(
				PartKeepr::i18n("The object of type %s with the id %s could not be found in the database."),
				$class,	$id));
	}
}
