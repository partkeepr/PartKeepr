<?php

namespace PartKeepr\PartBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Holds a part attachment.
 *
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
