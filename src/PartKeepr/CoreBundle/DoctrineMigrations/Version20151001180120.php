<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use PartKeepr\AuthBundle\Entity\UserProvider;

/**
 * Attaches the builtin user provider to all existing users.
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

        $builtinProvider = $userProviderRepository->findOneBy(['type' => 'Builtin']);

        if ($builtinProvider === null) {
            $builtinProvider = new UserProvider();
            $builtinProvider->setType('Builtin');

            $this->getEM()->persist($builtinProvider);
        }

        $repository = $this->getEM()->getRepository(
            'PartKeeprAuthBundle:User'
        );

        $users = $repository->findAll();

        foreach ($users as $user) {
            if ($user->getProvider() === null) {
                $user->setProvider($builtinProvider);
            }

            $user->setLegacy(true);
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
