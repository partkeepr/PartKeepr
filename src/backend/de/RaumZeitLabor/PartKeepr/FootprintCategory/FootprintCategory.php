<?php 
namespace de\RaumZeitLabor\PartKeepr\FootprintCategory;

use de\RaumZeitLabor\PartKeepr\Category\AbstractCategory;

/**
 * @Entity
 * @Table(indexes={@index(columns={"lft"}),@index(columns={"rgt"})})
 * The entity for our footprint categories
 *
 */
class FootprintCategory extends AbstractCategory {
	
}