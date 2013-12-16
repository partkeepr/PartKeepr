<?php
namespace PartKeepr\StorageLocation;

use PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
	PartKeepr\Util\BaseEntity,
    Doctrine\ORM\Mapping as ORM;

/** @ORM\Entity **/
class StorageLocation extends BaseEntity implements Serializable, Deserializable {
	/**
	 * Holds the name for our storage location
	 * @ORM\Column(type="string",unique=true)
	 * @var string
	 */
	private $name;

	/**
	 * Holds the storage location image
	 * @ORM\OneToOne(targetEntity="PartKeepr\StorageLocation\StorageLocationImage",mappedBy="storageLocation",cascade={"persist", "remove"})
	 * @var StorageLocationImage
	 */
	private $image;
	
	/**
	 * Sets the name for the storage location
	 * @param string $name the name to set
	 */
	public function setName ($name) {
		$this->name = $name;
	}
	
	/**
	 * Returns the name of the storage location
	 * @return string The name
	 */
	public function getName () {
		return $this->name;
	}
	
	/**
	 * Sets the storage location image
	 * @param StorageLocationImage $image The storage location image
	 */
	public function setImage (StorageLocationImage $image) {
		$this->image = $image;
		$image->setStorageLocation($this);
	}
	
	/**
	 * Returns the storage location image
	 * @return StorageLocationImage The storage location image
	 */
	public function getImage () {
		return $this->image;
	}
	
	/**
	 * Returns this storage location in serialized form
	 * @return array The serialized storage location
	 */
	public function serialize () {
		return array(
			"id" => $this->getId(),
			"name" => $this->getName(),
			"image_id" => is_object($this->getImage()) ? $this->getImage()->getId() : null);
	}
	
	/**
	 * Deserializes the storage location
	 * @param array $parameters The array with the parameters to set
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName($value);
					break;
				case "image_id":
					if ($value == "") {
						echo "/** Breaking because of empty value */";
						break;
					}
				
					try {
						$image = StorageLocationImage::loadById($value);
						$this->setImage($image);
					} catch (\Exception $e) {
						if ($this->getImage()) {
							// Image was not found, maybe a temporary image?
							$this->getImage()->replaceFromTemporaryFile($value);
						} else {
							$image = StorageLocationImage::createFromTemporaryFile($value);
							$this->setImage($image);
							echo "/**";
							echo $image->getId();
							echo "*/";
							echo "/** FOO */";
						}
					}
				
				break;
			}
		}
	}
}