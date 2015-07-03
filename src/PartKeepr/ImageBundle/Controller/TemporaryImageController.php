<?php
namespace PartKeepr\ImageBundle\Controller;

use Dunglas\ApiBundle\Controller\ResourceController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TemporaryImageController extends ImageController {

    /**
     * Handles a temporary image upload
     *
     * @RequestParam(name="url",description="An URL where the image is located")
     * ApiDoc(section="image",output="PartKeepr\ImageBundle\Response\TemporaryImageUploadResponse")
     * @View()
     */
    public function uploadAction (Request $request) {
        $image = new TempImage();

        if ($request->files->has('userfile') && $request->files->get('userfile') != null) {
            $file = $request->files->get('userfile');
            /**
             * @var $file UploadedFile
             */
            $image->replace($file->getPathname());
            $image->setOriginalFilename($file->getClientOriginalName());
        } elseif ($request->request->has("url")) {
            $image->replaceFromURL($request->request->get("url"));
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
    public function getImageStorageDirectory()
    {
        return $this->container->getParameter("partkeepr.images.temp");
    }

    /**
     * @inheritdoc
     */
    public function getEntityClass()
    {
        return "PartKeepr\\ImageBundle\\Entity\\TempImage";
    }
}