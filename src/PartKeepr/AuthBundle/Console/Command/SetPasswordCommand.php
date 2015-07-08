<?php
namespace PartKeepr\AuthBundle\Console\Command;

use Doctrine\ORM\EntityManager;
use PartKeepr\AuthBundle\Entity\User\User;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Class SetPasswordCommand
 *
 * Implements the command to change the password of an user
 *
 * @package PartKeepr\AuthBundle\Console\Command
 */
class SetPasswordCommand extends ContainerAwareCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('partkeepr:user:password')
            ->setDescription('Changes the password of an user')
            ->addArgument(
                'username',
                InputArgument::REQUIRED,
                'The username'
            )
            ->addArgument(
                'password',
                InputArgument::REQUIRED,
                'The password'
            );
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');

        /**
         * @var $entityManager EntityManager
         */
        $entityManager = $this->getContainer()->get('doctrine')->getManager();
        $repository = $entityManager->getRepository(
            'PartKeepr\AuthBundle\Entity\User\User'
        );

        /**
         * @var $user User
         */
        $user = $repository->findOneBy(array("username" => $username));
        $user->setPassword($password);

        $entityManager->flush();

        $output->writeln("Password changed");
    }
}