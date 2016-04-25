<?php

namespace PartKeepr\CoreBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ClearCronLoggerCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:cron:clear');
        $this->setDescription('Clears all cron logger entries');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get('partkeepr.cronlogger_service')->clear();
    }
}
