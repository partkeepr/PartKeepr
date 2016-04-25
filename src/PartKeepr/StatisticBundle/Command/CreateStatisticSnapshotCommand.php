<?php

namespace PartKeepr\StatisticBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateStatisticSnapshotCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:cron:create-statistic-snapshot');
        $this->setDescription('Creates a statistic snapshot');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get('partkeepr.statistic.service')->createStatisticSnapshot();
        $this->getContainer()->get('partkeepr.cronlogger_service')->markCronRun('partkeepr:cron:create-statistic-snapshot');
    }
}
