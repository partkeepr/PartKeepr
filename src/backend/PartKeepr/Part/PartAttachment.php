<?php
namespace PartKeepr\Part;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\UploadedFile\UploadedFile;

/**
 * Holds a part attachment
 * @Entity
 **/
class PartAttachment extends UploadedFile implements Serializable, Deserializable {
	/**
	 * The description of this attachment
	 * @Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Defines if the attachment is an image.
	 * @Column(type="boolean",nullable=true)
	 * @var boolean
	 */
	private $isImage;

	/**
	 * Creates a new part attachment
	 */
	public function __construct () {
		parent::__construct();
		$this->setType("PartAttachment");
		$this->isImage = null;
	}
	
	/**
	 * The part object
	 * @ManyToOne(targetEntity="PartKeepr\Part\Part")
	 * @var Part
	 */
	private $part = null;

	/**
	 * Sets the part
	 * @param Part $part The part to set
	 */
	public function setPart (Part $part) {
		$this->part = $part;
	}

	/**
	 * Returns the part
	 * @return Part the part
	 */
	public function getPart () {
		return $this->part;
	}

	/**
	 * Sets the description for this attachment
	 * @param string $description The attachment description
	 */
	public function setDescription ($description) {
		$this->description = $description;
	}

	/**
	 * Returns the description for this attachment
	 * @return string The description
	 */
	public function getDescription () {
		return $this->description;
	}

	/**
	 *
	 * Serializes this part attachment
	 * @return array The serialized part attachment
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"part_id" => $this->getPart()->getId(),
			"originalFilename" => $this->getOriginalFilename(),
			"mimetype" => $this->getMimetype(),
			"extension" => $this->getExtension(),
			"size" => $this->getSize(),
			"description" => $this->getDescription(),
			"image" => $this->isImage());
	}

	/**
	 * Deserializes the part attachment
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		if (array_key_exists("id", $parameters)) {
			if (substr($parameters["id"], 0, 4) === "TMP:") {
				$this->replaceFromTemporaryFile($parameters["id"]);
			} else {
				/* Attachment already exists, but seems to belong to another part. Copy the data. */
				$otherAttachment = PartAttachment::loadById($parameters["id"]);
				$this->replace($otherAttachment->getFilename());
				$this->setOriginalFilename($otherAttachment->getOriginalFilename());
			}
		}

		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "description":
					$this->setDescription($value);
					break;
			}
		}
	}
	
	/**
	 * Returns if the attachment is an image or not.
	 * 
	 * @return True if the attachment is an image, false otherwise
	 */
	public function isImage () {
		if ($this->isImage === null) {
			$this->isImage = $this->canImagickParseImage();
		}
		
		return $this->isImage;
	}
	
	/**
	 * Checks if ImageMagick can parse the image.
	 * 
	 * This method uses ImageMagick to find out if this is an image. Limitations apply; if ImageMagick doesn't support
	 * the image format, this method would return false, even if it is an image.
	 * 
	 * @return boolean true if ImageMagick can parse the file, false otherwise
	 */
	private function canImagickParseImage () {
		/**
		 * Special case: Check if it's a PDF. If yes, return immediately.
		 * This is because ImageMagick outputs warning messages for malformed PDF files, and halts the execution
		 * of the script for several seconds. DO NOT REMOVE!
		 */
		if ($this->getMimeType() == "application/pdf") {
			return false;
		}
		
		try {
			$im = new \Imagick($this->getFilename());
			return true;
		} catch (\ImagickException $e) {
			return false;
		}
	}
	
	/**
	 * Replaces the current file with a new file.
	 *
	 * @param string $path	The path to the original file
	 */
	public function replace ($path) {
		$this->isImage = $this->canImagickParseImage();
		parent::replace($path);
	}
	
	/**
	 * Replaces the file from an URL. Does some tricks to avoid 403 forbidden on some sites.
	 * @param string $url
	 */
	public function replaceFromURL ($url) {
		$this->isImage = $this->canImagickParseImage();
		parent::replaceFromURL($url);
	}
}