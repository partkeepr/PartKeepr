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
 *       "custom_post_webcam"={"route_name"="TemporaryImageUploadWebcam","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},    
 *       "post"={"route_name"="TemporaryImageUpload","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="GET"},
 *         "custom_get"={"route_name"="TemporaryImageGet","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
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
