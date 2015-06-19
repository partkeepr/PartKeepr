<?php 
namespace PartKeepr\PartBundle\Entity;

use PartKeepr\Category\AbstractCategory,
    Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="PartKeepr\PartBundle\Entity\Repository\PartCategoryRepository")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our part categories
 *
 */
class PartCategory extends AbstractCategory {
    /**
     * @ORM\ManyToOne(targetEntity="PartCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     *
     * @var int
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="PartCategory", mappedBy="parent")
     */
    private $children;
}