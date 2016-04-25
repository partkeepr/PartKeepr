<?php

namespace PartKeepr\ExportBundle\EventListener;

use Exporter\Writer\CsvWriter;

class CsvResponderViewListener extends AbstractResponderViewListener
{
    const FORMAT = 'csv';

    protected function getWriter($file)
    {
        return new CsvWriter($file);
    }
}
