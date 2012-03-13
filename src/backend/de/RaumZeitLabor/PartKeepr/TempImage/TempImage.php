<?php
namespace de\RaumZeitLabor\PartKeepr\TempImage;

use de\RaumZeitLabor\PartKeepr\Image\Exceptions\InvalidImageTypeException,
	de\RaumZeitLabor\PartKeepr\Util\Configuration,
	de\RaumZeitLabor\PartKeepr\Image\Image,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

/**
 * Represents a temporary image. Temporary images are used when
 * a user uploaded an image, but not attached it to an entity.
 *
 * @Entity
 */
class TempImage extends Image {
	public function __construct () {
		parent::__construct(Image::IMAGE_TEMP);
	}
}