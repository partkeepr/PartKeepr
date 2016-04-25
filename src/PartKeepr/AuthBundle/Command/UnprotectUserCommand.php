<?php

namespace PartKeepr\AuthBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UnprotectUserCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:user:unprotect');
        $this->setDescription('Unprotects a given user against changes');
        $this->addArgument('username', InputArgument::REQUIRED, 'The username to unprotect against changes');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $userService = $this->getContainer()->get('partkeepr.userservice');

        $fosUser = $this->getContainer()->get('fos_user.user_manager')->findUserByUsername(
            $input->getArgument('username')
        );

        if ($fosUser === null) {
            $output->writeln(sprintf('User %s not found', $input->getArgument('username')));
        } else {
            $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);
            $userService->unprotect($user);
            $output->writeln(sprintf('User %s unprotected against changes', $input->getArgument('username')));
        }
    }
}
