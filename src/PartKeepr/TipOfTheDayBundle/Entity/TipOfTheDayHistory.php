<?php

namespace PartKeepr\TipOfTheDayBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a tip of the day history entry.
 *
 * This entity stores each tip of the day the user has already seen.
 *
 * @ORM\Entity
 * @TargetService(uri="/api/tip_of_the_day_histories")
 **/
class TipOfTheDayHistory extends BaseEntity
{
    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Defines the user.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User")
     * @Groups({"default"})
     *
     * @var \PartKeepr\AuthBundle\Entity\User
     */
    private $user;

    /**
     * Sets the user for this entry.
     *
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Sets the tip of the day name the user already has seen.
     *
     * @param string $name The tip name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
}
