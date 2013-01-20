<?php
namespace PartKeepr\Printing\Utils;

use PartKeepr\Printing\Exceptions\InvalidArgumentException;

/**
 * Helper class which enables us to decode a configuration which was passed as JSON
 * string. The class will also do error handling of data inside the JSON. 
 */
class DecodeConfiguration{
	/**
	 * Method decodes the incoming string and returns the JSON decoded array if
	 * everything was fine. If a syntax error was detected, it throws an exception.
	 * 
	 * @param string $string
	 * @throws InvalidArgumentException
	 */
	public static function decode( $string ){
		$jsonDecoded = json_decode(trim($string), true);
		if ($jsonDecoded===null){
			if (strlen($string) == 0 ){
				$jsonDecoded = array();
			}
			else{
				throw new InvalidArgumentException( PartKeepr::i18n('Extended rendering configuration contains an error!'));
			}
		}
		
		return $jsonDecoded;
	}
}