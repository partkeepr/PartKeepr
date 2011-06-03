<?php
namespace de\RaumZeitLabor\PartDB2\TempImage;

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Image\TempImage;
use de\RaumZeitLabor\PartDB2\PartDB2;

class TempImageService extends Service {

	public function upload () {
		$image = new TempImage();
		
		$file = $_FILES['userfile']['tmp_name'];
		
    	$image->replace($file);
    	PartDB2::getEM()->persist($image);
    	PartDB2::getEM()->flush();
    	
    	return array("id" => $image->getId());
	}
}
		