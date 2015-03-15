<?php
namespace PartKeepr\AuthBundle\Entity\User\Exceptions;

use PartKeepr\PartKeepr;
use PartKeepr\Util\SerializableException;

/**
* Is thrown when the user doesn't exist.
*/
class UserDoesNotExistException extends SerializableException {
	public function __construct ($username) {
		parent::__construct(
			sprintf(
				PartKeepr::i18n("The user %s doesn't exist. Maybe the user was already deleted."),
				$username));
	}
}