<?php
namespace PartKeepr\TempFile;

use PartKeepr\Service\Service;
use PartKeepr\UploadedFile\TempUploadedFile;
use PartKeepr\PartKeepr;

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
	
	/**
	 * Receives a file via the service call.
	 *
	 * Parameters:
	 * - filedata: needs to be base64-encoded.
	 * - filename: The filename
	 */
	public function jsonUpload () {
		$data = base64_decode($this->getParameter("filedata"));
		$filename = $this->getParameter("filename");
	
		$tempFile = tempnam("/tmp", "PWC");
		file_put_contents($tempFile, $data);
		
		$tmpFile = new TempUploadedFile();
		$tmpFile->replace($tempFile);
		$tmpFile->setOriginalFilename($filename);
		
		PartKeepr::getEM()->persist($tmpFile);
		PartKeepr::getEM()->flush();
		
		return $tmpFile->serialize();
	}
	
	/**
	 * Processes data via HTTP POST. Reads php://input and creates a temporary image out of it.
	 */
	public function uploadCam () {
		$tempFile = tempnam("/tmp", "PWC") . ".jpg";
		$result = file_put_contents( $tempFile, file_get_contents('php://input') );
	
		$image = new TempUploadedFile();
		$image->replace($tempFile);
		$image->setOriginalFilename(sprintf(PartKeepr::i18n("Cam photo of %s"), date("Y-m-d H:i:s")).".jpg");
	
		PartKeepr::getEM()->persist($image);
		PartKeepr::getEM()->flush();
	
		return array("id" => $image->getId(), "extension" => $image->getExtension(), "size" => $image->getSize(), "originalFilename" => $image->getOriginalFilename());
	}
}
		