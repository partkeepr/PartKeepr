<?php
namespace de\RaumZeitLabor\PartDB2\Image;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2;

/**
 * @Entity 
 */
class CachedImage {
	/**
	 * Specifies the ID of the cached image.
	 *
	 * @var integer
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 **/
	private $id;
	
	/**
	 * Specifies the ID of the original image
	 * 
	 * @var integer
	 * @Column(type="integer")
	 */
	private $originalId;
	
	/**
	 * Specifies the type of the original image.
	 *
	 * @var string
	 * @Column(type="string")
	 **/
	private $originalType;
	
	/**
	 * The cache filename of the image
	 * 
	 * @var string
	 * @Column(type="string")
	 */
	private $cacheFile;
	
	public function __construct (Image $image, $cacheFile) {
		$this->originalId = (int)$image->getId();
		$this->originalType = $image->getType();
		$this->cacheFile = $cacheFile;
	}
	
	public function getCacheFile () {
		return $this->cacheFile;
	}
	
	public static function invalidate (Image $image) {
		$qb = PartDB2::getEM()->createQueryBuilder();
		$qb->select(array("c"))
			->from('de\RaumZeitLabor\PartDB2\Image\CachedImage', 'c')
			->where("c.originalId = :id")
			->andWhere("c.originalType = :type")
			->setParameter("id", $image->getId())
			->setParameter("type", $image->getType());
			
		$query = $qb->getQuery();
		
		$bImagesRemoved = false;
		
		foreach ($query->getResult() as $file) {
			unlink($file->getCacheFile());
			PartDB2::getEM()->remove($file);
			$bImagesRemoved = true;
		}
		
		if ($bImagesRemoved) {
			PartDB2::getEM()->flush();
		}
	}
}