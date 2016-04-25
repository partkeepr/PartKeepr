<?php

namespace PartKeepr\ImageBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\ImageBundle\Entity\CachedImage;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\HttpFoundation\File\File;

class ImageService extends UploadedFileService
{
    /**
     * {@inheritdoc}
     */
    public function replaceFromFilesystem(UploadedFile $file, File $filesystemFile)
    {
        parent::replaceFromFilesystem($file, $filesystemFile);
        $this->invalidate($file);
    }

    /**
     * Invalidates any cached files.
     *
     * @param UploadedFile $file The file to invalidate
     */
    public function invalidate(UploadedFile $file)
    {
        /**
         * @var EntityManager
         */
        $entityManager = $this->container->get('doctrine')->getManager();
        $queryBuilder = $entityManager->createQueryBuilder();
        $queryBuilder->select(['c'])
            ->from('PartKeepr\ImageBundle\Entity\CachedImage', 'c')
            ->where('c.originalId = :id')
            ->andWhere('c.originalType = :type')
            ->setParameter('id', $file->getId())
            ->setParameter('type', $file->getType());

        $query = $queryBuilder->getQuery();

        foreach ($query->getResult() as $file) {
            /**
             * @var CachedImage
             */
            if (file_exists($file->getCacheFile())) {
                unlink($file->getCacheFile());
            }
            $entityManager->remove($file);
        }
    }

    /**
     * Checks if the system can handle the given mime type as image. Currently hardcoded for GD.
     *
     * @param $mimeType The mime type to check
     *
     * @return bool True if the system can display images of the given mimetype, false otherwise
     */
    public function canHandleMimetype($mimeType)
    {
        switch ($mimeType) {
            case 'image/jpeg':
            case 'image/png':
            case 'image/gif':
                return true;
            default:
                return false;
        }
    }
}
