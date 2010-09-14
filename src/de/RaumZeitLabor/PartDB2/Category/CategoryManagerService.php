<?php
namespace de\raumzeitlabor\PartDB2\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Category\CategoryManager;

class CategoryManagerService extends Service {
	public function getCategories () {
		return CategoryManager::getInstance()->getCategories(
			$this->getParameter("parent", 0));
	}

	public function addCategory () {
		$this->requireParameter("name");
		$this->requireParameter("parent");
				
		CategoryManager::getInstance()->addCategory($this->getParameter("name"), $this->getParameter("parent"), $this->getParameter("description", ""));
	}
	
	public function deleteCategory () {
		$this->requireParameter("id");
		
		CategoryManager::getInstance()->deleteCategory($this->getParameter("id"));
	}
	
	public function getCategoriy () {
		$this->requireParameter("id");
		
		return CategoryManager::getInstance()->getCategory($this->getParameter("id"))->serialize();
	}
	
	public function getAllCategories () {
		return CategoryManager::getInstance()->getAllCategories();
	}
	
	public function saveCategory () {
		$this->requireParameter("id");
		$this->requireParameter("name");
		
		$category = CategoryManager::getInstance()->getCategory($this->getParameter("id"));
		
		$category->setName($this->getParameter("name"));
		$category->setDescription($this->getParameter("description", ""));
		
		if (intval($this->getParameter("parent", 0)) !== 0) {
			$category->setParent($this->getParameter("parent"));
		}
		
		CategoryManager::getInstance()->saveCategory($category);
		
		return $category->serialize();
	}
}
?>