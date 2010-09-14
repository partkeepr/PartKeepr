<?php
namespace de\RaumZeitLabor\PartDB2\Auth\Exceptions;

use de\RaumZeitLabor\PartDB2\Util\SerializableException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class UserDoesNotExistException extends SerializableException {
	public function __construct () {
		parent::__construct(PartDB2::i18n("The given user doesn't exist. Maybe the user was already deleted."));
	}
}
?>