<?php
namespace PartKeepr\ImageBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\ImageBundle\Entity\Image;
use PartKeepr\UploadedFile\UploadedFile;

/**
 * Represents a temporary image. Temporary images are used when
 * a user uploaded an image, but not attached it to an entity.
 *
 * @ORM\Entity
 */
class TempImage extends Image {
	public function __construct () {
		parent::__construct(Image::IMAGE_TEMP);
	}
}