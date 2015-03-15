<?php
namespace PartKeepr\AuthBundle\Entity\User\Exceptions;

use PartKeepr\PartKeepr;
use PartKeepr\Util\SerializableException;

/**
 * Is thrown when the user has given wrong credentials.
 */
class InvalidLoginDataException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Username or Password wrong."));
	}
}