<?php
namespace de\RaumZeitLabor\PartKeepr\Category;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\Category\CategoryManager,
	DoctrineExtensions\NestedSet\NodeWrapper;


abstract class AbstractCategoryService extends Service {
	protected $categoryManagerClass = "de\RaumZeitLabor\PartKeepr\Category\AbstractCategoryManager";
	protected $categoryClass = "de\RaumZeitLabor\PartKeepr\Category\AbstractCategory";
	
	/**
	 * Returns all categories found in the system.
	 * @return array A serialized tree
	 */
	public function getCategories () {
		$categories = $this->getCategoryManager()->getAllCategories(
			$this->getParameter("parent", 0));
			
		return $this->serializeTree($categories);
	}
	
	/**
	 * Moves the given category from one to another category.
	 */
	public function moveCategory () {
		$this->requireParameter("category");
		$this->requireParameter("target");
		
		$category = $this->getCategoryManager()->getCategory($this->getParameter("category"));
		
		if (intval($this->getParameter("target", 0)) !== 0) {
			
			$parent = $this->getCategoryManager()->getCategory($this->getParameter("target"));
			
			$category->moveAsLastChildOf($parent);
			
		}
	}

	/**
	 * Deletes the given category.
	 */
	public function deleteCategory () {
		$this->requireParameter("id");
		
		$this->getCategoryManager()->deleteCategory($this->getParameter("id"));
		
		return array("id" => $this->getParameter("id"));
	}
	
	/**
	* Updates the given category.
	*/
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$category = $this->getCategoryManager()->getCategory($this->getParameter("id"));
		
		$category->getNode()->setName($this->getParameter("name"));
		$category->getNode()->setDescription($this->getParameter("description", ""));
		
		PartKeepr::getEM()->persist($category->getNode());
		
		return array("data" => $this->serializeCategory($category));
	}
	
	public function create () {
		$this->requireParameter("name");
		$this->requireParameter("parent");
		
		$category = new $this->categoryClass;
		$category->setName($this->getParameter("name"));
		$category->setDescription($this->getParameter("description", ""));
		$category->setParent($this->getParameter("parent"));
		
		$category = $this->getCategoryManager()->addCategory($category);
		
		return array("data" => $this->serializeCategory($category));
	}
	
	public function destroy () {
		return $this->deleteCategory();
	}
	
	private function serializeCategory ($category) {
		$data = $category->getNode()->serialize();
		
		if ($category->getParent() !== null) {
			$data["parent"] = $category->getParent()->getNode()->getId();
			$data["parentName"] = $category->getParent()->getNode()->getName();
		}

		return $data;
	}
	
	/**
	 * Returns all categories
	 */
	public function getAllCategories () {
		return $this->serializeTree($this->getCategoryManager()->getAllCategories());
	}
	
	/**
	 * Serializes the given NodeWrapper as array including all children.
	 * @param NodeWrapper $node The category nodewrapper to serialize
	 * @throws \Exception
	 */
	public function serializeTree (NodeWrapper $node = null) {
		if ($node == null) {
			throw new \Exception("Node must not be null!");
		}
		
		$aData = $node->getNode()->serialize();
		
		$aData["children"] = array();

		if (count($node->getChildren()) == 0) {
			$aData["leaf"] = true;
		} else {
			$aData["expanded"] = true;
		}
		
		foreach ($node->getChildren() as $child) {
			$aData["children"][] = $this->serializeTree($child);
			
		}
		
		return $aData;
	}
	
	public function getCategoryManager () {
		$categoryManager = $this->categoryManagerClass;
		
		return $categoryManager::getInstance();
	}
}
?>