<?php
namespace de\RaumZeitLabor\PartKeepr\Session\Exceptions;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\SerializableException;

class SessionNotFoundException extends SerializableException {
	public function __construct ($id) {
		parent::__construct("The session with the id $id could not be found");
	}
}