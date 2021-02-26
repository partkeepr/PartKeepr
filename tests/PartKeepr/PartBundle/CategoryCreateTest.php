<?php

namespace Tests\PartKeepr\PartBundle;

use Tests\PartKeepr\CategoryBundle\AbstractCategoryCreateTest;

class CategoryCreateTest extends AbstractCategoryCreateTest
{
    public function getResourceClass()
    {
        return 'PartKeepr\PartBundle\Entity\PartCategory';
    }

    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'partcategory';
    }
}
