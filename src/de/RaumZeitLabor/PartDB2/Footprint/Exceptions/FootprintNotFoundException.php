<?php
namespace de\RaumZeitLabor\PartDB2\Footprint\Exceptions;

use de\RaumZeitLabor\PartDB2\Util\SerializableException,
	de\RaumZeitLabor\PartDB2\PartDB2;

class FootprintNotFoundException extends SerializableException {
	public function __construct () {
		parent::__construct(PartDB2::i18n("Footprint not found."));
	}
}
?>