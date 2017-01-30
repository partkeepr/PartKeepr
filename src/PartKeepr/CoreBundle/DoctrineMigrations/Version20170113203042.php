<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;

/**
 * Sets overageType to a sane default.
 */
class Version20170113203042 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();
        $adjustValueTypesSQL = "UPDATE ProjectPart SET overageType = 'absolute' where overageType = ''";
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
