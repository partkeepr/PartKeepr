<?php
namespace de\RaumZeitLabor\PartKeepr\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Image\Image;
use de\RaumZeitLabor\PartKeepr\Manufacturer\ManufacturerICLogo;
use de\RaumZeitLabor\PartKeepr\Manufacturer\Manufacturer;

include("../src/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

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