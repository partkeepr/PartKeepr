<?php

namespace PartKeepr\StorageLocationBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/** @ORM\Entity
 * @TargetService(uri="/api/storage_locations")
 */
class StorageLocation extends BaseEntity
{
    /**
     * Holds the name for our storage location.
     *
     * @ORM\Column(type="string",unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Holds the storage location image.
     *
     * @ORM\OneToOne(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocationImage",
     *               mappedBy="storageLocation",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     * @UploadedFile()
     *
     * @var StorageLocationImage
     */
    private $image;

    /**
     * The category of the storage location.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocationCategory",
     *                inversedBy="storageLocations")
     * @Groups({"default"})
     *
     * @var StorageLocationCategory
     */
    private $category;

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
     * Sets the category for this storage location.
     *
     * @param StorageLocationCategory $category The category
     *
     * @return void
     */
    public function setCategory(StorageLocationCategory $category)
    {
        $this->category = $category;
    }

    /**
     * Returns the category of this storage location.
     *
     * @return StorageLocationCategory The storage location category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Sets the name for the storage location.
     *
     * @param string $name the name to set
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of the storage location.
     *
     * @return string The name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the storage location image.
     *
     * @param StorageLocationImage $image The storage location image
     *
     * @return void
     */
    public function setImage($image)
    {
        if ($image instanceof StorageLocationImage) {
            $image->setStorageLocation($this);
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
     * Returns the storage location image.
     *
     * @return StorageLocationImage The storage location image
     */
    public function getImage()
    {
        return $this->image;
    }
}
