<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a project.
 *
 * @ORM\Entity
 * @TargetService("/api/project_runs")
 */
class ProjectRun extends BaseEntity
{
    /**
     * Stores the date and time of a project run.
     *
     * @ORM\Column(type="datetime")
     * @Groups({"default"})
     *
     * @var \DateTime
     */
    private $runDateTime;

    /**
     * Stores the project used in a production run.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\ProjectBundle\Entity\Project")
     * @Groups({"default"})
     *
     * @var Project
     */
    private $project;

    /**
     * Stores the quantity this project has been build.
     *
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $quantity;

    /**
     * Stores the parts.
     *
     * @ORM\OneToMany(
     *     targetEntity="PartKeepr\ProjectBundle\Entity\ProjectRunPart",
     *     mappedBy="projectRun",
     *     cascade={"persist", "remove"},
     *     orphanRemoval=true)
     *
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $parts;

    public function __construct()
    {
        $this->parts = new ArrayCollection();
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
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;
    }

    /**
     * @return \DateTime
     */
    public function getRunDateTime()
    {
        return $this->runDateTime;
    }

    /**
     * @param \DateTime $runDateTime
     */
    public function setRunDateTime($runDateTime)
    {
        $this->runDateTime = $runDateTime;
    }

    /**
     * @return Project
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * @param Project $project
     */
    public function setProject($project)
    {
        $this->project = $project;
    }

    /**
     * @return ArrayCollection
     */
    public function getParts()
    {
        return $this->parts->getValues();
    }

    /**
     * Adds a project run part.
     *
     * @param ProjectRunPart
     */
    public function addPart($part)
    {
        if ($part instanceof ProjectRunPart) {
            $part->setProjectRun($this);
        }
        $this->parts->add($part);
    }

    /**
     * Removes a project run part.
     *
     * @param ProjectRunPart
     */
    public function removePart($part)
    {
        if ($part instanceof ProjectRunPart) {
            $part->setProjectRun(null);
        }
        $this->parts->removeElement($part);
    }
}
