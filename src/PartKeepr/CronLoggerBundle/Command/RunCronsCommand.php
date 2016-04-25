<?php

namespace PartKeepr\CronLoggerBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class RunCronsCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:cron:run');
        $this->setDescription('Runs all cron jobs');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get('partkeepr.cronlogger_service')->runCrons();
    }
}
