<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class SetupDefaultPartUnitCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:part-unit');
        $this->setDescription('Sets up the default part unit');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $return = $this->getContainer()->get('partkeepr.setup.part_unit_service')->setupDefaultPartUnit();

        if ($return) {
            $output->writeln('Default part unit created');
        } else {
            $output->writeln('Default part unit not created as it already exists');
        }
    }
}
