<?php

namespace PartKeepr\PartBundle\DataFixtures;

use PartKeepr\CategoryBundle\DataFixtures\AbstractCategoryDataLoader;

class CategoryDataLoader extends AbstractCategoryDataLoader
{
    protected function getEntityClass()
    {
        return 'PartKeepr\PartBundle\Entity\PartCategory';
    }

    protected function getReferencePrefix()
    {
        return 'partcategory';
    }
}
