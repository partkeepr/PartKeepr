<?php
namespace de\RaumZeitLabor\PartKeepr\User\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Is thrown when the user has given wrong credentials.
 */
class InvalidLoginDataException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Username or Password wrong."));
	}
}