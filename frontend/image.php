<?php
namespace de\RaumZeitLabor\PartDB2\Frontend;
use de\RaumZeitLabor\PartDB2\Image\TempImage;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Image\Image;
use de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo;

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

PartDB2::initialize("");

$type = $_REQUEST["type"];
$id = $_REQUEST["id"];

try {
	
	switch ($type) {
		case Image::IMAGE_ICLOGO:
			$image = ManufacturerICLogo::loadById($id);
			break;
		default:
			// Add default image?
	}
	
} catch (\Exception $e) {
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