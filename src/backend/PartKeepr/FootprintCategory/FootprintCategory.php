<?php 
namespace PartKeepr\FootprintCategory;

use PartKeepr\Category\AbstractCategory;

/**
 * @Entity
 * @Table(indexes={@index(columns={"lft"}),@index(columns={"rgt"})})
 * The entity for our footprint categories
 *
 */
class FootprintCategory extends AbstractCategory {
	
}