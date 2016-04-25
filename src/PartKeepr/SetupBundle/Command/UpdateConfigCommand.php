<?php

namespace PartKeepr\SetupBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateConfigCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:setup:update-config');
        $this->setDescription('Updates the PartKeepr configuration with all required config parameters');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $configService = $this->getContainer()->get('partkeepr.setup.config_service');
        $config = $configService->configParser();
        $configOutput = $configService->getConfig($config);

        file_put_contents($configService->getConfigPath(false), $configOutput);
        $output->writeln('Config updated');
    }
}
