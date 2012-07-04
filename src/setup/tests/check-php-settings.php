<?php
/*
 * Check if safe_mode is active. If yes, bail out, as safe_mode is unsupported, deprecated with PHP 5.3.0 and will
 * most likely be obsoleted with PHP 5.4.0. 
 */
if (ini_get("safe_mode")) {
	$errorMessage  = "PHP safe_mode is active. This feature is deprecated as of PHP 5.3.0 and causes problems of any ";
	$errorMessage .= "kind. Please disable it by setting safe_mode=off in your php.ini file (don't forget to restart ";
	$errorMessage .= "your web server afterwards)";
	
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

if (ini_get("magic_quotes_gpc")) {
	$errorMessage  = "PHP magic_quotes_gpc is active. PartKeepr won't work with magic_quotes_gpc. ";
	$errorMessage .= "Please disable it by setting magic_quotes_gpc=off in your php.ini file (don't forget to restart ";
	$errorMessage .= "your web server afterwards)";
	
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check if allow_url_fopen is enabled. This is required for downloading files due to lazyness (another solution,
 * like cURL, needs to be implemented). 
 */
if (ini_get("allow_url_fopen") == false) {
	$errorMessage = "PHP allow_url_fopen is set to off. Right now, we require that it is set to ON. ";
	$errorMessage .= "Please set<br/><code>allow_url_fopen = On</code> in your php.ini file. ";
	$errorMessage .= "Don't forget to restart your web server afterwards.";
	
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check for the cURL extension.
 */
if (!function_exists("curl_init")) {
	$errorMessage = "You are missing the curl-library for PHP. Please install and activate it.";
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check for the fileinfo extension.
 */
if (!class_exists("\\finfo")) {
	$errorMessage = "You are missing the fileinfo-library for PHP. Please install and activate it.";
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check for the imagemagick extension.
 */
if (!class_exists("\\Imagick")) {
	$errorMessage = "You are missing the Imagick library for PHP. Please install and activate it.";
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check for the gd extension.
*/
if (!function_exists("imagecreate")) {
	$errorMessage = "You are missing the GD library for PHP. Please install and activate it.";
	echo json_encode(array("error" => true, "message" => $errorMessage));
	exit;
}

/*
 * Check if the timezone settings are valid.
 */
if (!isTimezoneSetAndValid()) {
	$errorMessage = "The PHP timezone (%s) is not set or invalid. Please set the correct timezone in your";
	$errorMessage .= " php.ini file (don't forget to restart the web server afterwards)";
	
	echo json_encode(array("error" => true, "message" => sprintf($errorMessage, ini_get("date.timezone"))));
	exit;
}

echo json_encode(array("error" => false));
exit;

/**
 * Checks if the timezone is set and valid.
 *
 * @param 	none
 * @return 	bool 	True if the timezone is set and valid, false otherwise.
 */
function isTimezoneSetAndValid () {
	if (ini_get("date.timezone") == "") {
		return false;
	} 
	
	return @date_default_timezone_set(ini_get("date.timezone"));
}