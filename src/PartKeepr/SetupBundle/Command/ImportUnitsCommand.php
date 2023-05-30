<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class ImportUnitsCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:import-units');
        $this->setDescription('Imports the default PartKeepr units');
        $this->addOption("update", null, InputOption::VALUE_NONE, "Updates existing units");
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $update = $input->getOption("update");

        $return = $this->getContainer()->get('partkeepr.setup.unit_service')->importUnits($update);

        $output->writeln(sprintf(
            '%d units imported, %d existing units skipped',
            $return['imported'],
            $return['skipped']
        ));
    }
}
