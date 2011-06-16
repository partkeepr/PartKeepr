<?php
namespace de\RaumZeitLabor\PartKeepr\UploadedFile;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\Configuration;

/**
 * @MappedSuperclass
 */
abstract class UploadedFile {
	/**
	 * Specifies the ID of the file.
	 *
	 * @var integer
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue(strategy="AUTO")
	 **/
	protected $id;
	
	/**
	 * Specifies the type of the file.
	 *
	 * @var string
	 * @Column(type="string")
	 **/
	private $type;
	
	/**
	 * The unique filename of the file
	 *
	 * @var string
	 * @Column(type="string")
	 */
	private $filename;
	
	/**
	 * The mimetype for the file
	 * @var string
	 * @Column(type="string")
	 */
	private $mimetype;
	
	/**
	 * The size of the uploaded file
	 * @Column(type="integer")
	 * @var integer
	 */
	private $size;
	
	/**
	 * Constructs a new file object.
	 *
	 */
	public function __construct () {
		$this->filename = PartKeepr::createGUIDv4();
	}
	
	/**
	* Sets the type of the file. Once the type is set,
	* it may not be changed later.
	*/
	protected function setType ($type) {
		$this->type = $type;
	}
	
	/**
	 * Replaces the current file with a new file.
	 *
	 * @param string $path	The path to the original file
	 */
	public function replace ($path) {
		// Parse the file's mimetype
		$finfo = new \finfo(FILEINFO_MIME);
		$this->mimetype = $finfo->file($path, FILEINFO_MIME_TYPE);
		
		// Get the file size
		$this->size = filesize($path);
		
		$this->ensureFilePathExists();
		copy($path, $this->getFilename());
	}
	
	/**
	 * Returns the ID of the file.
	 * @param none
	 * @return integer The ID of the file
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Returns the size of this file
	 * @return integer The size in bytes
	 */
	public function getSize () {
		return $this->size;
	}
	
	/**
	 * Returns the type of the file
	 * @param none
	 * @return string The type of the file
	 */
	public function getType () {
		return $this->type;
	}
	
	/**
	 * Returns the full filename including path and suffix.
	 * @return string The full filename
	 */
	public function getFilename () {
		return $this->getFilePath().$this->filename.".".$this->getExtension();
	}
	
	/**
	 * Returns the plain filename without path and suffix.
	 * @return string the plain filename
	 */
	public function getPlainFilename () {
		return $this->filename;
	}
	
	/**
	 * Returns the mime type for this file
	 * @return string The mimetype for this file, e.g. text/plain
	 */
	public function getMimeType () {
		return $this->mimetype;
	}
	
	/**
	 * Returns the extension for the given mime type.
	 * 
	 * This function simply extracts that information from the mime type;
	 * special cases are not handled. e.g. if you have image/foobar, it would
	 * return "foobar" as extension.
	 * 
	 * @return string The extension
	 */
	public function getExtension () {
		list($category, $type) = explode("/", $this->getMimeType());
		return $type;
	}
	
	/**
	 * Returns the path to the file. May be overridden by
	 * subclasses.
	 *
	 * @param none
 	 * @return string The path to the file
	 */
	public function getFilePath () {
		return Configuration::getOption("partkeepr.files.path").$this->getType()."/";
	}
	
	/**
	 * Ensures that the file path exists. This function
	 * is called every time a file is processed.
	 * It is maybe a bit overhead, but saves headaches later when
	 * introducing new types.
	 *
	 * @param none
	 * @return nothing
	 */
	public function ensureFilePathExists () {
		if (!is_dir($this->getFilePath())) {
			mkdir($this->getFilePath(), 0777, true);
		}
	}
	
	/**
	 * Loads the file by id.
	 * @return int The id of the file
	 * @param unknown_type $id
	 */
	public static function loadById ($id) {
		return PartKeepr::getEM()->find(get_called_class(), $id);
	}
}