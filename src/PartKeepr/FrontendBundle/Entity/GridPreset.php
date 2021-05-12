<?php

namespace PartKeepr\FrontendBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

// ToDo: fix this - move this Route annotation to the correct place
// "partkeepr.grid_preset.mark_as_default"         # Controller
/**
* @Route(
*     name="MarkGridPresetAsDefault",
*     path="/grid_presets/{id}/markAsDefault",
*     defaults={"_api_resource_class"=FootprintCategory::class, "_api_item_operation_name"="move"}
* )
* @Method("PUT")
**/

/**
 * Stores the grid presets.
 *
 * @ApiResource(
 *     attributes={
 *          "filters": {"@doctrine_reflection_service.search_filter"},
 *          "normalization_context"={"groups"={"default"}},
 *          "denormalization_context"={"groups"={"default"}} 
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="GET"},
 *         "put"={"method"="PUT"},
 *         "delete"={"method"="DELETE"},
 *         "markAsDefault"={"route_name"="MarkGridPresetAsDefault"}
 *     }
 * )
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
