<?php
namespace PartKeepr\Frontend;

use PartKeepr\Part\PartAttachment;

use PartKeepr\Image\ImageRenderer;

use PartKeepr\Part\PartImage,
	PartKeepr\StorageLocation\StorageLocationImage,
	PartKeepr\Footprint\FootprintImage,
	PartKeepr\TempImage\TempImage,
	PartKeepr\PartKeepr,
	PartKeepr\Image\Image,
	PartKeepr\Image\CachedImage,
	PartKeepr\Manufacturer\ManufacturerICLogo;

include("../src/backend/PartKeepr/PartKeepr.php");

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
			case "partattachment":
				$attachment = PartAttachment::loadById($id);
				$image = new PartImage();
				$image->replace($attachment->getFilename());
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
		ImageRenderer::outputRenderNotFoundImage($_REQUEST["w"], $_REQUEST["h"]);
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