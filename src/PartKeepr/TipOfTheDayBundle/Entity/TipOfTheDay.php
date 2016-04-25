<?php

namespace PartKeepr\TipOfTheDayBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a tip of the day.
 *
 * Tips are stored on the central PartKeepr server in a wiki. However, we need to know a list of all tip pages
 * because the API has a limit per day. So basically, we sync the tip names from the wiki to the local system several
 * times a day and not each time an user logs in.
 *
 * Note: If you wish to link against a tip of the day, do it by name and not by id!
 *
 * @ORM\Entity
 * @TargetService(uri="/api/tip_of_the_days")
 **/
class TipOfTheDay extends BaseEntity
{
    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Sets the name for this tip.
     *
     * @param string $name The name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name for this tip.
     *
     * @return string The name
     */
    public function getName()
    {
        return $this->name;
    }
}
