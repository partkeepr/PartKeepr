<?php 
namespace de\RaumZeitLabor\PartDB2\Category;
declare(encoding = 'UTF-8');

/** @Entity @Table(name="categories") */

class Category {
	/** @Id @Column(type="integer") 
	 * @GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	/** @Column(length=128) */
	private $name;
	
	/** @Column(length=32768) */
	private $description;
	
	/** @Column(type="integer") */
	private $parent = 0;
	
	public function getId () {
		return $this->id;
	}
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function setParent ($id) {
		$this->parent = $id;
	}
	
	public function setDescription ($description) {
		$this->description = $description;
	}
}
?>