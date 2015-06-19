<?php 
namespace PartKeepr\PartBundle\Entity;

use PartKeepr\Category\AbstractCategoryManager;
use DoctrineExtensions\NestedSet\NodeWrapper;
use PartKeepr\Util\SerializableException;
use PartKeepr\PartKeepr;

class PartCategoryManager extends AbstractCategoryManager {
	protected $categoryClass = "PartKeepr\PartBundle\Entity\PartCategory";
	
	/**
	 * Deletes the given category ID.
	 * @param $id int The category id to delete
	 * @throws CategoryNotFoundException If the category wasn't found
	 */
	public function deleteCategory ($id) {
		$category = $this->getCategory($id);
		
		try {
			
			if ($category->hasChildren()) {
				$exception = new SerializableException(sprintf(PartKeepr::i18n("Category '%s' contains other categories."), $category->getNode()->getName()));
				$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the category '%s', but it still contains other categories. Please move the categories or delete them first."), $category->getNode()->getName()));
			
				throw $exception;
			}
			
			parent::deleteCategory($id);	
		} catch (\PDOException $e) {
			if ($e->getCode() == "23000") {
				$exception = new SerializableException(sprintf(PartKeepr::i18n("Category '%s' contains parts."), $category->getNode()->getName()));
				$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the category '%s', but it still contains parts. Please move the parts to another category."), $category->getNode()->getName()));
				
				throw $exception;
			} else {
				throw $e;
			}
		}
	}
	
}