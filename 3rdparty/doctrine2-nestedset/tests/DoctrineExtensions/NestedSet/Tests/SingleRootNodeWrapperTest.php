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

use DoctrineExtensions\NestedSet\Tests\Mocks\SingleRootNodeMock;
use DoctrineExtensions\NestedSet\Tests\Mocks\ManagerMock;
use DoctrineExtensions\NestedSet\NodeWrapper;



class SingleRootNodeWrapperTest extends DatabaseTest
{
    protected
        $nsm,
        $nodes,
        $wrappers;

    protected function setUp()
    {
        $em = $this->getEntityManager();
        $this->loadSchema(array($em->getClassMetadata('DoctrineExtensions\NestedSet\Tests\Mocks\SingleRootNodeMock')));

        $this->nsm = new ManagerMock($em, 'DoctrineExtensions\NestedSet\Tests\Mocks\SingleRootNodeMock');
        $this->nsm->getConfiguration()->setRootFieldName(null);

        $this->nodes = array(
            new SingleRootNodeMock(1, '1', 1, 10),               # 0
                new SingleRootNodeMock(2, '1.1', 2, 7),          # 1
                    new SingleRootNodeMock(3, '1.1.1', 3, 4),    # 2
                    new SingleRootNodeMock(4, '1.1.2', 5, 6),    # 3
                new SingleRootNodeMock(5, '1.2', 8, 9),          # 4
        );

        $this->wrappers = array();
        foreach($this->nodes as $node)
        {
            $em->persist($node);
            $this->wrappers[] = $this->nsm->wrapNode($node);
        }

        $em->flush();
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::makeRoot
     * @expectedException BadMethodCallException
     */
    public function testMakeRoot()
    {
        $this->wrappers[1]->makeRoot(3);
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
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::getDescendants
     * @covers DoctrineExtensions\NestedSet\Manager::filterNodeDepth
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
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsParentOf
     */
    public function testInsertAsParentOf()
    {
        $newWrapper = $this->nsm->wrapNode(new SingleRootNodeMock(6, '1.1', 0, 0, 0));

        $newWrapper->insertAsParentOf($this->wrappers[4]);
        $this->assertEquals(8, $newWrapper->getLeftValue(), '->insertAsParentOf() updates new node\'s left value');
        $this->assertEquals(11, $newWrapper->getRightValue(), '->insertAsParentOf() updates new node\'s right value');
        $this->assertEquals(null, $newWrapper->getRootValue(), '->insertAsParentOf() updates new node\'s root value');
        $this->assertEquals(9, $this->wrappers[4]->getLeftValue(), '->insertAsParentOf() updates next node\'s left value');
        $this->assertEquals(10, $this->wrappers[4]->getRightValue(), '->insertAsParentOf() updates next node\'s right value');
        $this->assertEquals(12, $this->wrappers[0]->getRightValue(), '->insertAsParentOf() updates parent node\'s right value');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertAsPrevSiblingOf
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::shiftRLRange
     * @covers DoctrineExtensions\NestedSet\NodeWrapper::insertNode
     */
    public function testInsertAsPrevSiblingOf()
    {
        $newNode = new NodeWrapper(new SingleRootNodeMock(21, '1.1.1(.5)'), $this->nsm);

        $newNode->insertAsPrevSiblingOf($this->wrappers[3]);
        $this->assertEquals(5, $newNode->getLeftValue(), '->insertAsPrevSiblingOf() updates new node\'s left value');
        $this->assertEquals(6, $newNode->getRightValue(), '->insertAsPrevSiblingOf() updates new node\'s right value');
        $this->assertEquals(3, $this->wrappers[2]->getLeftValue(), '->insertAsPrevSiblingOf updates prev node\'s left value');
        $this->assertEquals(4, $this->wrappers[2]->getRightValue(), '->insertAsPrevSiblingOf updates prev node\'s right value');
        $this->assertEquals(7, $this->wrappers[3]->getLeftValue(), '->insertAsPrevSiblingOf updates next node\'s left value');
        $this->assertEquals(8, $this->wrappers[3]->getRightValue(), '->insertAsPrevSiblingOf updates next node\'s right value');
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
}
