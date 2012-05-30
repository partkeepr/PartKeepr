<?php
namespace PartKeepr\StorageLocation\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

class StorageLocationNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Storage Location not found."));
	}
}
?>