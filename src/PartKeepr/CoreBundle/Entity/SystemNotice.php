<?php

namespace PartKeepr\CoreBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Holds a system notice.
 *
 * @ORM\Entity
 * @TargetService("/api/system_notices")
 **/
class SystemNotice extends BaseEntity
{
    /**
     * @ORM\Column(type="datetime")
     * @Groups({"default"})
     *
     * @var \DateTime
     */
    private $date;

    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $title;

    /**
     * The description of this notice.
     *
     * @ORM\Column(type="text")
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * Defines if the system notice has been acknowledged.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $acknowledged = false;

    /**
     * Specifies the type. This is required for unique notices which shouldn't pop up every time we create them.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $type;

    /**
     * Sets the date and time for this entry.
     *
     * @param \DateTime $date The date and time
     */
    public function setDate(\DateTime $date)
    {
        $this->date = $date;
    }

    /**
     * Returns the date and time for this entry.
     *
     * @return \DateTime the date and time for this entry
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Sets the title for this entry.
     *
     * @param string $title the title for this entry
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Returns the title for this entry.
     *
     * @return string the title
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets the description.
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the description.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the value of the acknowledged flag.
     *
     * @param bool $bAck True if the notice should be acknowledged (default), false otherwise
     */
    public function setAcknowledged($bAck = true)
    {
        $this->acknowledged = $bAck;
    }

    /**
     * Returns the value of the acknowledged flag.
     *
     * @return bool true if this notice has been acknowledged, false otherwise
     */
    public function isAcknowledged()
    {
        return $this->acknowledged;
    }

    /**
     * Sets the type of this entry.
     *
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * Returns the type of this entry.
     *
     * @return string The type
     */
    public function getType()
    {
        return $this->type;
    }
}
