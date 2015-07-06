<?php
namespace PartKeepr\ImageBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TemporaryImageController extends ImageController
{

    /**
     * Handles a temporary image upload
     *
     * @RequestParam(name="url",description="An URL where the image is located")
     * ApiDoc(section="image",output="PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse")
     * @View()
     *
     * @param Request $request The request to process
     *
     * @return JsonResponse The JSON response from the temporary image upload
     * @throws \Exception An exception if neither the userfile form parameter or an URL was given
     */
    public function uploadAction(Request $request)
    {
        $image = new TempImage();
        $imageService = $this->get("partkeepr_image_service");

        if ($request->files->has('userfile') && $request->files->get('userfile') != null) {
            $file = $request->files->get('userfile');
            /**
             * @var $file UploadedFile
             */
            $imageService->replace($image, new File($file->getPathname()));
            $image->setOriginalFilename($file->getClientOriginalName());
        } elseif ($request->request->has("url")) {
            $imageService->replaceFromURL($image, $request->request->get("url"));
        } else {
            throw new \Exception("Error: No valid file given");
        }

        $this->getDoctrine()->getManager()->persist($image);
        $this->getDoctrine()->getManager()->flush();

        $resource = $this->getResource($request);
        $serializedData = $this->get('serializer')->normalize(
            $image,
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
        return "PartKeepr\\ImageBundle\\Entity\\TempImage";
    }
}