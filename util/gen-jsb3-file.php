<?php
/* This script generates the partkeepr.jsb3 file.
 * 
 * Usage: gen-jsb3-filelist.php <path> <extjspath>
 * 
 * 
 * This script finds all JavaScript files, parses their class names and which
 * class they extend, and orders it.
 * 
 * We dynamically order the dependencies.
 * */

// Check if the path argument was given. If not, bail out.
if ($_SERVER["argc"] !== 3) {
	echo "Usage: gen-jsb3-filelist.php <path> <extjspath>\n\n";
	exit(-1);
}

// Extract the path and check if the path is actually a directory
$path = $_SERVER["argv"][1];

if (!is_dir($path)) {
	echo "Sorry, we can't read the path $path.\n\n";
	exit(-1);
}

$extjspath = $_SERVER["argv"][2];

if (!is_dir($path)) {
	echo "Sorry, we can't read the ExtJS path $extjspath.\n\n";
	exit(-1);
}


include("classes/ExtJSFile.php");

echo "Finding all javascript files in $path...\n\n";

$call = 'find '.$path.' -name *.js -type f';
exec($call, $output);

/* Add Ext.ux'es from the ExtJS distribution */
$output[] = $extjspath . "/examples/ux/statusbar/StatusBar.js";
$output[] = $extjspath . "/examples/ux/TabCloseMenu.js";

// Spit out the number of JS files we've found
echo "Found ".count($output)." JavaScript files\n\n";

$records = array();



/* Generate class objects out of the source files */
foreach ($output as $file) {
	$file = str_replace("./", "", $file);
	
	$o = new ExtJSFile($file);
	
	$records[$o->getClassName()] = $o; 
}

// rootList contains all classes which have no dependencies or external dependencies.
$rootList = array();

/* Iterate through the array and build the dependency tree */
foreach ($records as $key => $record) {
	$bHasRequires = false;
	
	foreach ($record->getRequires() as $require) {
		if (stripos($require, "Ext.") === false || stripos($require, "Ext.ux") !== false) {
			
			/* As PartKeepr is an application and not a class (in terms of this builder), we can't find it. Skip. */
			if ($require == "PartKeepr") {
				break;
			}
			
			/* If the parser can't find the class, throw an exception */
			if (!array_key_exists($require, $records)) {
				throw new \Exception("Fatal: The class in ". $record->getFilename()." requires the class $require, but the required class isn't in the index.");
			}
			
			$records[$require]->addChild($record);
			$bHasRequires = true;
		}
	}
	
	if (!$bHasRequires) {
		/* Hardcoded check for i18n, as it isn't a class but a script, and needs to put in front of everything */
		if ($record->getFilename() == "frontend/js/Util/i18n.js") {
			array_unshift($rootList, $record);
		} else {
			$rootList[] = $record;
		}
	}
	
	
}

$aData = array();

foreach ($rootList as $item) {
	$aData[] = $item->getJSB();
}

$template = file_get_contents(__DIR__."/../partkeepr.jsb3.template");
$template = str_replace("{{FILES}}", implode(",\n", $aData), $template);

file_put_contents(__DIR__."/../partkeepr.jsb3", $template);