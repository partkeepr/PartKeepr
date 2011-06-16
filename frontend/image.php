<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
use de\RaumZeitLabor\PartKeepr\TempImage\TempImage;

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
		case Image::IMAGE_ICLOGO:
			$image = ManufacturerICLogo::loadById($id);
			break;
		default:
			$image = null;
			// Add default image?
	}
	
} catch (\Exception $e) {
	$image = null;
	// Something bad happened
}

if ($image == null) {
	// Could not find the image, but maybe we want a temporary image?
	if (array_key_exists("tmpId", $_REQUEST)) {
		$image = TempImage::loadById($_REQUEST["tmpId"]);
	}
}

$file = $image->fitWithin($_REQUEST["w"],$_REQUEST["h"]);

header("Content-Type: image/png");

$fp = fopen($file, "rb");
fpassthru($fp);
fclose($fp);

Netraver::getEM()->flush();
exit();