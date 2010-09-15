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
 * The Manager provides functions for creating and fetching a NestedSet tree.
 *
 * @author  Brandon Turner <bturner@bltweb.net>
 */
class Manager
{
    /** @var Config */
    protected $config;

    /** @var array */
    protected $wrappers;


    /**
     * Initializes a new NestedSet Manager.
     *
     * @param string|Doctrine\ORM\Mapping\ClassMetadata $clazz the fully qualified entity class name
     *   or a ClassMetadata object representing the class of nodes to be managed
     *   by this manager
     * @param Doctrine\ORM\EntityManager $em The EntityManager to use.
     */
    public function __construct(Config $config)
    {
        $this->config = $config;
        $this->wrappers = array();
    }


    /**
     * Fetches the complete tree, returning the root node of the tree
     *
     * @param mixed $rootId the root id of the tree (or null if model doesn't
     *   support multiple trees
     * @param int $depth the depth to retrieve or null for unlimited
     *
     * @return NodeWrapper $root
     */
    public function fetchTree($rootId=null, $depth=null)
    {
        $wrappers = $this->fetchTreeAsArray($rootId, $depth);

        return (!is_array($wrappers) || empty($wrappers)) ? null : $wrappers[0];
    }


    /**
     * Fetches the complete tree, returning a flat array of node wrappers with
     * parent, children, ancestors and descendants pre-populated.
     *
     * @param mixed $rootId the root id of the tree (or null if model doesn't
     *   support multiple trees
     * @param int $depth the depth to retrieve or null for unlimited
     *
     * @return array
     */
    public function fetchTreeAsArray($rootId=null, $depth=null)
    {
        $config = $this->getConfiguration();
        $lftField = $config->getLeftFieldName();
        $rgtField = $config->getRightFieldName();
        $rootField = $config->getRootFieldName();
        $hasManyRoots = $config->hasManyRoots();

        if($rootId === null && $rootField !== null)
        {
            throw new \InvalidArgumentException('Must provide root id');
        }

        if($depth === 0)
        {
            return array();
        }

        $qb = $config->getBaseQueryBuilder();
        $alias = $config->getQueryBuilderAlias();

        $qb->andWhere("$alias.$lftField >= :lowerbound")
            ->setParameter('lowerbound', 1)
            ->orderBy("$alias.$lftField", "ASC");

        if($hasManyRoots)
        {
            $qb->andWhere("$alias.$rootField = :rootid")
                ->setParameter('rootid', $rootId);
        }

        $nodes = $qb->getQuery()->execute();
        if(empty($nodes))
        {
            return array();
        }

        // TODO: Filter depth using a cross join instead of this
        if($depth !== null)
        {
            $nodes = $this->filterNodeDepth($nodes, $depth);
        }

        $wrappers = array();
        foreach($nodes as $node)
        {
            $wrappers[] = $this->wrapNode($node);
        }

        $this->buildTree($wrappers);

        return $wrappers;
    }


    /**
     * Fetches a branch of a tree, returning the starting node of the branch.
     * All children and descendants are pre-populated.
     *
     * @param mixed $pk the primary key used to locate the node to traverse
     *   the tree from
     * @param int $depth the depth to retrieve or null for unlimited
     *
     * @return NodeWrapper $branch
     */
    public function fetchBranch($pk, $depth=null)
    {
        $wrappers = $this->fetchBranchAsArray($pk, $depth);

        return (!is_array($wrappers) || empty($wrappers)) ? null : $wrappers[0];
    }


    /**
     * Fetches a branch of a tree, returning a flat array of node wrappers with
     * parent, children, ancestors and descendants pre-populated.
     *
     * @param mixed $pk the primary key used to locate the node to traverse
     *   the tree from
     * @param int $depth the depth to retrieve or null for unlimited
     *
     * @return array
     */
    public function fetchBranchAsArray($pk, $depth=null)
    {
        $config = $this->getConfiguration();
        $lftField = $config->getLeftFieldName();
        $rgtField = $config->getRightFieldName();
        $rootField = $config->getRootFieldName();
        $hasManyRoots = $config->hasManyRoots();

        if($depth === 0)
        {
            return array();
        }

        $node = $this->getEntityManager()->find($this->getConfiguration()->getClassname(), $pk);

        if(!$node)
        {
            return array();
        }

        // Detach the fetched node as Doctrine uses it instead of the node
        // fetched as part of the tree.  The node fetched as part of the tree
        // may have additional joined classes via base query builder.
        $this->getEntityManager()->detach($node);


        $qb = $config->getBaseQueryBuilder();
        $alias = $config->getQueryBuilderAlias();

        $qb->andWhere("$alias.$lftField >= :lowerbound")
            ->setParameter('lowerbound', $node->getLeftValue())
            ->andWhere("$alias.$rgtField <= :upperbound")
            ->setParameter('upperbound', $node->getRightValue())
            ->orderBy("$alias.$lftField", "ASC");

        // TODO: Add support for depth via a cross join

        if($hasManyRoots)
        {
            $qb->andWhere("$alias.$rootField = :rootid")
                ->setParameter('rootid', $node->getRootValue());
        }

        $nodes = $qb->getQuery()->execute();
        // @codeCoverageIgnoreStart
        if(empty($nodes))
        {
            return null;
        }
        // @codeCoverageIgnoreEnd

        // TODO: Filter depth using a cross join instead of this
        if($depth !== null)
        {
            $nodes = $this->filterNodeDepth($nodes, $depth);
        }

        $wrappers = array();
        foreach($nodes as $node)
        {
            $wrappers[] = $this->wrapNode($node);
        }

        $this->buildTree($wrappers);

        return $wrappers;
    }


