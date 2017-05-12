<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;

/**
 * Updates the value type to "numeric" where no value type is set.
 */
class Version20170108143802 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();
        $adjustValueTypesSQL = "UPDATE PartParameter SET valueType = 'numeric' where valueType = ''";
        $this->addSql($adjustValueTypesSQL);
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
