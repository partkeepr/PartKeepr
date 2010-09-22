<?php
/*
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * This software consists of voluntary contributions made by many individuals
 * and is licensed under the LGPL.
 */

namespace DoctrineExtensions\NestedSet;

/**
 * Wraps a Doctrine entity providing methods for interacting with the tree.
 *
 * @author  Brandon Turner <bturner@bltweb.net>
 */
class NodeWrapper implements Node
{


    /**
     * @var Node The wrapped Node
     **/
    private $node;


    /** @var Manager */
    private $manager;


    /** @var NodeWrapper */
    private $parent = null;

    /** @var array of NodeWrappers */
    private $ancestors = null;

    /** @var array of NodeWrappers */
    private $descendants = null;

    /** @var array of NodeWrappers */
    private $children = null;

    private $level = null;

    private $outlineNumbers = null;




    public function __construct(Node $node, Manager $manager)
    {
        if($node instanceof NodeWrapper)
        {
            throw new \InvalidArgumentException('node must not be a NodeWrapper');
        }

        $this->node = $node;
        $this->manager = $manager;
    }






    //
    // Tree Query Methods
    //


    /**
     * gets first child or null
     *
     * @return NodeWrapper
     */
    public function getFirstChild()
    {
        if($this->isLeaf())
        {
            return null;
        }

        if($this->children !== null)
        {
            $ary = array_slice($this->children, 0, 1);
            return $ary[0];
        }

        $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
        $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

        $qb->andWhere("$alias.".$this->getLeftFieldName()." = :lft1")
            ->setParameter('lft1', $this->getLeftValue() + 1);
        if($this->hasManyRoots())
        {
            $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                ->setParameter('root', $this->getRootValue());
        }

        $results = $qb->getQuery()->getResult();

        return $this->getManager()->wrapNode($results[0]);
    }


    /**
     * gets last child or null
     *
     * @return NodeWrapper
     */
    public function getLastChild()
    {
        if($this->isLeaf())
        {
            return null;
        }

        if($this->children !== null)
        {
            $ary = array_slice($this->children, -1, 1);
            return $ary[0];
        }

        $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
        $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

        $qb->andWhere("$alias.".$this->getRightFieldName()." = :rgt1")
            ->setParameter('rgt1', $this->getRightValue() - 1);
        if($this->hasManyRoots())
        {
            $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                ->setParameter('root', $this->getRootValue());
        }

        $results = $qb->getQuery()->getResult();

        return $this->getManager()->wrapNode($results[0]);
    }


    /**
     * gets children of this node (direct descendants only)
     *
     * @return array array of NodeWrapper objects
     */
    public function getChildren()
    {
        if($this->children === null)
        {
            $this->children = $this->getDescendants(1);
        }

        return $this->children;
    }


    /**
     * gets descendants for this node
     *
     * @param int $depth or null for unlimited depth
     *
     * @return array array of NodeWrapper objects
     */
    public function getDescendants($depth = null)
    {
        if(!$this->hasChildren())
        {
            return array();
        }

        if($this->descendants === null)
        {
            $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
            $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

            $qb->andWhere("$alias.".$this->getLeftFieldName()." > :lft1")
                ->setParameter('lft1', $this->getLeftValue())
                ->andWhere("$alias.".$this->getRightFieldName()." < :rgt1")
                ->setParameter('rgt1', $this->getRightValue())
                ->orderBy("$alias.".$this->getLeftFieldName(), "ASC");
            if($this->hasManyRoots())
            {
                $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                    ->setParameter('root', $this->getRootValue());
            }

            // TODO: Add depth support or self join support?

            $results = $qb->getQuery()->getResult();

            $this->descendants = array();
            foreach($results as $result)
            {
                $this->descendants[] = $this->getManager()->wrapNode($result);
            }
        }

        if($depth !== null)
        {
            // TODO: Don't rebuild filtered array everytime?
            return $this->getManager()->filterNodeDepth($this->descendants, $depth);
        }

        return $this->descendants;
    }


