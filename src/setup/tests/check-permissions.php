<?php
$dataDir = dirname(dirname(dirname(__FILE__)))."/data";

try {
	is_writable_recursive($dataDir);
} catch (\Exception $e) {
	echo json_encode(array("error" => true, "message" => $e->getMessage() . "<br/>Please adjust the filesystem permissions so that your webserver can write into that directory."));
	exit;
}

/**
 * Checks if the given directory and all contained files within it is writable by the current user.
 * @param string $dir The directory to check
 */
function is_writable_recursive($dir)
{
	if (!is_writable($dir)) {
		throw new \Exception($dir ." is not writable.");
	}
	
	$folder = opendir($dir);
	while($file = readdir( $folder )) {
		if($file != '.' &&  $file != '..') {
			if (!is_writable(  $dir."/".$file )) {
				closedir($folder);
				throw new \Exception($dir."/".$file." is not writable.");
			} else {
				if (is_dir($dir."/".$file)) {
					if (!is_writable_recursive($dir."/".$file)) {
						closedir($folder);
						throw new \Exception($dir."/".$file." is not writable.");
					}
				}
			}
		}
	}
	
	return true;
}

echo json_encode(array("error" => false));
exit;