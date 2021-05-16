<?php

namespace PartKeepr\FootprintBundle\Entity;

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
 *       "get_root"={"route_name"="PartKeeprFootprintCategoryGetRootNode"},    
 *       "post"={"method"="POST"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "get"={"method"="GET"},
 *         "put"={"method"="PUT"},
 *         "delete"={"method"="DELETE"},
 *         "move"={"route_name"="FootprintCategoryMove"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="Gedmo\Tree\Entity\Repository\NestedTreeRepository")
 * @Gedmo\Tree(type="nested")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our footprint categories
 * @TargetService(uri="/api/footprint_categories")
**/
class FootprintCategory extends AbstractCategory implements CategoryPathInterface
{
    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="FootprintCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="FootprintCategory", mappedBy="parent")
     * @ORM\OrderBy({"lft" = "ASC"})
     * @Groups({"tree"})
     */
    protected $children;

    /**
     * @ORM\OneToMany(targetEntity="Footprint", mappedBy="category")
     */
    protected $footprints;

    /**
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    protected $categoryPath;

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
     * Returns the footprints.
     *
     * @return ArrayCollection
     */
    public function getFootprints()
    {
        return $this->footprints->getValues();
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
