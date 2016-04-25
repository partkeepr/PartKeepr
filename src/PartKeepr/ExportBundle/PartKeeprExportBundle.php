<?php

namespace PartKeepr\ExportBundle;

use PartKeepr\ExportBundle\DependencyInjection\Compiler\CsvFormatPass;
use PartKeepr\ExportBundle\DependencyInjection\Compiler\XmlExcelFormatPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprExportBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        $container->addCompilerPass(new CsvFormatPass());
        $container->addCompilerPass(new XmlExcelFormatPass());
    }
}
