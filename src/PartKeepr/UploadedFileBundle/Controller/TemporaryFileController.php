<?php

namespace PartKeepr\UploadedFileBundle\Controller;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse;
use PartKeepr\UploadedFileBundle\Entity\TempUploadedFile;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TemporaryFileController extends FileController
{
    use ActionUtilTrait;

    /**
     * Handles a temporary file upload.
     *
     * @RequestParam(name="url",description="An URL where the file is located",strict=false)
     * @ApiDoc(section="file",output="PartKeepr\UploadedFileBundleBundle\Response\TemporaryFileUploadResponse")
     * @View()
     *
     * @param Request $request The request to process
     *
     * @throws \Exception An exception if neither the userfile form parameter or an URL was given
     *
     * @return JsonResponse The JSON response from the temporary file upload
     */
    public function uploadAction(Request $request)
    {
        $uploadedFile = new TempUploadedFile();
        $fileService = $this->get('partkeepr_uploadedfile_service');

        if ($request->files->has('userfile') && $request->files->get('userfile') != null) {
            $file = $request->files->get('userfile');
            if (!$file->isValid()) {
                switch ($file->getError()) {
                    case UPLOAD_ERR_INI_SIZE:
                        $error = $this->get('translator')->trans('The uploaded file is too large.');
                        break;
                    default:
                        $error = $this->get('translator')->trans('Unknown error, error code %code',
                            ['code' => $file->getError()]);
                        break;
                }

                throw new \Exception($error);
            }
            /*
             * @var $file UploadedFile
             */
            $fileService->replace($uploadedFile, new File($file->getPathname()));
            $uploadedFile->setOriginalFilename($file->getClientOriginalName());
        } elseif ($request->request->has('url')) {
            $fileService->replaceFromURL($uploadedFile, $request->request->get('url'));
        } else {
            throw new \Exception($this->get('translator')->trans('No valid file given'));
        }

        $this->getDoctrine()->getManager()->persist($uploadedFile);
        $this->getDoctrine()->getManager()->flush();

        /**
         * @var ResourceInterface
         */
        list($resourceType) = $this->extractAttributes($request);

        $serializedData = $this->get('serializer')->normalize(
            $uploadedFile,
            'jsonld',
            $resourceType->getNormalizationContext()
        );

        return new JsonResponse(new TemporaryImageUploadResponse($serializedData));
    }

    /**
     * Uploads a webcam image.
     *
     * @param Request $request The request to process
     *
     * @return Response
     */
    public function webcamUploadAction(Request $request)
    {
        $file = new TempUploadedFile();
        $fileService = $this->get('partkeepr_uploadedfile_service');

        $data = $request->getContent();

        $base64 = explode(',', $data);
        $fileService->replaceFromData($file, base64_decode($base64[1]), 'webcam.png');

        $this->getDoctrine()->getManager()->persist($file);
        $this->getDoctrine()->getManager()->flush();

        return $file;
    }

    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile';
    }
}
