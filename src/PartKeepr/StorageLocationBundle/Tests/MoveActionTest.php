<?php

namespace PartKeepr\StorageLocationBundle\Tests;

use PartKeepr\CategoryBundle\Tests\AbstractMoveCategoryTest;

class MoveActionTest extends AbstractMoveCategoryTest
{
    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'storagelocationcategory';
    }
}
