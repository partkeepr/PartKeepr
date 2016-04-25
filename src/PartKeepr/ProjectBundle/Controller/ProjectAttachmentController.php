<?php

namespace PartKeepr\ProjectBundle\Controller;

use PartKeepr\ImageBundle\Controller\ImageController;

class ProjectAttachmentController extends ImageController
{
    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\ProjectBundle\\Entity\\ProjectAttachment';
    }
}
