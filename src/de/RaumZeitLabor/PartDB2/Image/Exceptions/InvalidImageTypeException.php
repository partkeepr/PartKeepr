<?php 
namespace de\RaumZeitLabor\PartDB2\Image\Exceptions;

class InvalidImageTypeException extends \Exception {
	public function __construct ($type) {
		parent::__construct("The image type $type is unknown.");
	}
}