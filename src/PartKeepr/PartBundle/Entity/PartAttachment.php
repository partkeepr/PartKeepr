<?php

namespace PartKeepr\PartBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Holds a part attachment.
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
 *         "custom_get"={"route_name"="PartAttachmentGet","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_mime"={"route_name"="PartAttachmentMimeTypeIcon","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_image"={"route_name"="PartAttachmentGetImage","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     }
 * )
 * @ORM\Entity
 **/
class PartAttachment extends UploadedFile
{
    /**
     * Defines if the attachment is an image.
     *
     * @ORM\Column(type="boolean",nullable=true)
     * @Groups({"default"})
     *
     * @var bool
     */
    private $isImage;

    /**
     * Creates a new part attachment.
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType('PartAttachment');
        $this->isImage = null;
    }

    /**
     * The part object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\PartBundle\Entity\Part", inversedBy="attachments")
     *
     * @var Part
     */
    private $part = null;

    /**
     * Sets the part.
     *
     * @param Part $part The part to set
     */
    public function setPart(Part $part = null)
    {
        $this->part = $part;
    }

    /**
     * Returns the part.
     *
     * @return Part the part
     */
    public function getPart()
    {
        return $this->part;
    }

    /**
     * Returns if the attachment is an image or not.
     *
     * @return true if the attachment is an image, false otherwise
     */
    public function isImage()
    {
        return $this->isImage;
    }

    /**
     * Sets if the attachment is an image.
     *
     * @param $image
     */
    public function setImage($image)
    {
        $this->isImage = $image;
    }
}
