<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

use	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategoryManager,
	de\RaumZeitLabor\PartKeepr\PartCategory\PartCategory;

class PartCategorySetup {
	/**
	 * Holds the migrated categories
	 * @var array
	 */
	private static $migratedCategories = array();
	
	/**
	 * Sets up the root category node
	 */
	public function setupRootCategory () {
		PartCategoryManager::getInstance()->ensureRootExists();
	}
	
	public function run () {
		$this->setupRootCategory();
	}
	
	/**
	 * Migrates the old categories
	 */
	public static function migrateCategories () {
		Setup::progress("Migrating part categories...");
		$r = mysql_query("SELECT * FROM categories");
		
		$categories = array();
		
		while ($cat = mysql_fetch_assoc($r)) {
			$categories[] = $cat;
		}
		
		PartCategorySetup::addCategoryRecursive($categories, 0, PartCategoryManager::getInstance()->getRootNode());
	}
	
	/**
	 * Creates the category tree, recursive
	 * @param array $aCategories the categories
	 * @param id $currentId The current ID to migrate
	 * @param Node $parent The parent node
	 */
	private static function addCategoryRecursive ($aCategories, $currentId, $parent) {
		global $newCategories;
	
		foreach ($aCategories as $aCategory) {
			if ($aCategory["parentnode"] == $currentId) {
				Setup::progress(" - Adding ".$aCategory["name"], true);
				$oCategory = new PartCategory();
				$oCategory->setName(Setup::convertText($aCategory["name"]));
				$oCategory->setDescription("");
				$oCategory->setParent($parent->getId());
					
				$category = PartCategoryManager::getInstance()->addCategory($oCategory);
					
				PartCategorySetup::addCategoryRecursive($aCategories, $aCategory["id"], $category);
					
				PartCategorySetup::$migratedCategories[$aCategory["id"]] = $oCategory;
			}
		}
	
	}
	
	/**
	 * Returns a migrated category by it's partdb id
	 * @param int $id the category partdb id
	 */
	public static function getMigratedCategory ($id) {
		if (!array_key_exists($id, PartCategorySetup::$migratedCategories)) {
			return null;
		}
		
		return PartCategorySetup::$migratedCategories[$id];
	}
}
