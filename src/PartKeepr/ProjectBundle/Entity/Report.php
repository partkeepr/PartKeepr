<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a project part.
 *
 * @ApiResource(
 *     attributes={
 *          "filters": {"@doctrine_reflection_service.search_filter"},
 *          "normalization_context"={"groups"={"default", "readonly"}},
 *          "denormalization_context"={"groups"={"default"}} 
 *     },
 *     collectionOperations={
 *       "get"={"method"="@resource.project_report.collection_operation.get"},
 *       "custom_post"={"method"="@resource.project_report.item_operation.custom_post"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "custom_get"={"method"="@resource.project_report.item_operation.custom_get"},
 *         "put"={"method"="@resource.project_report.item_operation.put"},
 *         "delete"={"method"="@resource.project_report.item_operation.delete"}
 *     }
 * )
 * @ORM\Entity
 * @TargetService("/api/reports")
 */
class Report extends BaseEntity
{
    /**
     * The report name.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"default"})
     *
     * @var \DateTime
     */
    private $createDateTime;

    /**
     * @ORM\OneToMany(
     *     targetEntity="PartKeepr\ProjectBundle\Entity\ReportProject",
     *     mappedBy="report",
     *     cascade={"persist", "remove"},
     *     orphanRemoval=true
     * )
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $reportProjects;

    /**
     * @ORM\OneToMany(
     *     targetEntity="PartKeepr\ProjectBundle\Entity\ReportPart",
     *     mappedBy="report",
     *     cascade={"persist", "remove"},
     *     orphanRemoval=true
     * )
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $reportParts;

    public function __construct()
    {
        $this->reportProjects = new ArrayCollection();
        $this->reportParts = new ArrayCollection();
        $this->setCreateDateTime(new \DateTime());
    }

    /**
     * @return \DateTime
     */
    public function getCreateDateTime()
    {
        return $this->createDateTime;
    }

    /**
     * @param \DateTime $createDateTime
     *
     * @return Report
     */
    public function setCreateDateTime($createDateTime)
    {
        $this->createDateTime = $createDateTime;

        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return Report
     */
    public function setName($name)
    {
        if ($name != null) {
            $this->name = $name;
        } else {
            $this->name = 'NewReport'; //@todo i18n
        }

        return $this;
    }

    /**
     * @return ArrayCollection|ReportProject[]
     */
    public function getReportProjects()
    {
        return $this->reportProjects;
    }

    /**
     * Adds a Report Project.
     *
     * @param ReportProject $reportProject A report project to add
     *
     * @return Report
     */
    public function addReportProject($reportProject)
    {
        $reportProject->setReport($this);
        $this->reportProjects->add($reportProject);

        return $this;
    }

    /**
     * Removes a Report Project.
     *
     * @param ReportProject $reportProject A report project to add
     *
     * @return Report
     */
    public function removeReportProject($reportProject)
    {
        $reportProject->setReport(null);
        $this->reportProjects->removeElement($reportProject);

        return $this;
    }

    /**
     * Removes a Report Part.
     *
     * @param ReportPart $reportPart A report project to add
     *
     * @return Report
     */
    public function removeReportPart($reportPart)
    {
        $reportPart->setReport(null);
        $this->reportProjects->removeElement($reportPart);

        return $this;
    }

    public function addPartQuantity(Part $part, ProjectPart $projectPart, $quantity)
    {
        $reportPart = $this->getReportPartByPart($part);

        if ($reportPart === null) {
            $reportPart = new ReportPart();
            $reportPart->setPart($part);
            $reportPart->setReport($this);

            $this->addReportPart($reportPart);
        }

        $reportPart->setQuantity($reportPart->getQuantity() + $quantity);

        $reportPart->getProjectParts()->add($projectPart);
    }

    public function getReportPartByPart(Part $part)
    {
        foreach ($this->getReportParts() as $reportPart) {
            if ($reportPart->getPart() === $part) {
                return $reportPart;
            }
        }

        return null;
    }

    /**
     * @return ArrayCollection|ReportPart[]
     */
    public function getReportParts()
    {
        return $this->reportParts;
    }

    /**
     * Adds a Report Part.
     *
     * @param ReportPart $reportPart report project to add
     *
     * @return Report
     */
    public function addReportPart($reportPart)
    {
        $reportPart->setReport($this);
        $this->reportParts->add($reportPart);

        return $this;
    }
}
