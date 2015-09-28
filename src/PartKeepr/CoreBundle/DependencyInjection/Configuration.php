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
            ->scalarNode('authentication_provider')
                ->cannotBeEmpty()
                ->defaultValue('PartKeepr.Auth.WSSEAuthenticationProvider')
                ->info('The authentication provider for the frontend')
            ->end()
            ->scalarNode('tip_of_the_day_uri')
                ->cannotBeEmpty()
                ->defaultValue('http://partkeepr.org/tips/%s')
                ->info('The URI where tips are loaded from')
            ->end()
            ->arrayNode('required_cronjobs')
                ->treatNullLike(array())
                ->prototype('scalar')->end()
                ->defaultValue(array('partkeepr:cron:synctips'))
            ->end()
            ->scalarNode('tip_of_the_day_list')
                ->cannotBeEmpty()
                ->defaultValue('http://partkeepr.org/tips.json')
                ->info('The URI from where the tip database is loaded')
            ->end()
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
