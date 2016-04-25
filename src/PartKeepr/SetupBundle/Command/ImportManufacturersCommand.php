<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportManufacturersCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:import-manufacturers');
        $this->setDescription('Imports the default PartKeepr manufacturers');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $return = $this->getContainer()->get('partkeepr.setup.manufacturer_service')->importManufacturers();

        $output->writeln(sprintf('%d manufacturers imported, %d existing manufacturers skipped', $return['imported'],
            $return['skipped']));
    }
}
