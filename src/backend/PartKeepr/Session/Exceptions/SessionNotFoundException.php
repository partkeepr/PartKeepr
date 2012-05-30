<?php
namespace PartKeepr\Session\Exceptions;

use PartKeepr\Util\SerializableException;

class SessionNotFoundException extends SerializableException {
	public function __construct ($id) {
		parent::__construct("The session with the id $id could not be found");
	}
}