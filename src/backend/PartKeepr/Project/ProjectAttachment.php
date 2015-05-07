<?php
namespace PartKeepr\Project;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\UploadedFile\UploadedFile,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a project attachment
 * @ORM\Entity
 **/
class ProjectAttachment extends UploadedFile implements Serializable, Deserializable {
	/**
	 * The description of this attachment
	 * @ORM\Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * Creates a new project attachment
	 */
	public function __construct () {
		parent::__construct();
		$this->setType("ProjectAttachment");
	}
	/**
	 * The project object
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Project\Project", inversedBy="attachments")
	 * @var Project
	 */
	private $project = null;

	/**
	 * Sets the project
	 * @param Project $project The project to set
	 */
	public function setProject (Project $project) {
		$this->project = $project;
	}

	/**
	 * Returns the roject
	 * @return Project the project
	 */
	public function getProject () {
		return $this->project;
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
	 * Serializes this project attachment
	 * @return array The serialized project  attachment
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"project_id" => $this->getProject()->getId(),
			"originalFilename" => $this->getOriginalFilename(),
			"mimetype" => $this->getMimetype(),
			"extension" => $this->getExtension(),
			"size" => $this->getSize(),
			"description" => $this->getDescription());
	}
	
	/**
	 * Deserializes the project attachment
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