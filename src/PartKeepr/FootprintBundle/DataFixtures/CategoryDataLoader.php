<?php

namespace PartKeepr\FootprintBundle\DataFixtures;

use PartKeepr\CategoryBundle\DataFixtures\AbstractCategoryDataLoader;

class CategoryDataLoader extends AbstractCategoryDataLoader
{
    protected function getEntityClass()
    {
        return 'PartKeepr\FootprintBundle\Entity\FootprintCategory';
    }

    protected function getReferencePrefix()
    {
        return 'footprintcategory';
    }
}
