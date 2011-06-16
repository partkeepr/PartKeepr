<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
use de\RaumZeitLabor\PartKeepr\Part\PartAttachment;

use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Image\Image;
use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");

$type = $_REQUEST["type"];
$id = $_REQUEST["id"];

try {
	switch ($type) {
		case "PartAttachment":
			$file = PartAttachment::loadById($id);
			break;
		default:
			$file = null;
			// Add default image?
	}
	
} catch (\Exception $e) {
	$file = null;
	// Something bad happened
}

if ($file == null) {
	// Could not find the image, but maybe we want a temporary image?
	if (array_key_exists("tmpId", $_REQUEST)) {
		$file = TempUploadedFile::loadById($_REQUEST["tmpId"]);
	}
}
header("Content-Type: ".$file->getMimeType());

$fp = fopen($file->getFilename(), "rb");
fpassthru($fp);
fclose($fp);

PartKeepr::getEM()->flush();
exit();