<?php
namespace PartKeepr\CoreBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CheckForUpdatesCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:update-check');
        $this->setDescription("Checks for PartKeepr updates");
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get("partkeepr.versionservice")->doVersionCheck();
    }
}
