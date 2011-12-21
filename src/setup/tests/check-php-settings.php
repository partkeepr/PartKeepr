<?php
if (ini_get("safe_mode")) {
	echo json_encode(array("error" => true, "errormessage" => "PHP safe_mode is active. This feature is deprecated as of PHP 5.3.0 and causes problems of any kind. Please disable it by setting safe_mode=off in your php.ini file."));
	exit;
}

if (ini_get("allow_url_fopen") == false) {
	echo json_encode(array("error" => true, "errormessage" => "PHP allow_url_fopen is set to off. Right now, we require that it is set to ON. Please set<br/><code>allow_url_fopen = On</code> in your php.ini file."));
	exit;
}

echo json_encode(array("error" => false));
exit;