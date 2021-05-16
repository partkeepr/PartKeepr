<?php

namespace PartKeepr\Tests\StorageLocationBundle;

use PartKeepr\Tests\CategoryBundle\AbstractMoveCategoryTest;

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
