<?php
namespace PartKeepr\TempFile;

use PartKeepr\Service\Service;
use PartKeepr\UploadedFile\TempUploadedFile;
use PartKeepr\PartKeepr;

class TempFileService extends Service {

    /**
     * Handles file uploads.
     *
     * This method can handle one upload per call; the file data needs to be in the "userfile" form variable - OR - be
     * passed as "url" parameter, in which case this method will download the remote file.
     *
     * @return array An array containing the following information:
     *               - id: The id of the temporary file
     *               - extension: The extension of the temporary file
     *               - size: The size of the temporary file
     *               - originalFilename: The original file name
     * @throws \Exception If something went wrong (yes, this needs refactoring!)
     *
     * @todo Refactoring this method needs to be done - it's bad, but mostly bad due to the bad handling of the $_FILES
     *       array. Probably some wrapper method would help?
     */
    public function upload () {
		$tmpFile = new TempUploadedFile();

		if (array_key_exists("userfile", $_FILES) && array_key_exists("error", $_FILES["userfile"]) &&
            $_FILES["userfile"]["name"] != "")
		{
			switch ($_FILES["userfile"]["error"]) {
				case 1:
				case 2:
					throw new \Exception("Uploaded file is too big");
					break;
				case 3:
					throw new \Exception("File was only partially uploaded. Report this as a bug.");
					break;
				default:
					if (file_exists($_FILES["userfile"]["tmp_name"])) {
						$file = $_FILES['userfile']['tmp_name'];
						$filename = $_FILES['userfile']['name'];
					
						$tmpFile->replace($file);
						$tmpFile->setOriginalFilename(basename($filename));
					} else {
						throw new \Exception(sprintf("Unknown error occurred while uploading the file. Errno %d", $_FILES["userfile"]["error"]));
					}
			}
			
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
		