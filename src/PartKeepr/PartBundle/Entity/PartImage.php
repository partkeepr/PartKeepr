<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\ImageBundle\Entity\Image;

/**
 * Holds a part image.
 *
 * @ORM\Entity
 **/
class PartImage extends Image
{
    /**
     * The part object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="images")
     *
     * @var Part
     */
    private $part = null;

    /**
     * Creates a new part image instance.
     */
    public function __construct()
    {
        parent::__construct(Image::IMAGE_PART);
    }

    /**
     * Sets the part.
     *
     * @param Part $part The part to set
     */
    public function setPart(Part $part)
    {
        $this->part = $part;
    }

    /**
     * Returns the part.
     *
     * @return Part the part
     */
    public function getPart()
    {
        return $this->part;
    }
}
