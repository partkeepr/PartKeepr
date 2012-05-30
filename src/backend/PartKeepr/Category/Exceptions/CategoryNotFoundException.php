<?php
namespace PartKeepr\Category\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Thrown when the requested category was not found.
 */
class CategoryNotFoundException extends SerializableException {
	public function __construct ($id) {
		parent::__construct(sprintf(PartKeepr::i18n("Category %d not found."), $id));
	}
}
?>