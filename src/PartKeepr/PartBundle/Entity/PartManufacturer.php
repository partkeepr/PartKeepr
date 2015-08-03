<?php
namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\ManufacturerBundle\Entity\Manufacturer;
use PartKeepr\Part\unknown_type;
use PartKeepr\Util\BaseEntity;

/** @ORM\Entity */
class PartManufacturer extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part",inversedBy="manufacturers")
     */
    private $part;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\ManufacturerBundle\Entity\Manufacturer")
     */
    private $manufacturer;

    /**
     * @ORM\Column(type="string",nullable=true)
     * Enter description here ...
     *
     * @var unknown_type
     */
    private $partNumber;

    /**
     * Sets the part which belongs to this manufacturer entry
     *
     * @param Part $part
     */
    public function setPart(Part $part)
    {
        $this->part = $part;
    }

    /**
     * Returns the part which belongs to this manufacturer entry
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Sets the manufacturer which belongs to this entry
     *
     * @param Manufacturer $manufacturer
     */
    public function setManufacturer(Manufacturer $manufacturer)
    {
        $this->manufacturer = $manufacturer;
    }

    /**
     * Returns the manufacturer which belongs to this part
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }

    /**
     * Sets the manufacturer-specific part number
     *
     * @param string $partNumber
     */
    public function setPartNumber($partNumber)
    {
        $this->partNumber = $partNumber;
    }

    /**
     * Returns the manufacturer-specific part number
     *
     * @return string The part number
     */
    public function getPartNumber()
    {
        return $this->partNumber;
    }
}
