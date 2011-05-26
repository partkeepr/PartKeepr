<?php
namespace de\RaumZeitLabor\PartDB2\Frontend;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;
use de\RaumZeitLabor\PartDB2\Image\Image;
use de\RaumZeitLabor\PartDB2\Manufacturer\ManufacturerICLogo;
use de\RaumZeitLabor\PartDB2\Manufacturer\Manufacturer;

include("../src/de/RaumZeitLabor/PartDB2/PartDB2.php");

PartDB2::initialize("");

$keys = array_keys($_FILES);

$file = $_FILES[$keys[0]]["tmp_name"];

switch ($_REQUEST["uploadMode"]) {
	case "image":
		
		switch ($_REQUEST["uploadType"]) {
			case Image::IMAGE_ICLOGO:
				$manufacturer = Manufacturer::loadById($_REQUEST["manufacturer"]);
				
				$image = new ManufacturerICLogo();
				$image->setManufacturer($manufacturer);
				$image->replace($file);
				PartDB2::getEM()->persist($image);
				PartDB2::getEM()->flush();
		}
		
		break;
}

echo json_encode("OK");