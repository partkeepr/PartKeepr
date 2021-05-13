<?php

namespace PartKeepr\ProjectBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprProjectBundle:ProjectAttachment:getImage"         # Controller
/**
* @Route(
*     name="ProjectAttachmentGetImage",
*     path="/project_attachments/{id}/getImage",
*     defaults={"_api_resource_class"=ProjectAttachment::class, "_api_item_operation_name"="custom_get_image"}
* )
* @Method("GET")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprProjectBundle:ProjectAttachment:getFile"         # Controller
/**
* @Route(
*     name="ProjectAttachmentGet",
*     path="/project_attachments/{id}/getFile",
*     defaults={"_api_resource_class"=ProjectAttachment::class, "_api_item_operation_name"="custom_get"}
* )
* @Method("GET")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprProjectBundle:ProjectAttachment:getMimeTypeIcon"         # Controller
/**
* @Route(
*     name="ProjectAttachmentMimeTypeIcon",
*     path="/project_attachments/{id}/getMimeTypeIcon",
*     defaults={"_api_resource_class"=ProjectAttachment::class, "_api_item_operation_name"="custom_get_mime"}
* )
* @Method("GET")
**/

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
 *         "get"={"method"="GET"},
 *         "custom_get"={"route_name"="ProjectAttachmentGet","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_mime"={"route_name"="ProjectAttachmentMimeTypeIcon","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_image"={"route_name"="ProjectAttachmentGetImage","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
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
