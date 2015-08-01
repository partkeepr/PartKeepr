<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150801133623 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $sSQL = "UPDATE PartKeeprUser SET username_canonical = username";
        $this->addSql($sSQL);

        $sSQL = "UPDATE PartKeeprUser SET email_canonical = username";
        $this->addSql($sSQL);

        $sSQL = "UPDATE PartKeeprUser SET roles = 'a:0:{}'";
        $this->addSql($sSQL);
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
