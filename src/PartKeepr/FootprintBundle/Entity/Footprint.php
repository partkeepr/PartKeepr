<?php
namespace PartKeepr\FootprintBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFile\TempUploadedFile;
use PartKeepr\Util\BaseEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @TargetService(uri="/api/footprint")
 */
class Footprint extends BaseEntity
{
    /**
     * Holds the footprint name
     *
     * @ORM\Column(length=64,unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Holds the footprint description
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * The category of the footprint
     *
     * @ORM\ManyToOne(targetEntity="FootprintCategory")
     * @Groups({"default"})
     *
     * @var FootprintCategory
     */
    private $category;

    /**
     * Holds the footprint image
     *
     * @ORM\OneToOne(targetEntity="FootprintImage", mappedBy="footprint", cascade={"persist", "remove"})
     *
     * @Groups({"default"})
     *
     * @var FootprintImage
     */
    private $image;

    /**
     * Holds the footprint attachments
     *
     * @ORM\OneToMany(targetEntity="FootprintAttachment", mappedBy="footprint", cascade={"persist", "remove"})
     *
     * @Groups({"default"})
     *
     * @var FootprintAttachment
     */
    private $attachments;

    /**
     * Constructs a new Footprint entity
     */
    public function __construct()
    {
        $this->attachments = new ArrayCollection();
    }

    /**
     * Sets the name of this footprint
     *
     * @param string $name The footprint name
     *
     * @return void
     */
    public function setName($name)
    {
        //$this->name = $name;
    }

    /**
     * Returns the name of this footprint
     *
     * @return string The name of this footprint
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the description of this footprint
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
     * Returns the description of this footprint
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the category for this footprint
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
     * Returns the category of this footprint
     *
     * @return FootprintCategory The footprint category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the footprint image
     *
     * @param FootprintImage $image The footprint image
     *
     * @return void
     */
    public function setImage(FootprintImage $image)
    {
        $this->image = $image;
        $image->setFootprint($this);
    }

    /**
     * Returns the footprint image
     *
     * @return FootprintImage The footprint image
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Returns the attachments for this footprint
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
     * @param FootprintAttachment|TempUploadedFile $attachment Either a FootprintAttachment or a TempUploadedFile
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
