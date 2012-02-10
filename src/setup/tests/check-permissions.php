<?php
$dataDir = dirname(dirname(dirname(__FILE__)))."/data";

if (!is_writable_recursive($dataDir)) {
	echo json_encode(array("error" => true, "message" => "The directory /data is not writable<br/>Please adjust the filesystem permissions so that your webserver can write into that directory."));
	exit;
}

function is_writable_recursive($dir)
{
	if (!is_writable($dir)) {
		return false;
	}
	
	$folder = opendir($dir);
	while($file = readdir( $folder )) {
		if (is_dir($dir."/".$file)) {
			if($file != '.' &&  $file != '..') {
				if (!is_writable(  $dir."/".$file )) {
					closedir($folder);
					return false;
				} else {
					if (!is_writable_recursive($dir."/".$file)) {
						closedir($folder);
						return false;
					}
				}
					
			}
		}
	}
	
	return true;
}

echo json_encode(array("error" => false));
exit;