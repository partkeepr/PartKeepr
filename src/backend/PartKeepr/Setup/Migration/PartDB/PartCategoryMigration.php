<?php
namespace PartKeepr\Setup\Migration\PartDB;

use	PartKeepr\PartKeepr,
	PartKeepr\PartCategory\PartCategory,
	PartKeepr\PartCategory\PartCategoryManager,
	PartKeepr\Setup\AbstractSetup;

class PartCategoryMigration extends AbstractSetup {
	private $categories = array();
	private static $migratedCategories = array();
	/**
	 * Migrates the old categories
	 */
	public function run () {
		$this->addCategoryRecursive(0, array());
		
		foreach ($this->categories as $oldid => $category) {
			$newcategory = PartCategoryManager::getInstance()->createCategoryTreeByArray($category);
			
			self::$migratedCategories[$oldid] = $newcategory;
		}
		
	}
	
	/**
	 * Creates the category tree, recursive
	 * @param array $aCategories the categories
	 * @param id $currentId The current ID to migrate
	 * @param Node $parent The parent node
	 */
	private function addCategoryRecursive ($parentId, $parents) {
		$r = mysql_query("SELECT * FROM categories WHERE parentnode = ".intval($parentId));
		
		while ($category = mysql_fetch_array($r)) {
			$aCopy = $parents;
			$aCopy[] = $category["name"];
			
			$this->categories[$category["id"]] = $aCopy;
			$this->addCategoryRecursive($category["id"], $aCopy);
		}
	}
	
	public static function getMigratedCategory ($id) {
		if (!array_key_exists($id, self::$migratedCategories)) {
			print_r(self::$migratedCategories);
		}
		return self::$migratedCategories[$id];
	}
}
