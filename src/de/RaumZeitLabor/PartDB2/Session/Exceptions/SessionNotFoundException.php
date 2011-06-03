<?php
namespace de\RaumZeitLabor\PartDB2\Session\Exceptions;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\SerializableException;

class SessionNotFoundException extends SerializableException {
	public function __construct ($id) {
		parent::__construct("The session with the id $id could not be found");
	}
}