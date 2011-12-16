<?php 
namespace de\RaumZeitLabor\PartKeepr\Image\Exceptions;

/**
 * Thrown if an invalid type was passed
 */
class InvalidImageTypeException extends \Exception {
	public function __construct ($type) {
		parent::__construct("The image type $type is unknown.");
	}
}