<?php

namespace PartKeepr\ExportBundle\EventListener;

use Exporter\Writer\XmlExcelWriter;

class XmlExcelResponderViewListener extends AbstractResponderViewListener
{
    const FORMAT = 'xlsx';

    protected function getWriter($file)
    {
        return new XmlExcelWriter($file);
    }
}
