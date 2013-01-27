<?php
namespace PartKeepr\Printing\Exceptions;

use PartKeepr\Util\SerializableException;

class InvalidArgumentException extends SerializableException {
	public function __construct ($detailedReason) {
		parent::__construct( $detailedReason );
	}
}
?>