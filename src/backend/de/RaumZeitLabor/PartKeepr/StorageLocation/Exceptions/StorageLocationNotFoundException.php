<?php
namespace de\RaumZeitLabor\PartKeepr\StorageLocation\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class StorageLocationNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Storage Location not found."));
	}
}
?>