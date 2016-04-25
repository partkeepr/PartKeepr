<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;

/**
 * Sets all present users to be active.
 */
class Version20151208162723 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();
        $activeUsersSQL = 'UPDATE PartKeeprUser SET active = true';
        $this->addSql($activeUsersSQL);
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
