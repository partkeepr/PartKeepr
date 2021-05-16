<?php

namespace PartKeepr\StorageLocationBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;
use PartKeepr\CategoryBundle\Entity\AbstractCategory;
use PartKeepr\CategoryBundle\Entity\CategoryPathInterface;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     attributes={
 *          "normalization_context"={"groups"={"default", "tree"}},
 *          "denormalization_context"={"groups"={"default", "tree"}} 
 *     },
 *     collectionOperations={
 *       "get"={"method"="GET"},
 *       "get_root"={"route_name"="StorageLocationCategoryGetRoot"},    
 *       "post"={"method"="POST"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="GET"},
 *         "put"={"method"="PUT"},
 *         "delete"={"method"="DELETE"},
 *         "move"={"route_name"="StorageLocationCategoryMove"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="Gedmo\Tree\Entity\Repository\NestedTreeRepository")
 * @Gedmo\Tree(type="nested")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our storage location categories
 * @TargetService(uri="/api/storage_location_categories")
 */
class StorageLocationCategory extends AbstractCategory implements CategoryPathInterface
{
    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="StorageLocationCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="StorageLocationCategory", mappedBy="parent")
     * @ORM\OrderBy({"lft" = "ASC"})
     * @Groups({"tree"})
     *
     * @var ArrayCollection
     */
    protected $children;

    /**
     * @ORM\OneToMany(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocation", mappedBy="category")
     */
    protected $storageLocations;

    /**
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    protected $categoryPath;

    public function __construct()
    {
        parent::__construct();
        $this->storageLocations = new ArrayCollection();
    }

    /**
     * Sets the parent category.
     *
     * @Groups({"default"})
     *
     * @param AbstractCategory|null $parent
     */
    public function setParent(AbstractCategory $parent = null)
    {
        $this->parent = $parent;
    }

    /**
     * Returns the parent category.
     *
     * @return mixed
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Returns the storage locations.
     *
     * @return ArrayCollection
     */
    public function getStorageLocations()
    {
        return $this->storageLocations->getValues();
    }

    /**
     * Returns the children.
     *
     * @return ArrayCollection
     */
    public function getChildren()
    {
        return $this->children->getValues();
    }

    /**
     * Returns the category path.
     *
     * @return string
     */
    public function getCategoryPath()
    {
        return $this->categoryPath;
    }

    /**
     * {@inheritdoc}
     */
    public function setCategoryPath($categoryPath)
    {
        $this->categoryPath = $categoryPath;
    }

    /**
     * {@inheritdoc}
     */
    public function generateCategoryPath($pathSeparator)
    {
        if ($this->getParent() !== null) {
            return $this->getParent()->generateCategoryPath($pathSeparator).$pathSeparator.$this->getName();
        } else {
            return $this->getName();
        }
    }
}
