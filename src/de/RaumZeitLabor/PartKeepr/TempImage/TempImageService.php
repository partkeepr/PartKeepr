<?php
namespace de\RaumZeitLabor\PartKeepr\TempImage;

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Image\TempImage;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

class TempImageService extends Service {

	public function upload () {
		$image = new TempImage();
		
		$file = $_FILES['userfile']['tmp_name'];
		
    	$image->replace($file);
    	PartKeepr::getEM()->persist($image);
    	PartKeepr::getEM()->flush();
    	
    	return array("id" => $image->getId());
	}
}
		