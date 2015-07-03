<?php
namespace PartKeepr\TempImage;

use PartKeepr\Service\Service;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\PartKeepr;

class TempImageService extends Service {
	public function upload () {
		$image = new TempImage();
		
		if (array_key_exists("userfile", $_FILES) && file_exists($_FILES["userfile"]["tmp_name"])) {
			$file = $_FILES['userfile']['tmp_name'];
			$filename = $_FILES['userfile']['name'];
		
    		$image->replace($file);
    		$image->setOriginalFilename(basename($filename));
		} elseif (array_key_exists("url", $_REQUEST)) {
    		$image->replaceFromURL($_REQUEST["url"]);
    	} else {
    		throw new \Exception("Error: No valid file given");
    	}
    	
    	PartKeepr::getEM()->persist($image);
    	PartKeepr::getEM()->flush();
    	
    	return array("id" => $image->getId(), "extension" => $image->getExtension(), "size" => $image->getSize(), "originalFilename" => $image->getOriginalFilename());
	}
}
		