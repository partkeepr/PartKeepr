<?php
namespace de\RaumZeitLabor\PartKeepr\Auth\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class UserAlreadyExistsException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("User already exists."));
	}
}
?>