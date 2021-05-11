<?php

namespace PartKeepr\ManufacturerBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\ImageBundle\Entity\Image;

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
 *         "get"={"method"="@resource.manufacturer_ic_logo.item_operation.get"},
 *         "put"={"method"="@resource.manufacturer_ic_logo.item_operation.put"},
 *         "custom_get"={"method"="@resource.manufacturer_ic_logo.item_operation.custom_get"}
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
