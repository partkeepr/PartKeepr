<?php

namespace PartKeepr\AuthBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\Table(
 *      name="UserProvider",
 *      uniqueConstraints={@ORM\UniqueConstraint(name="type", columns={"type"})})
 * @TargetService(uri="/api/user_providers")
 */
class UserProvider extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"default"})
     *
     * @var string
     */
    private $type;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $editable;

    public function __construct()
    {
        $this->setEditable(true);
    }

    /**
     * @return mixed
     */
    public function isEditable()
    {
        return $this->editable;
    }

    /**
     * @param mixed $editable
     */
    public function setEditable($editable)
    {
        $this->editable = $editable;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }
}
