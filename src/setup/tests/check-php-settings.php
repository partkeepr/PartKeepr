<?php
if (ini_get("safe_mode")) {
	echo json_encode(array("error" => true, "errormessage" => "PHP safe_mode is active. This feature is deprecated as of PHP 5.3.0 and causes problems of any kind. Please disable it by setting safe_mode=off in your php.ini file."));
	exit;
}

echo json_encode(array("error" => false));
exit;