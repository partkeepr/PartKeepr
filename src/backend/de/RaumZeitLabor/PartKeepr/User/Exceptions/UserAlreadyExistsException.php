<?php
namespace de\RaumZeitLabor\PartKeepr\User\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
* Is thrown when the user already exists. This usually happens
* if someone tries to create a user with the same name of an existing
* user.
*/
class UserAlreadyExistsException extends SerializableException {
	public function __construct ($username) {
		parent::__construct(
			sprintf(
				PartKeepr::i18n("User %s already exists."),
				$username));
	}
}