<?php
namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;


/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150708120022 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();

        $this->fixTree("PartCategory");
        $this->fixTree("FootprintCategory");


    }

    public function fixTree($table)
    {
        $nodes = $this->getNodeIds($table);

        $queryBuilder = $this->connection->createQueryBuilder();
        $queryBuilder->update($table)
            ->set("parent_id", ":parent")
            ->set("root", ":root")
            ->set("lvl", ":level")
            ->where("id = :id");

        foreach ($nodes as $node) {
            $parent = $this->fetchParent($table, $node["id"]);
            $level = $this->getLevel($table, $node["id"]);

            if ($parent !== false) {
                $this->connection->executeUpdate($queryBuilder->getSQL(),
                    array(
                        ":parent" => $parent,
                        ":id" => $node["id"],
                        ":level" => $level,
                        ":root" => 1,
                    ));
            } else {
                $this->connection->executeUpdate($queryBuilder->getSQL(),
                    array(
                        ":parent" => null,
                        ":id" => $node["id"],
                        ":root" => 1,
                        ":level" => 0,
                    ));
            }
        }
    }

    public function fetchParent($table, $id)
    {
        $queryBuilder = $this->connection->createQueryBuilder();

        $queryBuilder->select("parent.id")
            ->from($table, "node")
            ->from($table, "parent")
            ->where("parent.lft < node.lft")
            ->andWhere("parent.rgt > node.rgt")
            ->andWhere("node.id = :nodeid")
            ->orderBy("parent.rgt - parent.lft")
            ->setMaxResults(1);

        return $this->connection->fetchColumn($queryBuilder->getSQL(), array(":nodeid" => $id), 0);
    }

    public function getNodeIds($table)
    {
        $qb = $this->connection->createQueryBuilder();

        $qb->select("id")
            ->from($table)
            ->orderBy("id", "ASC");

        return $this->connection->fetchAll($qb->getSQL());
    }

    public function getLevel($table, $id)
    {
        $qb = $this->connection->createQueryBuilder();

        $qb->select("COUNT(*) AS level")
            ->from($table, "node")
            ->from($table, "parent")
            ->where("node.lft > parent.lft")
            ->andWhere("node.lft < parent.rgt")
            ->andWhere("node.id = :nodeid");

        return $this->connection->fetchAssoc($qb->getSQL(), array(":nodeid" => $id))["level"];
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
