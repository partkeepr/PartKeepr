<?php
namespace de\RaumZeitLabor\PartKeepr\Auth\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class InvalidLoginDataException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Username or Password wrong."));
	}
}
?>