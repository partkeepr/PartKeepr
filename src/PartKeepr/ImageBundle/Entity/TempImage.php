<?php

namespace PartKeepr\ImageBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Represents a temporary image. Temporary images are used when
 * a user uploaded an image, but not attached it to an entity.
 *
 * @ApiResource(
 *     collectionOperations={
 *       "custom_post_webcam"={"method"="@resource.tempimage.collection_operation.custom_post_webcam"},    
 *       "post"={"method"="@resource.tempimage.collection_operation.custom_post"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="@resource.tempimage.item_operation.get"},
 *         "custom_get"={"method"="@resource.tempimage.item_operation.custom_get"}
 *     }
 * )
 * @ORM\Entity
 */
class TempImage extends Image
{
    public function __construct()
    {
        parent::__construct(Image::IMAGE_TEMP);
    }
}
