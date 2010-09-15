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

abstract class DatabaseTest extends \PHPUnit_Framework_TestCase
{

    private
        $em;

    /**
     * gets the entity manager to use for all tests
     *
     * @return Doctrine\ORM\EntityManager
     */
    protected function getEntityManager()
    {
        if(!$this->em)
        {
            $this->em = $this->_createEntityManager();
        }

        return $this->em;
    }

    /**
     * Creates an entity manager to use for all tests
     *
     * @return Doctrine\ORM\EntityManager
     */
    protected function _createEntityManager()
    {
        $conn = \Doctrine\DBAL\DriverManager::getConnection(array(
            'driver' => 'pdo_sqlite',
            'memory' => true
        ));

        $config = new \Doctrine\ORM\Configuration();
        $config->setProxyDir(__DIR__ . '/../Proxies');
        $config->setProxyNamespace('DoctrineExtensions\NestedSet\Tests\Proxies');
        $config->setMetadataDriverImpl(\Doctrine\ORM\Mapping\Driver\AnnotationDriver::create());

        return \Doctrine\ORM\EntityManager::create($conn, $config);
    }


    /**
     * Loads the schema for the given classes
     *
     * @param array $classes
     *
     */
    protected function loadSchema($classes)
    {
        $schemaTool = new \Doctrine\ORM\Tools\SchemaTool($this->getEntityManager());
        $schemaTool->createSchema($classes);
    }



}
