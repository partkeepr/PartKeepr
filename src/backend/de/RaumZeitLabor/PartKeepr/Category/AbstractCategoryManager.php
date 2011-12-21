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

abstract class AbstractCategoryManager extends Singleton {
	/**
	 * Holds the node manager
	 * @var object The node manager
	 */
	private $nodeManager;
	
	protected $categoryClass = "de\RaumZeitLabor\PartKeepr\Category\AbstractCategory";

	/**
	 * Returns the node manager. Creates it if it doesn't exist.
	 * @todo Can this method be made private?
	 * @return Manager The node manager
	 */
	public function getNodeManager () {
		if (!$this->nodeManager) {
			$config = new Config(PartKeepr::getEM(), $this->categoryClass);
		
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
		$rootNode = new $this->categoryClass();
		$rootNode->setName("Root Category");
		$rootNode->setDescription("");
		
		$this->getNodeManager()->createRoot($rootNode);
	}
	
	/**
	 * Adds a given category.
	 * @param Category $category The category to add to the tree
	 * @return Category the added category 
	 */
	public function addCategory (AbstractCategory $category) {
		$parent = $category->getParent();
		 
		if ($parent == 0) {
			$parent = $this->getRootNode();
			
		} else {
			
			$parent = PartKeepr::getEM()->find($this->categoryClass, $parent);	

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
		$this->getCategory($id)->delete();
	}
	
	/**
	 * Returns the category with the given ID.
	 * @param int $id The category id
	 * @throws CategoryNotFoundException If the category wasn't found
	 */
	public function getCategory ($id) {
		$category = $this->loadCategoryById($id);

		return new NodeWrapper($category, $this->getNodeManager());
	}

	/**
	 * Returns the overall category count currently existing.
	 * @return int The amount of categories in the database
	 */
	public function getCategoryCount () {
		$dql = "SELECT COUNT(c.id) FROM ".$this->categoryClass." c";
		
		return PartKeepr::getEM()->createQuery($dql)->getSingleScalarResult();
	}
	
	/**
	 * Creates a category tree by an array of category names
	 * @param array $aCategoryNames
	 * @param Category A category where to start searching at
	 */
	public function createCategoryTreeByArray ($aCategoryNames, NodeWrapper $rootNode = null) {
		if (count($aCategoryNames) == 0) {
			return false;
		}
		
		$categoryName = array_shift($aCategoryNames);
		
		if ($rootNode === null) {
			$rootNode = $this->getRootNode();
		}
		
		$bFound = false;
		foreach ($rootNode->getChildren() as $child) {
			if ($child->getNode()->getName() == $categoryName) {
				$bFound = true;
				$category = $child->getNode(); 
				break;
			}
		}
		
		if ($bFound === false) {
			$category = new $this->categoryClass();
			$category->setName($categoryName);
			$category->setDescription("");
			$category->setParent($rootNode->getId());
			$this->addCategory($category);
		}
		
		$result = $this->createCategoryTreeByArray($aCategoryNames,new NodeWrapper($category, $this->getNodeManager()));
		
		if ($result === false) {
			return $category;
		} else {
			return $result;
		}
	}
	
	/**
	 * Loads a category by id
	 * @param string $id
	 */
	protected function loadCategoryById($id) {
		$class = $this->categoryClass;
		
		return $class::loadById($id);
	}
}