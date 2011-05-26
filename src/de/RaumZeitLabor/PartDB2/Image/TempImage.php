<?php
namespace de\RaumZeitLabor\PartDB2\Image;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Image\Exceptions\InvalidImageTypeException,
	de\RaumZeitLabor\PartDB2\Util\Configuration,
	de\RaumZeitLabor\PartDB2\Image\Image,
	de\RaumZeitLabor\PartDB2\PartDB2;

/**
 * @Entity 
 */
class TempImage extends Image {
	public function __construct () {
		parent::__construct(Image::IMAGE_TEMP);
	}
}