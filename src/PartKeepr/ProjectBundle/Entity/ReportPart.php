<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DistributorBundle\Entity\Distributor;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\DoctrineReflectionBundle\Annotation\VirtualOneToMany;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a project part.
 *
 * @ORM\Entity
 * @TargetService("/api/project_report_parts")
 */
class ReportPart extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\ProjectBundle\Entity\Report",inversedBy="reportParts")
     * @Groups({"default"})
     *
     * @var Report
     */
    private $report;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part")
     * @Groups({"default"})
     *
     * @var Part
     */
    private $part;

    /**
     * @ORM\Column(type="integer",nullable=false)
     * @Groups({"default"})
     *
     * @var int
     */
    private $quantity;

    private $remarks;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\DistributorBundle\Entity\Distributor")
     * @Groups({"default"})
     *
     * @var Distributor
     */
    private $distributor;

    /**
     * @Groups({"default"})
     *
     * @var string
     */
    private $distributorOrderNumber;

    /**
     * @Groups({"default"})
     *
     * @var string
     */
    private $itemPrice;

    /**
     * @Groups({"default"})
     *
     * @var string
     */
    private $orderSum;

    /**
     * @Groups({"default"})
     *
     * @var bool
     */
    private $metaPart;

    /**
     * @VirtualOneToMany(target="PartKeepr\PartBundle\Entity\Part")
     * @Groups({"default"})
     *
     * @var Part[]
     */
    private $subParts;

    /**
     * @VirtualOneToMany(target="PartKeepr\ProjectBundle\Entity\ProjectPart")
     * @Groups({"default"})
     *
     * @var ProjectPart[]
     */
    private $projectParts;
    /**
     * @Groups({"default"})
     *
     * @var string
     */
    private $itemSum;

    /**
     * @Groups({"default"})
     *
     * @var int
     */
    private $missing;

    public function __construct()
    {
        $this->projectParts = new ArrayCollection();
    }

    /**
     * @return ArrayCollection|ProjectPart[]
     */
    public function getProjectParts()
    {
        if (!$this->projectParts instanceof ArrayCollection) {
            $this->projectParts = new ArrayCollection();
        }

        return $this->projectParts;
    }

    /**
     * @return Part[]
     */
    public function getSubParts()
    {
        return $this->subParts;
    }

    /**
     * @param Part[] $subParts
     */
    public function setSubParts($subParts)
    {
        $this->subParts = $subParts;
    }

    /**
     * @return bool
     */
    public function isMetaPart()
    {
        return $this->metaPart;
    }

    /**
     * @param bool $metaPart
     */
    public function setMetaPart($metaPart)
    {
        $this->metaPart = $metaPart;
    }

    /**
     * @return string
     */
    public function getDistributorOrderNumber()
    {
        return $this->distributorOrderNumber;
    }

    /**
     * @param string $distributorOrderNumber
     *
     * @return ReportPart
     */
    public function setDistributorOrderNumber($distributorOrderNumber)
    {
        $this->distributorOrderNumber = $distributorOrderNumber;

        return $this;
    }

    /**
     * @return string
     */
    public function getItemPrice()
    {
        return $this->itemPrice;
    }

    /**
     * @param string $itemPrice
     *
     * @return ReportPart
     */
    public function setItemPrice($itemPrice)
    {
        $this->itemPrice = $itemPrice;

        return $this;
    }

    /**
     * @return string
     */
    public function getOrderSum()
    {
        return $this->orderSum;
    }

    /**
     * @param string $orderSum
     *
     * @return ReportPart
     */
    public function setOrderSum($orderSum)
    {
        $this->orderSum = $orderSum;

        return $this;
    }

    /**
     * @return string
     */
    public function getItemSum()
    {
        return $this->itemSum;
    }

    /**
     * @param string $itemSum
     *
     * @return ReportPart
     */
    public function setItemSum($itemSum)
    {
        $this->itemSum = $itemSum;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDistributor()
    {
        return $this->distributor;
    }

    /**
     * @param mixed $distributor
     *
     * @return ReportPart
     */
    public function setDistributor($distributor)
    {
        $this->distributor = $distributor;

        return $this;
    }

    /**
     * @return int
     */
    public function getMissing()
    {
        return $this->missing;
    }

    /**
     * @param int $missing
     *
     * @return ReportPart
     */
    public function setMissing($missing)
    {
        $this->missing = $missing;

        return $this;
    }

    /**
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * @param int $quantity
     *
     * @return ReportPart
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * @return Report
     */
    public function getReport()
    {
        return $this->report;
    }

    /**
     * @param Report $report
     *
     * @return ReportPart
     */
    public function setReport($report)
    {
        $this->report = $report;

        return $this;
    }

    /**
     * @return Part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * @param mixed $part
     *
     * @return ReportPart
     */
    public function setPart($part)
    {
        $this->part = $part;

        return $this;
    }

    // remark getter
    public function getRemarks()
    {
        return $this->remarks;
    }

    //remark setter
    public function setRemarks($remarks)
    {
        $this->remarks = $remarks;

        return $this;
    }

    public function __toString()
    {
        // @todo i18n
        return sprintf("Used in project report %s %s", $this->getReport()->getName(),
                $this->getReport()->getCreateDateTime()->format("Y-m-d H:i:s"))." / ".parent::__toString();
    }
}
