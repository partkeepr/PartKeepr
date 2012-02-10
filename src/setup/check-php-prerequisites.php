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
 * message: 	An error message explaining what the error was
 */

/* We need at least PHP 5.3.0, bail out if the version is too low */
if (version_compare(PHP_VERSION, '5.3.0', '<')) {
	echo '{"error":true,"message":"You need at least PHP 5.3.0"}';
	exit;	
}

/* json_decode is the most important function, as we communicate via JSON */
if (!function_exists("json_encode")) {
	echo '{"error":true,"message":"Your PHP installation lacks the function json_decode, which is mandatory for PartKeepr."}';
	exit;
}

$aChecks = array();

echo json_encode(array("error" => false));
exit;
?>
