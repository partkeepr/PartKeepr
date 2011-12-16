<?php 
namespace de\RaumZeitLabor\PartKeepr\PartCategory;

use de\RaumZeitLabor\PartKeepr\Category\AbstractCategoryService;

class PartCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager";
	protected $categoryClass = "de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory";
}