    /**
     * Creates a new root node
     *
     * @param Node
     *
     * @return NodeWrapper
     */
    public function createRoot(Node $node)
    {
        if($node instanceof NodeWrapper)
        {
            throw new \InvalidArgumentException('Can\'t create a root node from a NodeWrapper node');
        }

        $node->setLeftValue(1);
        $node->setRightValue(2);

        if($this->getConfiguration()->hasManyRoots())
        {
            $rootValue = $node->getId();
            if($rootValue === null)
            {
                // Set a temporary value in case wrapped node requires root value to be set
                $node->setRootValue(0);
                $this->getEntityManager()->persist($node);
                $this->getEntityManager()->flush();
                $rootValue = $node->getId();
            }

            if($rootValue === null)
            {
                // @codeCoverageIgnoreStart
                throw new \RuntimeException('Node must have an identifier available via getId()');
                // @codeCoverageIgnoreEnd
            }

            $node->setRootValue($rootValue);
        }


        $this->getEntityManager()->persist($node);
        $this->getEntityManager()->flush();

        return $this->wrapNode($node);
    }


    /**
     * wraps the node using the NodeWrapper class
     *
     * @param Node $node
     *
     * @return NodeWrapper
     */
    public function wrapNode(Node $node)
    {
        if($node instanceof NodeWrapper)
        {
            throw new \InvalidArgumentException('Can\'t wrap a NodeWrapper node');
        }

		$oid = spl_object_hash($node);
        if(!isset($this->wrappers[$oid]))
        {
            $this->wrappers[$oid] = new NodeWrapper($node, $this);
        }

        return $this->wrappers[$oid];
    }




    /**
     * Returns the Doctrine entity manager associated with this Manager
     *
     * @return Doctrine\ORM\EntityManager
     */
    public function getEntityManager()
    {
        return $this->getConfiguration()->getEntityManager();
    }


    /**
     * gets configuration
     *
     * @return Config
     */
    public function getConfiguration()
    {
        return $this->config;
    }



    //
    // Methods marked internal should not be used outside of the
    // NestedSet namespace
    //


    /**
     * Internal
     * Updates the left values of managed nodes
     *
     * @param int $first first left value to shift
     * @param int $last last left value to shift, or 0
     * @param int $delta offset to shift by
     * @param mixed $rootVal the root value of entities to act upon
     *
     */
    public function updateLeftValues($first, $last, $delta, $rootVal=null)
    {
        $hasManyRoots = $this->getConfiguration()->hasManyRoots();

        foreach($this->wrappers as $wrapper)
        {
            if(!$hasManyRoots || ($wrapper->getRootValue() == $rootVal))
            {
                if($wrapper->getLeftValue() >= $first && ($last === 0 || $wrapper->getLeftValue() <= $last))
                {
                    $wrapper->setLeftValue($wrapper->getLeftValue() + $delta);
                    $wrapper->invalidate();
                }
            }
        }
    }


    /**
     * Internal
     * Updates the right values of managed nodes
     *
     * @param int $first first right value to shift
     * @param int $last last right value to shift, or 0
     * @param int $delta offset to shift by
     * @param mixed $rootVal the root value of entities to act upon
     *
     */
    public function updateRightValues($first, $last, $delta, $rootVal=null)
    {
        $hasManyRoots = $this->getConfiguration()->hasManyRoots();

        foreach($this->wrappers as $wrapper)
        {
            if(!$hasManyRoots || ($wrapper->getRootValue() == $rootVal))
            {
                if($wrapper->getRightValue() >= $first && ($last === 0 || $wrapper->getRightValue() <= $last))
                {
                    $wrapper->setRightValue($wrapper->getRightValue() + $delta);
                    $wrapper->invalidate();
                }
            }
        }
    }


