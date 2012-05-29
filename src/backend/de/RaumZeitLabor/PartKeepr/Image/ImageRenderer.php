<?php
namespace de\RaumZeitLabor\PartKeepr\Image;

use de\RaumZeitLabor\PartKeepr\Util\Configuration;

class ImageRenderer {
	private $image = null;
	
	public function __construct (RenderableImage $image) {
		$this->image = $image;
	}
	
	/**
	 * Renders and outputs the "image not found" image.
	 * 
	 * Sends the header and immediately outputs the image.
	 * 
	 * @param int $w Width of the image
	 * @param int $h Height of the image
	 */
	public static function outputRenderNotFoundImage ($w, $h) {
		$image = imagecreate($w, $h);
		$white = imagecolorallocate($image, 255,255,255);
		$black = imagecolorallocate($image, 0,0,0);
		
		header("Content-Type: image/png");
		
		$w = $_REQUEST["w"]-1;
		$h = $_REQUEST["h"]-1;
		imagefill($image, 0,0, $white);
		
		/* Draw the X */
		imageline($image, 0,0,$w,$h, $black);
		imageline($image, $w,0,0,$h, $black);
		imagepng($image);
	}
	
	/**
	 * Scales the image to fit within the given size.
	 *
	 * @param string $outputFile The target file
	 * @param int $w The width
	 * @param int $h The height
	 * @param boolean $padding If true, pad the output image to the given size (transparent background).
	 * @return string The path to the scaled file
	 */
	public function fitWithin ($outputFile, $w, $h, $padding = false) {
		$image = new \Imagick();
		$image->readImage($this->image->getFilename());
	
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
	
		return $outputFile;
	}
	
	/**
	 * Scales the image to fit exactly within the given size.
	 *
	 * This method ensures that no blank space is in the output image,
	 * and that the output image is exactly the width and height specified.
	 *
	 * @param string $outputFile The output file
	 * @param int $w The width
	 * @param int $h The height
	 * @return string The path to the scaled file
	 */
	public function fitWithinExact ($outputFile, $w, $h) {
		$image = new \Imagick();
		$image->readImage($this->image->getFilename());
	
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
	
		return $outputFile;
	}
	
	/**
	 * Scales the image to a specific width and height
	 *
	 * @param string $outputFile The output file
	 * @param int $w The width
	 * @param int $h The height
	 * @return string The path to the scaled file
	 */
	public function scaleTo ($outputFile, $w, $h) {
		$image = new \Imagick();
		$image->readImage($this->image->getFilename());
		$image->adaptiveResizeImage($w, $h);
		$image->writeImage($outputFile);
	
		return $outputFile;
	}
}