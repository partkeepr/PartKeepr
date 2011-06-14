<?php
namespace de\RaumZeitLabor\PartKeepr\Category\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class CategoryNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Category not found."));
	}
}
?>