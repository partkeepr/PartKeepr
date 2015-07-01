<?php
namespace PartKeepr\ImageBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;


/**
 * This is the class that validates and merges configuration from your app/config files
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html#cookbook-bundles-extension-config-class}
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('partkeepr');

        $rootNode->
            children()
                ->scalarNode('image_cache_directory')->cannotBeEmpty()->isRequired()->info('The image cache directory')->end()
                ->arrayNode('images')
                    ->addDefaultsIfNotSet()
                    ->children()
                        ->scalarNode('iclogo')->defaultValue('%kernel.root_dir%/../data/images/iclogo/')->cannotBeEmpty()->info('The directory which contains the uploaded ic logos')->end()
                    ->end()
                ->end()
            ->end();
        // Here you should define the parameters that are allowed to
        // configure your bundle. See the documentation linked above for
        // more information on that topic.

        return $treeBuilder;
    }
}
