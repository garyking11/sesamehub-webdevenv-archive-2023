<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 6/14/2016
 * Time: 2:48 PM
 */

namespace Sesame\Config;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class DataConfiguration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('routes');

        $rootNode
            ->children()
                ->arrayNode('site')
                    ->children()
                        ->scalarNode('name')->end()
                        ->scalarNode('tagline')->end()
                        ->scalarNode('nav_position')->end()
                        ->scalarNode('sidebar_position')->end()
                        ->scalarNode('footer_behavior')->end()
                        ->scalarNode('ga_code')->end()
                        ->scalarNode('locations')->end()
                    ->end()
                ->end()
                ->arrayNode('pages')
                    ->useAttributeAsKey('routename')
                    ->prototype('array')
                        ->children()
                            ->scalarNode('path')->end()
                            ->scalarNode('content')->end()
                            ->scalarNode('meta_description')->end()
                            ->scalarNode('title')->end()
                            ->scalarNode('headline')->end()
                            ->scalarNode('doc_id')->end()
                            ->scalarNode('header')->end()
                            ->scalarNode('after_content')->end()
                            ->scalarNode('sidebar')->end()
                            ->scalarNode('footer')->end()
                            ->scalarNode('image')->end()
                            ->scalarNode('name')->end()
                            ->scalarNode('slug')->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
            ;

        return $treeBuilder;
    }
}