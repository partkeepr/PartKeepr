<?php
namespace PartKeepr\UploadedFileBundle\Controller;

use Dunglas\ApiBundle\Controller\ResourceController;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

abstract class FileController extends ResourceController
{
    /**
     * Returns the full path for the file
     *
     * @param UploadedFile $file
     *
     * @return string
     */
    public function getFilename(UploadedFile $file)
    {
        $storageDirectory = $this->get("partkeepr_uploadedfile_service")->getStorageDirectory($file);

        return $storageDirectory."/".$file->getFilename().".".$file->getExtension();
    }

    /**
     * Returns the entity class (FQDN) for operation
     *
     * @return string
     */
    abstract public function getEntityClass();
}
