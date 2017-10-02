<?php

namespace PartKeepr\ImportBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ImportController extends Controller
{
    protected function detectFileFormat()
    {
    }

    /**
     * @Route("/getSource/")
     *
     * @return JsonResponse
     */
    public function getSourceAction(Request $request)
    {
        $tempFileIri = $request->get("file");

        return new JsonResponse($this->extractCSVData($tempFileIri));
    }

    /**
     * @Route("/getPreview/")
     * @Method({"POST"})
     *
     * @return JsonResponse
     */
    public function getPreviewAction(Request $request)
    {
        $tempFileIri = $request->get("file");

        $configuration = json_decode($request->get("configuration"));
        $baseEntity = $request->get("baseEntity");

        $data = $this->extractCSVData($tempFileIri, false);
        $importService = $this->get("importer_service");
        $importService->setBaseEntity($baseEntity);
        $importService->setImportConfiguration($configuration);
        $importService->setImportData($data);

        try {
            list($entities, $logs) = $importService->import(true);
        } catch (\Exception $e) {
            $logs = [$e->getMessage()];
        }

        return new JsonResponse(["logs" => $logs]);
    }

    /**
     * @Route("/executeImport/")
     * @Method({"POST"})
     *
     * @return JsonResponse
     */
    public function importAction(Request $request)
    {
        $tempFileIri = $request->get("file");

        $configuration = json_decode($request->get("configuration"));
        $baseEntity = $request->get("baseEntity");

        $data = $this->extractCSVData($tempFileIri, false);
        $importService = $this->get("importer_service");
        $importService->setBaseEntity($baseEntity);
        $importService->setImportConfiguration($configuration);
        $importService->setImportData($data);
        list($entities, $logs) = $importService->import();

        return new JsonResponse(["logs" => $logs]);
    }

    protected function extractCSVData($tempFileIRI, $includeHeaders = true)
    {
        $tempUploadedFile = $this->get("api.iri_converter")->getItemFromIri($tempFileIRI);
        $fileContents = $this->get('partkeepr_uploadedfile_service')->getStorage($tempUploadedFile)->read($tempUploadedFile->getFullFilename());

        $tempFile = tempnam(sys_get_temp_dir(), "import");

        file_put_contents($tempFile, $fileContents);

        $fp = fopen($tempFile, "r");

        $data = [];

        if (!$includeHeaders) {
            fgetcsv($fp);
        }

        while (($row = fgetcsv($fp)) !== false) {
            $data[] = $row;
        }

        unlink($tempFile);

        return $data;
    }
}