    /**
     * gets parent Node or null
     *
     * @return NodeWrapper
     */
    public function getParent()
    {
        if($this->isRoot())
        {
            return null;
        }

        if($this->parent == null && $this->ancestors)
        {
            // Shortcut if we already loaded the ancestors
            $this->parent = $this->ancestors[count($this->ancestors)-1];
        }

        if($this->parent == null)
        {
            $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
            $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

            $qb->andWhere("$alias.".$this->getLeftFieldName()." < :lft1")
                ->setParameter('lft1', $this->getLeftValue())
                ->andWhere("$alias.".$this->getRightFieldName()." > :rgt1")
                ->setParameter('rgt1', $this->getRightValue())
                ->orderBy("$alias.".$this->getRightFieldName(), "ASC")
                ->setMaxResults(1);
            if($this->hasManyRoots())
            {
                $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                    ->setParameter('root', $this->getRootValue());
            }

            $results = $qb->getQuery()->getResult();
            $this->parent = $this->getManager()->wrapNode($results[0]);
        }

        return $this->parent;
    }


    /**
     * gets ancestors for node
     *
     * @return array array of NodeWrapper objects
     */
    public function getAncestors()
    {
        if($this->isRoot())
        {
            return array();
        }

        if($this->ancestors === null)
        {
            $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
            $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

            $qb->andWhere("$alias.".$this->getLeftFieldName()." < :lft1")
                ->setParameter('lft1', $this->getLeftValue())
                ->andWhere("$alias.".$this->getRightFieldName()." > :rgt1")
                ->setParameter('rgt1', $this->getRightValue())
                ->orderBy("$alias.".$this->getLeftFieldName(), "ASC");
            if($this->hasManyRoots())
            {
                $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                    ->setParameter('root', $this->getRootValue());
            }

            $results = $qb->getQuery()->getResult();

            $this->ancestors = array();
            foreach($results as $result)
            {
                $this->ancestors[] = $this->getManager()->wrapNode($result);
            }
        }

        return $this->ancestors;
    }


    /**
     * gets the level of this node
     *
     * @return int
     */
    public function getLevel()
    {
        if($this->level === null)
        {
            $this->level = count($this->getAncestors());
        }

        return $this->level;
    }


    /**
     * gets path to node from root, uses Node::toString() method to get node
     * names
     *
     * @param string $separator path separator
     * @param bool $includeNode whether or not to include node at end of path
     *
     * @return string string representation of path
     */
    public function getPath($separator=' > ', $includeNode=false)
    {
        $path = array();

        $ancestors = $this->getAncestors();
        if($ancestors)
        {
            foreach($ancestors as $ancestor)
            {
                $path[] = $ancestor->getNode()->__toString();
            }
        }

        if($includeNode)
        {
            $path[] = $this->getNode()->__toString();
        }

        return implode($separator, $path);
    }


    /**
     * gets a number representing this node, e.g. 1.2.6
     *
     * @param string $separator string to separate the numbers from each
     *   level (default '.')
     * @param bool $includeRoot include the root node when numbering
     *   (default: true)
     *
     * @return string
     */
    public function getOutlineNumber($separator='.', $includeRoot=true)
    {
        if($this->outlineNumbers === null)
        {
            $numbers = array(1);

            if(!$this->isRoot())
            {
                $ancestors = $this->getAncestors();
                $root = $ancestors[0];

                $rootDescendants = $root->getDescendants(count($ancestors));

                $siblingNumber = 1;
                $level = 1;
                $pathLevel = 1;
                $stack = array();
                foreach($rootDescendants as $wrapper)
                {
                    $parent = end($stack);
                    while($parent && $wrapper->getLeftValue() > $parent->getRightValue())
                    {
                        array_pop($stack);
                        $parent = end($stack);
                        $level--;
                    }

                    if($wrapper->getLeftValue() <= $this->getLeftValue() && $wrapper->getRightValue() >= $this->getRightValue())
                    {
                        // On path

                        if($wrapper->isEqualTo($this))
                        {
                            $numbers[] = $siblingNumber;
                            break;
                        }
                        else if($wrapper->isEqualTo($ancestors[$pathLevel]))
                        {
                            $numbers[] = $siblingNumber;
                            $siblingNumber = 1;
                            $pathLevel++;
                        }
                    }
                    else if($pathLevel == $level)
                    {
                        $siblingNumber++;
                    }

                    if($wrapper->hasChildren())
                    {
                        array_push($stack, $wrapper);
                        $level++;
                    }
                }
            }

            $this->outlineNumbers = $numbers;
        }

        if($includeRoot === false)
        {
            return implode(array_slice($this->outlineNumbers, 1), $separator);
        }

        return implode($this->outlineNumbers, $separator);
    }


