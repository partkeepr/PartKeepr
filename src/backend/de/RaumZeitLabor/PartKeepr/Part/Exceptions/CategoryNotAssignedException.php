<?php
namespace de\RaumZeitLabor\PartKeepr\Part\Exceptions;

use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\Part\Part;

/**
 * This exception is thrown when a part hasn't got a category assigned
 */
class CategoryNotAssignedException extends SerializableException {
	
	/**
	 * Constructs the exception
	 * @param BaseEntity $entity
	 */
	public function __construct (Part $part) {
		parent::__construct(PartKeepr::i18n("Part %s has no category assigned", $part));
	}
}