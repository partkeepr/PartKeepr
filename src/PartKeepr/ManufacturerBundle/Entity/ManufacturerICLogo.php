<?php

namespace PartKeepr\ManufacturerBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\ImageBundle\Entity\Image;

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprManufacturerBundle:ManufacturerIcLogo:getImage"         # Controller
/**
* @Route(
*     name="ManufacturerIcLogoGetImage",
*     path="/manufacturer_i_c_logos/{id}/getImage",
*     defaults={"_api_resource_class"=ManufacturerICLogo::class, "_api_item_operation_name"="custom_get"}
* )
* @Method("GET")
**/

/**
 * Holds a manufacturer IC logo.
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
 *         "put"={"method"="PUT"},
 *         "custom_get"={"route_name"="ManufacturerIcLogoGetImage","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     }
 * )
 * @ORM\Entity
 **/
class ManufacturerICLogo extends Image
{
    /**
     * The manufacturer object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\ManufacturerBundle\Entity\Manufacturer", inversedBy="icLogos")
     * @ORM\JoinColumn(name="manufacturer_id",referencedColumnName="id")
     *
     * @var Manufacturer
     */
    private $manufacturer = null;

    /**
     * Creates a new IC logo instance.
     */
    public function __construct()
    {
        parent::__construct(Image::IMAGE_ICLOGO);
    }

    /**
     * Sets the manufacturer.
     *
     * @param Manufacturer $manufacturer The manufacturer to set
     */
    public function setManufacturer(Manufacturer $manufacturer = null)
    {
        $this->manufacturer = $manufacturer;
    }

    /**
     * Returns the manufacturer.
     *
     * @return Manufacturer the manufacturer
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }
}