    /**
     * gets number of children (direct descendants)
     *
     * @return int
     */
    public function getNumberChildren()
    {
        $children = $this->getChildren();
        return $children ? count($children) : 0;
    }


    /**
     * gets number of descendants (children and their children ...)
     *
     * @return int
     */
    public function getNumberDescendants()
    {
        return ($this->getRightValue() - $this->getLeftValue() - 1) / 2;
    }




    /**
     * gets siblings for node
     *
     * @param bool $includeNode whether to include this node in the list of
     *   sibling nodes (default: false)
     *
     * @return array array of NodeWrapper objects
     */
    public function getSiblings($includeNode=false)
    {
        $parent = $this->getParent();
        $siblings = array();
        if($parent && $parent->isValidNode())
        {
            $children = $parent->getChildren();
            foreach($children as $child)
            {
                if(!$includeNode && $this->isEqualTo($child))
                {
                    continue;
                }
                $siblings[] = $child;
            }
        }

        return $siblings;
    }


    /**
     * gets prev sibling or null
     *
     * @return Node
     */
    public function getPrevSibling()
    {
        // If parent and children are already loaded, avoid database query
        if($this->parent !== null && ($children = $this->parent->internalGetChildren()) !== null)
        {
            for($i=0; $i<count($children); $i++)
            {
                if($children[$i] == $this)
                {
                    return ($i-1 < 0) ? null : $children[$i-1];
                }
            }
        // @codeCoverageIgnoreStart
        }
        // @codeCoverageIgnoreEnd


        $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
        $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

        $qb->andWhere("$alias.".$this->getRightFieldName()." = :rgt1")
            ->setParameter('rgt1', $this->getLeftValue() - 1);
        if($this->hasManyRoots())
        {
            $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                ->setParameter('root', $this->getRootValue());
        }

        $results = $qb->getQuery()->getResult();

        if(!$results)
        {
            return null;
        }

        return $this->getManager()->wrapNode($results[0]);
    }


    /**
     * gets next sibling or null
     *
     * @return Node
     */
    public function getNextSibling()
    {
        // If parent and children are already loaded, avoid database query
        if($this->parent !== null && ($children = $this->parent->internalGetChildren()) !== null)
        {
            for($i=0; $i<count($children); $i++)
            {
                if($children[$i] == $this)
                {
                    return ($i+1 >= count($children)) ? null : $children[$i+1];
                }
            }
        // @codeCoverageIgnoreStart
        }
        // @codeCoverageIgnoreEnd


        $qb = $this->getManager()->getConfiguration()->getBaseQueryBuilder();
        $alias = $this->getManager()->getConfiguration()->getQueryBuilderAlias();

        $qb->andWhere("$alias.".$this->getLeftFieldName()." = :lft1")
            ->setParameter('lft1', $this->getRightValue() + 1);
        if($this->hasManyRoots())
        {
            $qb->andWhere("$alias.".$this->getRootFieldName()." = :root")
                ->setParameter('root', $this->getRootValue());
        }

        $results = $qb->getQuery()->getResult();

        if(!$results)
        {
            return null;
        }

        return $this->getManager()->wrapNode($results[0]);
    }


    /**
     * test if node has previous sibling
     *
     * @return bool
     */
    public function hasPrevSibling()
    {
        $n = $this->getPrevSibling();
        return $n && $n->isValidNode();
    }


    /**
     * test if node has next sibling
     *
     * @return bool
     */
    public function hasNextSibling()
    {
        $n = $this->getNextSibling();
        return $n && $n->isValidNode();
    }






    //
    // Tree Modification Methods
    //


