<?php
namespace PartKeepr\UploadedFileBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse;
use PartKeepr\UploadedFileBundle\Entity\TempUploadedFile;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TemporaryFileController extends FileController
{
    /**
     * Handles a temporary file upload
     *
     * @RequestParam(name="url",description="An URL where the file is located")
     * @ApiDoc(section="file",output="PartKeepr\UploadedFileBundleBundle\Response\TemporaryFileUploadResponse")
     * @View()
     *
     * @param Request $request The request to process
     *
     * @return JsonResponse The JSON response from the temporary file upload
     * @throws \Exception An exception if neither the userfile form parameter or an URL was given
     */
    public function uploadAction(Request $request)
    {
        $uploadedFile = new TempUploadedFile();
        $fileService = $this->get("partkeepr_uploadedfile_service");

        if ($request->files->has('userfile') && $request->files->get('userfile') != null) {
            $file = $request->files->get('userfile');
            /**
             * @var $file UploadedFile
             */
            $fileService->replace($uploadedFile, new File($file->getPathname()));
            $uploadedFile->setOriginalFilename($file->getClientOriginalName());
        } elseif ($request->request->has("url")) {
            $fileService->replaceFromURL($uploadedFile, $request->request->get("url"));
        } else {
            throw new \Exception("Error: No valid file given");
        }

        $this->getDoctrine()->getManager()->persist($uploadedFile);
        $this->getDoctrine()->getManager()->flush();

        $resource = $this->getResource($request);
        $serializedData = $this->get('serializer')->normalize(
            $uploadedFile,
            'json-ld',
            $resource->getNormalizationContext()
        );

        return new JsonResponse(new TemporaryImageUploadResponse($serializedData));
    }


    /**
     * @inheritdoc
     */
    public function getEntityClass()
    {
        return "PartKeepr\\UploadedFileBunde\\Entity\\TempUploadedFile";
    }
}
