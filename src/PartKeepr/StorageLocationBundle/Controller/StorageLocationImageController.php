<?php

namespace PartKeepr\StorageLocationBundle\Controller;

use PartKeepr\ImageBundle\Controller\ImageController;

class StorageLocationImageController extends ImageController
{
    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage';
    }
}
