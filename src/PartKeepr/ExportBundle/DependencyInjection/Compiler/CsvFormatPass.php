<?php

namespace PartKeepr\ExportBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class CsvFormatPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        $container->getDefinition('api.format_negotiator')->addMethodCall('registerFormat', [
            'csv', ['text/comma-separated-values'], true,
        ]);
    }
}
