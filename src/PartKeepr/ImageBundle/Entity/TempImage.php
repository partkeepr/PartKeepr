<?php

namespace PartKeepr\ImageBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprImageBundle:TemporaryImage:upload"         # Controller
/**
* @Route(
*     name="TemporaryImageUpload",
*     path="/temp_images/upload",
*     defaults={"_api_resource_class"=TempImage::class, "_api_collection_operation_name"="custom_post"}
* )
* @Method("POST")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprImageBundle:TemporaryImage:webcamUpload"         # Controller
/**
* @Route(
*     name="TemporaryImageUploadWebcam",
*     path="/temp_images/webcamUpload",
*     defaults={"_api_resource_class"=TempImage::class, "_api_collection_operation_name"="custom_post_webcam"}
* )
* @Method("POST")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprImageBundle:TemporaryImage:getImage"         # Controller
/**
* @Route(
*     name="TemporaryImageGet",
*     path="/temp_images/{id}/getImage",
*     defaults={"_api_resource_class"=TempImage::class, "_api_item_operation_name"="custom_get"}
* )
* @Method("GET")
**/

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
