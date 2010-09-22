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

namespace DoctrineExtensions\NestedSet\Tests;

use DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock;
use DoctrineExtensions\NestedSet\Tests\Mocks\ManagerMock;
use DoctrineExtensions\NestedSet\NodeWrapper;

class ManagerTest extends DatabaseTest
{

    protected
        $nsm,
        $nodes,
        $nodes2;


    public function setUp()
    {
        $this->nsm = new ManagerMock($this->getEntityManager(), 'DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock');
    }

    public function setUpDb($em=null)
    {
        if($em === null)
        {
            $em = $this->getEntityManager();
        }

        $this->loadSchema(array($em->getClassMetadata('DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock')));
    }

    protected function loadData()
    {
        $this->setUpDb();
        $em = $this->getEntityManager();

        $this->nodes = array(
            new NodeMock(1, '1', 1, 10),               # 0
                new NodeMock(2, '1.1', 2, 7),          # 1
                    new NodeMock(3, '1.1.1', 3, 4),    # 2
                    new NodeMock(4, '1.1.2', 5, 6),    # 3
                new NodeMock(5, '1.2', 8, 9),          # 4
        );

        $this->nodes2 = array(
            new NodeMock(11, '1', 1, 12, 2),           # 0
               new NodeMock(12, '1.1', 2, 7, 2),       # 1
                   new NodeMock(13, '1.1.1', 3, 4, 2), # 2
                   new NodeMock(14, '1.1.2', 5, 6, 2), # 3
               new NodeMock(15, '1.2', 8, 9, 2),       # 4
               new NodeMock(16, '1.3', 10, 11, 2),     # 5
        );


        foreach($this->nodes as $node)
        {
            $em->persist($node);
        }

        $this->wrappers2 = array();
        foreach($this->nodes2 as $node)
        {
            $em->persist($node);
        }

        $em->flush();
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::__construct
     */
    public function testConstructor()
    {
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\Manager', $this->nsm);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTree
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTreeAsArray
     * @expectedException InvalidArgumentException
     */
    public function testFetchTreeNoRootId()
    {
        $this->nsm->fetchTree();
    }

    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTree
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTreeAsArray
     * @covers DoctrineExtensions\NestedSet\Manager::buildTree
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetParent
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetAncestors
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalAddDescendant
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalAddChild
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetLevel
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetOutlineNumbers
     */
    public function testFetchTree()
    {
        $this->loadData();
        $nodes = $this->nodes;

        $this->assertNull($this->nsm->fetchTree(10), '->fetchTree() returns null when no nodes exist');

        $root = $this->nsm->fetchTree(1);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $root, '->fetchTree() returns a NodeWrapper object');

        //
        // NOTE: Testing private variables
        //

        $root_parent = $this->readAttribute($root, 'parent');
        $root_children = $this->readAttribute($root, 'children');
        $root_ancestors = $this->readAttribute($root, 'ancestors');
        $root_descendants = $this->readAttribute($root, 'descendants');

        $this->assertEquals($nodes[0]->getId(), $root->getId(), '->fetchTree() root id is correct');
        $this->assertAttributeEquals(0, 'level', $root, '->fetchTree() root level is correct');
        $this->assertAttributeEquals(array(1), 'outlineNumbers', $root, '->fetchTree() root outlineNumbers is correct');
        $this->assertEmpty($root_ancestors, '->fetchTree() root ancestors is empty');
        $this->assertNull($root_parent, '->fetchTree() root parent is null');
        $this->assertEquals(
            array($nodes[1]->getId(), $nodes[4]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $root_children),
            '->fetchTree() root children populated'
        );
        $this->assertEquals(
            array($nodes[1]->getId(), $nodes[2]->getId(), $nodes[3]->getId(), $nodes[4]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $root_descendants),
            '->fetchTree() root descendants populated'
        );
        $this->assertAttributeEquals(1, 'level', $root_children[0], '->fetchTree() root children level is correct');
        $this->assertAttributeEquals(array(1,1), 'outlineNumbers', $root_children[0], '->fetchTree() root children outlineNumbers is correct');


        $node1_parent = $this->readAttribute($root_children[0], 'parent');
        $node1_children = $this->readAttribute($root_children[0], 'children');
        $node1_ancestors = $this->readAttribute($root_children[0], 'ancestors');
        $node1_descendants = $this->readAttribute($root_children[0], 'descendants');

        $this->assertEquals($nodes[0]->getId(), $node1_parent->getNode()->getId(), '->fetchTree() first child parent is correct');
        $this->assertEquals(
            array($nodes[0]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $node1_ancestors),
            '->fetchTree() first child ancestors is correct'
        );
        $this->assertEquals(
            array($nodes[2]->getId(), $nodes[3]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $node1_children),
            '->fetchTree() first child children populated'
        );
        $this->assertEquals(
            array($nodes[2]->getId(), $nodes[3]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $node1_descendants),
            '->fetchTree() first child descendants populated'
        );
        $this->assertAttributeEquals(2, 'level', $node1_children[0], '->fetchTree() node 1 children level is correct');
        $this->assertAttributeEquals(array(1,1,2), 'outlineNumbers', $node1_children[1], '->fetchTree() node 1 children outlineNumbers is correct');


        $node3_parent = $this->readAttribute($root_descendants[2], 'parent');
        $node3_children = $this->readAttribute($root_descendants[2], 'children');
        $node3_ancestors = $this->readAttribute($root_descendants[2], 'ancestors');
        $node3_descendants = $this->readAttribute($root_descendants[2], 'descendants');
        $this->assertEquals($nodes[1]->getId(), $node3_parent->getNode()->getId(), '->fetchTree() leaf parent is correct');
        $this->assertEquals(
            array($nodes[0]->getId(), $nodes[1]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $node3_ancestors),
            '->fetchTree() leaf ancestors is correct'
        );
        $this->assertEmpty($node3_children, '->fetchTree() leaf children is empty');
        $this->assertEmpty($node3_descendants, '->fetchTree() leaf descendants is empty');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTree
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTreeAsArray
     * @covers DoctrineExtensions\NestedSet\Manager::buildTree
     * @covers DoctrineExtensions\NestedSet\Manager::filterNodeDepth
     */
    public function testFetchTreeDepth()
    {
        $this->loadData();
        $nodes = $this->nodes;

        $this->assertNull($this->nsm->fetchTree(1, 0));

        $root = $this->nsm->fetchTree(1, 2);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $root, '->fetchTree() returns a NodeWrapper object');

        //
        // NOTE: Testing private variables
        //
        $node1_children = $this->readAttribute($root->getFirstChild(), 'children');
        $node1_descendants = $this->readAttribute($root->getFirstChild(), 'descendants');
        $this->assertEmpty($node1_children, '->fetchTree() empty children with depth filtered');
        $this->assertEmpty($node1_descendants, '->fetchTree() empty descendants with depth filtered');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchBranch
     * @covers DoctrineExtensions\NestedSet\Manager::fetchBranchAsArray
     * @covers DoctrineExtensions\NestedSet\Manager::buildTree
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetParent
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalSetAncestors
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalAddDescendant
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalAddChild
     */
    public function testFetchBranch()
    {
        $this->loadData();
        $nodes = $this->nodes;

        $this->assertNull($this->nsm->fetchBranch(-10), '->fetchBranch() returns null when branch node doesn\'t exist');

        $root = $this->nsm->fetchBranch(2);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $root, '->fetchBranch() returns a NodeWrapper object');

        //
        // NOTE: Testing private variables
        //

        $root_parent = $this->readAttribute($root, 'parent');
        $root_children = $this->readAttribute($root, 'children');
        $root_ancestors = $this->readAttribute($root, 'ancestors');
        $root_descendants = $this->readAttribute($root, 'descendants');

        $this->assertEquals($nodes[1]->getId(), $root->getId(), '->fetchBranch() start id is correct');
        $this->assertAttributeEquals(1, 'level', $root, '->fetchBranch() start level is correct');
        $this->assertAttributeEquals(array(1,1), 'outlineNumbers', $root, '->fetchBranch() start outlineNumbers is correct');
        $this->assertNull($root_parent, '->fetchBranch() start parent is null');
        $this->assertEquals(
            array($nodes[2]->getId(), $nodes[3]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $root_children),
            '->fetchBranch() start children populated'
        );
        $this->assertEquals(
            array($nodes[2]->getId(), $nodes[3]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $root_descendants),
            '->fetchBranch() start descendants populated'
        );
        $this->assertAttributeEquals(2, 'level', $root_children[0], '->fetchBranch() child level is correct');
        $this->assertAttributeEquals(array(1,1,2), 'outlineNumbers', $root_children[1], '->fetchBranch() child outlineNumbers is correct');


        $node2_parent = $this->readAttribute($root_children[0], 'parent');
        $node2_children = $this->readAttribute($root_children[0], 'children');
        $node2_ancestors = $this->readAttribute($root_children[0], 'ancestors');
        $node2_descendants = $this->readAttribute($root_children[0], 'descendants');

        $this->assertEquals($nodes[1]->getId(), $node2_parent->getNode()->getId(), '->fetchBranch() first child parent is correct');
        $this->assertEquals(
            array($nodes[1]->getId()),
            array_map(function($e) {return $e->getNode()->getId();}, $node2_ancestors),
            '->fetchBranch() first child ancestors is correct'
        );
        $this->assertEmpty($node2_children, '->fetchBranch() first child children populated');
        $this->assertEmpty($node2_descendants, '->fetchBranch() first child descendants populated');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchBranch
     * @covers DoctrineExtensions\NestedSet\Manager::fetchBranchAsArray
     * @covers DoctrineExtensions\NestedSet\Manager::buildTree
     * @covers DoctrineExtensions\NestedSet\Manager::filterNodeDepth
     */
    public function testFetchBranchDepth()
    {
        $this->loadData();
        $nodes = $this->nodes;

        $this->assertNull($this->nsm->fetchBranch(2, 0));

        $root = $this->nsm->fetchBranch(2, 1);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $root, '->fetchTree() returns a NodeWrapper object');

        //
        // NOTE: Testing private variables
        //
        $node1_children = $this->readAttribute($root, 'children');
        $node1_descendants = $this->readAttribute($root, 'descendants');
        $this->assertEmpty($node1_children, '->fetchTree() empty children with depth filtered');
        $this->assertEmpty($node1_descendants, '->fetchTree() empty descendants with depth filtered');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTree
     * @covers DoctrineExtensions\NestedSet\Manager::fetchTreeAsArray
     * @covers DoctrineExtensions\NestedSet\Manager::buildTree
     */
    public function testFetchTreeDuplicate()
    {
        $this->loadData();
        $nodes = $this->nodes;

        $root1 = $this->nsm->fetchTree(1);
        $this->assertEquals(2, count($root1->getChildren()), '1st root has correct number of children');

        $root2 = $this->nsm->fetchTree(1);
        $this->assertEquals(2, count($root2->getChildren()), '1st root has correct number of children after 2nd fetchTree()');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::createRoot
     */
    public function testCreateRoot()
    {
        $this->setUpDb();

        $node = new NodeMock(21, '1');
        $wrapper = $this->nsm->createRoot($node);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $wrapper, '->createRoot() returns a NodeWrapper()');
        $this->assertEquals(1, $wrapper->getLeftValue(), '->createRoot() sets left value');
        $this->assertEquals(2, $wrapper->getRightValue(), '->createRoot() sets right value');
        $this->assertEquals(21, $wrapper->getRootValue(), '->createRoot() sets root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::createRoot
     * @expectedException InvalidArgumentException
     */
    public function testCreateRoot_CantPassNodeWrapper()
    {
        $node = new NodeMock(21, '1');
        $wrapper = $this->nsm->wrapNode($node);
        $this->nsm->createRoot($wrapper);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::createRoot
     */
    public function testCreateRoot_NoId()
    {
        $this->setUpDb();

        $node = new NodeMock(null, '1');
        $wrapper = $this->nsm->createRoot($node);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $wrapper, '->createRoot() returns a NodeWrapper()');
        $this->assertEquals($wrapper->getId(), $wrapper->getRootValue(), '->createRoot() sets root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::wrapNode
     */
    public function testWrapNode()
    {
        $node = new NodeMock(1, '1');
        $wrapper = $this->nsm->wrapNode($node);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $wrapper, '->wrapNode returns NodeWrapper object');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::wrapNode
     * @expectedException InvalidArgumentException
     */
    public function testWrapNode_CantWrapNodeWrapper()
    {
        $node = new NodeMock(1, '1');
        $wrapper = new NodeWrapper($node, $this->nsm);
        $this->nsm->wrapNode($wrapper);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::reset
     */
    public function testReset()
    {
        $node = new NodeMock(1, '1');
        $wrapper1 = $this->nsm->wrapNode($node);
        $wrapper2 = $this->nsm->wrapNode($node);
        $this->assertSame($wrapper1, $wrapper2, '->wrapNode() returns cached NodeWrapper instance');

        $this->nsm->reset();
        $wrapper3 = $this->nsm->wrapNode($node);
        $this->assertNotSame($wrapper1, $wrapper3, '->reset() clears NodeWrapper cache');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::getEntityManager
     */
    public function testGetEntityManager()
    {
        $this->assertInstanceOf('Doctrine\ORM\EntityManager', $this->nsm->getEntityManager(), '->getEntityManager() returns instance of EntityManager');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::getConfiguration
     */
    public function testGetConfiguration()
    {
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\Config', $this->nsm->getConfiguration(), '->getConfiguration() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::updateLeftValues
     */
    public function testUpdateLeftValues()
    {
        $wrappers = array(
            $this->nsm->wrapNode(new NodeMock(1, '1', 1, 6)),
            $this->nsm->wrapNode(new NodeMock(2, '1.1', 2, 3)),
            $this->nsm->wrapNode(new NodeMock(3, '1.2', 4, 5)),
        );

        $this->nsm->updateLeftValues(2, 0, 2, 1);

        $this->assertEquals(4, $wrappers[1]->getLeftValue(), '->updateLeftValues() updates left value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::updateRightValues
     */
    public function testUpdateRightValues()
    {
        $wrappers = array(
            $this->nsm->wrapNode(new NodeMock(1, '1', 1, 6)),
            $this->nsm->wrapNode(new NodeMock(2, '1.1', 2, 3)),
            $this->nsm->wrapNode(new NodeMock(3, '1.2', 4, 5)),
        );

        $this->nsm->updateRightValues(2, 0, 2, 1);

        $this->assertEquals(5, $wrappers[1]->getRightValue(), '->updateRightValues() updates right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::updateValues
     */
    public function testUpdateValues()
    {
        // Make sure updateValues can be called with no registered wrappers
        $this->nsm->updateValues(1, 0, 2, 1, 15);

        $wrappers = array(
            $this->nsm->wrapNode(new NodeMock(1, '1', 1, 6)),
            $this->nsm->wrapNode(new NodeMock(2, '1.1', 2, 3)),
            $this->nsm->wrapNode(new NodeMock(3, '1.2', 4, 5)),
        );

        $this->nsm->updateValues(1, 0, 2, 1, 15);

        $this->assertEquals(4, $wrappers[1]->getLeftValue(), '->updateValues() updates left value');
        $this->assertEquals(5, $wrappers[1]->getRightValue(), '->updateValues() updates right value');
        $this->assertEquals(15, $wrappers[1]->getRootValue(), '->updateValues() updates root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::removeNodes
     */
    public function testRemoveNodes()
    {
        $wrappers = array(
            $this->nsm->wrapNode(new NodeMock(1, '1', 1, 6)),
            $this->nsm->wrapNode(new NodeMock(2, '1.1', 2, 3)),
            $this->nsm->wrapNode(new NodeMock(3, '1.2', 4, 5)),
        );

        $this->nsm->removeNodes(2,3,1);
        $this->assertFalse($this->nsm->wrapperExists($wrappers[1]->getId()), '->removeNodes() removes node from manager');
        $this->assertFalse($this->nsm->getEntityManager()->contains($wrappers[2]->getNode()), '->removeNodes() removes node from entity manager');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Manager::filterNodeDepth
     */
    public function testFilterNodeDepth_Empty()
    {
        $this->assertEmpty($this->nsm->filterNodeDepth(array(), 1), '->filterNodeDepth() returns an empty array when given an empty array');
        $this->assertEmpty($this->nsm->filterNodeDepth($this->nodes, 0), '->filterNodeDepth() returns an empty array for depth=0');
    }


}