    /**
     * inserts node as parent of given node
     *
     * @param NodeWrapper $node
     */
    public function insertAsParentOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot insert node as a parent of itself');
        }

        if($this->isValidNode())
        {
            throw new \InvalidArgumentException('Cannot insert a node that already has a place within the tree');
        }

        if($node->isRoot())
        {
            throw new \InvalidArgumentException('Cannot insert as parent of root');
        }

        $em = $this->getManager()->getEntityManager();
        $lftField = $this->getLeftFieldName();
        $rgtField = $this->getRightFieldName();

        $newLft = $node->getLeftValue();
        $newRgt = $node->getRightValue() + 2;
        $newRoot = $this->hasManyRoots() ? $node->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            // Make space for new node
            $this->shiftRLRange($newRgt - 1, 0, 2, $newRoot);

            // Slide child nodes over one and down one to allow new parent to wrap them
            $qb = $em->createQueryBuilder()
                ->update(get_class($this->getNode()), 'n')
                ->set("n.$lftField", "n.$lftField + 1")
                ->set("n.$rgtField", "n.$rgtField + 1")
                ->where("n.$lftField >= ?1")
                ->setParameter(1, $newLft)
                ->andWhere("n.$rgtField <= ?2")
                ->setParameter(2, $newRgt);
            if($this->hasManyRoots())
            {
                $qb->andWhere("n.".$this->getRootFieldName()." = ?3")
                    ->setParameter(3, $newRoot);
            }
            $qb->getQuery()->execute();
            $this->getManager()->updateValues($newLft, $newRgt, 1, $newRoot);

            $this->insertNode($newLft, $newRgt, $newRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * inserts node as previous sibling of given node
     *
     * @param NodeWrapper $node
     */
    public function insertAsPrevSiblingOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot insert node as a sibling of itself');
        }

        $em = $this->getManager()->getEntityManager();
        $newLeft = $node->getLeftValue();
        $newRight = $node->getLeftValue() + 1;
        $newRoot = $this->hasManyRoots() ? $node->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $this->shiftRLRange($newLeft, 0, 2, $newRoot);
            $this->insertNode($newLeft, $newRight, $newRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * inserts node as next sibling of given node
     *
     * @param NodeWrapper $node
     */
    public function insertAsNextSiblingOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot insert node as a sibling of itself');
        }

        $em = $this->getManager()->getEntityManager();
        $newLeft = $node->getRightValue() + 1;
        $newRight = $node->getRightValue() + 2;
        $newRoot = $this->hasManyRoots() ? $node->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $this->shiftRLRange($newLeft, 0, 2, $newRoot);
            $this->insertNode($newLeft, $newRight, $newRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * inserts node as first child of given node
     *
     * @param NodeWrapper $node
     */
    public function insertAsFirstChildOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot insert node as a child of itself');
        }

        $em = $this->getManager()->getEntityManager();
        $newLeft = $node->getLeftValue() + 1;
        $newRight = $node->getLeftValue() + 2;
        $newRoot = $this->hasManyRoots() ? $node->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $this->shiftRLRange($newLeft, 0, 2, $newRoot);
            $this->insertNode($newLeft, $newRight, $newRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * inserts node as last child of given node
     *
     * @param NodeWrapper $node
     */
    public function insertAsLastChildOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot insert node as a child of itself');
        }

        $em = $this->getManager()->getEntityManager();
        $newLeft = $node->getRightValue();
        $newRight = $node->getRightValue() + 1;
        $newRoot = $this->hasManyRoots() ? $node->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $this->shiftRLRange($newLeft, 0, 2, $newRoot);
            $this->insertNode($newLeft, $newRight, $newRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * moves node as previous sibling of the given node
     *
     * @param NodeWrapper $node
     */
    public function moveAsPrevSiblingOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot move node as a sibling of itself');
        }

        $em = $this->getManager()->getEntityManager();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            if($this->hasManyRoots() && $this->getRootValue() !== $node->getRootValue())
            {
                $this->moveBetweenTrees($node, $node->getLeftValue(), __FUNCTION__);
            }
            else
            {
                $this->updateNode($node->getLeftValue());
            }

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * moves node as next sibling of the given node
     *
     * @param NodeWrapper $node
     */
    public function moveAsNextSiblingOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot move node as a sibling of itself');
        }

        $em = $this->getManager()->getEntityManager();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            if($this->hasManyRoots() && $this->getRootValue() !== $node->getRootValue())
            {
                $this->moveBetweenTrees($node, $node->getRightValue() + 1, __FUNCTION__);
            }
            else
            {
                $this->updateNode($node->getRightValue() + 1);
            }

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * moves node as first child of the given node
     *
     * @param NodeWrapper $node
     */
    public function moveAsFirstChildOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot move node as a child of itself');
        }

        $em = $this->getManager()->getEntityManager();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            if($this->hasManyRoots() && $this->getRootValue() !== $node->getRootValue())
            {
                $this->moveBetweenTrees($node, $node->getLeftValue() + 1, __FUNCTION__);
            }
            else
            {
                $this->updateNode($node->getLeftValue() + 1);
            }

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * moves node as last child of the given node
     *
     * @param NodeWrapper $node
     */
    public function moveAsLastChildOf(NodeWrapper $node)
    {
        if($node == $this)
        {
            throw new \InvalidArgumentException('Cannot move node as a child of itself');
        }

        $em = $this->getManager()->getEntityManager();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            if($this->hasManyRoots() && $this->getRootValue() !== $node->getRootValue())
            {
                $this->moveBetweenTrees($node, $node->getRightValue(), __FUNCTION__);
            }
            else
            {
                $this->updateNode($node->getRightValue());
            }

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * Makes this node a root node.
     *
     * @param mixed $newRoot
     */
    public function makeRoot($newRoot)
    {
        if($this->isRoot())
        {
            return;
        }

        if(!$this->hasManyRoots())
        {
            throw new \BadMethodCallException(sprintf('%s::%s is only supported on multiple root trees', __CLASS__, __METHOD__));
        }

        $em = $this->getManager()->getEntityManager();
        $lftField = $this->getLeftFieldName();
        $rgtField = $this->getRightFieldName();
        $rootField = $this->getRootFieldName();

        $oldRgt = $this->getRightValue();
        $oldLft = $this->getLeftValue();
        $oldRoot = $this->getRootValue();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            // Update descendants lft/rgt/root values
           $diff = 1 - $oldLft;
            $qb = $em->createQueryBuilder()
                ->update(get_class($this->getNode()), 'n')
                ->set("n.$lftField", "n.$lftField + ?1")
                ->setParameter(1, $diff)
                ->set("n.$rgtField", "n.$rgtField + ?2")
                ->setParameter(2, $diff)
                ->set("n.$rootField", "?3")
                ->setParameter(3, $newRoot)
                ->where("n.$lftField > ?4")
                ->setParameter(4, $oldLft)
                ->andWhere("n.$rgtField < ?5")
                ->setParameter(5, $oldRgt)
                ->andWhere("n.$rootField = ?6")
                ->setParameter(6, $oldRoot);
            $qb->getQuery()->execute();
            $this->getManager()->updateValues($oldLft, $oldRgt, $diff, $oldRoot, $newRoot);

            // Close gap in old tree
            $first = $oldRgt + 1;
            $delta = $oldLft - $oldRgt - 1;
            $this->shiftRLRange($first, 0, $delta, $oldRoot);

            // Set new lft/rgt/root values for root node
            $this->setLeftValue(1);
            $this->setRightValue($oldRgt - $oldLft + 1);
            $this->setRootValue($newRoot);
            $em->persist($this->getNode());

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * adds given node as the last child of this entity
     *
     * @param Node $node
     *
     * @return NodeWrapper $wrapper
     */
    public function addChild(Node $node)
    {
        if($node instanceof NodeWrapper)
        {
            if($node == $this)
            {
                throw new \InvalidArgumentException('Cannot insert node as a child of itself');
            }

            $node->insertAsLastChildOf($this);
            return $node;
        }

        $node->setLeftValue($this->getRightValue());
        $node->setRightValue($this->getRightValue() + 1);
        if($this->hasManyRoots())
        {
            $node->setRootValue($this->getRootValue());
        }

        $em = $this->getManager()->getEntityManager();

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $this->shiftRLRange($this->getRightValue(), 0, 2, ($this->hasManyRoots() ? $this->getRootValue() : null));

            $em->persist($node);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction

        return $this->getManager()->wrapNode($node);
    }


    /**
     * deletes this node and it's decendants
     *
     */
    public function delete()
    {
        $em = $this->getManager()->getEntityManager();
        $lftField = $this->getLeftFieldName();
        $rgtField = $this->getRightFieldName();

        $oldLft = $this->getLeftValue();
        $oldRgt = $this->getRightValue();
        $oldRoot = $this->hasManyRoots() ? $this->getRootValue() : null;

        // beginTransaction
        $em->getConnection()->beginTransaction();
        try
        {
            $qb = $em->createQueryBuilder()
                ->delete(get_class($this->getNode()), 'n')
                ->where("n.$lftField >= ?1")
                ->setParameter(1, $oldLft)
                ->andWhere("n.$rgtField <= ?2")
                ->setParameter(2, $oldRgt);
            if($this->hasManyRoots())
            {
                $qb->andWhere("n.".$this->getRootFieldName()." = ?3")
                    ->setParameter(3, $oldRoot);
            }
            $qb->getQuery()->execute();
            $this->getManager()->removeNodes($oldLft, $oldRgt, $oldRoot);

            // Close gap in tree
            $first = $oldRgt + 1;
            $delta = $oldLft - $oldRgt - 1;
            $this->shiftRLRange($first, 0, $delta, $oldRoot);

            $em->flush();
            $em->getConnection()->commit();
        }
        catch (\Exception $e)
        {
            // @codeCoverageIgnoreStart
            $em->close();
            $em->getConnection()->rollback();
            throw $e;
            // @codeCoverageIgnoreEnd
        }
        // endTransaction
    }


    /**
     * sets node's left and right values and persist's it
     *
     * NOTE: This method does not wrap its database queries in a transaction.
     * This should be done before invoking this code.
     *
     * @param int $destLeft
     * @param int $destRight
     * @param mixed $destRoot
     *
     */
    protected function insertNode($destLeft, $destRight, $destRoot=null)
    {
        $this->setLeftValue($destLeft);
        $this->setRightValue($destRight);
        if($this->hasManyRoots())
        {
            $this->setRootValue($destRoot);
        }
        $this->getManager()->getEntityManager()->persist($this->getNode());
    }


    /**
     * moves this node and its children to location $destLeft and updates the
     * rest of the tree
     *
     * NOTE: This method does not wrap its database queries in a transaction.
     * This should be done before invoking this code.
     *
     * @param int $destLeft
     */
    protected function updateNode($destLeft)
    {
        $left = $this->getLeftValue();
        $right = $this->getRightValue();
        $root = $this->hasManyRoots() ? $this->getRootValue() : null;

        $treeSize = $right - $left + 1;

        // Make room in the new branch
        $this->shiftRLRange($destLeft, 0, $treeSize, $root);

        if($left >= $destLeft)
        {
            // src was shifted too
            $left += $treeSize;
            $right += $treeSize;
        }

        // Now there's enough room next to target to move the subtree
        $this->shiftRLRange($left, $right, $destLeft - $left, $root);

        // Correct values after source (close gap in old tree)
        $this->shiftRLRange($right + 1, 0, -$treeSize, $root);
    }


    /**
     * adds '$delta' to all Left and Right values that are >= '$first' and
     * <= '$last'.  If $last is 0, it is ignored and no upper bound exists.
     * '$delta' can also be negative.
     *
     * NOTE: This method does not wrap its database queries in a transaction.
     * This should be done before invoking this code.
     *
     * @param int $first first left/right value to shift
     * @param int $last last left/right value to shift, or 0
     * @param int $delta offset to shift by
     * @param mixed $rootVal the root value of entities to act upon
     */
    protected function shiftRLRange($first, $last, $delta, $rootVal)
    {
        $em = $this->getManager()->getEntityManager();

        foreach(array($this->getLeftFieldName(), $this->getRightFieldName()) as $field)
        {
            // Prepare left query
            $q = $em->createQueryBuilder()
            ->update(get_class($this->getNode()), 'n')
            ->set("n.$field", "n.$field + :delta")
            ->setParameter('delta', $delta)
            ->where("n.$field >= :lowerbound")
            ->setParameter('lowerbound', $first);

            if($last > 0)
            {
                $q->andWhere("n.$field <= :upperbound")
                    ->setParameter('upperbound', $last);
            }

            if($this->hasManyRoots())
            {
                $q->andWhere("n.".$this->getRootFieldName()." = :root")
                    ->setParameter('root', $rootVal);
            }

            $q->getQuery()->execute();
        }

        $this->getManager()->updateLeftValues($first, $last, $delta, $rootVal);
        $this->getManager()->updateRightValues($first, $last, $delta, $rootVal);
    }


    /**
     * Accomplishes moving of nodes between different trees.
     * Used by the move* methods if the root values of the two nodes are
     * different.
     *
     * NOTE: This method does not wrap its database queries in a transaction.
     * This should be done before invoking this code.
     *
     * @param NodeWrapper $node
     * @param int $newLeftValue
     * @param string $moveType
     */
    protected function moveBetweenTrees(NodeWrapper $node, $newLeftValue, $moveType)
    {
        if(!$this->hasManyRoots())
        {
            // @codeCoverageIgnoreStart
            throw new \BadMethodCallException(sprintf('%s::%s is only supported on multiple root trees', __CLASS__, __METHOD__));
            // @codeCoverageIgnoreEnd
        }

        $em = $this->getManager()->getEntityManager();
        $lftField = $this->getLeftFieldName();
        $rgtField = $this->getRightFieldName();
        $rootField = $this->getRootFieldName();

        $newRoot = $node->getRootValue();
        $oldRoot = $this->getRootValue();
        $oldLft = $this->getLeftValue();
        $oldRgt = $this->getRightValue();

        // Prepare target tree for insertion, make room
        $this->shiftRLRange($newLeftValue, 0, $oldRgt - $oldLft + 1, $newRoot);

        // Set new position and root of this node
        $this->setLeftValue($newLeftValue);
        $this->setRightValue($newLeftValue + ($oldRgt - $oldLft));
        $this->setRootValue($newRoot);
        $em->persist($this->getNode());
        $em->flush();

        // Relocate descendants of the node
        $diff = $this->getLeftValue() - $oldLft;
        //echo "\nRelocating: oldLft=$oldLft, oldRgt=$oldRgt, diff=$diff, oldRoot=$oldRoot, newRoot=$newRoot\n";
        $qb = $em->createQueryBuilder()
            ->update(get_class($this->getNode()), 'n')
            ->set("n.$lftField", "n.$lftField + ?1")
            ->setParameter(1, $diff)
            ->set("n.$rgtField", "n.$rgtField + ?2")
            ->setParameter(2, $diff)
            ->set("n.$rootField", "?3")
            ->setParameter(3, $newRoot)
            ->where("n.$lftField > ?4")
            ->setParameter(4, $oldLft)
            ->andWhere("n.$rgtField < ?5")
            ->setParameter(5, $oldRgt)
            ->andWhere("n.$rootField = ?6")
            ->setParameter(6, $oldRoot);
        $qb->getQuery()->execute();
        $this->getManager()->updateValues($oldLft, $oldRgt, $diff, $oldRoot, $newRoot);

        // Close gap in old tree
        $first = $oldRgt + 1;
        $delta = $oldLft - $oldRgt - 1;
        $this->shiftRLRange($first, 0, $delta, $oldRoot);
    }







    //
    // State Methods
    // These methods require no datbase calls
    //


    /**
     * Returns the wrapped node
     *
     * @return Node
     */
    public function getNode()
    {
        return $this->node;
    }


    /**
     * test if node has children
     *
     * @return bool
     */
    public function hasChildren()
    {
        return (($this->getRightValue() - $this->getLeftValue()) > 1);
    }


    /**
     * test if node has parent
     *
     * @return bool
     */
    public function hasParent()
    {
        return $this->isValidNode() && !$this->isRoot();
    }


    /**
     * determines if node is root
     *
     * @return bool
     */
    public function isRoot()
    {
        return ($this->getLeftValue() == 1);
    }


    /**
     * determines if node is leaf
     *
     * @return bool
     */
    public function isLeaf()
    {
        return (($this->getRightValue() - $this->getLeftValue()) == 1);
    }


    /**
     * determines if node is valid
     *
     * @return bool
     */
    public function isValidNode()
    {
        return ($this->getNode() && ($this->getRightValue() > $this->getLeftValue()));
    }


    /**
     * Removes all cached ancestor/descendant entites
     *
     */
    public function invalidate()
    {
        $this->parent = null;
        $this->ancestors = null;
        $this->descendants = null;
        $this->children = null;
        $this->level = null;
        $this->outlineNumbers = null;
    }


    /**
     * determines if this node is a child of the given node
     *
     * @param Node
     *
     * @return bool
     */
    public function isDescendantOf(Node $node)
    {
        return (($this->getLeftValue() > $node->getLeftValue()) &&
                ($this->getRightValue() < $node->getRightValue()) &&
                (!$this->hasManyRoots() || ($this->getRootValue() == $node->getRootValue())));
    }


    /**
     * determines if this node is an ancestor of the given node
     *
     * @param Node
     *
     * @return bool
     */
    public function isAncestorOf(Node $node)
    {
        return (($this->getLeftValue() < $node->getLeftValue()) &&
                ($this->getRightValue() > $node->getRightValue()) &&
                (!$this->hasManyRoots() || ($this->getRootValue() == $node->getRootValue())));
    }


    /**
     * determines if this node is equal to the given node
     *
     * @param Node
     *
     * @return bool
     */
    public function isEqualTo(Node $node)
    {
        return (($this->getLeftValue() == $node->getLeftValue()) &&
                ($this->getRightValue() == $node->getRightValue()) &&
                (!$this->hasManyRoots() || ($this->getRootValue() == $node->getRootValue())));
    }








    /**
     * Returns the NestedSet Manager
     *
     * @return Manager
     */
    public function getManager()
    {
        return $this->manager;
    }


    protected function getLeftFieldName()
    {
        return $this->getManager()->getConfiguration()->getLeftFieldName();
    }


    protected function getRightFieldName()
    {
        return $this->getManager()->getConfiguration()->getRightFieldName();
    }


    protected function getRootFieldName()
    {
        return $this->getManager()->getConfiguration()->getRootFieldName();
    }


    protected function hasManyRoots()
    {
        return $this->getManager()->getConfiguration()->hasManyRoots();
    }








    //
    // Internal methods
    // Use of these methods outside the NestedSet package is not recommended
    //

    /**
     * INTERNAL
     */
    public function internalSetParent(NodeWrapper $parent)
    {
        $this->parent = $parent;
    }


    /**
     * INTERNAL
     */
    public function internalAddChild(NodeWrapper $child)
    {
        if($this->children === null)
        {
            $this->children = array();
        }

        $this->children[] = $child;
    }


    /**
     * INTERNAL
     */
    public function internalAddDescendant(NodeWrapper $descendant)
    {
        if($this->descendants === null)
        {
            $this->descendants = array();
        }

        $this->descendants[] = $descendant;
    }


    /**
     * INTERNAL
     */
    public function internalSetAncestors(array $ancestors)
    {
        $this->ancestors = $ancestors;
    }


    /**
     * INTERNAL
     */
    public function internalGetChildren()
    {
        return $this->children;
    }


    /**
     * INTERNAL
     */
    public function internalSetLevel($level)
    {
        $this->level = $level;
    }


    /**
     * INTERNAL
     */
    public function internalSetOutlineNumbers($numbers)
    {
        $this->outlineNumbers = $numbers;
    }



    //
    // Node Interface Methods
    //

    public function getId()
    {
        return $this->getNode()->getId();
    }

    public function __toString()
    {
        return $this->getNode()->__toString();
    }

    public function getLeftValue()
    {
        return $this->getNode()->getLeftValue();
    }

    public function setLeftValue($lft)
    {
        return $this->getNode()->setLeftValue($lft);
    }

    public function getRightValue()
    {
        return $this->getNode()->getRightValue();
    }

    public function setRightValue($rgt)
    {
        return $this->getNode()->setRightValue($rgt);
    }

    public function getRootValue()
    {
        return $this->getNode()->getRootValue();
    }

    public function setRootValue($root)
    {
        return $this->getNode()->setRootValue($root);
    }
}
