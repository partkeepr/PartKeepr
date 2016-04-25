<?php

namespace PartKeepr\ImageBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\Image\Exceptions\InvalidImageTypeException;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

/**
 * This is only a storage class; actual image rendering is done by the ImageRenderer.
 *
 * @ORM\MappedSuperclass
 */
abstract class Image extends UploadedFile
{
    const IMAGE_ICLOGO = 'iclogo';
    const IMAGE_TEMP = 'temp';
    const IMAGE_PART = 'part';
    const IMAGE_STORAGELOCATION = 'storagelocation';
    const IMAGE_FOOTPRINT = 'footprint';

    /**
     * Constructs a new image object.
     *
     * @param string $type The type for the image, one of the IMAGE_ constants.
     */
    public function __construct($type = null)
    {
        $this->setType($type);
        parent::__construct();
    }

    /**
     * Sets the type of the image. Once the type is set,
     * it may not be changed later.
     *
     * @param string $type The type for the image, one of the IMAGE_ constants.
     *
     * @throws InvalidImageTypeException
     */
    protected function setType($type)
    {
        switch ($type) {
            case self::IMAGE_ICLOGO:
            case self::IMAGE_TEMP:
            case self::IMAGE_PART:
            case self::IMAGE_FOOTPRINT:
            case self::IMAGE_STORAGELOCATION:
                parent::setType($type);
                break;
            default:
                throw new InvalidImageTypeException($type);
        }
    }
}
