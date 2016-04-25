<?php

namespace PartKeepr\ImageBundle\Controller;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\ResourceInterface;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TemporaryImageController extends ImageController
{
    use ActionUtilTrait;

    /**
     * Handles a temporary image upload.
     *
     * @RequestParam(name="url",description="An URL where the image is located",strict=false)
     * ApiDoc(section="image",output="PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse")
     * @View()
     *
     * @param Request $request The request to process
     *
     * @throws \Exception An exception if neither the userfile form parameter or an URL was given
     *
     * @return JsonResponse The JSON response from the temporary image upload
     */
    public function uploadAction(Request $request)
    {
        $image = new TempImage();
        $imageService = $this->get('partkeepr_image_service');

        if ($request->files->has('userfile') && $request->files->get('userfile') != null) {
            $file = $request->files->get('userfile');
            /*
             * @var $file UploadedFile
             */
            $imageService->replace($image, new File($file->getPathname()));
            $image->setOriginalFilename($file->getClientOriginalName());
        } elseif ($request->request->has('url')) {
            $imageService->replaceFromURL($image, $request->request->get('url'));
        } else {
            throw new \Exception('Error: No valid file given');
        }

        $this->getDoctrine()->getManager()->persist($image);
        $this->getDoctrine()->getManager()->flush();

        /**
         * @var ResourceInterface
         */
        list($resourceType) = $this->extractAttributes($request);

        $serializedData = $this->get('serializer')->normalize(
            $image,
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
        $image = new TempImage();
        $imageService = $this->get('partkeepr_image_service');

        $data = $request->getContent();

        $base64 = explode(',', $data);
        $imageService->replaceFromData($image, base64_decode($base64[1]), 'webcam.png');

        $this->getDoctrine()->getManager()->persist($image);
        $this->getDoctrine()->getManager()->flush();

        return $image;
    }

    /**
     * {@inheritdoc}
     */
    protected function getEntityClass()
    {
        return 'PartKeepr\\ImageBundle\\Entity\\TempImage';
    }
}
