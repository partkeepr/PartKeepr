<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportFootprintsCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:import-footprints');
        $this->setDescription('Imports the default PartKeepr footprints');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $return = $this->getContainer()->get('partkeepr.setup.footprint_service')->importFootprints();

        $output->writeln(sprintf('%d footprints imported, %d existing footprints skipped', $return['imported'],
            $return['skipped']));
    }
}
