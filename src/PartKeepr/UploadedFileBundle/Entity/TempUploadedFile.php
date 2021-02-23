<?php

namespace PartKeepr\UploadedFileBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Represents a temporary file. Temporary files are used when
 * a user uploaded a file, but not attached it to an entity.
 *
 * @ApiResource()
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
