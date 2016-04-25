<?php

namespace PartKeepr\FootprintBundle\Controller;

use PartKeepr\ImageBundle\Controller\ImageController;

class FootprintImageController extends ImageController
{
    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage';
    }
}
