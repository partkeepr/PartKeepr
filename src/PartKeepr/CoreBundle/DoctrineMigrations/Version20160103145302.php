<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Drops legacy tables.
 */
class Version20160103145302 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $tablesToDrop = [
            'LastNotification',
            'Event',
            'Session',
            'PrintingJobConfiguration',
            'PrintingJob',
        ];
        foreach ($tablesToDrop as $table) {
            if ($schema->hasTable($table)) {
                $schema->dropTable($table);
            }
        }
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
