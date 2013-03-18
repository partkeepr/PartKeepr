<?php
namespace PartKeepr\Printing\Exceptions;

use PartKeepr\Util\SerializableException;

/**
 * Illeagal argument Expression.
 * Will be thrown to indicate an error which was caused by invalid arguments.
 */
class InvalidArgumentException extends SerializableException {
	public function __construct ($detailedReason) {
		parent::__construct( $detailedReason );
	}
}
?>