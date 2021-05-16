<?php

namespace PartKeepr\ExportBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class CsvFormatPass implements CompilerPassInterface
{
/*
    before
    <service id="api_platform.format_negotiator" class="Negotiation\FormatNegotiator" public="false" />
    
    now
    <service id="api_platform.negotiator" class="Negotiation\Negotiator" public="false" />
*/        
    public function process(ContainerBuilder $container)
    {
/*        
        $container->getDefinition('api_platform.negotiator')->addMethodCall('registerFormat', [
            'csv', ['text/comma-separated-values'], true,
        ]);
*/
    }
}
