<?php
namespace de\RaumZeitLabor\PartKeepr\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Category\CategoryManager;
use DoctrineExtensions\NestedSet\NodeWrapper;


class CategoryService extends Service {

	public function getCategories () {
		$categories = CategoryManager::getInstance()->getAllCategories(
			$this->getParameter("parent", 0));
			
		return $this->serializeTree($categories);
	}
	
	public function moveCategory () {
		$this->requireParameter("category");
		$this->requireParameter("target");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("category"));
		
		if (intval($this->getParameter("target", 0)) !== 0) {
			
			$parent = CategoryManager::getInstance()->getCategory($this->getParameter("target"));
			
			$category->moveAsLastChildOf($parent);
			
		}
	}
	
	public function deleteCategory () {
		$this->requireParameter("id");
		
		CategoryManager::getInstance()->deleteCategory($this->getParameter("id"));
		
		return array("id" => $this->getParameter("id"));
	}
	
	public function update () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("id"));
		
		$category->getNode()->setName($this->getParameter("name"));
		$category->getNode()->setDescription($this->getParameter("description", ""));
		
		CategoryManager::getInstance()->saveCategory($category->getNode());
		
		return array("data" => $this->serializeCategory($category));
	}
	
	public function create () {
		$this->requireParameter("name");
		$this->requireParameter("parent");
		
		$category = new Category;
		$category->setName($this->getParameter("name"));
		$category->setDescription($this->getParameter("description", ""));
		$category->setParent($this->getParameter("parent"));
		
		$category = CategoryManager::getInstance()->addCategory($category);
		
		return array("data" => $this->serializeCategory($category));
	}

	// Old stuff below
	
	public function getCategory () {
		$this->requireParameter("id");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("id"));
		
		return $this->serializeCategory($category);
		
	}
	
	private function serializeCategory ($category) {
		$data = $category->getNode()->serialize();
		
		if ($category->getParent() !== null) {
			$data["parent"] = $category->getParent()->getNode()->getId();
			$data["parentName"] = $category->getParent()->getNode()->getName();
		}

		return $data;
	}
	
	public function getAllCategories () {
		return $this->serializeTree(CategoryManager::getInstance()->getAllCategories());
	}
	
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
}
?>