<?php
namespace PartKeepr\AuthBundle\Command;

use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;


class ProtectUserCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:user:protect');
        $this->setDescription("Protects a given user against changes");
        $this->addArgument("username", InputArgument::REQUIRED, "The username to protect against changes");
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $userService = $this->getContainer()->get("partkeepr.userservice");

        $user = $userService->getProxyUser($input->getArgument("username"), $userService->getBuiltinProvider());
        $userService->protect($user);
    }
}


