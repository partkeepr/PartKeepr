<?php

namespace PartKeepr\FootprintBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFile;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @TargetService(uri="/api/footprints")
 */
class Footprint extends BaseEntity
{
    /**
     * Holds the footprint name.
     *
     * @ORM\Column(length=64,unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Holds the footprint description.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * The category of the footprint.
     *
     * @ORM\ManyToOne(targetEntity="FootprintCategory", inversedBy="footprints")
     * @Groups({"default"})
     *
     * @var FootprintCategory
     */
    private $category;

    /**
     * Holds the footprint image.
     *
     * @ORM\OneToOne(targetEntity="PartKeepr\FootprintBundle\Entity\FootprintImage",
     *               mappedBy="footprint", cascade={"persist", "remove"}, orphanRemoval=true)
     *
     * @Groups({"default"})
     * @UploadedFile()
     *
     * @var FootprintImage
     */
    private $image;

    /**
     * Holds the footprint attachments.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\FootprintBundle\Entity\FootprintAttachment",
     *                mappedBy="footprint", cascade={"persist", "remove"}, orphanRemoval=true)
     * @UploadedFileCollection()
     * @Groups({"default"})
     *
     * @var FootprintAttachment
     */
    private $attachments;

    /**
     * Returns the category path.
     *
     * @Groups({"default"})
     *
     * @return string
     */
    public function getCategoryPath()
    {
        if ($this->category !== null) {
            return $this->category->getCategoryPath();
        } else {
            return '';
        }
    }

    /**
     * Constructs a new Footprint entity.
     */
    public function __construct()
    {
        $this->attachments = new ArrayCollection();
    }

    /**
     * Sets the name of this footprint.
     *
     * @param string $name The footprint name
     *
     * @return void
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of this footprint.
     *
     * @return string The name of this footprint
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the description of this footprint.
     *
     * @param string $description The description
     *
     * @return void
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the description of this footprint.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the category for this footprint.
     *
     * @param FootprintCategory $category The category
     *
     * @return void
     */
    public function setCategory(FootprintCategory $category)
    {
        $this->category = $category;
    }

    /**
     * Returns the category of this footprint.
     *
     * @return FootprintCategory The footprint category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the footprint image.
     *
     * @param FootprintImage $image The footprint image
     *
     * @return void
     */
    public function setImage($image)
    {
        if ($image instanceof FootprintImage) {
            $image->setFootprint($this);
            $this->image = $image;
        } else {
            // Because this is a 1:1 relationship. only allow the temporary image to be set when no image exists.
            // If an image exists, the frontend needs to deliver the old file ID with the replacement property set.
            if ($this->getImage() === null) {
                $this->image = $image;
            }
        }
    }

    /**
     * Returns the footprint image.
     *
     * @return FootprintImage The footprint image
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Returns the attachments for this footprint.
     *
     * @return ArrayCollection The attachments
     */
    public function getAttachments()
    {
        return $this->attachments;
    }

    /**
     * Adds an IC Logo.
     *
     * @param FootprintAttachment|\PartKeepr\UploadedFileBundle\Entity\TempUploadedFile $attachment
     *                                                                                              Either a FootprintAttachment or a TempUploadedFile
     *
     * @return void
     */
    public function addAttachment($attachment)
    {
        if ($attachment instanceof FootprintAttachment) {
            $attachment->setFootprint($this);
        }

        $this->attachments->add($attachment);
    }

    /**
     * Removes an IC Logo.
     *
     * @param FootprintAttachment $attachment
     *
     * @return void
     */
    public function removeAttachment(FootprintAttachment $attachment)
    {
        $attachment->setFootprint(null);
        $this->attachments->removeElement($attachment);
    }
}
