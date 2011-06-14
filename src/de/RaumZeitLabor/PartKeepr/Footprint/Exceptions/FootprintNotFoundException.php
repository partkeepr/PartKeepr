<?php
namespace de\RaumZeitLabor\PartKeepr\Footprint\Exceptions;

use de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class FootprintNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartKeepr::i18n("Footprint not found."));
	}
}
?>