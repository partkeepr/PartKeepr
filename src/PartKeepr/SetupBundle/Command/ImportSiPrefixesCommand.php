<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportSiPrefixesCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:import-si-prefixes');
        $this->setDescription('Imports or updates the default PartKeepr si prefixes');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $return = $this->getContainer()->get('partkeepr.setup.si_prefix_service')->importSiPrefixes();

        $output->writeln(sprintf('%d SI prefixes imported, %d existing SI Prefixes updated', $return['imported'],
            $return['updated']));
    }
}
