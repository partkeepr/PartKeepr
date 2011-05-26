<?php
namespace de\RaumZeitLabor\PartDB2\Image;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\PartDB2,
	de\RaumZeitLabor\PartDB2\Util\Configuration,
	de\RaumZeitLabor\PartDB2\Image\Exceptions\InvalidImageTypeException;

/**
 * @MappedSuperclass
 */
abstract class Image {
	/**
	 * Specifies the ID of the image.
	 *
	 * @var integer
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 **/
	protected $id;
	
	/**
	 * Specifies the type of the image.
	 *
	 * @var string
	 * @Column(type="string")
	 **/
	private $type;
	
	/**
	 * The unique filename of the image
	 * 
	 * @var string
	 * @Column(type="string")
	 */
	private $filename;
	
	const IMAGE_ICLOGO = "iclogo";
	const IMAGE_TEMP = "temp";
	
	/**
	 * Constructs a new image object.
	 * 
	 * @param string $type	The type for the image, one of the IMAGE_ constants.
	 */
	public function __construct ($type) {
		$this->setType($type);
		$this->filename = PartDB2::createGUIDv4();
	}
	
	/**
	 * Sets the type of the image. Once the type is set,
	 * it may not be changed later.
	 * 
	 * @param string $type	The type for the image, one of the IMAGE_ constants.
	 * @throws InvalidImageTypeException
	 */
	protected function setType ($type) {
		switch ($type) {
			case Image::IMAGE_ICLOGO:
				$this->type = $type;
				break;
			default:
				throw new InvalidImageTypeException($type);
		}
	}
	
	/**
	 * Replaces the current image with a new image.
	 * 
	 * Automatically converts from one format to PNG,
	 * which is the default when dealing with images
	 * on the platform.
	 * 
	 * @param string $path	The path to the original image
	 */
	public function replace ($path) {
		$this->ensureImagePathExists();
		
		copy($path, $this->getImageFilename());	
		
		CachedImage::invalidate($this);
	}
	
	/**
	 * Returns the full image filename including path.
	 * This is the image where all scale operations take place on.
	 * 
	 * @param none
	 * @return string The full image filename including path.
	 */
	public function getImageFilename () {
		return $this->getImagePath().$this->filename.".png";
	}
	
	public function getImageFilenameWithoutSuffix () {
		return $this->filename;
	}
	
	/**
	 * Returns the ID of the image.
	 * @param none
	 * @return integer The ID of the image
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Returns the type of the image
	 * @param none
	 * @return string The type of the image
	 */
	public function getType () {
		return $this->type;
	}
	
	/**
	 * Returns the path to the image. May be overridden by
	 * subclasses.
	 * 
	 * @param none
	 * @return string The path to the image
	 */
	public function getImagePath () {
		return Configuration::getOption("partdb2.images.path").$this->getType()."/";
	}
	
	/**
	 * Ensures that the image path exists. This function
	 * is called every time an image is processed.
	 * It is maybe a bit overhead, but saves headaches later when
	 * introducing new types.
	 * 
	 * @param none
	 * @return nothing
	 */
	public function ensureImagePathExists () {
		if (!is_dir($this->getImagePath())) {
			mkdir($this->getImagePath(), 0777, true);	
		}
	}
	
	public function scaleTo ($w, $h) {
		$this->ensureCachedirExists();
		
		$outputFile = Configuration::getOption("partdb2.images.cache").md5($this->getImageFilename().$w."x".$h).".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getImageFilename());
		$image->adaptiveResizeImage($w, $h);
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartDB2::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	public function fitWithinExact ($w, $h) {
		$this->ensureCachedirExists();
		
		$outputFile = Configuration::getOption("partdb2.images.cache").md5($this->getImageFilename().$w."x".$h."fwe").".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getImageFilename());
		
		$sourceAspectRatio = $image->getImageWidth() / $image->getImageHeight();
		$targetAspectRatio = $w / $h;
		
		$filter = \Imagick::FILTER_UNDEFINED;
		$blur = 1;
		
		if ($sourceAspectRatio < $targetAspectRatio) {
			$image->resizeImage($w, $w / $sourceAspectRatio, $filter, $blur);	
		} else {
			$image->resizeImage($h * $sourceAspectRatio, $h, $filter, $blur);
		}
		
		$offsetX = intval(($image->getImageWidth() - $w)/2);
		$offsetY = intval(($image->getImageHeight() - $h)/2);
		
		$image = $image->getImageRegion($w, $h, $offsetX, $offsetY);
		
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartDB2::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	public function fitWithin ($w, $h) {
		$this->ensureCachedirExists();
		
		$outputFile = Configuration::getOption("partdb2.images.cache").md5($this->getImageFilename().$w."x".$h."fw").".png";
		
		if (file_exists($outputFile)) {
			return $outputFile;
		}
		$image = new \Imagick();
		$image->readImage($this->getImageFilename());
		
		$sourceAspectRatio = $image->getImageWidth() / $image->getImageHeight();
		$targetAspectRatio = $w / $h;
		
		$filter = \Imagick::FILTER_UNDEFINED;
		$blur = 1;
		
		if ($sourceAspectRatio < $targetAspectRatio) {
			$image->resizeImage($h * $sourceAspectRatio, $h, $filter, $blur);	
		} else {
			$image->resizeImage($w, $w / $sourceAspectRatio, $filter, $blur);
		}
		
		$image->writeImage($outputFile);
		
		$cachedImage = new CachedImage($this, $outputFile);
		PartDB2::getEM()->persist($cachedImage);
		
		return $outputFile;
	}
	
	public function ensureCachedirExists () {
	if (!is_dir(Configuration::getOption("partdb2.images.cache"))) {
			mkdir(Configuration::getOption("partdb2.images.cache"), 0777, true);	
		}
	}
	
	public static function loadById ($id) {
    	return PartDB2::getEM()->find(get_called_class(), $id);
    }
}