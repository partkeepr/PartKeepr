<?php
namespace PartKeepr\CoreBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

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
                ->scalarNode('image_cache_directory')
                    ->cannotBeEmpty()
                    ->isRequired()
                    ->info('The image cache directory')
                ->end()
                ->arrayNode('directories')
                    ->prototype('scalar')
                    ->end()
                ->end()
                ->booleanNode('cronjob_check')
                    ->defaultTrue()
                    ->info('Whether the system should check if cronjobs are running or not')
                ->end()
            ->end();

        return $treeBuilder;
    }
}
