<?php

namespace PartKeepr\FootprintBundle\Tests;

use PartKeepr\CategoryBundle\Tests\AbstractMoveCategoryTest;

class MoveActionTest extends AbstractMoveCategoryTest
{
    public function getFixtureLoaderClass()
    {
        return 'PartKeepr\FootprintBundle\DataFixtures\CategoryDataLoader';
    }

    public function getReferencePrefix()
    {
        return 'footprintcategory';
    }
}
