<?php

namespace PartKeepr\UploadedFileBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Represents a temporary file. Temporary files are used when
 * a user uploaded a file, but not attached it to an entity.
 *
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