    /**
     * Internal
     * Updates the left, right and root values of managed nodes
     *
     * @param int $first lowerbound (lft/rgt) of nodes to update
     * @param int $last upperbound (lft/rgt) of nodes to update, or 0
     * @param int $delta delta to add to lft/rgt values (can be negative)
     * @param mixed $oldRoot the old root value of entities to act upon
     * @param mixed $newRoot the new root value to set (or null to not change root)
     */
    public function updateValues($first, $last, $delta, $oldRoot=null, $newRoot=null)
    {
        if(!$this->wrappers)
        {
            return;
        }

        $hasManyRoots = $this->getConfiguration()->hasManyRoots();

        foreach($this->wrappers as $wrapper)
        {
            if(!$hasManyRoots || ($wrapper->getRootValue() == $oldRoot))
            {
                if($wrapper->getLeftValue() >= $first && ($last === 0 || $wrapper->getRightValue() <= $last))
                {
                    if($delta !== 0)
                    {
                        $wrapper->setLeftValue($wrapper->getLeftValue() + $delta);
                        $wrapper->setRightValue($wrapper->getRightValue() + $delta);
                    }
                    if($hasManyRoots && $newRoot !== null)
                    {
                        $wrapper->setRootValue($newRoot);
                    }
                }
            }
        }
    }


    /**
     * Internal
     * Removes managed nodes
     *
     * @param int $left
     * @param int $right
     * @param mixed $root
     */
    public function removeNodes($left, $right, $root=null)
    {
        $hasManyRoots = $this->getConfiguration()->hasManyRoots();

        $removed = array();
        foreach($this->wrappers as $oid => $wrapper)
        {
            if(!$hasManyRoots || ($wrapper->getRootValue() == $root))
            {
                if($wrapper->getLeftValue() >= $left && $wrapper->getRightValue() <= $right)
                {
                    $removed[$oid] = $wrapper;
                }
            }
        }

        foreach($removed as $key => $wrapper)
        {
            unset($this->wrappers[$key]);
            $wrapper->setLeftValue(0);
            $wrapper->setRightValue(0);
            if($hasManyRoots)
            {
                $wrapper->setRootValue(0);
            }
            $this->getEntityManager()->detach($wrapper->getNode());
        }
    }


    /**
     * Internal
     * Filters an array of nodes by depth
     *
     * @param array array of Node instances
     * @param int $depth the depth to filter to
     *
     * @return array array of Node instances
     */
    public function filterNodeDepth($nodes, $depth)
    {
        if(empty($nodes) || $depth === 0)
        {
            return array();
        }

        $newNodes = array();
        $stack = array();
        $level = 0;

        foreach($nodes as $node)
        {
            $parent = end($stack);
            while($parent && $node->getLeftValue() > $parent->getRightValue())
            {
                array_pop($stack);
                $parent = end($stack);
                $level--;
            }

            if($level < $depth)
            {
                $newNodes[] = $node;
            }

            if(($node->getRightValue() - $node->getLeftValue()) > 1)
            {
                array_push($stack, $node);
                $level++;
            }
        }

        return $newNodes;
    }




    protected function buildTree($wrappers)
    {
        // @codeCoverageIgnoreStart
        if(empty($wrappers))
        {
            return;
        }
        // @codeCoverageIgnoreEnd

        $config = $this->getConfiguration();

        $rootNode = $wrappers[0];
        $stack = array();

        $level = 0;
        if($config->getHydrateLevel())
        {
            $level = $wrappers[0]->getLevel();
        }

        $outlineNumbers = array(0);
        if($config->getHydrateOutlineNumber())
        {
            $outlineNumbers = explode('.', $wrappers[0]->getOutlineNumber('.', true));
            $outlineNumbers[count($outlineNumbers)-1]--;
        }

        foreach($wrappers as $wrapper)
        {
            $parent = end($stack);
            while($parent && $wrapper->getLeftValue() > $parent->getRightValue())
            {
                array_pop($stack);
                $parent = end($stack);
                $level--;
                array_pop($outlineNumbers);
            }

            $outlineNumbers[count($outlineNumbers)-1]++;

            if($parent && $wrapper !== $rootNode)
            {
                $wrapper->internalSetParent($parent);
                $parent->internalAddChild($wrapper);
                $wrapper->internalSetAncestors($stack);
                if($config->getHydrateLevel())
                {
                    $wrapper->internalSetLevel($level);
                }
                if($config->getHydrateOutlineNumber())
                {
                    $wrapper->internalSetOutlineNumbers($outlineNumbers);
                }
                foreach($stack as $anc)
                {
                    $anc->internalAddDescendant($wrapper);
                }
            }

            if($wrapper->hasChildren())
            {
                array_push($stack, $wrapper);
                $level++;
                array_push($outlineNumbers, 0);
            }
        }
    }
}
