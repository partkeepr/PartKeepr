<?php

namespace PartKeepr\ImportBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="name_entity_unique", columns={"baseEntity", "name"})})
 * @ORM\Entity()
 * @TargetService(uri="/api/import_presets")
 */
class ImportPreset extends BaseEntity
{
    /**
     * Holds the base entity.
     *
     * @ORM\Column(length=255)
     * @Groups({"default"})
     *
     * @var string
     */
    private $baseEntity;

    /**
     * Holds the import preset name.
     *
     * @ORM\Column(length=255)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Defines the preset configuration.
     *
     * @ORM\Column(type="text")
     * @Groups({"default"})
     *
     * @var string
     */
    private $configuration;

    /**
     * @return string
     */
    public function getBaseEntity()
    {
        return $this->baseEntity;
    }

    /**
     * @param string $baseEntity
     */
    public function setBaseEntity($baseEntity)
    {
        $this->baseEntity = $baseEntity;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getConfiguration()
    {
        return $this->configuration;
    }

    /**
     * @param string $configuration
     */
    public function setConfiguration($configuration)
    {
        $this->configuration = $configuration;
    }
}
