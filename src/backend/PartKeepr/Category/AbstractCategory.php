<?php 
namespace PartKeepr\Category;

use PartKeepr\Util\BaseEntity;
use PartKeepr\Util\Serializable;
use DoctrineExtensions\NestedSet\Node,
    Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 * 
 * Represents an abstract category. This class isn't directly usable; you need to inherit it to take advantage of
 * the AbstractCategoryManager.
 * 
 * If you are interested on how NestedSets work, please read http://en.wikipedia.org/wiki/Nested_set_model
 */
class AbstractCategory extends BaseEntity implements Node, Serializable {
    /**
     * The "left" property of the nested set
     * @ORM\Column(type="integer")
     * @var integer
     */
    private $lft;

    /**
     * The "right" property of the nested set
     * @ORM\Column(type="integer")
     * @var integer
     */
    private $rgt;
    
	/**
	 * The name of the category
	 * @ORM\Column(length=128)
	 * @var string
	 */
	private $name;
	
	/**
	 * The description of the category
	 * @ORM\Column(type="text",nullable=true)
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
	 * Holds the category path.
	 * 
	 * @ORM\Column(type="text",nullable=true)
	 * 
	 * @var string
	 */
	private $categoryPath;
	
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
	 * Returns the "left" value of the nested set.
	 * 
	 * @return int The left value
	 * 
	 * (non-PHPdoc)
	 * @see DoctrineExtensions\NestedSet.Node::getLeftValue()
	 */
    public function getLeftValue() {
    	return $this->lft;
    }
    
    /**
     * Sets the "left" value.
     * 
     * @param $lft integer The left value
     * (non-PHPdoc)
     * @see DoctrineExtensions\NestedSet.Node::setLeftValue()
     */
    public function setLeftValue($lft) {
    	$this->lft = $lft;
    }

    /**
     * Returns the "right" value of the nested set.
     * 
     * @return int The right value
     * 
     * (non-PHPdoc)
     * @see DoctrineExtensions\NestedSet.Node::getRightValue()
     */
    public function getRightValue() {
    	return $this->rgt;
    }
    
    /**
     * Sets the "right" value of the nested set
     * 
     * @param $rgt int The right value
     * 
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
	 * Returns a string representation of the current node.
	 * 
	 * @return string The node name
	 * 
	 * (non-PHPdoc)
	 * @see DoctrineExtensions\NestedSet.Node::__toString()
	 */
	public function __toString () {
		return $this->getName();
	}
	
	/**
	 * Retrieves the category path
	 * 
	 * @return string The category path
	 */
	public function getCategoryPath () {
		return $this->categoryPath;
	}
	
	/**
	 * Sets the category path.
	 * 
	 * THIS IS ONLY TO BE CALLED FROM THE CATEGORYMANAGER! DON'T MESS WITH IT!
	 * 
	 * @param string $categoryPath
	 */
	public function setCategoryPath ($categoryPath) {
		$this->categoryPath = $categoryPath;
	}
	
}
