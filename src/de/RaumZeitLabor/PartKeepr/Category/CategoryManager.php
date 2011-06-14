<?php
namespace de\raumzeitlabor\PartKeepr\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\Category\Category,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\Category\Exceptions\CategoryNotFoundException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;
use DoctrineExtensions\NestedSet\Manager;
use DoctrineExtensions\NestedSet\Config;
use DoctrineExtensions\NestedSet\NodeWrapper;

class CategoryManager extends Singleton {
	private $nodeManager;
		
	public function getNodeManager () {
		if (!$this->nodeManager) {
			$config = new Config(PartKeepr::getEM(), 'de\RaumZeitLabor\PartKeepr\Category\Category');
		
			$this->nodeManager = new Manager($config);
		}

		return $this->nodeManager;
	}
	
	public function getChildNodes ($id) {
		$category = $this->getCategory($id);
		
		$aData = array();
		
		foreach ($category->getDescendants() as $cat) {
			$aData[] = $cat->getNode()->getId();	
		}
		return $aData;
	}
	
	public function getAllCategories () {
		return $this->getNodeManager()->fetchTree(1);
	}
	
	
	public function ensureRootExists () {
		/* Check if the root node exists */
		$rootNode = $this->getNodeManager()->fetchTree(1);
		
		if ($rootNode === null) {
			$this->createRootNode();
		}
	}
	
	public function getRootNode () {
		return $this->getNodeManager()->fetchTree(1);
	}
	
	public function createRootNode () {
		$rootNode = new Category();
		$rootNode->setName("Root Category");
		$rootNode->setDescription("");
		
		$this->getNodeManager()->createRoot($rootNode);
	}
	
	public function addCategory (Category $category) {
		$parent = $category->getParent();
		 
		if ($parent == 0) {
			$parent = $this->getRootNode();
			
		} else {
			$parent = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Category\Category", $parent);	

			$parent = new NodeWrapper($parent, $this->getNodeManager());
		}
		
		return $parent->addChild($category);

		
	}
	
	public function deleteCategory ($id) {
		$category = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Category\Category", $id);
		
		
		if ($category) {
			try {
				$category = new NodeWrapper($category, $this->getNodeManager());
				
				if ($category->hasChildren()) {
					$exception = new SerializableException(sprintf(PartKeepr::i18n("Category '%s' contains other categories."), $category->getNode()->getName()));
					$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the category '%s', but it still contains other categories. Please move the categories or delete them first."), $category->getNode()->getName()));
				
					throw $exception;
				}
				$category->delete();	
			} catch (\PDOException $e) {
				if ($e->getCode() == "23000") {
					$exception = new SerializableException(sprintf(PartKeepr::i18n("Category '%s' contains parts."), $category->getNode()->getName()));
					$exception->setDetail(sprintf(PartKeepr::i18n("You tried to delete the category '%s', but it still contains parts. Please move the parts to another category."), $category->getNode()->getName()));
				
					throw $exception;
				}
			}
			
		} else {
			throw new CategoryNotFoundException;
		}
	}
	
	public function saveCategory ($category) {
		PartKeepr::getEM()->persist($category);
	}
	
	public function getCategory ($id) {
		$category = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Category\Category", $id);
		
		
		
		if ($category) {
			$category = new NodeWrapper($category, $this->getNodeManager());
			
			return $category;
		} else {
			throw new CategoryNotFoundException;
		}
	}

	/**
	 * Returns the overall category count currently existing.
	 * @return int The amount of categories in the database
	 */
	public function getCategoryCount () {
		$dql = "SELECT COUNT(c.id) FROM de\RaumZeitLabor\PartKeepr\Category\Category c";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
}