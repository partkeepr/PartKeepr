<?php
namespace de\RaumZeitLabor\PartDB2\StorageLocation\Exceptions;

use de\RaumZeitLabor\PartDB2\Util\SerializableException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class StorageLocationNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartDB2::i18n("Storage Location not found."));
	}
}
?>