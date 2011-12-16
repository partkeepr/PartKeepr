<?php
/**
 * This file does various pre-flight checks in order to make sure the installer can run
 * and do additional tests.
 * 
 * The pre-flight check will immediately die if PHP is less than 5.3.0 or json_encode
 * doesn't exist.
 * 
 * Each pre-flight check consists of a json array returned in the following format:
 * 
 * error: 			Either boolean true or false
 * errormessage: 	An error message explaining what the error was
 * checks:			An additional array containing the check names and their results 
 */

if (version_compare(PHP_VERSION, '5.3.0', '<')) {
	echo '{"error":true,"errormessage":"You need at least PHP 5.3.0"}';
	exit;	
}

if (!function_exists("json_encode")) {
	echo '{"error":true,"errormessage":"Your PHP installation lacks the function json_decode, which is mandatory for PartKeepr."}';
	exit;
}

$aChecks = array();

//echo json_encode(array("error" => true, "errormessage" => "You need at least PHP 5.3.0"));

