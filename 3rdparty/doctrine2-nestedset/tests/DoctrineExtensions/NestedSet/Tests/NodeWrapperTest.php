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



class NodeWrapperTest extends DatabaseTest
{
    protected
        $nsm,
        $nodes,
        $nodes2,
        $wrappers,
        $wrappers2;

    protected function setUp()
    {
        $em = $this->getEntityManager();
        $this->loadSchema(array($em->getClassMetadata('DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock')));

        $this->nsm = new ManagerMock($em, 'DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock');

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


        $this->wrappers = array();
        foreach($this->nodes as $node)
        {
            $em->persist($node);
            $this->wrappers[] = $this->nsm->wrapNode($node);
        }

        $this->wrappers2 = array();
        foreach($this->nodes2 as $node)
        {
            $em->persist($node);
            $this->wrappers2[] = $this->nsm->wrapNode($node);
        }

        $em->flush();
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::__construct
     */
    public function testConstructor()
    {
        $this->assertType('DoctrineExtensions\NestedSet\NodeWrapper', new NodeWrapper($this->nodes[2], $this->nsm), '->__construct() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::__construct
     * @expectedException InvalidArgumentException
     */
    public function testConstructorWithNodeWrapper()
    {
        new NodeWrapper($this->wrappers[0], $this->nsm);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getNode
     */
    public function testGetNode()
    {
        $this->assertSame($this->nodes[0], $this->wrappers[0]->getNode(), '->getNode() returns wrapped node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::hasPrevSibling
     */
    public function testHasPrevSibling()
    {
        $this->assertTrue($this->wrappers[3]->hasPrevSibling(), '->hasPrevSibling() returns true when previous sibling exists');
        $this->assertFalse($this->wrappers[2]->hasPrevSibling(), '->hasPrevSibling() returns false when previous sibling doesn\'t exist');
        $this->assertFalse($this->wrappers[0]->hasPrevSibling(), '->hasPrevSibling() returns false for root node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::hasNextSibling
     */
    public function testHasNextSibling()
    {
        $this->assertTrue($this->wrappers[2]->hasNextSibling(), '->hasNextSibling() returns true when next sibling exists');
        $this->assertFalse($this->wrappers[3]->hasNextSibling(), '->hasNextSibling() returns false when next sibling doesn\'t exist');
        $this->assertFalse($this->wrappers[0]->hasNextSibling(), '->hasNextSibling() returns false for root node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::hasChildren
     */
    public function testHasChildren()
    {
        $this->assertTrue($this->wrappers[0]->hasChildren());
        $this->assertFalse($this->wrappers[4]->hasChildren());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::hasParent
     */
    public function testHasParent()
    {
        $this->assertFalse($this->wrappers[0]->hasParent());
        $this->assertTrue($this->wrappers[4]->hasParent());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isRoot
     */
    public function testIsRoot()
    {
        $this->assertTrue($this->wrappers[0]->isRoot());
        $this->assertFalse($this->wrappers[1]->isRoot());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isLeaf
     */
    public function testIsLeaf()
    {
        $this->assertFalse($this->wrappers[0]->isLeaf());
        $this->assertTrue($this->wrappers[2]->isLeaf());
        $this->assertTrue($this->wrappers[4]->isLeaf());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isValidNode
     */
    public function testIsValidNode()
    {
        $this->assertTrue($this->wrappers[0]->isValidNode(), '->isValidNode() returns true for valid nodes');

        $this->wrappers[0]->setLeftValue(12);
        $this->assertFalse($this->wrappers[0]->isValidNode(), '->isValidNode() returns false for invalid nodes');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::invalidate
     */
    public function testInvalidate()
    {
        $this->wrappers[0]->invalidate();
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isDescendantOf
     */
    public function testIsDescendantOf()
    {
        $this->assertTrue($this->wrappers[3]->isDescendantOf($this->wrappers[0]));
        $this->assertTrue($this->wrappers[2]->isDescendantOf($this->nodes[1]));
        $this->assertFalse($this->wrappers[1]->isDescendantOf($this->wrappers[4]));
        $this->assertFalse($this->wrappers[1]->isDescendantOf($this->nodes[2]));
    }


    /*
    public function testIsSiblingOf()
    {
        $this->assertTrue($this->wrappers[3]->isSiblingOf($this->wrappers[2]));
        $this->assertTrue($this->wrappers[4]->isSiblingOf($this->nodes[1]));
        $this->assertFalse($this->wrappers[1]->isSiblingOf($this->wrappers[0]));
        $this->assertFalse($this->wrappers[1]->isSiblingOf($this->nodes[2]));
    }
    */


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isAncestorOf
     */
    public function testIsAncestorOf()
    {
        $this->assertTrue($this->wrappers[0]->isAncestorOf($this->wrappers[1]));
        $this->assertTrue($this->wrappers[1]->isAncestorOf($this->nodes[2]));
        $this->assertFalse($this->wrappers[4]->isAncestorOf($this->wrappers[1]));
        $this->assertFalse($this->wrappers[3]->isAncestorOf($this->wrappers[0]));
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::isEqualTo
     */
    public function testIsEqualTo()
    {
        $this->assertTrue($this->wrappers[0]->isEqualTo($this->nodes[0]), '->isEqualTo() returns true for equal nodes');
        $this->assertFalse($this->wrappers[2]->isEqualTo($this->wrappers[3]), '->isEqualTo() returns false for non-equal nodes');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getParent
     */
    public function testGetParent()
    {
        $this->assertEquals($this->nodes[0]->getId(), $this->wrappers[1]->getParent()->getNode()->getId());
        $this->assertNull($this->wrappers[0]->getParent());

        $this->wrappers[3]->getAncestors();
        $this->assertEquals($this->nodes[1]->getId(), $this->wrappers[3]->getParent()->getNode()->getId());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getAncestors
     */
    public function testGetAncestors()
    {
        $a = $this->wrappers[3]->getAncestors();
        $this->assertEquals(
            array($this->nodes[0]->getId(), $this->nodes[1]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $a)
        );

        $this->assertEmpty($this->wrappers[0]->getAncestors());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getPath
     */
    public function testGetPath()
    {
        $this->assertEquals('1 > 1.1', $this->wrappers[3]->getPath(), '->getPath() works with default parameters');

        $this->assertEquals('1 | 1.1', $this->wrappers[3]->getPath(' | '), '->getPath() supports custom separator');

        $this->assertEquals('1 > 1.1 > 1.1.2', $this->wrappers[3]->getPath(' > ', true), '->getPath() can include self');

        $this->assertEquals('', $this->wrappers[0]->getPath(), '->getPath() returns empty string for root node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getOutlineNumber
     */
    public function testGetOutlineNumber()
    {
        $this->assertEquals('1.1.1', $this->wrappers[2]->getOutlineNumber(), '->getOutlineNumber() works for 1.1.1');
        $this->assertEquals('1.1.2', $this->wrappers[3]->getOutlineNumber(), '->getOutlineNumber() works for 1.1.2');
        $this->assertEquals('', $this->wrappers[0]->getOutlineNumber('.',false), '->getOutlineNumber() works for root');
        $this->assertEquals('2', $this->wrappers[4]->getOutlineNumber('.',false), '->getOutlineNumber() works with includeNode=false');
        $this->assertEquals('1-1', $this->wrappers[1]->getOutlineNumber('-'), '->getOutlineNumber() supports separator');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getDescendants
     * @covers DoctrineExtensions\NestedSet\Manager::filterNodeDepth
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getLeftFieldName
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getRightFieldName
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getRootFieldName
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::hasManyRoots
     */
    public function testGetDescendants()
    {
        $d = $this->wrappers[1]->getDescendants();
        $this->assertEquals(
            array($this->nodes[2]->getId(), $this->nodes[3]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $d),
            '->getDescendants() depth=unlimited'
        );

        $this->assertEmpty($this->wrappers[0]->getDescendants(0), '->getDescendants() depth=0');

        $d = $this->wrappers[0]->getDescendants(1);
        $this->assertEquals(
            array($this->nodes[1]->getId(), $this->nodes[4]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $d),
            '->getDescendants() depth=1'
        );

        $d = $this->wrappers[0]->getDescendants(2);
        $this->assertEquals(
            array($this->nodes[1]->getId(), $this->nodes[2]->getId(), $this->nodes[3]->getId(), $this->nodes[4]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $d),
            '->getDescendants() depth=2'
        );
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getPrevSibling
     */
    public function testGetPrevSibling_UnloadedTree()
    {
        $this->assertEquals($this->nodes[2]->getId(), $this->wrappers[3]->getPrevSibling()->getNode()->getId(), '->getPrevSibling() returns previous sibling');

        $this->assertNull($this->wrappers[2]->getPrevSibling(), '->getPrevSibling() returns null for first sibling');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getPrevSibling
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalGetChildren
     */
    public function testGetPrevSibling_LoadedTree()
    {
        $this->wrappers[3]->getParent();
        $this->assertEquals($this->nodes[2]->getId(), $this->wrappers[3]->getPrevSibling()->getNode()->getId(), '->getPrevSibling() returns previous sibling with parent loaded');

        $this->wrappers[2]->getParent();
        $this->wrappers[1]->getChildren();

        $this->assertEquals($this->nodes[2]->getId(), $this->wrappers[3]->getPrevSibling()->getNode()->getId(), '->getPrevSibling() returns previous sibling');

        $this->assertNull($this->wrappers[2]->getPrevSibling(), '->getPrevSibling() returns null for first sibling');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getNextSibling
     */
    public function testGetNextSibling()
    {
        $this->assertEquals($this->nodes[3]->getId(), $this->wrappers[2]->getNextSibling()->getNode()->getId(), '->getNextSibling() returns next sibling');

        $this->assertNull($this->wrappers[3]->getNextSibling(), '->getNextSibling() returns null for last sibling');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getNextSibling
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::internalGetChildren
     */
    public function testGetNextSibling_LoadedTree()
    {
        $this->wrappers[2]->getParent();
        $this->assertEquals($this->nodes[3]->getId(), $this->wrappers[2]->getNextSibling()->getNode()->getId(), '->getNextSibling() returns previous sibling with parent loaded');

        $this->wrappers[3]->getParent();
        $this->wrappers[1]->getChildren();

        $this->assertEquals($this->nodes[3]->getId(), $this->wrappers[2]->getNextSibling()->getNode()->getId(), '->getNextSibling() returns next sibling');

        $this->assertNull($this->wrappers[3]->getNextSibling(), '->getNextSibling() returns null for last sibling');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getSiblings
     */
    public function testGetSiblings()
    {
        $siblings = $this->wrappers[2]->getSiblings();
        $this->assertEquals(
            array($this->nodes[3]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $siblings),
            '->getSiblings() excludes current node by default'
        );

        $siblings = $this->wrappers[2]->getSiblings(true);
        $this->assertEquals(
            array($this->nodes[2]->getId(), $this->nodes[3]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $siblings),
            '->getSiblings() includes current node'
        );
    }

    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getFirstChild
     */
    public function testGetFirstChild()
    {
        $this->assertNull($this->wrappers[2]->getFirstChild(), '->getFirstChild() returns null for leaf node');

        $this->assertEquals($this->nodes[2]->getId(), $this->wrappers[1]->getFirstChild()->getNode()->getId(), '->getFirstChild() queries for child');

        $this->wrappers[0]->getChildren();
        $this->assertEquals($this->nodes[1]->getId(), $this->wrappers[0]->getFirstChild()->getNode()->getId(), '->getFirstChild() works when children exist');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getLastChild
     */
    public function testGetLastChild()
    {
        $this->assertNull($this->wrappers[2]->getLastChild(), '->getLastChild() returns null for leaf node');

        $this->assertEquals($this->nodes[3]->getId(), $this->wrappers[1]->getLastChild()->getNode()->getId(), '->getLastChild() queries for child');

        $this->wrappers[0]->getChildren();
        $this->assertEquals($this->nodes[4]->getId(), $this->wrappers[0]->getLastChild()->getNode()->getId(), '->getLastChild() works when children exist');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getChildren
     */
    public function testGetChildren()
    {
        $c = $this->wrappers[1]->getChildren();
        $this->assertEquals(
            array($this->nodes[2]->getId(), $this->nodes[3]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $c)
        );

        $c = $this->wrappers[0]->getChildren();
        $this->assertEquals(
            array($this->nodes[1]->getId(), $this->nodes[4]->getId()),
            array_map(function($node) {return $node->getNode()->getId();}, $c)
        );

        $this->assertEmpty($this->wrappers[2]->getChildren(), 'no children');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getNumberChildren
     */
    public function testGetNumberChildren()
    {
        $this->assertEquals(2, $this->wrappers[1]->getNumberChildren());
        $this->assertEquals(0, $this->wrappers[3]->getNumberChildren());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getNumberDescendants
     */
    public function testGetNumberDescendants()
    {
        $this->assertEquals(4, $this->wrappers[0]->getNumberDescendants());
        $this->assertEquals(0, $this->wrappers[2]->getNumberDescendants());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getLevel
     */
    public function testGetLevel()
    {
        $this->assertEquals(0, $this->wrappers[0]->getLevel(), '->getLevel() works for root node');
        $this->assertEquals(2, $this->wrappers[3]->getLevel(), '->getLevel() works for leaf node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsParentOf
     */
    public function testInsertAsParentOf()
    {
        $newWrapper = $this->nsm->wrapNode(new NodeMock(6, '1.1', 0, 0, 0));

        $newWrapper->insertAsParentOf($this->wrappers[4]);
        $this->assertEquals(8, $newWrapper->getLeftValue(), '->insertAsParentOf() updates new node\'s left value');
        $this->assertEquals(11, $newWrapper->getRightValue(), '->insertAsParentOf() updates new node\'s right value');
        $this->assertEquals(1, $newWrapper->getRootValue(), '->insertAsParentOf() updates new node\'s root value');
        $this->assertEquals(9, $this->wrappers[4]->getLeftValue(), '->insertAsParentOf() updates next node\'s left value');
        $this->assertEquals(10, $this->wrappers[4]->getRightValue(), '->insertAsParentOf() updates next node\'s right value');
        $this->assertEquals(12, $this->wrappers[0]->getRightValue(), '->insertAsParentOf() updates parent node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsParentOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsParentOf_CantInsertSelf()
    {
        $this->wrappers[1]->insertAsParentOf($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsParentOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsParentOf_CantInsertValidNode()
    {
        $newWrapper = $this->nsm->wrapNode(new NodeMock(6, '1.1', 0, 0, 0));
        $this->wrappers[1]->insertAsParentOf($newWrapper);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsParentOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsParentOf_CantInsertRoot()
    {
        $newWrapper = $this->nsm->wrapNode(new NodeMock(6, '1.1', 0, 0, 0));
        $newWrapper->insertAsParentOf($this->wrappers[0]);
    }



    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsPrevSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testInsertAsPrevSiblingOf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.1(.5)'), $this->nsm);

        $newNode->insertAsPrevSiblingOf($this->wrappers[3]);
        $this->assertEquals(5, $newNode->getLeftValue(), '->insertAsPrevSiblingOf() updates new node\'s left value');
        $this->assertEquals(6, $newNode->getRightValue(), '->insertAsPrevSiblingOf() updates new node\'s right value');
        $this->assertEquals(3, $this->wrappers[2]->getLeftValue(), '->insertAsPrevSiblingOf updates prev node\'s left value');
        $this->assertEquals(4, $this->wrappers[2]->getRightValue(), '->insertAsPrevSiblingOf updates prev node\'s right value');
        $this->assertEquals(7, $this->wrappers[3]->getLeftValue(), '->insertAsPrevSiblingOf updates next node\'s left value');
        $this->assertEquals(8, $this->wrappers[3]->getRightValue(), '->insertAsPrevSiblingOf updates next node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsPrevSiblingOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsPrevSiblingOf_CantInsertSelf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.1(.5)'), $this->nsm);
        $newNode->insertAsPrevSiblingOf($newNode);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsNextSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testInsertAsNextSiblingOf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.1(.5)'), $this->nsm);

        $newNode->insertAsNextSiblingOf($this->wrappers[2]);
        $this->assertEquals(5, $newNode->getLeftValue(), '->insertAsNextSiblingOf() updates new node\'s left value');
        $this->assertEquals(6, $newNode->getRightValue(), '->insertAsNextSiblingOf() updates new node\'s right value');
        $this->assertEquals(3, $this->wrappers[2]->getLeftValue(), '->insertAsNextSiblingOf updates prev node\'s left value');
        $this->assertEquals(4, $this->wrappers[2]->getRightValue(), '->insertAsNextSiblingOf updates prev node\'s right value');
        $this->assertEquals(7, $this->wrappers[3]->getLeftValue(), '->insertAsNextSiblingOf updates next node\'s left value');
        $this->assertEquals(8, $this->wrappers[3]->getRightValue(), '->insertAsNextSiblingOf updates next node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsNextSiblingOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsNextSiblingOf_CantInsertSelf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.1(.5)'), $this->nsm);
        $newNode->insertAsNextSiblingOf($newNode);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsFirstChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testInsertAsFirstChildOf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.0'), $this->nsm);

        $newNode->insertAsFirstChildOf($this->wrappers[1]);
        $this->assertEquals(3, $newNode->getLeftValue(), '->insertAsFirstChildOf() updates new node\'s left value');
        $this->assertEquals(4, $newNode->getRightValue(), '->insertAsFirstChildOf() updates new node\'s right value');
        $this->assertEquals(2, $this->wrappers[1]->getLeftValue(), '->insertAsFirstChildOf updates parent node\'s left value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->insertAsFirstChildOf updates parent node\'s right value');
        $this->assertEquals(5, $this->wrappers[2]->getLeftValue(), '->insertAsFirstChildOf updates first child node\'s left value');
        $this->assertEquals(6, $this->wrappers[2]->getRightValue(), '->insertAsFirstChildOf updates first child node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsFirstChildOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsFirstChildOf_CantInsertSelf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.0'), $this->nsm);
        $newNode->insertAsFirstChildOf($newNode);
    }



    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsLastChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testInsertAsLastChildOf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.3'), $this->nsm);

        $newNode->insertAsLastChildOf($this->wrappers[1]);
        $this->assertEquals(7, $newNode->getLeftValue(), '->insertAsLastChildOf() updates new node\'s left value');
        $this->assertEquals(8, $newNode->getRightValue(), '->insertAsLastChildOf() updates new node\'s right value');
        $this->assertEquals(2, $this->wrappers[1]->getLeftValue(), '->insertAsLastChildOf updates parent node\'s left value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->insertAsLastChildOf updates parent node\'s right value');
        $this->assertEquals(5, $this->wrappers[3]->getLeftValue(), '->insertAsLastChildOf doesn\'t update last child node\'s left value');
        $this->assertEquals(6, $this->wrappers[3]->getRightValue(), '->insertAsLastChildOf doesn\'t update last child node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsLastChildOf
     * @expectedException InvalidArgumentException
     */
    public function testInsertAsLastChildOf_CantInsertSelf()
    {
        $newNode = new NodeWrapper(new NodeMock(21, '1.1.3'), $this->nsm);
        $newNode->insertAsLastChildOf($newNode);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsPrevSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::updateNode
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsPrevSiblingOf()
    {
        $this->wrappers[4]->moveAsPrevSiblingOf($this->wrappers[1]);
        $this->assertEquals(2, $this->wrappers[4]->getLeftValue(), '->moveAsPrevSiblingOf() updates moved node\'s left value');
        $this->assertEquals(3, $this->wrappers[4]->getRightValue(), '->moveAsPrevSiblingOf() updates moved node\'s right value');
        $this->assertEquals(4, $this->wrappers[1]->getLeftValue(), '->moveAsPrevSiblingOf() updates next node\'s left value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->moveAsPrevSiblingOf() updates next node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsPrevSiblingOf
     * @expectedException InvalidArgumentException
     */
    public function testMoveAsPrevSiblingOf_CantMoveSelf()
    {
        $this->wrappers[1]->moveAsPrevSiblingOf($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsPrevSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveBetweenTrees
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsPrevSiblingBetweenTrees()
    {
        $this->wrappers2[1]->moveAsPrevSiblingOf($this->wrappers[2]);
        $this->assertEquals(3, $this->wrappers2[1]->getLeftValue(), '->moveAsPrevSiblingOf() updates moved node\'s left value');
        $this->assertEquals(8, $this->wrappers2[1]->getRightValue(), '->moveAsPrevSiblingOf() updates moved node\'s right value');
        $this->assertEquals(1, $this->wrappers2[1]->getRootValue(), '->moveAsPrevSiblingOf() updates moved node\'s root value');
        $this->assertEquals(9, $this->wrappers[2]->getLeftValue(), '->moveAsPrevSiblingOf() updates next node\'s left value');
        $this->assertEquals(10, $this->wrappers[2]->getRightValue(), '->moveAsPrevSiblingOf() updates next node\'s right value');
        $this->assertEquals(2, $this->wrappers2[4]->getLeftValue(), '->moveAsPrevSiblingOf() updates old tree next node\'s left value');
        $this->assertEquals(3, $this->wrappers2[4]->getRightValue(), '->moveAsPrevSiblingOf() updates old tree next node\'s right value');
        $this->assertEquals(4, $this->wrappers2[2]->getLeftValue(), '->moveAsPrevSiblingOf() updates descendant node\'s left value');
        $this->assertEquals(5, $this->wrappers2[2]->getRightValue(), '->moveAsPrevSiblingOf() updates descendant node\'s right value');
        $this->assertEquals(1, $this->wrappers2[2]->getRootValue(), '->moveAsPrevSiblingOf() updates descendant node\'s root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsNextSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::updateNode
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsNextSiblingOf()
    {
        $this->wrappers[1]->moveAsNextSiblingOf($this->wrappers[4]);
        $this->assertEquals(4, $this->wrappers[1]->getLeftValue(), '->moveAsNextSiblingOf() updates moved node\'s left value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->moveAsNextSiblingOf() updates moved node\'s right value');
        $this->assertEquals(2, $this->wrappers[4]->getLeftValue(), '->moveAsNextSiblingOf() updates previous node\'s left value');
        $this->assertEquals(3, $this->wrappers[4]->getRightValue(), '->moveAsNextSiblingOf() updates previous node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsNextSiblingOf
     * @expectedException InvalidArgumentException
     */
    public function testMoveAsNextSiblingOf_CantMoveSelf()
    {
        $this->wrappers[1]->moveAsNextSiblingOf($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsNextSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveBetweenTrees
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsNextSiblingBetweenTrees()
    {
        $this->wrappers2[1]->moveAsNextSiblingOf($this->wrappers[2]);
        $this->assertEquals(5, $this->wrappers2[1]->getLeftValue(), '->moveAsNextSiblingOf() updates moved node\'s left value');
        $this->assertEquals(10, $this->wrappers2[1]->getRightValue(), '->moveAsNextSiblingOf() updates moved node\'s right value');
        $this->assertEquals(1, $this->wrappers2[1]->getRootValue(), '->moveAsNextSiblingOf() updates moved node\'s root value');
        $this->assertEquals(11, $this->wrappers[3]->getLeftValue(), '->moveAsNextSiblingOf() updates next node\'s left value');
        $this->assertEquals(12, $this->wrappers[3]->getRightValue(), '->moveAsNextSiblingOf() updates next node\'s right value');
        $this->assertEquals(2, $this->wrappers2[4]->getLeftValue(), '->moveAsNextSiblingOf() updates old tree next node\'s left value');
        $this->assertEquals(3, $this->wrappers2[4]->getRightValue(), '->moveAsNextSiblingOf() updates old tree next node\'s right value');
        $this->assertEquals(6, $this->wrappers2[2]->getLeftValue(), '->moveAsNextSiblingOf() updates descendant node\'s left value');
        $this->assertEquals(7, $this->wrappers2[2]->getRightValue(), '->moveAsNextSiblingOf() updates descendant node\'s right value');
        $this->assertEquals(1, $this->wrappers2[2]->getRootValue(), '->moveAsNextSiblingOf() updates descendant node\'s root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsFirstChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::updateNode
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsFirstChildOf()
    {
        $this->wrappers[4]->moveAsFirstChildOf($this->wrappers[2]);
        $this->assertEquals(4, $this->wrappers[4]->getLeftValue(), '->moveAsFirstChildOf() updates moved node\'s left value');
        $this->assertEquals(5, $this->wrappers[4]->getRightValue(), '->moveAsFirstChildOf() updates moved node\'s right value');
        $this->assertEquals(3, $this->wrappers[2]->getLeftValue(), '->moveAsFirstChildOf() updates parent node\'s left value');
        $this->assertEquals(6, $this->wrappers[2]->getRightValue(), '->moveAsFirstChildOf() updates parent node\'s right value');
        $this->assertEquals(7, $this->wrappers[3]->getLeftValue(), '->moveAsFirstChildOf() updates next node\'s left value');
        $this->assertEquals(8, $this->wrappers[3]->getRightValue(), '->moveAsFirstChildOf() updates next node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsFirstChildOf
     * @expectedException InvalidArgumentException
     */
    public function testMoveAsFirstChildOf_CantMoveSelf()
    {
        $this->wrappers[1]->moveAsFirstChildOf($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsFirstChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveBetweenTrees
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsFirstChildBetweenTrees()
    {
        $this->wrappers2[1]->moveAsFirstChildOf($this->wrappers[1]);
        $this->assertEquals(3, $this->wrappers2[1]->getLeftValue(), '->moveAsFirstChildOf() updates moved node\'s left value');
        $this->assertEquals(8, $this->wrappers2[1]->getRightValue(), '->moveAsFirstChildOf() updates moved node\'s right value');
        $this->assertEquals(1, $this->wrappers2[1]->getRootValue(), '->moveAsFirstChildOf() updates moved node\'s root value');
        $this->assertEquals(9, $this->wrappers[2]->getLeftValue(), '->moveAsFirstChildOf() updates next node\'s left value');
        $this->assertEquals(10, $this->wrappers[2]->getRightValue(), '->moveAsFirstChildOf() updates next node\'s right value');
        $this->assertEquals(2, $this->wrappers2[4]->getLeftValue(), '->moveAsFirstChildOf() updates old tree next node\'s left value');
        $this->assertEquals(3, $this->wrappers2[4]->getRightValue(), '->moveAsFirstChildOf() updates old tree next node\'s right value');
        $this->assertEquals(4, $this->wrappers2[2]->getLeftValue(), '->moveAsFirstChildOf() updates descendant node\'s left value');
        $this->assertEquals(5, $this->wrappers2[2]->getRightValue(), '->moveAsFirstChildOf() updates descendant node\'s right value');
        $this->assertEquals(1, $this->wrappers2[2]->getRootValue(), '->moveAsFirstChildOf() updates descendant node\'s root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsLastChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::updateNode
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsLastChildOf()
    {
        $this->wrappers[4]->moveAsLastChildOf($this->wrappers[1]);
        $this->assertEquals(7, $this->wrappers[4]->getLeftValue(), '->moveAsLastChildOf() updates moved node\'s left value');
        $this->assertEquals(8, $this->wrappers[4]->getRightValue(), '->moveAsLastChildOf() updates moved node\'s right value');
        $this->assertEquals(2, $this->wrappers[1]->getLeftValue(), '->moveAsLastChildOf() updates parent node\'s left value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->moveAsLastChildOf() updates parent node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsLastChildOf
     * @expectedException InvalidArgumentException
     */
    public function testMoveAsLastChildOf_CantMoveSelf()
    {
        $this->wrappers[1]->moveAsLastChildOf($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveAsLastChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::moveBetweenTrees
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMoveAsLastChildBetweenTrees()
    {
        $this->wrappers2[1]->moveAsLastChildOf($this->wrappers[1]);
        $this->assertEquals(7, $this->wrappers2[1]->getLeftValue(), '->moveAsLastChildOf() updates moved node\'s left value');
        $this->assertEquals(12, $this->wrappers2[1]->getRightValue(), '->moveAsLastChildOf() updates moved node\'s right value');
        $this->assertEquals(1, $this->wrappers2[1]->getRootValue(), '->moveAsLastChildOf() updates moved node\'s root value');
        $this->assertEquals(2, $this->wrappers[1]->getLeftValue(), '->moveAsLastChildOf() updates parent node\'s left value');
        $this->assertEquals(13, $this->wrappers[1]->getRightValue(), '->moveAsLastChildOf() updates parent node\'s right value');
        $this->assertEquals(2, $this->wrappers2[4]->getLeftValue(), '->moveAsLastChildOf() updates old tree next node\'s left value');
        $this->assertEquals(3, $this->wrappers2[4]->getRightValue(), '->moveAsLastChildOf() updates old tree next node\'s right value');
        $this->assertEquals(8, $this->wrappers2[2]->getLeftValue(), '->moveAsLastChildOf() updates descendant node\'s left value');
        $this->assertEquals(9, $this->wrappers2[2]->getRightValue(), '->moveAsLastChildOf() updates descendant node\'s right value');
        $this->assertEquals(1, $this->wrappers2[2]->getRootValue(), '->moveAsLastChildOf() updates descendant node\'s root value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::makeRoot
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testMakeRoot()
    {
        $this->wrappers[1]->makeRoot(3);
        $this->assertEquals(1, $this->wrappers[1]->getLeftValue(), '->makeRoot() updates new root node\'s left value');
        $this->assertEquals(6, $this->wrappers[1]->getRightValue(), '->makeRoot() updates new root node\'s right value');
        $this->assertEquals(3, $this->wrappers[1]->getRootValue(), '->makeRoot() updates new root node\'s root value');
        $this->assertEquals(2, $this->wrappers[2]->getLeftValue(), '->makeRoot() updates child node\'s left value');
        $this->assertEquals(3, $this->wrappers[2]->getRightValue(), '->makeRoot() updates child node\'s right value');
        $this->assertEquals(3, $this->wrappers[3]->getRootValue(), '->makeRoot() updates child node\'s root value');
        $this->assertEquals(2, $this->wrappers[4]->getLeftValue(), '->makeRoot() updates old tree next node\'s left value');
        $this->assertEquals(3, $this->wrappers[4]->getRightValue(), '->makeRoot() updates old tree next node\'s right value');
        $this->assertEquals(4, $this->wrappers[0]->getRightValue(), '->makeRoot() updates old tree parent node\'s right value');

        $this->wrappers[1]->makeRoot(4);
        $this->assertEquals(3, $this->wrappers[1]->getRootValue(), '->makeRoot() doesn\'t change existing roots');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::addChild
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsLastChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testAddChild_Node()
    {
        $newWrapper = $this->wrappers[1]->addChild(new NodeMock(6, '1.1.3', 0, 0, 0));
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\NodeWrapper', $newWrapper, '->addChild() returns a NodeWrapper');
        $this->assertEquals(7, $newWrapper->getLeftValue(), '->addChild() updates new node\'s left value');
        $this->assertEquals(8, $newWrapper->getRightValue(), '->addChild() updates new node\'s right value');
        $this->assertEquals(1, $newWrapper->getRootValue(), '->addChild() updates new node\'s root value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->addChild() updates parent\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::addChild
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsLastChildOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testAddChild_NodeWrapper()
    {
        $wrapper = $this->nsm->wrapNode(new NodeMock(6, '1.1.3', 0, 0, 0));
        $newWrapper = $this->wrappers[1]->addChild($wrapper);
        $this->assertSame($wrapper, $newWrapper, '->addChild() returns original wrapper when passing a NodeWrapper');
        $this->assertEquals(7, $newWrapper->getLeftValue(), '->addChild() updates new node\'s left value');
        $this->assertEquals(8, $newWrapper->getRightValue(), '->addChild() updates new node\'s right value');
        $this->assertEquals(1, $newWrapper->getRootValue(), '->addChild() updates new node\'s root value');
        $this->assertEquals(9, $this->wrappers[1]->getRightValue(), '->addChild() updates parent\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::addChild
     * @expectedException InvalidArgumentException
     */
    public function testAddChild_CantMoveSelf()
    {
        $this->wrappers[1]->addChild($this->wrappers[1]);
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::delete
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     */
    public function testDelete()
    {
        $this->wrappers[1]->delete();
        $this->assertEquals(2, $this->wrappers[4]->getLeftValue(), '->delete() updates next node\'s left value');
        $this->assertEquals(3, $this->wrappers[4]->getRightValue(), '->delete() updates next node\'s right value');
        $this->assertEquals(4, $this->wrappers[0]->getRightValue(), '->delete() updates parent node\'s right value');
        $this->assertFalse($this->wrappers[1]->isValidNode(), '->delete() sets deleted node to invalid');
        $this->assertFalse($this->wrappers[2]->isValidNode(), '->delete() sets descendant node\'s to invalid');
    }













    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getManager
     */
    public function testGetManager()
    {
        $this->assertSame($this->nsm, $this->wrappers[0]->getManager());
    }



    //
    // Node Interface Methods
    //

    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getLeftValue
     */
    public function testGetLeftValue()
    {
        $this->assertEquals(2, $this->wrappers[1]->getLeftValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::setLeftValue
     */
    public function testSetLeftValue()
    {
        $this->wrappers[1]->setLeftValue(1);
        $this->assertEquals(1, $this->wrappers[1]->getLeftValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getRightValue
     */
    public function testGetRightValue()
    {
        $this->assertEquals(6, $this->wrappers[3]->getRightValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::setRightValue
     */
    public function testSetRightValue()
    {
        $this->wrappers[0]->setRightValue(2);
        $this->assertEquals(2, $this->wrappers[0]->getRightValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getRootValue
     */
    public function testGetRootValue()
    {
        $this->assertEquals(1, $this->wrappers[0]->getRootValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::setRootValue
     */
    public function testSetRootValue()
    {
        $this->wrappers[0]->setRootValue(4);
        $this->assertEquals(4, $this->wrappers[0]->getRootValue());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::__toString
     */
    public function testToString()
    {
        $this->assertType('string', $this->wrappers[0]->__toString(), '->__toString() returns a string');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getId
     */
    public function testGetId()
    {
        $id = $this->wrappers[0]->getId();
        $this->assertNotEmpty($id);
    }
}
