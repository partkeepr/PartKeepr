<?php
namespace PartKeepr\StorageLocationBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use PartKeepr\CategoryBundle\Entity\AbstractCategory;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="Gedmo\Tree\Entity\Repository\NestedTreeRepository")
 * @Gedmo\Tree(type="nested")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our storage location categories
 * @TargetService(uri="/api/storage_location_categories")
 */
class StorageLocationCategory extends AbstractCategory
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
     * @Groups({"default"})
     */
    protected $children;

    /**
     * @ORM\OneToMany(targetEntity="PartKeepr\StorageLocationBundle\Entity\StorageLocation", mappedBy="category")
     */
    protected $storageLocations;

    /**
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     * @var string
     */
    protected $categoryPath;

    /**
     * Sets the parent category
     *
     * @param AbstractCategory|null $parent
     */
    public function setParent(AbstractCategory $parent = null)
    {
        $this->parent = $parent;
    }

    /**
     * Returns the parent category
     *
     * @return mixed
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Returns the storage locations
     *
     * @return ArrayCollection
     */
    public function getStorageLocations()
    {
        return $this->storageLocations;
    }

    /**
     * Returns the children
     *
     * @return ArrayCollection
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Returns the category path
     *
     * @return string
     */
    public function getCategoryPath()
    {
        return $this->categoryPath;
    }

    /**
     * Sets the category path
     *
     * @param string $categoryPath The category path
     */
    public function setCategoryPath($categoryPath)
    {
        $this->categoryPath = $categoryPath;
    }

    /**
     * Generates the category path
     *
     * @return string The category path
     */
    public function generateCategoryPath()
    {
        if ($this->getParent() !== null) {
            return $this->getParent()->generateCategoryPath()." / ".$this->getName();
        } else {
            return $this->getName();
        }
    }
}
