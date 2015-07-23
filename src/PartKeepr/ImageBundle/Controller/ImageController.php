<?php
namespace PartKeepr\ImageBundle\Controller;

use Doctrine\ORM\EntityManager;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Imagine\Image\Point;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\ImageBundle\Entity\CachedImage;
use PartKeepr\ImageBundle\Entity\Image as PartKeeprImage;
use PartKeepr\ImageBundle\Response\ImageNotFoundResponse;
use PartKeepr\UploadedFileBundle\Controller\FileController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class ImageController extends FileController
{
    /**
     *
     * @ApiDoc(
     *  description="Returns a scaled and cached image. Note that the binary data is directly returned.",
     *  parameters={
     *      {"name"="width", "dataType"="integer", "required"=true, "description"="The width in pixels"},
     *      {"name"="height", "dataType"="integer", "required"=true, "description"="The height in pixels"}
     *  }
     * )
     *
     * @param Request $request
     * @param         $id
     *
     * @return ImageNotFoundResponse|Response
     */
    public function getImageAction(Request $request, $id)
    {
        /**
         * @var $em EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        /**
         * @var $image PartKeeprImage
         */
        $image = $em->find($this->getEntityClass(), $id);

        if ($image === null) {
            return new ImageNotFoundResponse($request->get("width"), $request->get("height"));
        }

        $width = $request->get("maxWidth");
        $height = $request->get("maxHeight");

        if ($width == 0) {
            $width = 200;
        }

        if ($height == 0) {
            $height = 200;
        }

        $file = $this->fitWithin($image, $width, $height);

        return new Response(file_get_contents($file), 200, array("Content-Type" => "image/png"));

    }

    /**
     * Returns the path to the image cache directory.
     *
     * @return string
     */
    public function getImageCacheDirectory()
    {
        return $this->container->getParameter("partkeepr.image_cache_directory");
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
     * @param PartKeeprImage $image   The image to scale
     * @param int            $width   The width
     * @param int            $height  The height
     * @param boolean        $padding If true, pad the output image to the given size (transparent background).
     *
     * @return string The path to the scaled file
     */
    public function fitWithin(PartKeeprImage $image, $width, $height, $padding = false)
    {
        $this->ensureCacheDirExists();

        if ($padding) {
            $mode = "fwp";
        } else {
            $mode = "fw";
        }

        $outputFile = $this->getImageCacheFilename($image, $width, $height, $mode);

        if ($this->hasCacheFile($image, $width, $height, $mode) && file_exists($outputFile)) {
            return $outputFile;
        }

        $imagine = new Imagine();
        $imagine->open($this->getFilename($image))
            ->thumbnail(new Box($width, $height))
            ->save($outputFile);

        $cachedImage = new CachedImage($image, $outputFile);
        $this->getDoctrine()->getManager()->persist($cachedImage);

        return $outputFile;
    }

    /**
     * Returns the path to an image which has been cached in a particular width, height and mode.
     *
     * @param PartKeeprImage $image  The image
     * @param integer        $width  The width
     * @param integer        $height The height
     * @param string         $mode   The mode
     *
     * @return string
     */
    public function getImageCacheFilename(PartKeeprImage $image, $width, $height, $mode)
    {
        $outputFile = $this->getImageCacheDirectory();
        $outputFile .= "/".sha1($image->getFilename());
        $outputFile .= $width."x".$height."_".$mode.".png";

        return $outputFile;
    }

    /**
     * Checks if the database contains the cache file.
     *
     * @param PartKeeprImage $image
     * @param                $width
     * @param                $height
     * @param                $mode
     *
     * @return bool
     */
    protected function hasCacheFile(PartKeeprImage $image, $width, $height, $mode)
    {
        $cacheFilename = $this->getImageCacheFilename($image, $width, $height, $mode);

        /**
         * @var $em EntityManager
         */
        $em = $this->getDoctrine()->getManager();

        $queryBuilder = $em->createQueryBuilder();
        $queryBuilder->select("COUNT(c)")
            ->from('PartKeepr\ImageBundle\Entity\CachedImage', "c")
            ->where("c.cacheFile = :file")
            ->setParameter("file", $cacheFilename);

        if ($queryBuilder->getQuery()->getSingleScalarResult() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
