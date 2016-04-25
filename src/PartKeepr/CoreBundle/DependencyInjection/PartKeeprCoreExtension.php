<?php

namespace PartKeepr\CoreBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

/**
 * This is the class that loads and manages your bundle configuration.
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class PartKeeprCoreExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('partkeepr.cronjob_check', $config['cronjob_check']);
        $container->setParameter('partkeepr.image_cache_directory', $config['image_cache_directory']);
        $container->setParameter('partkeepr.authentication_provider', $config['authentication_provider']);
        $container->setParameter('partkeepr.tip_of_the_day_uri', $config['tip_of_the_day_uri']);
        $container->setParameter('partkeepr.tip_of_the_day_list', $config['tip_of_the_day_list']);
        $container->setParameter('partkeepr.required_cronjobs', $config['required_cronjobs']);

        foreach ($config['directories'] as $key => $value) {
            $container->setParameter('partkeepr.directories.'.$key, $value);
        }

        $loader = new Loader\XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.xml');
        $loader->load('actions.xml');
    }

    public function getAlias()
    {
        return 'partkeepr';
    }
}
