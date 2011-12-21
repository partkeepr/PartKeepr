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
	
	public function run () {
		$this->setupRootCategory();
	}
}
