<?php 
namespace de\RaumZeitLabor\PartKeepr\Image\Exceptions;

class InvalidImageTypeException extends \Exception {
	public function __construct ($type) {
		parent::__construct("The image type $type is unknown.");
	}
}