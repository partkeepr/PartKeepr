<?php 
namespace PartKeepr\PartCategory;

use PartKeepr\Category\AbstractCategoryService;

class PartCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "PartKeepr\PartCategory\PartCategoryManager";
	protected $categoryClass = "PartKeepr\PartCategory\PartCategory";
}