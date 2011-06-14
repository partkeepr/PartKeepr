<?php
namespace de\RaumZeitLabor\PartKeepr\Image;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Image\Exceptions\InvalidImageTypeException,
	de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Image\Image,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * @Entity 
 */
class TempImage extends Image {
	public function __construct () {
		parent::__construct(Image::IMAGE_TEMP);
	}
}