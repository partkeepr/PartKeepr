<?php

namespace PartKeepr\PartBundle\Tests;

use PartKeepr\CategoryBundle\Tests\AbstractCategoryCreateTest;

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
