<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\ByReference;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Represents a project part.
 *
 * @ORM\Entity
 * @TargetService("/api/project_parts")
 */
class ProjectPart extends BaseEntity
{
    const OVERAGE_TYPE_ABSOLUTE = "absolute";

    const OVERAGE_TYPE_PERCENT = "percent";

    const OVERAGE_TYPES = [self::OVERAGE_TYPE_ABSOLUTE, self::OVERAGE_TYPE_PERCENT];

    /**
     * The part this project part refers to.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="projectParts")
     * @Groups({"default"})
     * @Assert\NotNull()
     *
     * @ByReference()
     *
     * @var Part
     */
    private $part;

    /**
     * Specifies the amount of parts.
     *
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $quantity;

    /**
     * Specifies the project which belongs to this project part.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\ProjectBundle\Entity\Project", inversedBy="parts")
     * @Assert\NotNull()
     *
     * @var Project
     */
    private $project;

    /**
     * Specifies the remarks for this entry.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $remarks;

    /**
     * The overage type.
     *
     * @ORM\Column(type="string",options={ "default":""})
     * @Groups({"default"})
     *
     * @var string
     */
    private $overageType;

    /**
     * Specifies the overage, which can either be percent or an absolute value depending on overageType.
     *
     * @ORM\Column(type="integer",options={ "default":0})
     * @Groups({"default"})
     *
     * @var int
     */
    private $overage;

    /**
     * Specifies the lot number.
     *
     * @ORM\Column(type="text",options={ "default":""})
     * @Groups({"default"})
     *
     * @var string
     */
    private $lotNumber;

    /**
     * The total quantity including overage.
     *
     * @Groups({"default"})
     *
     * @var int
     */
    private $totalQuantity;

    /**
     * Retrieves the total quantity for a project part, including overage.
     *
     * @return int
     */
    public function getTotalQuantity()
    {
        switch ($this->getOverageType()) {
            case self::OVERAGE_TYPE_PERCENT:
                return (int) $this->getQuantity() * (1 + $this->getOverage() / 100);
            case self::OVERAGE_TYPE_ABSOLUTE:
                return $this->getQuantity() + $this->getOverage();
            default:
                return $this->getQuantity();
        }
    }

    public function __construct()
    {
        $this->setOverageType(self::OVERAGE_TYPE_ABSOLUTE);
        $this->setOverage(0);
        $this->setLotNumber("");
    }

    /**
     * @return string
     */
    public function getLotNumber()
    {
        return $this->lotNumber;
    }

    /**
     * @param string $lotNumber
     */
    public function setLotNumber($lotNumber)
    {
        $this->lotNumber = $lotNumber;
    }

    /**
     * @return string
     */
    public function getOverageType()
    {
        if (!in_array($this->overageType, self::OVERAGE_TYPES)) {
            return self::OVERAGE_TYPE_ABSOLUTE;
        }

        return $this->overageType;
    }

    /**
     * @param string $overageType
     */
    public function setOverageType($overageType)
    {
        if (!in_array($overageType, self::OVERAGE_TYPES)) {
            $overageType = self::OVERAGE_TYPE_ABSOLUTE;
        }

        $this->overageType = $overageType;
    }

    /**
     * @return int
     */
    public function getOverage()
    {
        return $this->overage;
    }

    /**
     * @param int $overage
     */
    public function setOverage($overage)
    {
        $this->overage = $overage;
    }

    /**
     * Returns the part which belongs to this entry.
     *
     * @return Part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Sets the part which belongs to this entry.
     *
     * @param Part $part
     */
    public function setPart(Part $part)
    {
        $this->part = $part;
    }

    /**
     * Returns the quantity for this project.
     *
     * @return int the amount of parts needed
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Sets the quantity for this entry.
     *
     * @param int $quantity
     */
    public function setQuantity($quantity)
    {
        $this->quantity = intval($quantity);
    }

    /**
     * Returns the project assigned to this entry.
     *
     * @return Project
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * Sets the project assigned to this entry.
     *
     * @param Project $project
     */
    public function setProject(Project $project = null)
    {
        $this->project = $project;
    }

    /**
     * Returns the remarks for this entry.
     *
     * @return string
     */
    public function getRemarks()
    {
        return $this->remarks;
    }

    /**
     * Sets the remarks for this entry.
     *
     * @param string $remarks
     */
    public function setRemarks($remarks)
    {
        $this->remarks = $remarks;
    }

    public function __toString()
    {
        //@todo i18n
        return sprintf("Used in project %s", $this->getProject()->getName())." / ".parent::__toString();
    }
}
