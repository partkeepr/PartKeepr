<?php
namespace de\RaumZeitLabor\PartKeepr\Part;

use de\RaumZeitLabor\PartKeepr\Util\Deserializable,
	de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\UploadedFile\UploadedFile;

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
	 * Creates a new part attachment
	 */
	public function __construct () {
		parent::__construct();
		$this->setType("PartAttachment");
	}
	/**
	 * The part object
	 * @ManyToOne(targetEntity="de\RaumZeitLabor\PartKeepr\Part\Part")
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
			"description" => $this->getDescription());
	}

	/**
	 * Deserializes the footprint attachment
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		if (array_key_exists("id", $parameters)) {
			if (substr($parameters["id"], 0, 4) === "TMP:") {
				$this->replaceFromTemporaryFile($parameters["id"]);
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
}