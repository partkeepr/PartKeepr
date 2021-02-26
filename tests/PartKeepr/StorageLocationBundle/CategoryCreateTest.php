<?php

namespace Tests\PartKeepr\StorageLocationBundle;

use Tests\PartKeepr\CategoryBundle\AbstractCategoryCreateTest;

class CategoryCreateTest extends AbstractCategoryCreateTest
{
    public function getResourceClass()
    {
        return 'PartKeepr\StorageLocationBundle\Entity\StorageLocationCategory';
    }

    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'storagelocationcategory';
    }
}
