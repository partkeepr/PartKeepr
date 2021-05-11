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
 *       "post"={"method"="@resource.tempfile.collection_operation.custom_post"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="@resource.tempfile.item_operation.get"},
 *         "custom_get"={"method"="@resource.tempfile.item_operation.custom_get"},
 *         "custom_get_mimetype"={"method"="@resource.tempfile.item_operation.custom_get_mimetype"},
 *         "custom_post_webcam"={"method"="@resource.tempfile.collection_operation.custom_post_webcam"}
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
