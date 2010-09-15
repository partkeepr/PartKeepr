Doctrine2 NestedSet
===================

This Doctrine2 extension implements the nested set model (modified pre-order
tree traversal algorithm) for Doctrine2.  This allows storing hierarchical
data, a collection of data where each item has a single parent and zero or
more children, in the flat tables of a relational database.  For more
information on the nested set model, see:

[http://dev.mysql.com/tech-resources/articles/hierarchical-data.html](http://dev.mysql.com/tech-resources/articles/hierarchical-data.html)


## Introduction

Nested Set is a solution for storing hierarchical data that provides very fast
read access. However, updating nested set trees is more costly. Therefore this
solution is best suited for hierarchies that are much more frequently read
than written to. And because of the nature of the web, this is the case for
most web applications.


## Setting Up

To set up your model as a Nested Set, your entity classes must implement the
`DoctrineExtensions\NestedSet\Node` interface.  Each entity class must contain
mapped fields for holding the Nested Set left and right values.

Here's an example using annotation mapping:

    namespace Entity;

    use DoctrineExtensions\NestedSet\Node;

    class Category implements Node
    {
        /**
         * @Id @Column(type="integer")
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

        /**
         * @Column(type="string", length="16")
         */
        private $name;


        public function getId() { return $this->id; }

        public function getLeftValue() { return $this->lft; }
        public function setLeftValue($lft) { $this->lft = $lft; }

        public function getRightValue() { return $this->rgt; }
        public function setRightValue($rgt) { $this->rgt = $rgt; }

        public function __toString() { return $this->name; }
    }

Generally you do not need to, and should not, interact with the left and right
fields.  These are used internally to manage the tree structure.


## Multiple Trees

The nested set implementation can be configured to allow your table to have
multiple root nodes, and therefore multiple trees within the same table.  This
is done by implementing the `DoctrineExtensions\NestedSet\MultipleRootNode`
interface (instead of `DoctrineExtensions\NestedSet\Node`) and mapping a root
field.

Extending our annotation example:

    /**
     * @Column(type="integer")
     */
    private $root;

    public function getRootValue() { return $this->root; }
    public function setRootValue($root) { $this->root = $root; }

Like the left and right fields, you generally do not need to interact with the
root value.


## Working with Trees

After you successfully set up your model as a nested set you can start working
with it.  Working with Doctrine2's nested set implementation is all about two
classes: Manager and NodeWrapper.  NodeWrapper wraps your entity classes
giving you access to the underlying tree structure.  Manager provides methods
for creating new trees and fetching existing trees.

To fetch an entire tree from the database:

    $config = new Config($em, 'Entity\Category');
    $nsm = new Manager($config);
    $rootNode = $nsm->fetchTree(1);

In this example, `$rootNode` is an instance of `NodeWrapper` wrapping your
model's root node.  To get access to your model object:

    $modelObject = $rootNode->getNode();


### Creating a Root Node

    $config = new Config($em, 'Entity\Category');
    $nsm = new Manager($config);

    $category = new Category();
    $category->name = 'Root Category 1';

    $rootNode = $nsm->createRoot($category);


### Inserting a Node

    $child1 = new Category();
    $child1->name = 'Child Category 1';

    $child2 = new Category();
    $child2->name = 'Child Category 2';

    $rootNode->addChild($child1);
    $rootNode->addChild($child2);


### Deleting a Node

You must always delete a node using the `NodeWrapper::delete()` method instead
of EntityManager's delete method.  `NodeWrapper::delete()` takes care of
updating the tree when deleting nodes:

    $category = $em->getRepository('Entity\Category')->findOneByName('Child Category 1');
    $node = $nsm->wrapNode($category);
    $node->delete();

Deleting a node will also delete all descendants of that node. So make sure
you move them elsewhere before you delete the node if you don't want to delete
them.


### Moving a Node

Moving a node is simple.  NodeWrapper offers several methods for moving nodes
around between trees:

* moveAsLastChildOf($other)
* moveAsFirstChildOf($other)
* moveAsPrevSiblingOf($other)
* moveAsNextSiblingOf($other)


### Examining a Node

You can examine the nodes and what type of node they are by using some of the
following functions:

    $isLeaf = $node->isLeaf();
    $isRoot = $node->isRoot();


### Examining and Retrieving Siblings

You can easily check if a node has any next or previous siblings by using the
following methods:

    $hasNextSib = $node->hasNextSibling();
    $hasPrevSib = $node->hasPrevSibling();

You can also retrieve the next or previous siblings if they exist with the
following methods:

    $nextSib = $node->getNextSibling();
    $prevSib = $node->getPrevSibling();

If you want to retrieve an array of all the siblings you can simply use the
`getSiblings()` method:

    $siblings = $node->getSiblings();


### Examining and Retrieving Descendants

You can check if a node has a parent or children by using the following
methods:

    $hasChildren = $node->hasChildren();
    $hasParent = $node->hasParent();

You can retrieve a nodes first and last child by using the following methods:

    $firstChild = $node->getFirstChild();
    $lastChild = $node->getLastChild();

Or if you want to retrieve the parent of a node:

    $parent = $node->getParent();

You can get the children of a node by using the following method:

    $children = $node->getChildren();

> The `getChildren()` method returns only the direct descendants. If you want
> all descendants, use the `getDescendants()` method.

You can get the descendants or ancestors of a node by using the following
methods:

    $descendants = $node->getDescendants();
    $ancestors = $node->getAncestors();

Sometimes you may just want to get the number of children or descendants. You
can use the following methods to accomplish this:

    $numChildren = $node->getNumberChildren();
    $numDescendants = $node->getNumberDescendants();

The `getDescendants()` method accepts a parameter that you can use to specify
the depth of the resulting branch. For example `getDescendants(1)` retrieves
only the direct descendants (the descendants that are 1 level below, that's
the same as `getChildren()`).


### Rendering a Simple Tree

    $tree = $nsm->fetchTreeAsArray(1);

    foreach ($tree as $node) {
        echo str_repeat('&nbsp;&nbsp;', $node->getLevel()) . $node->getName() . "\n";
    }


## Advanced Usage

The previous sections have explained the basic usage of Doctrine's nested set
implementation. This section will go one step further.


### Fetching a Tree with Relations

If you're a demanding software developer this question may already have come
into your mind: "How do I fetch a tree/branch with related data?". Simple
example: You want to display a tree of categories, but you also want to
display some related data of each category, let's say some details of the
hottest product in that category. Fetching the tree as seen in the previous
sections and simply accessing the relations while iterating over the tree is
possible but produces a lot of unnecessary database queries. Luckily,
Manager and some flexibility in the nested set implementation have come
to your rescue. The nested set implementation uses `QueryBuilder` objects for
all it's database work. By giving you access to the base query builder of the
nested set implementation you can unleash the full power of `QueryBuilder`
while using your nested set.

    $qb = $em->createQueryBuilder();
    $qb->select('c.name, p.name, m.name')
        ->from('Category c')
        ->leftJoin('c.HottestProduct p')
        ->leftJoin('p.Manufacturer m');

Now we need to set the above query as the base query for the tree:

    $nsm->getConfiguration()->setBaseQueryBuilder($qb);
    $tree = $nsm->fetchTree(1);

There it is, the tree with all the related data you need, all in one query.

> If you don't set your own base query then one will be automatically created
> for you internally.

When you are done it is a good idea to reset the base query back to normal:

    $nsm->getConfiguration()->resetBaseQueryBuilder();


### Transactions

When modifying a tree using methods from `NodeWrapper`, each method is
executed immediately.  This differs from working with normal Doctrine2
entities where changes are queued via the EntityManager and not executed until
`flush` is called.

If you are making multiple changes, it is recommended to wrap these changes in
a transaction:

    $em->getConnection()->beginTransaction();
    try {

        $root = $nsm->createRoot(new Category('Root'));
        $root->addChild(new Category('Child 1'));
        $root->addChild(new Category('Child 2'));

        $em->getConnection()->commit();
    } catch (Exception $e) {
        $em->close();
        $em->getConnection()->rollback();
        throw $e;
    }


### Customizing left, right and root fields

NestedSet requires you include left, right and root fields in your entity
class.  By default, NestedSet expects these fields to be named lft, rgt and
root respectively.  You can customize the names of these fields using via the
manager configuration:

    $config = new Config($em, 'Entity\Category');
    $config->setLeftFieldName('nsLeft');
    $config->setRightFieldName('nsRight');
    $config->setRootFieldName('nsRoot');
    $nsm = new Manager($config);


## Conclusion

NestedSet makes managing hierarchical data in Doctrine2 quick and easy.
