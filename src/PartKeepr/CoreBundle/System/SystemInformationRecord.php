<?php

namespace PartKeepr\CoreBundle\System;

/**
 * This class represents a system information record.
 *
 * This is basically a category, a name and a value. No logic included within
 * the class.
 *
 * For example, records could hold:
 *
 * Name                    Value                                        Category
 * =====================================================================================
 * Doctrine ORM            2.1.0                                        Libraries
 * Doctrine DBAL           2.1.0                                        Libraries
 * Doctrine Migrations     git-f87afe9223dbfecaaddb                     Libraries
 *
 * PHP Version             5.3.2                                        Server Software
 * Operating System        Linux (Funtoo Linux - baselayout 2.1.8)      Server Software
 */
class SystemInformationRecord
{
    /**
     * Holds the category name.
     *
     * @var string
     */
    public $category;

    /**
     * Holds the name.
     *
     * @var string
     */
    public $name;

    /**
     * Holds the value.
     *
     * @var mixed
     */
    public $value;

    /**
     * Creates a new system information record.
     *
     * @param string $name
     * @param mixed  $value
     * @param string $category
     */
    public function __construct($name, $value, $category)
    {
        $this->name = $name;
        $this->value = $value;
        $this->category = $category;
    }
}
