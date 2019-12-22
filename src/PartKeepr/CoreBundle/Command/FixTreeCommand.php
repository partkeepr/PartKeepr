<?php

namespace PartKeepr\CoreBundle\Command;

use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FixTreeCommand extends ContainerAwareCommand
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:fix-category-trees');
        $this->setDescription('Fixes the category trees');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $this->entityManager = $this->getContainer()->get("doctrine.orm.default_entity_manager");
        $this->fixTree('PartCategory');
        $this->fixTree('FootprintCategory');
        $this->fixTree('StorageLocationCategory');
    }

    /**
     * Fixes the tree for a given table due to the migration of doctrine2-nestedset to DoctrineExtensions.
     *
     * @param string $table The table name to fix
     *
     * @throws \Doctrine\DBAL\DBALException
     */
    public function fixTree($table)
    {
        $nodes = $this->getNodeIds($table);

        $queryBuilder = $this->entityManager->getConnection()->createQueryBuilder();
        $queryBuilder->update($table)
            ->set('parent_id', ':parent')
            ->set('root', ':root')
            ->set('lvl', ':level')
            ->where('id = :id');

        foreach ($nodes as $node) {
            $parent = $this->fetchParent($table, $node['id']);
            $level = $this->getLevel($table, $node['id']);

            if ($parent !== false) {
                $this->entityManager->getConnection()->executeUpdate(
                    $queryBuilder->getSQL(),
                    [
                        ':parent' => $parent,
                        ':id'     => $node['id'],
                        ':level'  => $level,
                        ':root'   => 1,
                    ]
                );
            } else {
                $this->entityManager->getConnection()->executeUpdate(
                    $queryBuilder->getSQL(),
                    [
                        ':parent' => null,
                        ':id'     => $node['id'],
                        ':root'   => 1,
                        ':level'  => 0,
                    ]
                );
            }
        }
    }

    /**
     * Fetches the parent node for a table and ID.
     *
     * @param $table
     * @param $id
     *
     * @return mixed
     */
    public function fetchParent($table, $id)
    {
        $queryBuilder = $this->entityManager->getConnection()->createQueryBuilder();

        $queryBuilder->select('parent.id')
            ->from($table, 'node')
            ->from($table, 'parent')
            ->where('parent.lft < node.lft')
            ->andWhere('parent.rgt > node.rgt')
            ->andWhere('node.id = :nodeid')
            ->orderBy('parent.rgt - parent.lft')
            ->setMaxResults(1);

        return $this->entityManager->getConnection()->fetchColumn($queryBuilder->getSQL(), [':nodeid' => $id], 0);
    }

    /**
     * Returns the node IDs for the table.
     *
     * @param $table
     *
     * @return array
     */
    public function getNodeIds($table)
    {
        $qb = $this->entityManager->getConnection()->createQueryBuilder();

        $qb->select('id')
            ->from($table)
            ->orderBy('id', 'ASC');

        return $this->entityManager->getConnection()->fetchAll($qb->getSQL());
    }

    /**
     * Returns the level for a given table and ID.
     *
     * @param $table
     * @param $id
     *
     * @return mixed
     */
    public function getLevel($table, $id)
    {
        $qb = $this->entityManager->getConnection()->createQueryBuilder();

        $qb->select('COUNT(*) AS level')
            ->from($table, 'node')
            ->from($table, 'parent')
            ->where('node.lft > parent.lft')
            ->andWhere('node.lft < parent.rgt')
            ->andWhere('node.id = :nodeid');

        return $this->entityManager->getConnection()->fetchAssoc($qb->getSQL(), [':nodeid' => $id])['level'];
    }
}
