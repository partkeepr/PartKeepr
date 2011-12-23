<?php 
namespace de\RaumZeitLabor\PartKeepr\PartCategory;

use de\RaumZeitLabor\PartKeepr\Category\AbstractCategory;

declare(encoding = 'UTF-8');

/**
 * @Entity
 * @Table(indexes={@index(columns={"lft"}),@index(columns={"rgt"})})
 * The entity for our part categories
 *
 */
class PartCategory extends AbstractCategory {
	
}