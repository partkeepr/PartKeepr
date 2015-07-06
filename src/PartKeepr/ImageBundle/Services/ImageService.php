<?php


namespace PartKeepr\ImageBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\Image\CachedImage;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\HttpFoundation\File\File;

class ImageService extends UploadedFileService
{
    /**
     * Replaces the current image with a new image.
     *
     * @param UploadedFile $file           The target file
     * @param File         $filesystemFile The source file
     */
    public function replace(UploadedFile $file, File $filesystemFile)
    {
        parent::replaceFromFilesystem($file, $filesystemFile);
        $this->invalidate($file);
    }

    /**
     * Replaces the file from an URL. Does some tricks to avoid 403 forbidden on some sites.
     *
     * @param UploadedFile $file The target file
     * @param string       $url  The URL to replace from
     */
    public function replaceFromURL(UploadedFile $file, $url)
    {
        parent::replaceFromURL($file, $url);
        $this->invalidate($file);
    }

    /**
     * Invalidates any cached files
     *
     * @param UploadedFile $file The file to invalidate
     */
    public function invalidate(UploadedFile $file)
    {
        /**
         * @var $entityManager EntityManager
         */
        $entityManager = $this->container->get("doctrine")->getManager();
        $queryBuilder = $entityManager->createQueryBuilder();
        $queryBuilder->select(array("c"))
            ->from('PartKeepr\Image\CachedImage', 'c')
            ->where("c.originalId = :id")
            ->andWhere("c.originalType = :type")
            ->setParameter("id", $file->getId())
            ->setParameter("type", $file->getType());

        $query = $queryBuilder->getQuery();

        foreach ($query->getResult() as $file) {
            /**
             * @var $file CachedImage
             */
            unlink($file->getCacheFile());
            $entityManager->remove($file);
        }
    }
}