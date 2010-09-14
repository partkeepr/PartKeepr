<?php
namespace de\RaumZeitLabor\PartDB2\Util;

abstract class Singleton {
	static $instance = null;
	
	private function __construct () {
		
	}
	
	public static function getInstance () {
		if (!static::$instance instanceof static) {
			static::$instance = new static;
		}
		
		return static::$instance;
	}	
}

?>