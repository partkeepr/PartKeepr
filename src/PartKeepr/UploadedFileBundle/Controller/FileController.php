<?php

namespace PartKeepr\UploadedFileBundle\Controller;

use Doctrine\ORM\EntityManager;
use Gaufrette\Exception\FileNotFound;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

abstract class FileController extends Controller
{
    /**
     * Returns the mimetype icon for an uploaded file.
     *
     * @param int $id The ID of the entity
     *
     * @return Response
     */
    public function getMimeTypeIconAction($id)
    {
        /**
         * @var EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        /**
         * @var UploadedFile
         */
        $file = $em->find($this->getEntityClass(), $id);

        $icon = $this->get('partkeepr_mimetype_icon_service')->getMimetypeIcon($file->getMimeType());

        return new Response(file_get_contents($icon), 200, ['Content-Type' => 'image/svg+xml']);
    }

    /**
     * Returns the file. Directly sends the response to the browser.
     *
     * @param int $id The ID of the file
     *
     * @return Response
     */
    public function getFileAction($id)
    {
        /**
         * @var EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        /**
         * @var UploadedFile
         */
        $file = $em->find($this->getEntityClass(), $id);

        $storage = $this->get('partkeepr_uploadedfile_service')->getStorage($file);

        try {
            return new Response(
                $storage->read($file->getFullFilename()),
                200,
                ['Content-Type' => $file->getMimeType()]
            );
        } catch (FileNotFound $e) {
            $this->get('logger')->addError(
                sprintf('File %s not found in storage %s', $file->getFullFilename(),
                $file->getType()));

            return new Response(
                '404 File not found',
                404
            );
        }
    }

    /**
     * Returns the entity class (FQDN) for operation.
     *
     * @return string
     */
    abstract protected function getEntityClass();
}
