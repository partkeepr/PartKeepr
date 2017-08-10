<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use PartKeepr\DistributorBundle\Entity\Distributor;

/**
 * Sets all existing distributors to be used for price calculations to reflect behaviour of previous versions.
 */
class Version20170601175559 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();

        $distributorRepository = $this->getEM()->getRepository(
            'PartKeeprDistributorBundle:Distributor'
        );

        $distributors = $distributorRepository->findAll();

        foreach ($distributors as $distributor) {
            /**
             * @var Distributor
             */
            $distributor->setEnabledForReports(true);
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
