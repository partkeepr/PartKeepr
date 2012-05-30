<?php 
namespace PartKeepr\FootprintCategory;

use PartKeepr\Category\AbstractCategoryService;

class FootprintCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "PartKeepr\FootprintCategory\FootprintCategoryManager";
	protected $categoryClass = "PartKeepr\FootprintCategory\FootprintCategory";
}