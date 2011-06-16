<?php 
namespace de\RaumZeitLabor\PartKeepr\Category;

use de\RaumZeitLabor\PartKeepr\Util\BaseEntity;
use de\RaumZeitLabor\PartKeepr\Util\Serializable;
use DoctrineExtensions\NestedSet\Node;

declare(encoding = 'UTF-8');

/**
 * @Entity
 * @Table(indexes={@index(name="lft", columns={"lft"}),@index(name="rgt", columns={"rgt"})})
 * 
 * Represents a category within the system.
 */
class Category extends BaseEntity implements Node, Serializable {
	/**
	 * The "left" property of the nested set
     * @Column(type="integer")
     * @var integer
     */
    private $lft;

    /**
     * The "right" property of the nested set
     * @Column(type="integer")
     * @var integer
     */
    private $rgt;
    
	/**
	 * The name of the category
	 * @Column(length=128)
	 * @var string
	 */
	private $name;
	
	/**
	 * The description of the category
	 * @Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Holds the parent node ID. Note that this
	 * is not a persistant value, but rather calculated
	 * or set on the fly.
	 * @var int
	 */
	private $parent;
	
	/**
	 * Sets the name of this category
	 * @param string $name The name to set
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name of this category
	 * @return string The category name
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the parent for this category.
	 * 
	 * @param int $id The parent node
	 */
	public function setParent ($id) {
		$this->parent = $id;
	}
	
	/**
	 * Returns the parent node for this node.
	 * @return int The parent node
	 */
	public function getParent () {
		return $this->parent;
	}
	
	/**
	 * Sets the description for this category
	 * @param string $description The description of this category
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}
	
	/**
	 * Returns the description of this category
	 * @return string The description
	 */
	public function getDescription () {
		return $this->description;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see DoctrineExtensions\NestedSet.Node::getLeftValue()
	 */
    public function getLeftValue() {
    	return $this->lft;
    }
    
    /**
     * (non-PHPdoc)
     * @see DoctrineExtensions\NestedSet.Node::setLeftValue()
     */
    public function setLeftValue($lft) {
    	$this->lft = $lft;
    }

    /**
     * (non-PHPdoc)
     * @see DoctrineExtensions\NestedSet.Node::getRightValue()
     */
    public function getRightValue() {
    	return $this->rgt;
    }
    
    /**
     * (non-PHPdoc)
     * @see DoctrineExtensions\NestedSet.Node::setRightValue()
     */
    public function setRightValue($rgt) {
    	$this->rgt = $rgt;
    }
    
	/**
	 * Serializes the entity.
	 */
	public function serialize () {
		return array(
					"id" => $this->getId(),
					"name" => $this->getName(),
					"description" => $this->getDescription()
		);
	}
	
	/**
	 * (non-PHPdoc)
	 * @see DoctrineExtensions\NestedSet.Node::__toString()
	 */
	public function __toString () {
		return $this->getName();
	}
	
}
