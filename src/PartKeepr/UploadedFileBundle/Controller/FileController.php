<?php
namespace PartKeepr\UploadedFileBundle\Controller;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Controller\ResourceController;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Component\HttpFoundation\Response;

abstract class FileController extends ResourceController
{
    /**
     * Returns the full path for the file
     *
     * @param UploadedFile $file
     *
     * @return string
     */
    public function getFilename(UploadedFile $file)
    {
        $storageDirectory = $this->get("partkeepr_uploadedfile_service")->getStorageDirectory($file);

        return $storageDirectory."/".$file->getFilename().".".$file->getExtension();
    }

    /**
     * Returns the mimetype icon for an uploaded file
     *
     * @param integer $id      The ID of the entity
     * @return Response
     */
    public function getMimeTypeIconAction($id)
    {
    /**
         * @var $em EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        /**
         * @var $file UploadedFile
         */
        $file = $em->find($this->getEntityClass(), $id);

        $icon = $this->get("partkeepr_mimetype_icon_service")->getMimetypeIcon($file->getMimeType());

        return new Response(file_get_contents($icon), 200, array("Content-Type" => "image/svg+xml"));
    }

    /**
     * Returns the entity class (FQDN) for operation
     *
     * @return string
     */
    abstract public function getEntityClass();
}
