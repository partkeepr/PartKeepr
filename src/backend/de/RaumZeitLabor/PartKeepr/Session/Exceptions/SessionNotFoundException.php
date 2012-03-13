<?php
namespace de\RaumZeitLabor\PartKeepr\Session\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException;

class SessionNotFoundException extends SerializableException {
	public function __construct ($id) {
		parent::__construct("The session with the id $id could not be found");
	}
}