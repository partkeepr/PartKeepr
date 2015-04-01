<?php 
namespace PartKeepr\FootprintCategory;

use PartKeepr\Category\AbstractCategory,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\Table,
    Doctrine\ORM\Mapping\Index;

/**
 * @ORM\Entity
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our footprint categories
 *
 */
class FootprintCategory extends AbstractCategory {
	
}