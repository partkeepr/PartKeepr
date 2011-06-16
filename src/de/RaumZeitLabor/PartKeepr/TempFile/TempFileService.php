<?php
namespace de\RaumZeitLabor\PartKeepr\TempFile;

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

class TempFileService extends Service {

	public function upload () {
		$tmpFile = new TempUploadedFile();
		
		$file = $_FILES['userfile']['tmp_name'];
		$filename = $_FILES['userfile']['name'];
		
    	$tmpFile->replace($file);
    	$tmpFile->setOriginalFilename(basename($filename));
    	PartKeepr::getEM()->persist($tmpFile);
    	PartKeepr::getEM()->flush();
    	
    	return array("id" => $tmpFile->getId(), "extension" => $tmpFile->getExtension(), "size" => $tmpFile->getSize(), "originalFilename" => $tmpFile->getOriginalFilename());
	}
}
		