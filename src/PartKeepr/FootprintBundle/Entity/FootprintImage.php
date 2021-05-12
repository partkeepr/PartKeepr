<?php

namespace PartKeepr\FootprintBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\ImageBundle\Entity\Image;

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprFootprintBundle:FootprintImage:getImage"         # Controller
/**
 * @Route(
 *     name="FootprintImageGetImage",
 *     path="/footprint_images/{id}/getImage",
 *     defaults={"_api_resource_class"=FootprintImage::class, "_api_item_operation_name"="custom_get"}
 * )
 * @Method("GET")
 */

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
 *         "get"={"method"="GET"},
 *         "custom_get"={"route_name"="FootprintImageGetImage","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
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
