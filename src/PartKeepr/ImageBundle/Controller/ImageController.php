<?php

namespace PartKeepr\ImageBundle\Controller;

use Doctrine\ORM\EntityManager;
use Gaufrette\Exception\FileNotFound;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\ImageBundle\Entity\CachedImage;
use PartKeepr\ImageBundle\Entity\Image as PartKeeprImage;
use PartKeepr\ImageBundle\Response\ImageResponse;
use PartKeepr\UploadedFileBundle\Controller\FileController;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class ImageController extends FileController
{
    /**
     * @ApiDoc(
     *  description="Returns a scaled and cached image. Note that the binary data is directly returned.",
     *  parameters={
     *      {"name"="maxWidth", "dataType"="integer", "required"=false, "description"="The width in pixels"},
     *      {"name"="maxHeight", "dataType"="integer", "required"=false, "description"="The height in pixels"}
     *  }
     * )
     *
     * @param Request $request
     * @param         $id
     *
     * @return ImageResponse|Response
     */
    public function getImageAction(Request $request, $id)
    {
        /**
         * @var EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        /**
         * @var PartKeeprImage
         */
        $image = $em->find($this->getEntityClass(), $id);

        $width = $request->get('maxWidth');
        $height = $request->get('maxHeight');

        if ($width === null) {
            $width = 200;
        }

        if ($height === null) {
            $height = 200;
        }

        if ($image === null) {
            return new ImageResponse($width, $height, 404, '404 not found');
        }

        try {
            $file = $this->fitWithin($image, $width, $height);
        } catch (FileNotFound $e) {
            $this->get('logger')->error($e->getMessage());

            return new ImageResponse($width, $height, 404, '404 not found');
        } catch (\Exception $e) {
            $this->get('logger')->error($e->getMessage());

            return new ImageResponse($width, $height, 500, '500 Server Error');
        }

        return new Response(file_get_contents($file), 200, ['Content-Type' => 'image/png']);
    }

    /**
     * Returns the path to the image cache directory.
     *
     * @return string
     */
    public function getImageCacheDirectory()
    {
        return $this->container->getParameter('partkeepr.image_cache_directory');
    }

    /**
     * Ensures that the image cache directory exists.
     *
     * @todo Implement checks if the cache directory has actually been created
     * @todo 0777 might not be the best solution
     */
    public function ensureCacheDirExists()
    {
        if (!is_dir($this->getImageCacheDirectory())) {
            mkdir($this->getImageCacheDirectory(), 0777, true);
        }
    }

    /**
     * Scales the image to fit within the given size.
     *
     * @param UploadedFile $image   The image to scale
     * @param int          $width   The width
     * @param int          $height  The height
     * @param bool         $padding If true, pad the output image to the given size (transparent background).
     *
     * @return string The path to the scaled file
     */
    public function fitWithin(UploadedFile $image, $width, $height, $padding = false)
    {
        $this->ensureCacheDirExists();

        if ($padding) {
            $mode = 'fwp';
        } else {
            $mode = 'fw';
        }

        $outputFile = $this->getImageCacheFilename($image, $width, $height, $mode);

        if ($this->hasCacheFile($image, $width, $height, $mode) && file_exists($outputFile)) {
            return $outputFile;
        }

        $imagine = new Imagine();

        $localCacheFile = $this->getImageCacheDirectory().$image->getFullFilename();
        $storage = $this->get('partkeepr_uploadedfile_service')->getStorage($image);

        file_put_contents($localCacheFile, $storage->read($image->getFullFilename()));

        $imagine->open($localCacheFile)
            ->thumbnail(new Box($width, $height))
            ->save($outputFile);

        $cachedImage = new CachedImage($image, $outputFile);
        $this->getDoctrine()->getManager()->persist($cachedImage);

        return $outputFile;
    }

    /**
     * Returns the path to an image which has been cached in a particular width, height and mode.
     *
     * @param UploadedFile $image  The image
     * @param int          $width  The width
     * @param int          $height The height
     * @param string       $mode   The mode
     *
     * @return string
     */
    public function getImageCacheFilename(UploadedFile $image, $width, $height, $mode)
    {
        $outputFile = $this->getImageCacheDirectory();
        $outputFile .= '/'.sha1($image->getFilename());
        $outputFile .= $width.'x'.$height.'_'.$mode.'.png';

        return $outputFile;
    }

    /**
     * Checks if the database contains the cache file.
     *
     * @param UploadedFile $image
     * @param              $width
     * @param              $height
     * @param              $mode
     *
     * @return bool
     */
    protected function hasCacheFile(UploadedFile $image, $width, $height, $mode)
    {
        $cacheFilename = $this->getImageCacheFilename($image, $width, $height, $mode);

        /**
         * @var EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        $queryBuilder = $em->createQueryBuilder();
        $queryBuilder->select('COUNT(c)')
            ->from('PartKeepr\ImageBundle\Entity\CachedImage', 'c')
            ->where('c.cacheFile = :file')
            ->setParameter('file', $cacheFilename);

        if ($queryBuilder->getQuery()->getSingleScalarResult() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
