<?php

namespace PartKeepr\FrontendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Stores the grid presets.
 *
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="name_grid_unique", columns={"grid", "name"})})
 * @ORM\Entity()
 * @TargetService(uri="/api/grid_presets")
 */
class GridPreset extends BaseEntity
{
    /**
     * Holds the grid.
     *
     * @ORM\Column(length=255)
     * @Groups({"default"})
     *
     * @var string
     */
    private $grid;

    /**
     * Holds the grid preset name.
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
     * Defines if the selected grid preset is the default.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $gridDefault = false;

    /**
     * @return bool True if the given preset is the default
     */
    public function isGridDefault()
    {
        return $this->gridDefault;
    }

    /**
     * @param bool $default
     */
    public function setGridDefault($default = true)
    {
        $this->gridDefault = $default;
    }

    /**
     * @return string
     */
    public function getGrid()
    {
        return $this->grid;
    }

    /**
     * @param string $grid
     */
    public function setGrid($grid)
    {
        $this->grid = $grid;
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
