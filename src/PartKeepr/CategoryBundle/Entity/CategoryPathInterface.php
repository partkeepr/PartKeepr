<?php

namespace PartKeepr\CategoryBundle\Entity;

interface CategoryPathInterface
{
    /**
     * Sets the category path.
     *
     * @param string $categoryPath The category path
     */
    public function setCategoryPath($categoryPath);

    /**
     * Generates the category path.
     *
     * @param string $pathSeparator The path separator
     *
     * @return string The category path
     */
    public function generateCategoryPath($pathSeparator);
}
