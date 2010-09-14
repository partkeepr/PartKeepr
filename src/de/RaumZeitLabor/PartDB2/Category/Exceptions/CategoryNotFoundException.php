<?php
namespace de\RaumZeitLabor\PartDB2\Category\Exceptions;

use de\RaumZeitLabor\PartDB2\Util\SerializableException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class CategoryNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartDB2::i18n("Category not found."));
	}
}
?>