<?php

namespace PartKeepr\ManufacturerBundle\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\ImageBundle\Entity\Image;

/**
 * Holds a manufacturer IC logo.
 *
 * @ApiResource(
 *      itemOperations={"get"},
 *      itemOperations={"put"})
 * @ApiFilter(SearchFilter::class)
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
