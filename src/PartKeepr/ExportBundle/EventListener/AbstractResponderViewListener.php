<?php

namespace PartKeepr\ExportBundle\EventListener;

use Exporter\Writer\WriterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\PropertyAccess\PropertyAccess;

abstract class AbstractResponderViewListener
{
    const FORMAT = 'null';

    /**
     * Converts the response to an exported format.
     *
     * @param GetResponseForControllerResultEvent $event
     *
     * @return Response|mixed
     */
    public function onKernelView(GetResponseForControllerResultEvent $event)
    {
        $controllerResult = $event->getControllerResult();

        if ($controllerResult instanceof Response) {
            return;
        }

        $request = $event->getRequest();

        $format = $request->attributes->get('_api_format');
        if (static::FORMAT !== $format) {
            return;
        }

        switch ($request->getMethod()) {
            case Request::METHOD_POST:
                $status = 201;
                break;

            case Request::METHOD_DELETE:
                $status = 204;
                break;

            default:
                $status = 200;
                break;
        }

        $columns = [];

        if ($event->getRequest()->query->has('columns')) {
            $columns = json_decode($event->getRequest()->query->get('columns'));
        }

        $data = $this->flatten($controllerResult, $columns);

        $file = tempnam(sys_get_temp_dir(), 'partkeepr_export');
        unlink($file);
        $writer = $this->getWriter($file);
        $writer->open();
        foreach ($data as $item) {
            $writer->write($item);
        }

        $writer->close();

        $exportData = file_get_contents($file);

        $event->setResponse(new Response($exportData, $status));
    }

    /**
     * Returns the writer.
     *
     * @param $file
     *
     * @return WriterInterface
     */
    abstract protected function getWriter($file);

    /**
     * Flattens the given data. Uses the property accessor to retrieve nested data.
     *
     * @param $data     array  The data, typically an array of entities
     * @param $mappings array The mappings as array, e.g. [ "name", "description", "storageLocation.name" ]
     *
     * @return array
     */
    protected function flatten($data, $mappings)
    {
        $accessor = PropertyAccess::createPropertyAccessor();
        $finalData = [];
        foreach ($data as $key => $row) {
            foreach ($mappings as $mapping) {
                try {
                    $finalData[$key][$mapping] = $accessor->getValue($row, $mapping);

                    if (is_object($finalData[$key][$mapping])) {
                        if ($finalData[$key][$mapping] instanceof \DateTime) {
                            $finalData[$key][$mapping] = $finalData[$key][$mapping]->format(\DateTime::W3C);
                        }
                    }
                } catch (\Exception $e) {
                }
            }
        }

        return $finalData;
    }
}
