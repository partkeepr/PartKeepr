<?php
namespace de\raumzeitlabor\PartDB2\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Category\Category,
	de\RaumZeitLabor\PartDB2\Util\SerializableException,
	de\RaumZeitLabor\PartDB2\Category\Exceptions\CategoryNotFoundException,
	de\RaumZeitLabor\PartDB2\PartDB2;
use DoctrineExtensions\NestedSet\Manager;
use DoctrineExtensions\NestedSet\Config;
use DoctrineExtensions\NestedSet\NodeWrapper;

class CategoryManager extends Singleton {
	private $nodeManager;
		
	public function getNodeManager () {
		if (!$this->nodeManager) {
			$config = new Config(PartDB2::getEM(), 'de\RaumZeitLabor\PartDB2\Category\Category');
		
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
			$parent = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Category\Category", $parent);	

			$parent = new NodeWrapper($parent, $this->getNodeManager());
		}
		
		return $parent->addChild($category);

		
	}
	
	public function deleteCategory ($id) {
		$category = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Category\Category", $id);
		
		
		if ($category) {
			try {
				$category = new NodeWrapper($category, $this->getNodeManager());
				
				if ($category->hasChildren()) {
					$exception = new SerializableException(sprintf(PartDB2::i18n("Category '%s' contains other categories."), $category->getNode()->getName()));
					$exception->setDetail(sprintf(PartDB2::i18n("You tried to delete the category '%s', but it still contains other categories. Please move the categories or delete them first."), $category->getNode()->getName()));
				
					throw $exception;
				}
				$category->delete();	
			} catch (\PDOException $e) {
				if ($e->getCode() == "23000") {
					$exception = new SerializableException(sprintf(PartDB2::i18n("Category '%s' contains parts."), $category->getNode()->getName()));
					$exception->setDetail(sprintf(PartDB2::i18n("You tried to delete the category '%s', but it still contains parts. Please move the parts to another category."), $category->getNode()->getName()));
				
					throw $exception;
				}
			}
			
		} else {
			throw new CategoryNotFoundException;
		}
	}
	
	public function saveCategory ($category) {
		PartDB2::getEM()->persist($category);
	}
	
	public function getCategory ($id) {
		$category = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Category\Category", $id);
		
		
		
		if ($category) {
			$category = new NodeWrapper($category, $this->getNodeManager());
			
			return $category;
		} else {
			throw new CategoryNotFoundException;
		}
	}
}