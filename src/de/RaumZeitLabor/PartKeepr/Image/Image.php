<?php
namespace de\RaumZeitLabor\PartKeepr\Image;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\UploadedFile\UploadedFile,
	de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Image\Exceptions\InvalidImageTypeException;

/**
 * @MappedSuperclass
 */
abstract class Image extends UploadedFile {
	const IMAGE_ICLOGO = "iclogo";
	const IMAGE_TEMP = "temp";
	const IMAGE_PART = "part";
	const IMAGE_FOOTPRINT = "footprint";
	
	/**
	 * Constructs a new image object.
	 * 
	 * @param string $type	The type for the image, one of the IMAGE_ constants.
	 */
	public function __construct ($type) {
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
	 * Returns the full image filename including path.
	 * This is the image where all scale operations take place on.
	 * 
	 * @param none
	 * @return string The full image filename including path.
	 */
	public function getFilename () {
		return $this->getFilePath().$this->getPlainFilename().".png";
	}
	
	/**
	 * Returns the path to the image. May be overridden by
	 * subclasses.
	 * 
	 * @param none
	 * @return string The path to the image
	 */
	public function getFilePath () {
		return Configuration::getOption("partkeepr.images.path").$this->getType()."/";
	}
	
	/**
	 * Scales the image to a specific width and height
	 *
	 * @param int $w The width
	 * @param int $h The height
	 * @return string The path to the scaled file
	 */	
	public function scaleTo ($w, $h) {
		$this->ensureCachedirExists();
		
		$outputFile = Configuration::getOption("partkeepr.images.cache").md5($this->getFilename().$w."x".$h).".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getFilename());
		$image->adaptiveResizeImage($w, $h);
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartKeepr::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	/**
	 * Scales the image to fit exactly within the given size.
	 * 
	 * This method ensures that no blank space is in the output image,
	 * and that the output image is exactly the width and height specified.
	 *
	 * @param int $w The width
	 * @param int $h The height
	 * @return string The path to the scaled file
	*/
	public function fitWithinExact ($w, $h) {
		$this->ensureCachedirExists();
		
		$outputFile = Configuration::getOption("partkeepr.images.cache").md5($this->getFilename().$w."x".$h."fwe").".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getFilename());
		
		$sourceAspectRatio = $image->getImageWidth() / $image->getImageHeight();
		$targetAspectRatio = $w / $h;
		
		$filter = \Imagick::FILTER_UNDEFINED;
		$blur = 1;
		
		if ($sourceAspectRatio < $targetAspectRatio) {
			$image->resizeImage($w, $w / $sourceAspectRatio, $filter, $blur);	
		} else {
			$image->resizeImage($h * $sourceAspectRatio, $h, $filter, $blur);
		}
		
		$offsetX = intval(($image->getImageWidth() - $w)/2);
		$offsetY = intval(($image->getImageHeight() - $h)/2);
		
		$image = $image->getImageRegion($w, $h, $offsetX, $offsetY);
		
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartKeepr::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	/**
	 * Scales the image to fit within the given size. 
	 *
	 * @param int $w The width
	 * @param int $h The height
	 * @param boolean $padding If true, pad the output image to the given size (transparent background).
	 * @return string The path to the scaled file
	 */
	public function fitWithin ($w, $h, $padding = false) {
		$this->ensureCachedirExists();
		
		if ($padding) {
			$pd = "p";
		} else {
			$pd = "";
		}
		
		$outputFile = Configuration::getOption("partkeepr.images.cache").md5($this->getFilename().$w."x".$h."fw".$pd).".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getFilename());
		
		$sourceAspectRatio = $image->getImageWidth() / $image->getImageHeight();
		$targetAspectRatio = $w / $h;
		
		$filter = \Imagick::FILTER_UNDEFINED;
		$blur = 1;
		
		$targetHeight = $h;
		$targetWidth = $w;
		
		if ($sourceAspectRatio < $targetAspectRatio) {
			$targetWidth = $h * $sourceAspectRatio;
			$image->resizeImage($h * $sourceAspectRatio, $h, $filter, $blur);	
		} else {
			$targetHeight = $w / $sourceAspectRatio;
			$image->resizeImage($w, $w / $sourceAspectRatio, $filter, $blur);
		}
		
		if ($padding) {
			$posX = intval(($w - $targetWidth) / 2);
			$posY = intval(($h - $targetHeight) / 2);
			
			$image->extentImage($w, $h,-$posX, -$posY);
		}
		
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartKeepr::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	/**
	 * Convinience method for fitWithin. Automatically pads the image. 
	 *
	 * @param int $w The width
	 * @param int $h The height
	 * @return string The path to the scaled file
	 */
	public function fitWithinPadding ($w, $h) {
		return $this->fitWithin($w, $h, true);
	}
	
	/**
	 * Ensures that the image cache dir exists.
	 */
	public function ensureCachedirExists () {
		if (!is_dir(Configuration::getOption("partkeepr.images.cache"))) {
			mkdir(Configuration::getOption("partkeepr.images.cache"), 0777, true);	
		}
	}
	
}