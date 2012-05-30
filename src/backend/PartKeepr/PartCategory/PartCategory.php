<?php 
namespace PartKeepr\PartCategory;

use PartKeepr\Category\AbstractCategory;

/**
 * @Entity
 * @Table(indexes={@index(columns={"lft"}),@index(columns={"rgt"})})
 * The entity for our part categories
 *
 */
class PartCategory extends AbstractCategory {
	
}