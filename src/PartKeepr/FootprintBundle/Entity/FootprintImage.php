<?php

namespace PartKeepr\FootprintBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\ImageBundle\Entity\Image;

/**
 * Holds a footprint image.
 *
 * @ApiResource(
 *     attributes={
 *          "filters": {"@doctrine_reflection_service.search_filter"},
 *          "normalization_context"={"groups"={"default"}},
 *          "denormalization_context"={"groups"={"default"}} 
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="@resource.footprint_image.item_operation.get"},
 *         "custom_get"={"method"="@resource.footprint_image.item_operation.custom_get"}
 *     }
 * )
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
