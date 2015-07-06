<?php
namespace PartKeepr\ImageBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader;

class PartKeeprExtension extends Extension
{
    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('partkeepr.image_cache_directory', $config['image_cache_directory']);

        foreach ($config["directories"] as $key => $value) {
            $container->setParameter("partkeepr.directories.".$key, $value);
        }

        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.xml');

    }

    public function getAlias()
    {
        return "partkeepr";
    }
}