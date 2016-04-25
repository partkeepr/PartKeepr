<?php

namespace PartKeepr\CategoryBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\MappedSuperclass()
 * @ORM\Table(indexes={@ORM\Index(columns={"lft"}),@ORM\Index(columns={"rgt"})})
 *
 * Represents an abstract category. This class isn't directly usable; you need to inherit it to take advantage of
 * the AbstractCategoryManager.
 *
 * If you are interested on how NestedSets work, please read http://en.wikipedia.org/wiki/Nested_set_model
 */
abstract class AbstractCategory extends BaseEntity
{
    /**
     * The parent category. This needs to be re-defined in the class with the proper relations.
     *
     * @var
     */
    protected $parent;

    /**
     * The "left" property of the nested set.
     *
     * @ORM\Column(type="integer")
     *
     * @Gedmo\TreeLeft
     *
     * @var int
     */
    private $lft;

    /**
     * The "right" property of the nested set.
     *
     * @ORM\Column(type="integer")
     *
     * @Gedmo\TreeRight
     *
     * @var int
     */
    private $rgt;

    /**
     * @Gedmo\TreeLevel
     * @ORM\Column(name="lvl", type="integer")
     *
     * @var int
     */
    private $lvl;

    /**
     * @Gedmo\TreeRoot
     * @ORM\Column(name="root", type="integer", nullable=true)
     */
    private $root;

    /**
     * The name of the category.
     *
     * @ORM\Column(length=128)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * The description of the category.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * @Groups({"default"})
     *
     * @var bool
     */
    public $expanded = true;

    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * Sets the name of this category.
     *
     * @param string $name The name to set
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of this category.
     *
     * @return string The category name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Returns the level of this category.
     *
     * @return int
     */
    public function getLevel()
    {
        return $this->lvl;
    }

    /**
     * Sets the description for this category.
     *
     * @param string $description The description of this category
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the description of this category.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Returns the "left" value of the nested set.
     *
     * @return int The left value
     *
     * (non-PHPdoc)
     *
     * @see DoctrineExtensions\NestedSet.Node::getLeftValue()
     */
    public function getLeftValue()
    {
        return $this->lft;
    }

    /**
     * Sets the "left" value.
     *
     * @param $lft integer The left value
     *             (non-PHPdoc)
     *
     * @see DoctrineExtensions\NestedSet.Node::setLeftValue()
     */
    public function setLeftValue($lft)
    {
        $this->lft = $lft;
    }

    /**
     * Returns the "right" value of the nested set.
     *
     * @return int The right value
     *
     * (non-PHPdoc)
     *
     * @see DoctrineExtensions\NestedSet.Node::getRightValue()
     */
    public function getRightValue()
    {
        return $this->rgt;
    }

    /**
     * Sets the "right" value of the nested set.
     *
     * @param $rgt int The right value
     *
     * (non-PHPdoc)
     *
     * @see DoctrineExtensions\NestedSet.Node::setRightValue()
     */
    public function setRightValue($rgt)
    {
        $this->rgt = $rgt;
    }

    /**
     * Sets the root of the tree.
     *
     * @param $root
     */
    public function setRoot($root)
    {
        $this->root = $root;
    }

    /**
     * Returns the root of the tree.
     *
     * @return mixed
     */
    public function getRoot()
    {
        return $this->root;
    }
}
