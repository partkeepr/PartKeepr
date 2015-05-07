<?php
namespace PartKeepr\StorageLocation;

use PartKeepr\Util\Serializable,
	PartKeepr\Image\Image,
    Doctrine\ORM\Mapping as ORM;

/**
 * Holds a storage location image
 * @ORM\Entity
 **/
class StorageLocationImage extends Image implements Serializable {
	/**
	 * The storage location object
	 * @ORM\OneToOne(targetEntity="PartKeepr\StorageLocation\StorageLocation",inversedBy="image")
	 * @var StorageLocation
	 */
	private $storageLocation = null;
	
	/**
	 * Creates a new storage location image instance
	 */
	public function __construct () {
		parent::__construct(Image::IMAGE_STORAGELOCATION);
	}

	/**
	 * Sets the storage location
	 * @param StorageLocation $storageLocation The storage location to set
	 */
	public function setStorageLocation (StorageLocation $storageLocation) {
		$this->storageLocation = $storageLocation;
	}
	
	/**
	 * Returns the storage location
	 * @return StorageLocation the storage location
	 */
	public function getStorageLocation () {
		return $this->storageLocation;
	}
	
	/**
	 * 
	 * Serializes this storage location image
	 * @return array The serialized storage location image
	 */
	public function serialize () {
		return array("id" => $this->getId(), "storageLocation_id" => $this->getStorageLocation()->getId());
	}
}