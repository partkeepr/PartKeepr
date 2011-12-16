<?php 
namespace de\RaumZeitLabor\PartKeepr\FootprintCategory;

use de\RaumZeitLabor\PartKeepr\Category\AbstractCategoryService;

class FootprintCategoryService extends AbstractCategoryService {
	protected $categoryManagerClass = "de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategoryManager";
	protected $categoryClass = "de\RaumZeitLabor\PartKeepr\FootprintCategory\FootprintCategory";
}