<?php

namespace PartKeepr\TipOfTheDayBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class SyncTipsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('partkeepr:cron:synctips')
            ->setDescription('Syncronizes the tips from the PartKeepr website');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get('partkeepr.tip_of_the_day_service')->syncTips();
        $this->getContainer()->get('partkeepr.cronlogger_service')->markCronRun('partkeepr:cron:synctips');
    }
}
