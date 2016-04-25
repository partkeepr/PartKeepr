<?php

namespace PartKeepr\PartBundle\Tests;

use PartKeepr\CategoryBundle\Tests\AbstractMoveCategoryTest;

class MoveActionTest extends AbstractMoveCategoryTest
{
    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'partcategory';
    }
}
