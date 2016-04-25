<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

abstract class BaseMigration extends AbstractMigration implements ContainerAwareInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    public function getContainer()
    {
        return $this->container;
    }

    protected function performDatabaseUpgrade()
    {
        /**
         * @var EntityManager
         */
        $entityManager = $this->container->get('doctrine')->getManager();
        $tool = new SchemaTool($entityManager);

        $meta = $this->container->get('doctrine')->getManager()->getMetadataFactory()->getAllMetadata();

        $tool->updateSchema($meta, true);
    }

    /**
     * @return EntityManager
     */
    protected function getEM()
    {
        return $this->container->get('doctrine')->getManager();
    }
}
