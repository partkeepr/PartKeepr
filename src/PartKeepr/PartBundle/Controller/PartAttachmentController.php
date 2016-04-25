<?php

namespace PartKeepr\PartBundle\Controller;

use PartKeepr\ImageBundle\Controller\ImageController;

class PartAttachmentController extends ImageController
{
    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\PartBundle\\Entity\\PartAttachment';
    }
}
