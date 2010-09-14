<?php
namespace de\raumzeitlabor\PartDB2\Category;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Util\Singleton,
	de\RaumZeitLabor\PartDB2\Category\Category,
	de\RaumZeitLabor\PartDB2\Category\Exceptions\CategoryNotFoundException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class CategoryManager extends Singleton {
	public function getCategories ($parent = 0) {
		
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("c.*")->from("de\RaumZeitLabor\PartDB2\Category\Category","c");
		$qb->where("c.parent = :parent");
		$qb->setParameter("parent", $parent);
		
		$result = $qb->getQuery()->getArrayResult();
		return array("categories" => $result);
	}
	
	public function getAllCategories () {
		
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select("c")->from("de\RaumZeitLabor\PartDB2\Category\Category","c");
		
		$result = $qb->getQuery()->getArrayResult();
		return array("categories" => $result);
	}
	
	
	public function addCategory ($categoryName, $parent, $description = "") {
		$category = new Category();
		$category->setDescription($description);
		$category->setName($categoryName);
		$category->setParent($parent);
		
		PartDB2::getEM()->persist($category);
		
	}
	
	public function deleteCategory ($id) {
		$category = PartDB2::getEM()->find("de\RaumZeitLabor\PartDB2\Category\Category", $id);
		
		if ($category) {
			PartDB2::getEM()->remove($category);
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
			return $category;
		} else {
			throw new CategoryNotFoundException;
		}
	}
}