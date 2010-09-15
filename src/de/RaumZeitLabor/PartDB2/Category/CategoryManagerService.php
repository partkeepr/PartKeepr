<?php
namespace de\raumzeitlabor\PartDB2\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Category\CategoryManager;
use DoctrineExtensions\NestedSet\NodeWrapper;


class CategoryManagerService extends Service {

	public function getCategories () {
		return CategoryManager::getInstance()->getCategories(
			$this->getParameter("parent", 0));
	}

	public function addCategory () {
		$this->requireParameter("name");
		$this->requireParameter("parent");

		$category = CategoryManager::getInstance()->addCategory($this->getParameter("name"), $this->getParameter("parent"), $this->getParameter("description", ""));
		return $this->serializeCategory($category);
		
	}
	
	public function deleteCategory () {
		$this->requireParameter("id");
		
		CategoryManager::getInstance()->deleteCategory($this->getParameter("id"));
	}
	
	public function getCategory () {
		$this->requireParameter("id");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("id"));
		
		return $this->serializeCategory($category);
		
	}
	
	private function serializeCategory ($category) {
		$data = $category->getNode()->serialize();
		$data["parent"] = $category->getParent()->getNode()->getId();
		$data["parentName"] = $category->getParent()->getNode()->getName();

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
		
		foreach ($node->getChildren() as $child) {
			$aData["children"][] = $this->serializeTree($child);
		}
		return $aData;
	}
	
	public function saveCategory () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("id"));
		
		$category->getNode()->setName($this->getParameter("name"));
		$category->getNode()->setDescription($this->getParameter("description", ""));
		
		if (intval($this->getParameter("parent", 0)) !== 0) {
			
			$parent = CategoryManager::getInstance()->getCategory($this->getParameter("parent"));
			
			$category->moveAsLastChildOf($parent);
		}
		
		CategoryManager::getInstance()->saveCategory($category->getNode());
		
		return $this->serializeCategory($category);
	}
}
?>