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
	/**
	 * Holds the node manager
	 * @var object The node manager
	 */
	private $nodeManager;
	
	/**
	 * Returns the node manager. Creates it if it doesn't exist.
	 * @todo Can this method be made private?
	 * @return Manager The node manager
	 */
	public function getNodeManager () {
		if (!$this->nodeManager) {
			$config = new Config(PartKeepr::getEM(), 'de\RaumZeitLabor\PartKeepr\Category\Category');
		
			$this->nodeManager = new Manager($config);
		}

		return $this->nodeManager;
	}

	/**
	 * Returns the child node id's for a given node id.
	 * @param integer $id The ID for which to retrieve the child nodes
	 * @return array An array of the children id's
	 * @todo Refactor this method name to indicate that it operates on IDs only.
	 */
	public function getChildNodes ($id) {
		$category = $this->getCategory($id);
		
		$aData = array();
		
		foreach ($category->getDescendants() as $cat) {
			$aData[] = $cat->getNode()->getId();	
		}
		return $aData;
	}
	
	/**
	 * Returns all categories.
	 * @return The category tree
	 */
	public function getAllCategories () {
		return $this->getNodeManager()->fetchTree(1);
	}
	
	/**
	 * Ensures that the root node exists. If not, this method creates it.
	 */
	public function ensureRootExists () {
		/* Check if the root node exists */
		$rootNode = $this->getNodeManager()->fetchTree(1);
		
		if ($rootNode === null) {
			$this->createRootNode();
		}
	}
	
	/**
	 * Returns the root node for the category tree.
	 * @return The category root node
	 */
	public function getRootNode () {
		return $this->getNodeManager()->fetchTree(1);
	}
	
	/**
	 * Create the root node for the category tree.
	 */
	public function createRootNode () {
		$rootNode = new Category();
		$rootNode->setName("Root Category");
		$rootNode->setDescription("");
		
		$this->getNodeManager()->createRoot($rootNode);
	}
	
	/**
	 * Adds a given category.
	 * @param Category $category The category to add to the tree
	 * @return Category the added category 
	 */
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

	/**
	 * Deletes the given category ID.
	 * @param $id int The category id to delete
	 * @throws CategoryNotFoundException If the category wasn't found
	 */
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
			throw new CategoryNotFoundException($id);
		}
	}
	
	/**
	 * Returns the category with the given ID.
	 * @param int $id The category id
	 * @throws CategoryNotFoundException If the category wasn't found
	 */
	public function getCategory ($id) {
		$category = PartKeepr::getEM()->find("de\RaumZeitLabor\PartKeepr\Category\Category", $id);
		
		
		
		if ($category) {
			$category = new NodeWrapper($category, $this->getNodeManager());
			
			return $category;
		} else {
			throw new CategoryNotFoundException($id);
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