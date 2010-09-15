<?php 
namespace de\RaumZeitLabor\PartDB2\Category;
declare(encoding = 'UTF-8');

use DoctrineExtensions\NestedSet\Node;

/** @Entity @Table(name="categories",indexes={@index(name="lft", columns={"lft"}),@index(name="rgt", columns={"rgt"})}) */
class Category implements Node {
	/** @Id @Column(type="integer") 
	 * @GeneratedValue(strategy="AUTO")
	 */
	private $id;
	
	  /**
     * @Column(type="integer")
     */
    private $lft;

    /**
     * @Column(type="integer")
     */
    private $rgt;
    
	/** @Column(length=128) */
	private $name;
	
	/** @Column(length=32768) */
	private $description;
	
	public function setName ($name) {
		$this->name = $name;
	}
	
	public function setParent ($id) {
		$this->parent = $id;
	}
	
	public function setDescription ($description) {
		$this->description = $description;
	}
	

	public function getName () {
		return $this->name;
	}
    public function getId() { return $this->id; }

    public function getLeftValue() { return $this->lft; }
    public function setLeftValue($lft) { $this->lft = $lft; }

    public function getRightValue() { return $this->rgt; }
    public function setRightValue($rgt) { $this->rgt = $rgt; }
    
	public function serialize () {
		return array(
					"id" => $this->id,
					"name" => $this->name,
					"description" => $this->description
		
		);
	}
	
	public function __toString () {}
}
?>