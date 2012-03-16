<?php
namespace de\RaumZeitLabor\PartKeepr\Part\Exceptions;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException;

/**
 * This exception is thrown when a part hasn't got a storage location assigned
 */
class StorageLocationNotAssignedException extends SerializableException {
	
	/**
	 * Constructs the exception
	 * @param BaseEntity $entity
	 */
	public function __construct () {
		parent::__construct(PartKeepr::i18n("No storage location assigned"));
	}
}