<?php
namespace PartKeepr\AuthBundle\Console\Command;

use Doctrine\ORM\EntityManager;
use PartKeepr\AuthBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateUserCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('partkeepr:user:create')
            ->setDescription('Creates an user')
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

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');

        $user = new User($username, $password);

        $em = $this->getContainer()->get('doctrine')->getManager();

        /** @var $em EntityManager */

        $em->persist($user);
        $em->flush();

        $output->writeln("User created");
    }
}