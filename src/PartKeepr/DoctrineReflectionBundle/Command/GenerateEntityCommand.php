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
        $this->setDescription("Generates Sencha ExtJS models");
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $cacheDir = $this->getContainer()->get("kernel")->getCacheDir();

        $cacheDir .= "/doctrinereflection";
        @mkdir($cacheDir, 0777, true);

        $reflectionService = $this->getContainer()->get("doctrine_reflection_service");

        $entities = $reflectionService->getEntities();

        foreach ($entities as $entity) {
            $model = $reflectionService->getEntity($entity);

            $this->writeCacheFile($cacheDir."/".$entity.'.js', $model);
        }
    }

    protected function writeCacheFile($file, $content)
    {
        $tmpFile = tempnam(dirname($file), basename($file));
        if (false !== @file_put_contents($tmpFile, $content) && @rename($tmpFile, $file)) {
            @chmod($file, 0666 & ~umask());

            return;
        }

        throw new \RuntimeException(sprintf('Failed to write cache file "%s".', $file));
    }
}



