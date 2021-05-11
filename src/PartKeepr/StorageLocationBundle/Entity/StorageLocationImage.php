<?php

namespace PartKeepr\StorageLocationBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\ImageBundle\Entity\Image;

/**
 * Holds a storage location image.
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
 *         "get"={"method"="@resource.storage_location_image.item_operation.get"},
 *         "custom_get"={"method"="@resource.storage_location_image.item_operation.custom_get"}
 *     }
 * )
 * @ORM\Entity
 **/
class StorageLocationImage extends Image
{
    /**
     * The storage location object.
     *
     * @ORM\OneToOne(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocation",inversedBy="image")
     *
     * @var StorageLocation
     */
    private $storageLocation = null;

    /**
     * Creates a new storage location image instance.
     */
    public function __construct()
    {
        parent::__construct(Image::IMAGE_STORAGELOCATION);
    }

    /**
     * Sets the storage location.
     *
     * @param StorageLocation $storageLocation The storage location to set
     */
    public function setStorageLocation(StorageLocation $storageLocation)
    {
        $this->storageLocation = $storageLocation;
    }

    /**
     * Returns the storage location.
     *
     * @return StorageLocation the storage location
     */
    public function getStorageLocation()
    {
        return $this->storageLocation;
    }
}
