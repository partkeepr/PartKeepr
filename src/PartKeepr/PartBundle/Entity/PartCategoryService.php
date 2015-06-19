<?php 
namespace PartKeepr\PartBundle\Entity;

use PartKeepr\Category\AbstractCategoryService;

class PartCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "PartKeepr\PartBundle\Entity\PartCategoryManager";
	protected $categoryClass = "PartKeepr\PartBundle\Entity\PartCategory";
}