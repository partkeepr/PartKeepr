<?php
namespace PartKeepr\FootprintBundle\Controller;

use PartKeepr\UploadedFileBundle\Controller\FileController;

class FootprintAttachmentController extends FileController
{
    /**
     * @inheritdoc
     */
    public function getEntityClass()
    {
        return "PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment";
    }
}
