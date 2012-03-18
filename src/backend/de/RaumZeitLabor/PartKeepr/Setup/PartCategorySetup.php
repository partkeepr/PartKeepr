<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory;

class PartCategorySetup extends AbstractSetup {
	/**
	 * Sets up the root category node
	 */
	public function setupRootCategory () {
		PartCategoryManager::getInstance()->ensureRootExists();
	}
	
	public function updateCategoryPathCache () {
		PartCategoryManager::getInstance()->updateCategoryPaths(
			PartCategoryManager::getInstance()->getRootNode()
		);
		
		PartKeepr::getEM()->flush();
	}
	
	public function run () {
		$this->setupRootCategory();
		$this->updateCategoryPathCache();
	}
}
