<?php

namespace PartKeepr\ExportBundle\Controller;

use Exporter\Writer\CsvWriter;
use Exporter\Writer\XmlExcelWriter;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ExportController extends FOSRestController
{
    /**
     * Exports the given data to a given format.
     *
     * @Routing\Route("/api/export", defaults={"method" = "post","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function exportAction(Request $request)
    {
        $contentTypes = $request->getAcceptableContentTypes();

        $exporter = false;
        $file = tempnam(sys_get_temp_dir(), 'partkeepr_export');
        unlink($file);

        foreach ($contentTypes as $contentType) {
            switch ($contentType) {
                case 'text/comma-separated-values':
                    $exporter = new CsvWriter($file, ',', '"', '\\', false);
                    break;
                case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                    $exporter = new XmlExcelWriter($file, false);
                    break;
            }
        }

        if ($exporter === false) {
            throw new \Exception('No or invalid format specified');
        }

        $content = json_decode($request->getContent(), true);

        $exporter->open();
        foreach ($content as $item) {
            $exporter->write($item);
        }

        $exporter->close();

        $exportData = file_get_contents($file);

        return new Response($exportData, 200);
    }
}
