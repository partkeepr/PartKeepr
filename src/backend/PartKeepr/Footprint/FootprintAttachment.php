<?php
namespace PartKeepr\Footprint;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\UploadedFile\UploadedFile,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a footprint attachment
 * @ORM\Entity
 **/
class FootprintAttachment extends UploadedFile implements Serializable, Deserializable {
	/**
	 * The description of this attachment
	 * @ORM\Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Creates a new footprint attachment
	 */
	public function __construct () {
		parent::__construct();
		$this->setType("FootprintAttachment");
	}
	/**
	 * The footprint object
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Footprint\Footprint",inversedBy="attachments")
	 * @var Footprint
	 */
	private $footprint = null;

	/**
	 * Sets the footprint
	 * @param Footprint $footprint The footprint to set
	 */
	public function setFootprint (Footprint $footprint) {
		$this->footprint = $footprint;
	}

	/**
	 * Returns the footprint
	 * @return Footprint the footprint
	 */
	public function getFootprint () {
		return $this->footprint;
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
	 * Serializes this footprint attachment
	 * @return array The serialized footprint  attachment
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"footprint_id" => $this->getFootprint()->getId(),
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