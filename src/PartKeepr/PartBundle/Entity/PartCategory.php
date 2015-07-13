<?php 
namespace PartKeepr\PartBundle\Entity;

use PartKeepr\CategoryBundle\Entity\AbstractCategory,
    Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
/**
 * @ORM\Entity(repositoryClass="Gedmo\Tree\Entity\Repository\NestedTreeRepository")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * @Gedmo\Tree(type="nested")
 * The entity for our part categories
 *
 */
class PartCategory extends AbstractCategory {
    /**
     * @Gedmo\TreeParent
     * @ORM\ManyToOne(targetEntity="PartCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $parent;

    /**
     * @ORM\OneToMany(targetEntity="PartCategory", mappedBy="parent")
     * @ORM\OrderBy({"lft" = "ASC"})
     */
    protected $children;
}