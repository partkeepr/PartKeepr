<?php
namespace PartKeepr\Util;

use PartKeepr\Util\Exceptions\EntityNotFoundException,
	PartKeepr\PartKeepr,
    Doctrine\ORM\Mapping as ORM;

/** @ORM\MappedSuperclass */
class BaseEntity {
	/**
	* @ORM\Id @ORM\Column(type="integer")
	* @ORM\GeneratedValue(strategy="AUTO")
	* @var unknown_type
	*/
	private $id;
	
	/**
	 * Returns the ID of this object.
	 * @param none
	 * @return int The ID of this object
	 */
	public function getId () {
		return $this->id;
	}
	
	/**
	 * Syncs a given collection with the entity's collection.
	 * 
	 * This is used for 1:n or m:n relations, where we need to process inserts, updates and deletes for the records.
	 * 
	 * @param array $sourceArray The array with all records which should be deserialized
	 * @param \Doctrine\Common\Collections\Collection $collection The collection which contains the existing records
	 * @param string $entityClass	The class name which is used when a new entity needs to be created
	 */
	public function deserializeChildren (array $sourceArray, \Doctrine\Common\Collections\Collection $collection, $entityClass) {
		$deletes = array();
		$inserts = array();
		
		/* Round 1: Check if we've got a matching id in both lists. If yes, we know that the record
		 * should be updated. If no, the record should be appended */
		foreach ($sourceArray as $sourceItem) {
			$bFound = false;
			foreach ($collection as $item) {
				if ($item->getId() == $sourceItem["id"]) {
					// Directly update
					$item->deserialize($sourceItem);
					$bFound = true;
					break;
				}
			}
			
			if (!$bFound) {
				$inserts[] = $sourceItem;
			}
		}
		
		/* Round 2: Check for items which are in the collection but not in the sourceArray. */
		foreach ($collection as $targetItem) {
			$bFound = false;
			foreach ($sourceArray as $item) {
				if ($targetItem->getId() == $item["id"]) {
					$bFound = true;
					break;
				}
			}
			
			if (!$bFound) {
				$deletes[] = $targetItem;
			}
		}
		
		foreach ($inserts as $item) {
			$class = new $entityClass;
			$class->deserialize($item);
			
			$collection->add($class);
			PartKeepr::getEM()->persist($class);
		}
		
		/* Remove the to-be-deleted items from the collection. Note that we store the instance of the item,
		 * so we can simply use removeElement.
		 */
		foreach ($deletes as $item) {
			$collection->removeElement($item);
			PartKeepr::getEM()->remove($item);
		}
	}
	
	/**
	 * Serializes the children of a specific collection
	 * @param \Doctrine\Common\Collections\Collection $array The array holding BaseEntities to serialize
	 */
	public function serializeChildren (\Doctrine\Common\Collections\Collection $array) {
		$aData = array();
		$aData["totalCount"] = $array->count();
		$aData["data"] = array();
		
		foreach ($array as $item) {
			$aData["data"][] = $item->serialize();
		}
		
		return array("response" => $aData);
	}

	/**
	 * Loads the entity from the database.
	 * @param integer $id The entity's id
	 */
	public static function loadById ($id) {
		$entity = PartKeepr::getEM()->find(get_called_class(), $id);
		
		if (!is_object($entity)) {
			throw new EntityNotFoundException(get_called_class(), $id);
		}
		return $entity;
	}
}