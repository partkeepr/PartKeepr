<?php
namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use PartKeepr\AuthBundle\Entity\UserProvider;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20151001180120 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->performDatabaseUpgrade();

        $userProviderRepository = $this->getEM()->getRepository(
            'PartKeeprAuthBundle:UserProvider'
        );

        $builtinProvider = $userProviderRepository->findOneBy(array("type" => "Builtin"));

        if ($builtinProvider === null) {
            $builtinProvider = new UserProvider();
            $builtinProvider->setType("Builtin");

            $this->getEM()->persist($builtinProvider);
        }

        $repository = $this->getEM()->getRepository(
            'PartKeeprAuthBundle:User'
        );

        $users = $repository->findAll();

        foreach ($users as $user) {
            $user->setProvider($builtinProvider);
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
