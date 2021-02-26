<?php

namespace Tests\PartKeepr\FootprintBundle;

use Tests\PartKeepr\CategoryBundle\AbstractCategoryCreateTest;

class CategoryCreateTest extends AbstractCategoryCreateTest
{
    public function getResourceClass()
    {
        return 'PartKeepr\FootprintBundle\Entity\FootprintCategory';
    }

    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\FootprintBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'footprintcategory';
    }
}
