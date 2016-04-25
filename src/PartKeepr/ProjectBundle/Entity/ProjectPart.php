<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a project part.
 *
 * @ORM\Entity
 * @TargetService("/api/project_parts")
 */
class ProjectPart extends BaseEntity
{
    /**
     * The part this project part refers to.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="projectParts")
     * @Groups({"default"})
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
     * Sets the part which belongs to this entry.
     *
     * @param Part $part
     */
    public function setPart(Part $part)
    {
        $this->part = $part;
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
     * Sets the quantity for this entry.
     *
     * @param int $quantity
     */
    public function setQuantity($quantity)
    {
        $this->quantity = intval($quantity);
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
     * Sets the project assigned to this entry.
     *
     * @param Project $project
     */
    public function setProject(Project $project = null)
    {
        $this->project = $project;
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
     * Sets the remarks for this entry.
     *
     * @param string $remarks
     */
    public function setRemarks($remarks)
    {
        $this->remarks = $remarks;
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
}
