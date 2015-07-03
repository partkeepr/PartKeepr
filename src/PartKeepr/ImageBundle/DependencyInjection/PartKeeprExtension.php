<?php
namespace PartKeepr\ImageBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;

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
        $container->setParameter('partkeepr.images.iclogo', $config['images']['iclogo']);
        $container->setParameter('partkeepr.images.temp', $config['images']['temp']);
    }

    public function getAlias () {
        return "partkeepr";
    }
}