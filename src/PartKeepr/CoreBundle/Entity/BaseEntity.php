<?php

namespace PartKeepr\CoreBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/** @ORM\MappedSuperclass */
abstract class BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var int
     */
    private $id;

    /**
     * Returns the ID of this object.
     *
     * @param none
     *
     * @return int The ID of this object
     */
    public function getId()
    {
        return $this->id;
    }
}
