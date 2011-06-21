<?php
namespace de\RaumZeitLabor\PartKeepr\StorageLocation;

use de\RaumZeitLabor\PartKeepr\Util\Deserializable,
	de\RaumZeitLabor\PartKeepr\Util\Serializable,
	de\RaumZeitLabor\PartKeepr\Util\BaseEntity;

declare(encoding = 'UTF-8');

/** @Entity **/
class StorageLocation extends BaseEntity implements Serializable, Deserializable {
	/**
	 * Holds the name for our storage location
	 * @Column(type="string",unique=true)
	 * @var string
	 */
	private $name;

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
	 * Returns this storage location in serialized form
	 * @return array The serialized storage location
	 */
	public function serialize () {
		return array("id" => $this->getId(), "name" => $this->getName());
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
			}
		}
	}
}