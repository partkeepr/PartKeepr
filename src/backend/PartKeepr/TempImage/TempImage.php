<?php
namespace PartKeepr\TempImage;

use PartKeepr\Image\Exceptions\InvalidImageTypeException,
	PartKeepr\Util\Configuration,
	PartKeepr\Image\Image,
	PartKeepr\PartKeepr;

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