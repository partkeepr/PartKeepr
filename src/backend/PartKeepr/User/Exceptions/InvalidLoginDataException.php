<?php
namespace PartKeepr\User\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Is thrown when the user has given wrong credentials.
 */
class InvalidLoginDataException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Username or Password wrong."));
	}
}