<?php

namespace PartKeepr\UploadedFileBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprUploadedFileBundle:TemporaryFile:upload"         # Controller
/**
* @Route(
*     name="TemporaryFileUpload",
*     path="/temp_uploaded_files/upload",
*     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_collection_operation_name"="custom_post"}
* )
* @Method("POST")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprUploadedFileBundle:TemporaryFile:webcamUpload"         # Controller
/**
* @Route(
*     name="TemporaryFileUploadWebcam",
*     path="/temp_uploaded_files/webcamUpload",
*     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_collection_operation_name"="custom_post_webcam"}
* )
* @Method("POST")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprUploadedFileBundle:TemporaryFile:getFile"         # Controller
/**
* @Route(
*     name="TemporaryFileGet",
*     path="/temp_uploaded_files/{id}/getFile",
*     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_item_operation_name"="custom_get"}
* )
* @Method("GET")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "PartKeeprUploadedFileBundle:TemporaryFile:getMimeTypeIcon"         # Controller
/**
* @Route(
*     name="TemporaryFileGetMimeTypeIcon",
*     path="/temp_uploaded_files/{id}/getMimeTypeIcon",
*     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_item_operation_name"="custom_get_mimetype"}
* )
* @Method("GET")
**/

/**
 * Represents a temporary file. Temporary files are used when
 * a user uploaded a file, but not attached it to an entity.
 *
 * @ApiResource(
 *     collectionOperations={
 *       "post"={"method"="POST"},
 *       "custom_post"={"route_name"="TemporaryFileUpload","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *       "custom_post_webcam"={"route_name"="TemporaryFileUploadWebcam","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="GET"},
 *         "custom_get"={"route_name"="TemporaryFileGet","hydra_context"={"title"="A custom operation","returns"="xmls:string"}},
 *         "custom_get_mimetype"={"route_name"="TemporaryFileGetMimeTypeIcon","hydra_context"={"title"="A custom operation","returns"="xmls:string"}}
 *     }
 * )
 * @ORM\Entity
 */
class TempUploadedFile extends UploadedFile
{
    public function __construct()
    {
        parent::__construct();
        $this->setType('tempfile');
    }
}
