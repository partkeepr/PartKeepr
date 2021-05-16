<?php

namespace PartKeepr\UploadedFileBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
