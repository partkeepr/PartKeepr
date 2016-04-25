<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;

/**
 * Re-saves all parts in order to re-generate the averagePrice and removals field.
 */
class Version20151002183125 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();

        $partRepository = $this->getEM()->getRepository(
            'PartKeeprPartBundle:Part'
        );

        $parts = $partRepository->findAll();

        foreach ($parts as $part) {
            $part->recomputeStockLevels();
        }

        $this->getEM()->flush();
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
