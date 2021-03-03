<?php

namespace PartKeepr\FootprintBundle\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\ImageBundle\Entity\Image;

/**
 * Holds a footprint image.
 *
 * @ApiResource(
 *      itemOperations={"get"})
 * @ApiFilter(SearchFilter::class)
 * @ORM\Entity
 **/
class FootprintImage extends Image
{
    /**
     * The footprint object.
     *
     * @ORM\OneToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint",inversedBy="image")
     *
     * @var Footprint
     */
    private $footprint = null;

    /**
     * Creates a new IC logo instance.
     */
    public function __construct()
    {
        parent::__construct(Image::IMAGE_FOOTPRINT);
    }

    /**
     * Sets the footprint.
     *
     * @param Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint)
    {
        $this->footprint = $footprint;
    }

    /**
     * Returns the footprint.
     *
     * @return Footprint the footprint
     */
    public function getFootprint()
    {
        return $this->footprint;
    }
}
