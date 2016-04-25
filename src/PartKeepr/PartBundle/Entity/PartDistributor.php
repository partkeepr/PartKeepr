<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DistributorBundle\Entity\Distributor;
use PartKeepr\PartBundle\Exceptions\PackagingUnitOutOfRangeException;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * This class represents the link between a part and a distributor.
 *
 * @ORM\Entity
 */
class PartDistributor extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="distributors")
     *
     * @var Part
     */
    private $part;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\DistributorBundle\Entity\Distributor")
     * @Groups({"default"})
     */
    private $distributor;

    /**
     * The order number for the part and distributor.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $orderNumber;

    /**
     * Defines the packaging unit when ordering a part. Some items can't be ordered in a quantity of just one at
     * certain manufacturers.
     *
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $packagingUnit;

    /**
     * Specifies the price of the part. Note that the price
     * needs to be per item, not per packaging unit.
     *
     * @ORM\Column(type="decimal",precision=13,scale=4,nullable=true)
     * @Groups({"default"})
     *
     * @var float
     */
    private $price;

    /**
     * The distributor's SKU (stock keeping unit) for the part.  Used with barcodes.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $sku;

    /**
     * Cretes a new part->distributor link. Initializes the packaging unit with a quantity of "1".
     */
    public function __construct()
    {
        $this->setPackagingUnit(1);
    }

    /**
     * Sets the packaging unit for a specific distributor.
     *
     * For example, some distributors only sell resistors in packs of 100, so you can't order just one. We use the
     * packagingUnit to calculate how many pieces will be delivered once ordered. So if your stock level falls below
     * the minimum (example: you would need to order 10 resistors), we suggest that you only order one resistor pack
     * instead of 10.
     *
     * @param int $packagingUnit The amount of items in one package
     *
     * @throws PackagingUnitOutOfRangeException When the packaging unit is less than 1
     */
    public function setPackagingUnit($packagingUnit)
    {
        $packagingUnit = intval($packagingUnit);

        if ($packagingUnit < 1) {
            throw new PackagingUnitOutOfRangeException();
        }

        $this->packagingUnit = $packagingUnit;
    }

    /**
     * Returns the packaging unit.
     *
     * @return int The packaging unit
     */
    public function getPackagingUnit()
    {
        return $this->packagingUnit;
    }

    /**
     * Sets the part.
     *
     * @param Part $part The part
     */
    public function setPart(Part $part = null)
    {
        $this->part = $part;
    }

    /**
     * Returns the part.
     *
     * @return Part The part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Sets the distributor.
     *
     * @param \PartKeepr\DistributorBundle\Entity\Distributor $distributor The distributor
     */
    public function setDistributor(Distributor $distributor)
    {
        $this->distributor = $distributor;
    }

    /**
     * Returns the distributor.
     *
     * @return Distributor The distributor
     */
    public function getDistributor()
    {
        return $this->distributor;
    }

    /**
     * Sets the order number.
     *
     * @param string $orderNumber The order number
     */
    public function setOrderNumber($orderNumber)
    {
        $this->orderNumber = $orderNumber;
    }

    /**
     * Returns the order number.
     *
     * @return string The order number
     */
    public function getOrderNumber()
    {
        return $this->orderNumber;
    }

    /**
     * Sets the price.
     *
     * @param float $price
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    /**
     * Returns the price.
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Sets the SKU (stock keeping unit).
     *
     * @param string $sku The SKU
     */
    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    /**
     * Returns the SKU (stock keeping unit).
     *
     * @return string The SKU
     */
    public function getSku()
    {
        return $this->sku;
    }
}
