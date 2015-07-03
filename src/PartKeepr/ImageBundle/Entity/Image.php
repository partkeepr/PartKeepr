<?php
namespace PartKeepr\ImageBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\Image\CachedImage;
use PartKeepr\Image\Exceptions\InvalidImageTypeException;
use PartKeepr\Image\ImageRenderer;
use PartKeepr\Image\RenderableImage;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\UploadedFile\UploadedFile;

/**
 * This is only a storage class; actual image rendering is done by the ImageRenderer.
 * 
 * @ORM\MappedSuperclass
 */
abstract class Image extends UploadedFile {
	const IMAGE_ICLOGO = "iclogo";
	const IMAGE_TEMP = "temp";
	const IMAGE_PART = "part";
	const IMAGE_STORAGELOCATION = "storagelocation";
	const IMAGE_FOOTPRINT = "footprint";

	/**
	 * Constructs a new image object.
	 * 
	 * @param string $type	The type for the image, one of the IMAGE_ constants.
	 */
	public function __construct ($type = NULL) {
		parent::__construct();
		$this->setType($type);
	}

	/**
	 * Sets the type of the image. Once the type is set,
	 * it may not be changed later.
	 *
	 * @param string $type	The type for the image, one of the IMAGE_ constants.
	 * @throws InvalidImageTypeException
	 */
	protected function setType ($type) {
		switch ($type) {
			case Image::IMAGE_ICLOGO:
			case Image::IMAGE_TEMP:
			case Image::IMAGE_PART:
			case Image::IMAGE_FOOTPRINT:
			case Image::IMAGE_STORAGELOCATION:
				parent::setType($type);
				break;
			default:
				throw new InvalidImageTypeException($type);
		}
	}

	/**
	 * Replaces the current image with a new image.
	 * 
	 * Automatically converts from one format to PNG,
	 * which is the default when dealing with images
	 * on the platform.
	 * 
	 * @param string $path	The path to the original image
	 */
	public function replace ($path) {
		parent::replace($path);
		
		CachedImage::invalidate($this);
	}
	
	/**
	 * Replaces the file with a given temporary file.
	 * @param string $id The temporary id (prefixed with TMP:)
	 */
	public function replaceFromTemporaryFile ($id) {
		if (substr($id, 0, 4) === "TMP:") {
			$tmpFileId = str_replace("TMP:", "", $id);
			$tmpFile = TempImage::loadById($tmpFileId);
			
			$this->replace($tmpFile->getFilename());
			$this->setOriginalFilename($tmpFile->getOriginalFilename());
			
		}
	}
	
}