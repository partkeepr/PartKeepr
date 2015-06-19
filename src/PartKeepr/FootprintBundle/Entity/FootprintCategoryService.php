<?php 
namespace PartKeepr\FootprintBundle\Entity;

use PartKeepr\Category\AbstractCategoryService;

class FootprintCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "PartKeepr\FootprintBundle\Entity\FootprintCategoryManager";
	protected $categoryClass = "PartKeepr\FootprintBundle\Entity\FootprintCategory";
}