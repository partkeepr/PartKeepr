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

use DoctrineExtensions\NestedSet\Config;


class ConfigTest extends DatabaseTest
{

    protected
        $config;

    public function setUp()
    {
        $this->config = new Config($this->getEntityManager());
    }

    /**
     * @covers DoctrineExtensions\NestedSet\Config::__construct
     */
    public function testConstructor()
    {
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\Config', $this->config, '->__construct() works with default parameters');

        $clazz = 'DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock';
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\Config', new Config($this->getEntityManager(), $clazz), '->construct() works with a classname');

        $metadata = $this->getEntityManager()->getClassMetadata($clazz);
        $this->assertInstanceOf('DoctrineExtensions\NestedSet\Config', new Config($this->getEntityManager(), $metadata), '->construct() works with metadata');

        $this->assertEquals('lft', $this->config->getLeftFieldName(), '->__construct() sets default left field name');
        $this->assertEquals('rgt', $this->config->getRightFieldName(), '->__construct() sets default right field name');
        $this->assertEquals('root', $this->config->getRootFieldName(), '->__construct() sets default root field name');
        $this->assertFalse($this->config->hasManyRoots(), '->__construct sets default hasManyRoots');
        $this->assertTrue($this->config->getHydrateLevel(), '->__construct() sets hydrate level to true');
        $this->assertTrue($this->config->getHydrateOutlineNumber(), '->__construct() sets default hydrate outline number');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::setClass
     * @expectedException InvalidArgumentException
     */
    public function testSetUnknownClass()
    {
        $this->config->setClass('BogusClass');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::setClass
     * @expectedException Doctrine\ORM\Mapping\MappingException
     */
    public function testSetNonEntityClass()
    {
        $this->config->setClass('DoctrineExtensions\NestedSet\Tests\ConfigTest');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::setClass
     * @expectedException InvalidArgumentException
     */
    public function testSetNonNodeClass()
    {
        $this->config->setClass('DoctrineExtensions\NestedSet\Tests\Mocks\NonNodeMock');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::setClass
     * @covers DoctrineExtensions\NestedSet\Config::getClassname
     * @covers DoctrineExtensions\NestedSet\Config::getClassMetadata
     */
    public function testSetClass()
    {
        $clazz = 'DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock';
        $metadata = $this->getEntityManager()->getClassMetadata($clazz);
        $this->config->setClass($metadata);
        $this->assertEquals($clazz, $this->config->getClassname(), '->setClass() accepts a metadata object');
        $this->assertSame($metadata, $this->config->getClassMetadata(), '->getClassMetadata() works');

        $this->assertSame($this->config, $this->config->setClass($clazz), '->setClass() returns $this for fluent API');
        $this->assertEquals($clazz, $this->config->getClassname(), '->getClassname() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getEntityManager
     */
    public function testGetEntityManager()
    {
        $this->assertInstanceOf('Doctrine\ORM\EntityManager', $this->config->getEntityManager(), '->getEntityManager() returns EntityManager');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getLeftFieldName
     * @covers DoctrineExtensions\NestedSet\Config::setLeftFieldName
     */
    public function testSetLeftFieldName()
    {
        $this->assertSame($this->config, $this->config->setLeftFieldName('foo'), '->setLeftFieldName() returns $this for fluent API');
        $this->assertEquals('foo', $this->config->getLeftFieldName(), '->getLeftFieldName() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getRightFieldName
     * @covers DoctrineExtensions\NestedSet\Config::setRightFieldName
     */
    public function testSetRightFieldName()
    {
        $this->assertSame($this->config, $this->config->setRightFieldName('foo'), '->setRightFieldName() returns $this for fluent API');
        $this->assertEquals('foo', $this->config->getRightFieldName(), '->getRightFieldName() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getRootFieldName
     * @covers DoctrineExtensions\NestedSet\Config::setRootFieldName
     */
    public function testSetRootFieldName()
    {
        $this->assertSame($this->config, $this->config->setRootFieldName('foo'), '->setRootFieldName() returns $this for fluent API');
        $this->assertEquals('foo', $this->config->getRootFieldName(), '->getRootFieldName() works');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::hasManyRoots
     */
    public function testIsSingleRoot()
    {
        $this->config->setClass('DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock');
        $this->assertTrue($this->config->hasManyRoots(), '->hasManyRoots() returns true for MutlipleRootNode node');

        $this->config->setClass('DoctrineExtensions\NestedSet\Tests\Mocks\SingleRootNodeMock');
        $this->assertFalse($this->config->hasManyRoots(), '->hasManyRoots() returns false for Node node');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getBaseQueryBuilder
     * @covers DoctrineExtensions\NestedSet\Config::setBaseQueryBuilder
     */
    public function testSetBaseQueryBuilder()
    {
        $defaultQb = $this->config->getDefaultQueryBuilder();
        $this->assertEquals($defaultQb, $this->config->getBaseQueryBuilder(), '->getBaseQueryBuilder() returns default QueryBuilder if none is set');

        $qb = $this->getEntityManager()->createQueryBuilder()
            ->select('y')
            ->from('DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock', 'y');
        $this->config->setBaseQueryBuilder($qb);
        $this->assertEquals($qb, $this->config->getBaseQueryBuilder(), '->setBaseQueryBuilder() sets a QueryBuilder object');
        $this->assertNotSame($qb, $this->config->getBaseQueryBuilder(), '->getBaseQueryBuilder() returns a clone of the base query builder object');

        $this->config->setBaseQueryBuilder();
        $this->assertEquals($defaultQb, $this->config->getBaseQueryBuilder(), '->setBaseQueryBuilder() reverts to default QueryBuilder when nothing is set');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::resetBaseQueryBuilder
     * @covers DoctrineExtensions\NestedSet\Config::setBaseQueryBuilder
     */
    public function testResetBaseQueryBuilder()
    {
        $defaultQb = $this->config->getDefaultQueryBuilder();

        $qb = $this->getEntityManager()->createQueryBuilder()
            ->select('y')
            ->from('DoctrineExtensions\NestedSet\Tests\Mocks\NodeMock', 'y');
        $this->config->setBaseQueryBuilder($qb);

        $this->config->resetBaseQueryBuilder();
        $this->assertEquals($defaultQb, $this->config->getBaseQueryBuilder(), '->resetBaseQueryBuilder() reverts to default QueryBuilder');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getDefaultQueryBuilder
     */
    public function testGetDefaultQueryBuilder()
    {
        $qb = $this->config->getDefaultQueryBuilder();
        $this->assertInstanceOf('Doctrine\ORM\QueryBuilder', $qb, '->getDefaultQueryBuilder() returns QueryBuilder object');
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getQueryBuilderAlias
     */
    public function testGetQueryBuilderAlias()
    {
        $this->assertEquals('n', $this->config->getQueryBuilderAlias());
    }


    /**
     * @covers DoctrineExtensions\NestedSet\Config::getHydrateLevel
     * @covers DoctrineExtensions\NestedSet\Config::setHydrateLevel
     */
    public function testSetHydrateLevel()
    {
        $this->assertSame($this->config, $this->config->setHydrateLevel(false), '->setHydrateLevel() returns $this for fluent API');
        $this->assertFalse($this->config->getHydrateLevel(), '->getHydrateLevel() works');
    }


    /*
     * @covers DoctrineExtensions\NestedSet\Config::getHydrateOutlineNumber
     * @covers DoctrineExtensions\NestedSet\Config::setHydrateOutlineNumber
     */
    public function testSetHydrateOutlineNumber()
    {
        $this->assertSame($this->config, $this->config->setHydrateOutlineNumber(false), '->setHydrateOutlineNumber() returns $this for fluent API');
        $this->assertFalse($this->config->getHydrateOutlineNumber(), '->getHydrateOutlineNumber() works');
    }
}
