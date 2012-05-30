<?php
namespace PartKeepr\Frontend;

use PartKeepr\PartKeepr;
use PartKeepr\Image\Image;
use PartKeepr\Manufacturer\ManufacturerICLogo;
use PartKeepr\Manufacturer\Manufacturer;

include("../src/backend/PartKeepr/PartKeepr.php");

PartKeepr::initialize("");

$keys = array_keys($_FILES);

$file = $_FILES[$keys[0]]["tmp_name"];
$filename = $_FILES[$keys[0]]["name"];

switch ($_REQUEST["uploadMode"]) {
	case "image":
		
		switch ($_REQUEST["uploadType"]) {
			case Image::IMAGE_ICLOGO:
				$manufacturer = Manufacturer::loadById($_REQUEST["manufacturer"]);
				
				$image = new ManufacturerICLogo();
				$image->setManufacturer($manufacturer);
				$image->replace($file);
				$image->setOriginalFilename(basename($filename));
				PartKeepr::getEM()->persist($image);
				PartKeepr::getEM()->flush();
		}
		
		break;
}

echo json_encode("OK");