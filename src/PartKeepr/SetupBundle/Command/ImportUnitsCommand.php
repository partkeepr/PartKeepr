<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportUnitsCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:import-units');
        $this->setDescription('Imports the default PartKeepr units');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $return = $this->getContainer()->get('partkeepr.setup.unit_service')->importUnits();

        $output->writeln(sprintf('%d units imported, %d existing units skipped', $return['imported'],
            $return['skipped']));
    }
}
