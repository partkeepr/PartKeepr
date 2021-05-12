<?php

namespace PartKeepr\FootprintBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;


// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprFootprintBundle:FootprintAttachment:getFile"         # Controller
 
/**
* @Route(
*     name="FootprintAttachmentGet",
*     path="/footprint_attachments/{id}/getFile",
*     defaults={"_api_resource_class"=FootprintImage::class, "_api_item_operation_name"="custom_get"}
* )
* @Method("GET")
*/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprFootprintBundle:FootprintAttachment:getMimeTypeIcon"         # Controller
    
/**
* @Route(
*     name="FootprintAttachmentMimeTypeIcon",
*     path="/footprint_attachments/{id}/getMimeTypeIcon",
*     defaults={"_api_resource_class"=FootprintImage::class, "_api_item_operation_name"="custom_get_mime"}
* )
* @Method("GET")
*/
    

/**
 * Holds a footprint attachment.
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
 *         "custom_get"={"route_name"="FootprintAttachmentGet","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_mime"={"route_name"="FootprintAttachmentMimeTypeIcon","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     }
 * )
 * @ORM\Entity
 **/
class FootprintAttachment extends UploadedFile
{
    /**
     * Creates a new footprint attachment.
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType('FootprintAttachment');
    }

    /**
     * The footprint object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint",inversedBy="attachments")
     *
     * @var Footprint
     */
    private $footprint = null;

    /**
     * Sets the footprint.
     *
     * @param Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint = null)
    {
        $this->footprint = $footprint;
    }

    /**
     * Returns the footprint.
     *
     * @return Footprint the footprint
     */
    public function getFootprint()
    {
        return $this->footprint;
    }
}
