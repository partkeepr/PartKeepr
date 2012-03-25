<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

abstract class Singleton {
	static $instance = null;
	
	private function __construct () {
		
	}
	
	/**
	 * Returns an instance of the current singleton
	 * @return $this
	 */
	public static function getInstance () {
		if (!static::$instance instanceof static) {
			static::$instance = new static;
		}
		
		return static::$instance;
	}	
}