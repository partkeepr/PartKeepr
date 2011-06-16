<?php
namespace de\RaumZeitLabor\PartKeepr\TempFile;

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

class TempFileService extends Service {

	public function upload () {
		$tmpFile = new TempUploadedFile();
		
		if (array_key_exists("userfile", $_FILES) && file_exists($_FILES["userfile"]["tmp_name"])) {
			$file = $_FILES['userfile']['tmp_name'];
			$filename = $_FILES['userfile']['name'];
			
			$tmpFile->replace($file);
			$tmpFile->setOriginalFilename(basename($filename));
		} elseif (array_key_exists("url", $_REQUEST)) {
			$tmpFile->replaceFromURL($_REQUEST["url"]);
		} else {
			throw new \Exception("Error: No valid file given");
		}
		
    	PartKeepr::getEM()->persist($tmpFile);
    	PartKeepr::getEM()->flush();
    	
    	return array("id" => $tmpFile->getId(), "extension" => $tmpFile->getExtension(), "size" => $tmpFile->getSize(), "originalFilename" => $tmpFile->getOriginalFilename());
	}
}
		