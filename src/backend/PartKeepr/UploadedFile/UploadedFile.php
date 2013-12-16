<?php
namespace PartKeepr\UploadedFile;

use PartKeepr\Util\SerializableException,
	PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Serializable,
	PartKeepr\PartKeepr,
	PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\Util\Configuration,
    Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 */
abstract class UploadedFile extends BaseEntity implements Serializable {
	/**
	 * Specifies the type of the file.
	 *
	 * @var string
	 * @ORM\Column(type="string")
	 **/
	private $type;
	
	/**
	 * The unique filename of the file
	 *
	 * @var string
	 * @ORM\Column(type="string")
	 */
	private $filename;
	
	/**
	 * The original name of the file
	 * @ORM\Column(type="string",nullable=true)
	 * @var string
	 */
	private $originalname;
	
	/**
	 * The mimetype for the file
	 * @var string
	 * @ORM\Column(type="string")
	 */
	private $mimetype;
	
	/**
	 * The size of the uploaded file
	 * @ORM\Column(type="integer")
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
	 * Returns the original filename
	 * @return string The original filename
	 */
	public function getOriginalFilename () {
		return $this->originalname;
	}
	
	/**
	 * Sets the original filename
	 * @param string $filename The original filename
	 */
	public function setOriginalFilename ($filename) {
		$this->originalname = $filename;
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
		$this->checkPermissions();
		
		copy($path, $this->getFilename());
		
		$this->setOriginalFilename(basename($path));
	}
	
	/**
	 * Replaces the file from an URL. Does some tricks to avoid 403 forbidden on some sites.
	 * @param string $url
	 */
	public function replaceFromURL ($url) {
		
		/* Some sites don't like automated requests. But the internet is meant to be open for anybody,
		 * even for scripts. So we are evil and fake the headers.
		 * 
		 * Credit goes to Ryan Rampersad from whom I copied most code.
		 * http://blog.ryanrampersad.com/2008/11/07/get-remote-html-with-curl-and-php/
		 */
		$curl = curl_init();
		
		$header[0] = "Accept: text/xml,application/xml,application/xhtml+xml,";
		$header[0] .= "text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5";
		$header[] = "Cache-Control: max-age=0";
		$header[] = "Connection: keep-alive";
		$header[] = "Keep-Alive: 300";
		$header[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
		$header[] = "Accept-Language: en-us,en;q=0.5";
		$header[] = "Pragma: ";
		
		$browser = "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092510 Ubuntu/8.04 (hardy) Firefox/3.0.3";
		
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_USERAGENT, $browser);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
		curl_setopt($curl, CURLOPT_AUTOREFERER, true);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
		curl_setopt($curl, CURLOPT_MAXREDIRS, 7);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		
		$data = curl_exec($curl);
		
		if ($data === false) {
			$curlError = curl_error($curl);
			// Strip ANY tags from the error message. curl tends to spit out <url> is not valid, which then
			// confuses the error message parser on the client side.
			$curlError = str_replace(array(">", "<"), "", $curlError);
			throw new \Exception("replaceFromURL error: ".$curlError);
		}
		
		curl_close($curl);
		
		$tempName = tempnam("/tmp", "PARTKEEPR");
			
		file_put_contents($tempName, $data);
		
		$this->replace($tempName);
		
		$this->setOriginalFilename(basename($url));
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
		$data = explode("/", $this->getMimeType());
		
		if (array_key_exists(1, $data)) {
			return $data[1];
		} else {
			return "undefined";
		}
	}
	
	/**
	 * Returns the path to the file. May be overridden by
	 * subclasses.
	 *
	 * @param none
 	 * @return string The path to the file
	 */
	public function getFilePath () {
		return Configuration::getOption(
				"partkeepr.files.path",
				PartKeepr::getRootDirectory() . "/data/") . $this->getType() . "/";
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
			try {
				mkdir($this->getFilePath(), 0777, true);
			} catch (\Exception $e) {
				throw new \Exception("Unable to create directory ".$this->getFilePath());
			}
		}
	}
	
	/**
	 * Creates a new entity from the given temporary id.
	 * 
	 * @param string $id The temporary id (prefixed with TMP:)
	 * @return object a new instance of the file.
	 * @throws \Exception If the ID does not begin with TMP:
	 */
	public static function createFromTemporaryFile ($id) {
		if (substr($id, 0, 4) === "TMP:") {
			// It's a temporary file
				$className = get_called_class();
				
				$file = new $className();	
				$file->replaceFromTemporaryFile($id);
				return $file;
		} else {
			throw new \Exception("Given id $id is not a temporary file");
		}
	}
	
	/**
	 * Replaces the file with a given temporary file.
	 * @param string $id The temporary id (prefixed with TMP:)
	 */
	public function replaceFromTemporaryFile ($id) {
		if (substr($id, 0, 4) === "TMP:") {
			$tmpFileId = str_replace("TMP:", "", $id);
			$tmpFile = TempUploadedFile::loadById($tmpFileId);
			
			$this->replace($tmpFile->getFilename());
			$this->setOriginalFilename($tmpFile->getOriginalFilename());
		}
	}
	
	/**
	 * Checks if the path where the file should be stored has sufficient permissions to do so.
	 * 
	 * @throws SerializableException
	 */
	public function checkPermissions () {
		if (!is_writable($this->getFilePath())) {
				throw new SerializableException(
						sprintf(PartKeepr::i18n("Unable to write to directory %s"), $this->getFilePath()));
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Util.Serializable::serialize()
	 */
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"extension" => $this->getExtension(),
				"size" => $this->getSize(),
				"originalFilename" => $this->getOriginalFilename()
				);
	}
}
