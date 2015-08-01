<?php
namespace PartKeepr\TipOfTheDayBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\Util\BaseEntity;

/**
 * Represents a tip of the day history entry.
 *
 * This entity stores each tip of the day the user has already seen.
 *
 * @ORM\Entity
 **/
class TipOfTheDayHistory extends BaseEntity
{
    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $name;

    /**
     * Defines the user
     * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User")
     *
     * @var \PartKeepr\AuthBundle\Entity\User
     */
    private $user;

    /**
     * Sets the user for this entry
     *
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * Sets the tip of the day name the user already has seen
     *
     * @param string $name The tip name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

}