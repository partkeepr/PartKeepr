<?php
namespace PartKeepr\Image;

use PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;

/**
 * Represents a cached image. Cached images are used for scale/resize
 * operations, so that the resize/scale operation doesn't need to be done
 * every time a scaled/resized image is requested.
 * 
 * @ORM\Entity
 */
class CachedImage {
	/**
	 * Specifies the ID of the cached image.
	 *
	 * @var integer
	 * @ORM\Id
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 **/
	private $id;
	
	/**
	 * Specifies the ID of the original image
	 * 
	 * @var integer
	 * @ORM\Column(type="integer")
	 */
	private $originalId;
	
	/**
	 * Specifies the type of the original image.
	 *
	 * @var string
	 * @ORM\Column(type="string")
	 **/
	private $originalType;
	
	/**
	 * The cache filename of the image
	 * 
	 * @var string
	 * @ORM\Column(type="string")
	 */
	private $cacheFile;
	
	/**
	 * Creates a new cache entry for a specific image.
	 * 
	 * @param Image $image The image to cache
	 * @param string $cacheFile The file which holds the cached image
	 */
	public function __construct (Image $image, $cacheFile) {
		$this->originalId = (int)$image->getId();
		$this->originalType = $image->getType();
		$this->cacheFile = $cacheFile;
	}
	
	/**
	 * Returns the cache file
	 * @return string The cache file including path
	 */
	public function getCacheFile () {
		return $this->cacheFile;
	}
	
	/**
	 * Removes all caches for a specific image. This is usually called
	 * when a new version of an image is uploaded.
	 * 
	 * Automatically calls "flush" on the entity manager.
	 * 
	 * @param Image $image The image to invalidate
	 */
	public static function invalidate (Image $image) {
		$qb = PartKeepr::getEM()->createQueryBuilder();
		$qb->select(array("c"))
			->from('PartKeepr\Image\CachedImage', 'c')
			->where("c.originalId = :id")
			->andWhere("c.originalType = :type")
			->setParameter("id", $image->getId())
			->setParameter("type", $image->getType());
			
		$query = $qb->getQuery();
		
		$bImagesRemoved = false;
		
		foreach ($query->getResult() as $file) {
			unlink($file->getCacheFile());
			PartKeepr::getEM()->remove($file);
			$bImagesRemoved = true;
		}
		
		if ($bImagesRemoved) {
			PartKeepr::getEM()->flush();
		}
	}
}