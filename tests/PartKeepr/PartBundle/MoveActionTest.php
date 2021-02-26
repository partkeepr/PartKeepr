<?php

namespace Test\PartKeepr\PartBundle;

use Tests\PartKeepr\CategoryBundle\AbstractMoveCategoryTest;

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
