<?php

namespace PartKeepr\FootprintBundle\Tests;

use Tests\PartKeepr\CategoryBundle\AbstractMoveCategoryTest;

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
