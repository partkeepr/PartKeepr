<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintAttachment;

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

if (substr($id, 0, 4) === "TMP:") {
		$tmpFileId = str_replace("TMP:", "", $id);
		$file = TempUploadedFile::loadById($tmpFileId);
} else {
	try {
		switch ($type) {
			case "PartKeepr.PartAttachment":
			case "PartAttachment":
				$file = PartAttachment::loadById($id);
				break;
			case "FootprintAttachment":
			case "PartKeepr.FootprintAttachment":
					$file = FootprintAttachment::loadById($id);
					break;			
			default:
				$file = null;
				// Add default image?
		}
		
	} catch (\Exception $e) {
		$file = null;
		// Something bad happened
	}
}

if ($file == null) {
	
	// Could not find the image, but maybe we want a temporary image?
	if (array_key_exists("tmpId", $_REQUEST)) {
		$file = TempUploadedFile::loadById($_REQUEST["tmpId"]);
	}
}

if (is_object($file)) {
	header("Content-Type: ".$file->getMimeType());
	
	$fp = fopen($file->getFilename(), "rb");
	fpassthru($fp);
	fclose($fp);
} else {
	echo "404 not found";
}

PartKeepr::getEM()->flush();
exit();