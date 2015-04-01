<?php 
namespace PartKeepr\PartCategory;

use PartKeepr\Category\AbstractCategory,
    Doctrine\ORM\Mapping as ORM,
    Doctrine\ORM\Mapping\Table,
    Doctrine\ORM\Mapping\Index;

/**
 * @ORM\Entity
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * The entity for our part categories
 *
 */
class PartCategory extends AbstractCategory {
	
}