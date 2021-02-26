<?php

namespace Tests\PartKeepr\StorageLocationBundle;

use Tests\PartKeepr\CategoryBundle\AbstractMoveCategoryTest;

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
