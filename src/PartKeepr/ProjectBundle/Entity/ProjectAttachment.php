<?php

namespace PartKeepr\ProjectBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

/**
 * Holds a project attachment.
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
 *         "get"={"method"="@resource.project_attachment.item_operation.get"},
 *         "custom_get"={"method"="@resource.project_attachment.item_operation.custom_get"},
 *         "custom_get_mime"={"method"="@resource.project_attachment.item_operation.custom_get_mime"},
 *         "custom_get_image"={"method"="@resource.project_attachment.item_operation.custom_get_image"}
 *     }
 * )
 * @ORM\Entity
 * @TargetService("/api/project_attachments")
 **/
class ProjectAttachment extends UploadedFile
{
    /**
     * Creates a new project attachment.
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType('ProjectAttachment');
    }

    /**
     * The project object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\ProjectBundle\Entity\Project", inversedBy="attachments")
     *
     * @var Project
     */
    private $project = null;

    /**
     * Sets the project.
     *
     * @param Project $project The project to set
     */
    public function setProject(Project $project = null)
    {
        $this->project = $project;
    }

    /**
     * Returns the roject.
     *
     * @return Project the project
     */
    public function getProject()
    {
        return $this->project;
    }
}
