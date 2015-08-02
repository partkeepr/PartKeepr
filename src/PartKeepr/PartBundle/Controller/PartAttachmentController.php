<?php
namespace PartKeepr\PartBundle\Controller;

use PartKeepr\UploadedFileBundle\Controller\FileController;

class PartAttachmentController extends FileController
{
    /**
     * @inheritdoc
     */
    protected function getEntityClass()
    {
        return "PartKeepr\\PartBundle\\Entity\\PartAttachment";
    }
}
