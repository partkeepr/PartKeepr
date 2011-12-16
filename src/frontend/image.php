<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
use de\RaumZeitLabor\PartKeepr\Part\PartImage;
use de\RaumZeitLabor\PartKeepr\StorageLocation\StorageLocationImage;

use de\RaumZeitLabor\PartKeepr\Footprint\FootprintImage;

use de\RaumZeitLabor\PartKeepr\TempImage\TempImage;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Image\Image;
use de\RaumZeitLabor\PartKeepr\Image\CachedImage;
use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;

include("../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");

$type = $_REQUEST["type"];
$id = $_REQUEST["id"];

if (substr($id, 0, 4) === "TMP:") {
		$tmpImageId = str_replace("TMP:", "", $id);
		$image = TempImage::loadById($tmpImageId);
} else {
	try {
		switch ($type) {
			case Image::IMAGE_ICLOGO:
				$image = ManufacturerICLogo::loadById($id);
				break;
			case Image::IMAGE_FOOTPRINT:
				$image = FootprintImage::loadById($id);
				break;
			case Image::IMAGE_STORAGELOCATION:
					$image = StorageLocationImage::loadById($id);
					break;
			case Image::IMAGE_PART:
				$image = PartImage::loadById($id);
				break;
			default:
				$image = null;
				// Add default image?
		}
		
	} catch (\Exception $e) {
		$image = null;
		// Something bad happened
	}
}

if ($image == null) {
	// Could not find the image, but maybe we want a temporary image?
	if (array_key_exists("tmpId", $_REQUEST)) {
		$image = TempImage::loadById($_REQUEST["tmpId"]);
	}
	
	if ($image === null) {
		/* The image is still null - output an "image not found" image.	 */
		$image = imagecreate($_REQUEST["w"], $_REQUEST["h"]);
		$white = imagecolorallocate($image, 255,255,255);
		$black = imagecolorallocate($image, 0,0,0);
		
		header("Content-Type: image/png");
		
		$w = $_REQUEST["w"]-1;
		$h = $_REQUEST["h"]-1;
		imagefill($image, 0,0, $white);
		
		/* Draw the X */
		imageline($image, 0,0,$w,$h, $black);
		imageline($image, $w,0,0,$h, $black);
		imagepng($image);
		exit();
		
	}
}

$mode = "fit";

if (array_key_exists("m", $_REQUEST)) {
	$mode = $_REQUEST["m"];
}

if (array_key_exists("cache", $_REQUEST)) {
	if ($_REQUEST["cache"] == "false") {
		CachedImage::invalidate($image);
	}
}

switch ($mode) {
	case "fitpadding":
		$file = $image->fitWithinPadding($_REQUEST["w"],$_REQUEST["h"]);
		break;
	case "fitexact":
		$file = $image->fitWithinExact($_REQUEST["w"],$_REQUEST["h"]);
		break;
	case "scale":
		$file = $image->scaleTo($_REQUEST["w"],$_REQUEST["h"]);
		break;
	case "fit":
	default:
		$file = $image->fitWithin($_REQUEST["w"],$_REQUEST["h"]);
		break;		
	
}


header("Content-Type: image/png");

$fp = fopen($file, "rb");
fpassthru($fp);
fclose($fp);

PartKeepr::getEM()->flush();
exit();