<?php
namespace de\RaumZeitLabor\PartDB2\Util;

class SerializableException extends \Exception {
	/* @todo: stub */
	public function serialize () {
		return array(
			"message" => $this->getMessage(),
			"exception" => get_class($this) 

		);
	}
	
}
?>