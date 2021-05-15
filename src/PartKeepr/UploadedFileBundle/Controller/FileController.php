<?php

namespace PartKeepr\UploadedFileBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;

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
    /**
     * @Route(
     *     name="ProjectAttachmentMimeTypeIcon",
     *     path="/project_attachments/{id}/getMimeTypeIcon",
     *     defaults={"_api_resource_class"=ProjectAttachment::class, "_api_item_operation_name"="custom_get_mime"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="TemporaryFileGetMimeTypeIcon",
     *     path="/temp_uploaded_files/{id}/getMimeTypeIcon",
     *     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_item_operation_name"="custom_get_mimetype"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="PartAttachmentMimeTypeIcon",
     *     path="/part_attachments/{id}/getMimeTypeIcon",
     *     defaults={"_api_resource_class"=PartAttachment::class, "_api_item_operation_name"="custom_get_mime"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="FootprintAttachmentMimeTypeIcon",
     *     path="/footprint_attachments/{id}/getMimeTypeIcon",
     *     defaults={"_api_resource_class"=FootprintImage::class, "_api_item_operation_name"="custom_get_mime"},
     *     methods={"GET"}
     * )
     **/
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
    /**
     * @Route(
     *     name="ProjectAttachmentGet",
     *     path="/project_attachments/{id}/getFile",
     *     defaults={"_api_resource_class"=ProjectAttachment::class, "_api_item_operation_name"="custom_get"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="TemporaryFileGet",
     *     path="/temp_uploaded_files/{id}/getFile",
     *     defaults={"_api_resource_class"=TempUploadedFile::class, "_api_item_operation_name"="custom_get"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="PartAttachmentGet",
     *     path="/part_attachments/{id}/getFile",
     *     defaults={"_api_resource_class"=PartAttachment::class, "_api_item_operation_name"="custom_get"},
     *     methods={"GET"}
     * )
     **/
    /**
     * @Route(
     *     name="FootprintAttachmentGet",
     *     path="/footprint_attachments/{id}/getFile",
     *     defaults={"_api_resource_class"=FootprintImage::class, "_api_item_operation_name"="custom_get"},
     *     methods={"GET"}
     * )
     **/
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
                sprintf(
                    'File %s not found in storage %s',
                    $file->getFullFilename(),
                    $file->getType()
                )
            );

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
