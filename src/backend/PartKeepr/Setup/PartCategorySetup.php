<?php
namespace PartKeepr\Setup;

use	PartKeepr\PartKeepr,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\PartCategory\PartCategory;

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
