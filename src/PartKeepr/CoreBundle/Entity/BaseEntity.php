<?php

namespace PartKeepr\CoreBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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

    public function __toString()
    {
        return get_class($this)." #".$this->getId();
    }
}
