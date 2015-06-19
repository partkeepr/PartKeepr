<?php 
namespace PartKeepr\FootprintBundle\Entity;

use PartKeepr\Category\AbstractCategory,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\Table,
    Doctrine\ORM\Mapping\Index;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="PartKeepr\FootprintBundle\Entity\Repository\FootprintCategoryRepository")
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our footprint categories
 *
 */
class FootprintCategory extends AbstractCategory {
    /**
     * @ORM\ManyToOne(targetEntity="FootprintCategory", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     *
     * @var int
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="FootprintCategory", mappedBy="parent")
     */
    private $children;
}