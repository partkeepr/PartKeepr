<?php

namespace PartKeepr\DoctrineReflectionBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class GenerateEntityCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('generate:extjs:entities');
        $this->setDescription('Generates Sencha ExtJS models');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $reflectionService = $this->getContainer()->get('doctrine_reflection_service');
        $cacheDir = $this->getContainer()->get('kernel')->getRootDir().'/../web/bundles/doctrinereflection/';
        $reflectionService->createCache($cacheDir);
    }
}
