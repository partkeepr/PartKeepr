<?php

namespace PartKeepr\ImageBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Represents a temporary image. Temporary images are used when
 * a user uploaded an image, but not attached it to an entity.
 *
 * @ApiResource(
 *      itemOperations={"get"={"method"="GET"}}
 *      )
 * @ORM\Entity
 */
class TempImage extends Image
{
    public function __construct()
    {
        parent::__construct(Image::IMAGE_TEMP);
    }
}

//    resource.tempimage.item_operation.get:
//        class:     "Dunglas\ApiBundle\Api\Operation\Operation"
//        public:    false
//        factory:   [ "@api.operation_factory", "createItemOperation" ]
//        arguments: [ "@resource.tempimage", "GET" ]
