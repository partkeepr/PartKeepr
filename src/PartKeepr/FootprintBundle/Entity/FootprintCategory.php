<?php
namespace PartKeepr\FootprintBundle\Entity;

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
 * The entity for our footprint categories
 * @TargetService(uri="/api/footprint_categories")
 */
class FootprintCategory extends AbstractCategory
{
    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="FootprintCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     * @Groups({"default"})
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="FootprintCategory", mappedBy="parent")
     * @ORM\OrderBy({"lft" = "ASC"})
     * @Groups({"default"})
     */
    protected $children;

    /**
     * @ORM\OneToMany(targetEntity="Footprint", mappedBy="category")
     * @Groups({"default"})
     */
    protected $footprints;

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
     * Returns the footprints
     *
     * @return ArrayCollection
     */
    public function getFootprints()
    {
        return $this->footprints;
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
}
