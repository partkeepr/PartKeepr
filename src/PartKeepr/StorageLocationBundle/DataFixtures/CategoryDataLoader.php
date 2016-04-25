<?php

namespace PartKeepr\StorageLocationBundle\DataFixtures;

use PartKeepr\CategoryBundle\DataFixtures\AbstractCategoryDataLoader;

class CategoryDataLoader extends AbstractCategoryDataLoader
{
    protected function getEntityClass()
    {
        return 'PartKeepr\StorageLocationBundle\Entity\StorageLocationCategory';
    }

    protected function getReferencePrefix()
    {
        return 'storagelocationcategory';
    }
}
